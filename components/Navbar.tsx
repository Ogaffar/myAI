"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "@/lib/hooks";

const EVIDENCE_ITEMS = [
  { label: "VTE in Oncology", href: "/evidence-of-teaching/vte-oncology" },
  {
    label: "Daptomycin vs. Vancomycin",
    href: "/evidence-of-teaching/daptomycin-vancomycin",
  },
  {
    label: "High Reliability & Just Culture",
    href: "/evidence-of-teaching/high-reliability",
  },
] as const;

const DESKTOP_NAV = [
  { label: "Home", href: "/" },
  { label: "Teaching Philosophy", href: "/teaching-philosophy" },
  { label: "Research", href: "/research" },
  { label: "Curriculum Vitae", href: "/curriculum-vitae" },
] as const;

const MOBILE_NAV = [
  { label: "Home", href: "/" },
  { label: "Teaching Philosophy", href: "/teaching-philosophy" },
  { label: "Research", href: "/research" },
  { label: "Curriculum Vitae", href: "/curriculum-vitae" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);
  const [mobileEvidenceOpen, setMobileEvidenceOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Refs for keyboard focus management
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeMobileRef = useRef<HTMLButtonElement>(null);

  const scrolled = scrollY > 20;
  const transparent = pathname === "/" && !scrolled;

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape key closes mobile menu; restore focus to hamburger
  useEffect(() => {
    if (!mobileOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setTimeout(() => hamburgerRef.current?.focus(), 0);
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [mobileOpen]);

  // Focus close button when mobile menu opens
  useEffect(() => {
    if (mobileOpen) {
      setTimeout(() => closeMobileRef.current?.focus(), 50);
    }
  }, [mobileOpen]);

  // Clean up hover timer on unmount
  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isEvidenceActive = EVIDENCE_ITEMS.some((i) => pathname === i.href);

  const openDropdown = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setEvidenceOpen(true), 200);
  };

  const closeDropdown = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setEvidenceOpen(false), 150);
  };

  const closeMobile = () => setMobileOpen(false);

  // Dropdown keyboard navigation
  function handleDropdownKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Escape") {
      setEvidenceOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      clearTimeout(hoverTimer.current);
      setEvidenceOpen(true);
      requestAnimationFrame(() => {
        (dropdownRef.current?.querySelector("a") as HTMLElement | null)?.focus();
      });
    }
  }

  function handleDropdownItemKeyDown(
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) {
    const items = dropdownRef.current?.querySelectorAll("a");
    if (e.key === "Escape") {
      e.preventDefault();
      setEvidenceOpen(false);
      dropdownButtonRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      (items?.[index + 1] as HTMLElement | undefined)?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index === 0) {
        dropdownButtonRef.current?.focus();
      } else {
        (items?.[index - 1] as HTMLElement | undefined)?.focus();
      }
    }
  }

  /* ─── link class helpers ─────────────────────────────────────────────── */
  const desktopLinkClass = (active: boolean) =>
    [
      "nav-link-hover relative px-3 py-1 text-sm transition-colors duration-200",
      transparent
        ? "text-white/90 hover:text-white"
        : active
          ? "text-[var(--color-accent)]"
          : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
    ].join(" ");

  return (
    <>
      {/* ── Fixed header ──────────────────────────────────────────────────── */}
      <header
        className={[
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-[var(--color-border)] bg-white/[0.92] backdrop-blur-[12px]",
        ].join(" ")}
      >
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
          {/* ─ Logo ─────────────────────────────────────────────────────── */}
          <Link href="/" className="flex flex-col gap-0.5 leading-none">
            <span
              className={[
                "font-display text-[1.25rem] font-medium transition-colors duration-300",
                transparent
                  ? "text-white"
                  : "text-[var(--color-text-primary)]",
              ].join(" ")}
            >
              Zainab Olayiwola
            </span>
            <span
              className={[
                "font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors duration-300",
                transparent ? "text-white/65" : "text-[var(--color-accent)]",
              ].join(" ")}
            >
              PharmD&nbsp;|&nbsp;PGY-1 Resident
            </span>
          </Link>

          {/* ─ Desktop navigation ────────────────────────────────────────── */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {DESKTOP_NAV.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={desktopLinkClass(isActive(href))}>
                  {label}
                  {isActive(href) && !transparent && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[var(--color-gold)]" />
                  )}
                </Link>
              </li>
            ))}

            {/* Evidence of Teaching dropdown */}
            <li
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                ref={dropdownButtonRef}
                aria-haspopup="listbox"
                aria-expanded={evidenceOpen}
                aria-label="Evidence of Teaching — expand submenu"
                onKeyDown={handleDropdownKeyDown}
                className={[
                  "nav-link-hover relative flex items-center gap-1 px-3 py-1 text-sm transition-colors duration-200",
                  transparent
                    ? "text-white/90 hover:text-white"
                    : isEvidenceActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
                ].join(" ")}
              >
                Evidence of Teaching
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${evidenceOpen ? "-rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isEvidenceActive && !transparent && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[var(--color-gold)]" />
                )}
              </button>

              <AnimatePresence>
                {evidenceOpen && (
                  <motion.ul
                    ref={dropdownRef}
                    role="listbox"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-[calc(100%+10px)] w-64 rounded-xl border border-[var(--color-border)] bg-white p-2 shadow-medium"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {EVIDENCE_ITEMS.map((item, index) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setEvidenceOpen(false)}
                          onKeyDown={(e) => handleDropdownItemKeyDown(e, index)}
                          className={[
                            "block rounded-lg px-4 py-2.5 text-sm transition-colors duration-150",
                            pathname === item.href
                              ? "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                              : "text-[var(--color-text-primary)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)]",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Contact — CTA button */}
            <li className="ml-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--color-accent-hover)]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ─ Mobile hamburger ──────────────────────────────────────────── */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden"
          >
            <svg
              className={[
                "h-6 w-6 transition-colors duration-300",
                transparent
                  ? "text-white"
                  : "text-[var(--color-text-primary)]",
              ].join(" ")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--color-background)] md:hidden"
          >
            {/* Close button — top right */}
            <div className="flex h-16 flex-shrink-0 items-center justify-between px-6">
              <Link
                href="/"
                onClick={closeMobile}
                className="flex flex-col gap-0.5 leading-none"
              >
                <span className="font-display text-[1.2rem] font-medium text-[var(--color-text-primary)]">
                  Zainab Olayiwola
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  PharmD&nbsp;|&nbsp;PGY-1 Resident
                </span>
              </Link>
              <button
                ref={closeMobileRef}
                onClick={closeMobile}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center"
              >
                <svg
                  className="h-6 w-6 text-[var(--color-text-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable nav links */}
            <nav className="flex-1 overflow-y-auto px-8 pb-12 pt-4">
              {MOBILE_NAV.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={[
                    "block border-b border-[var(--color-border)] py-5 font-display text-[2rem] font-medium leading-tight transition-colors",
                    pathname === href
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}

              {/* Evidence of Teaching accordion */}
              <div className="border-b border-[var(--color-border)]">
                <button
                  onClick={() => setMobileEvidenceOpen((o) => !o)}
                  className={[
                    "flex w-full items-center justify-between py-5 font-display text-[2rem] font-medium leading-tight transition-colors",
                    isEvidenceActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)]",
                  ].join(" ")}
                >
                  Evidence of Teaching
                  <svg
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${mobileEvidenceOpen ? "-rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {mobileEvidenceOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {EVIDENCE_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMobile}
                            className={[
                              "block py-3 pl-4 font-body text-base transition-colors",
                              pathname === item.href
                                ? "text-[var(--color-accent)]"
                                : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
                            ].join(" ")}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <div className="h-3" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact CTA */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3.5 font-body text-base font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
