import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { getAdminDb } from '@/lib/firebaseAdmin';
import nodemailer from 'nodemailer';

// Force dynamic rendering — never statically generate this route
export const dynamic = 'force-dynamic';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const adminDb = getAdminDb();
    const waitlistRef = adminDb.collection('waitlist');

    // 1. Check for duplicate
    const existing = await waitlistRef.where('email', '==', email).get();
    if (!existing.empty) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
    }

    // 2. Save to Firestore
    await waitlistRef.add({
      email,
      joinedAt: admin.firestore.FieldValue.serverTimestamp(),
      notified: false,
    });

    // 3. Send welcome email via Gmail
    await transporter.sendMail({
      from: `"Penny" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to the Penny Waitlist 🎉',
      html: `
        <div style="font-family:-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#111;">
          <h1 style="font-size:28px;font-weight:800;margin-bottom:8px;">You're on the list. 🎉</h1>
          <p style="color:#555;font-size:16px;line-height:1.6;margin-bottom:16px;">
            Hey there,<br><br>
            Thanks for joining the <strong>Penny</strong> waitlist. We're building the simplest, fastest expense tracker out there — and you're early.
          </p>
          <p style="color:#555;font-size:16px;line-height:1.6;margin-bottom:16px;">
            As an early member, you've locked in <strong>lifetime premium for free</strong> when we launch.
          </p>
          <p style="color:#555;font-size:16px;line-height:1.6;margin-bottom:24px;">
            We'll reach out soon with a beta APK so you can try it before anyone else.
          </p>
          <div style="background:#f4f4f4;border-radius:12px;padding:16px 20px;margin-bottom:24px;font-size:14px;color:#666;">
            One email when we ship. That's it. No spam, ever.
          </div>
          <p style="color:#111;font-size:15px;font-weight:600;">— The Penny Team</p>
        </div>
      `,
    });

    // 4. Get total waitlist count
    const totalSnapshot = await waitlistRef.count().get();
    const totalCount = totalSnapshot.data().count;

    // 5. Send Discord notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: '🎉 New Penny Waitlist Signup!',
              color: 0x23c55e, // green
              fields: [
                {
                  name: '📧 Email',
                  value: email,
                  inline: false,
                },
                {
                  name: '👥 Total Signups',
                  value: `**${totalCount}** people on the waitlist`,
                  inline: false,
                },
                {
                  name: '🕐 Joined At',
                  value: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                  inline: false,
                },
              ],
              footer: { text: 'Penny Waitlist' },
            },
          ],
        }),
      });
    }

    return NextResponse.json({ message: "You're on the list! Check your email." }, { status: 200 });

  } catch (error: any) {
    console.error('Waitlist Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
