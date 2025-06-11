"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "홈", href: "/" },
  { name: "수강 안내", href: "/info" },
  { name: "오시는 길", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-blue-200 bg-white sticky top-0 z-20">
      <div className="max-w-3xl mx-auto flex justify-center items-center h-14">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 text-center text-base sm:text-lg py-2 px-2 font-medium transition-colors border-b-2
              ${
                pathname === item.href
                  ? "border-blue-500 text-blue-900"
                  : "border-transparent text-blue-700 hover:border-blue-400 hover:text-blue-900"
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
