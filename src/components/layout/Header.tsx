"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/about", label: "درباره ما" },
  { href: "/services", label: "حوزه فعالیت" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="فراز صنعت، صفحه اصلی">
          <span className="brand__word">FARAZ<span>INDUSTRIES</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="منوی اصلی">
          {links.map((link) => (
            <Link
              className={`nav-link${pathname === link.href ? " nav-link--active" : ""}`}
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button button--header" href="/contact">
          درخواست همکاری
        </Link>
      </div>
    </header>
  );
}
