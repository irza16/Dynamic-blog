import Link from "next/link";

export default function AlertBanner() {
  

  return (
    <div
     className =" fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between h-14 px-10"
    >
      <div className="py-2 text-center text-sm">
        BLOGS
      </div>

      <nav className="flex justify-between items-center gap-8  text-sm font-medium">

<Link href="/" className = "hover:text-blue-500"> Home
</Link>
<Link href="/About" className = "hover:text-blue-500"> About
</Link>
<Link href="/Contact" className = "hover:text-blue-500"> Contact
</Link>


      </nav>
    </div>
  );
}
