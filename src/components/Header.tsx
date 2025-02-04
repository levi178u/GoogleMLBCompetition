import Link from "next/link"
import Image from "next/image"
import { Search, User } from "lucide-react"

export default function Header() {
  const navItems = [
    { label: "DASHBOARD", href: "/dashboard" },
    { label: "ANALYSIS", href: "/analysis" },
    { label: "PREDICTIONS", href: "/predictions" },
    { label: "PROSPECTS", href: "/prospects" },
    { label: "STATS", href: "/stats" },
    { label: "AI TOOLS", href: "/ai-tools" },
  ]

  return (
    <header className="bg-[#041E42] text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" alt="MLB Logo" width={50} height={50} />
              <span className="ml-2 font-bold">PROSPECT AI</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm font-semibold hover:text-blue-300 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-blue-800 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-blue-800 rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

