import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-sm border border-black/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl">
        <div className="text-xl font-bold tracking-tight">
          Penny.
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
          <Link href="#home" className="hover:text-black transition-colors">home</Link>
          <Link href="#features" className="hover:text-black transition-colors">features</Link>
          <Link href="#how-it-works" className="hover:text-black transition-colors">how it works</Link>
          <Link href="#pricing" className="hover:text-black transition-colors">pricing</Link>
          <Link href="#about" className="hover:text-black transition-colors">about</Link>
        </nav>
        
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
          join waitlist
        </button>
      </div>
    </header>
  );
}
