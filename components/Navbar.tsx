"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "LemvestAI", href: "#lemvest-ai" },
  { label: "FAQ", href: "#faq" },
  { label: "Ambassador", href: "#ambassador" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background">
      <nav className="max-width flex items-center justify-between py-4">
     {/* Logo */}
<Link href="/" className="hidden lg:flex font-primary text-lg font-medium text-foreground w-[150px] h-[36px] lg:w-[155px] lg:h-[36px] xl:w-[159px] xl:h-[36px] overflow-hidden">
  <img src="/logo-dark.png" alt="" className="hidden dark:block" />
  <img src="/logo-light.png" alt="" className="block dark:hidden" />
</Link>

<Link href="/" className="lg:hidden font-primary text-lg font-medium text-foreground w-[150px] h-[36px] lg:w-[155px] lg:h-[36px] xl:w-[159px] xl:h-[36px] overflow-hidden">
  <img src="/logo-mobile-dark.png" alt="" className="hidden dark:block" />
  <img src="/logo-mobile-light.png" alt="" className="block dark:hidden" />
</Link>
        {/* Nav links - desktop */}
        <ul className="hidden lg:flex items-center gap-8 font-secondary text-[14px] text-muted dark:text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-muted-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA - desktop */}
        <div className="hidden lg:flex items-center justify-center gap-3">
          <ThemeToggle />
          <button
            className="bg-button-background text-background font-primary text-[14px] font-medium rounded-lg hover:opacity-90 transition-opacity outline-1 outline-background -outline-offset-[2px] shadow-[1px_-1px_0px_0px_#0000001A_inset,2px_-2px_0px_0px_#00000040_inset] flex items-center justify-center"
            style={{
              width: "114px",
              height: "36px",
              paddingTop: "14px",
              paddingRight: "14px",
              paddingBottom: "14px",
              paddingLeft: "14px",
            }}
          >
            Join For Free
          </button>
        </div>

        {/* Mobile: ThemeToggle + Join button + Hamburger, all in the nav row
            (moved out of the drawer per request — drawer keeps only links) */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="bg-button-background text-background font-primary text-[14px] font-medium rounded-lg hover:opacity-90 transition-opacity outline-1 outline-background -outline-offset-[2px] shadow-[1px_-1px_0px_0px_#0000001A_inset,2px_-2px_0px_0px_#00000040_inset] flex items-center justify-center"
            style={{
              width: "114px",
              height: "36px",
              paddingTop: "14px",
              paddingRight: "14px",
              paddingBottom: "14px",
              paddingLeft: "14px",
            }}
          >
            Join For Free
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right side full-height drawer — links only now */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-background z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-center py-24 px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 font-secondary text-[16px] text-[#b2b2b2]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}