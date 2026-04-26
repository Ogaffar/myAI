import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Teaching Philosophy", href: "/teaching-philosophy" },
  { label: "Evidence of Teaching", href: "/evidence-of-teaching/vte-oncology" },
  { label: "Research", href: "/research" },
  { label: "Curriculum Vitae", href: "/curriculum-vitae" },
  { label: "Contact", href: "/contact" },
] as const;

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="3.5"
        width="13"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M1.5 5l6.5 4.5L14.5 5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 2.5h2.5l1 2.5-1.5 1c.8 1.6 2 2.8 3.5 3.5l1-1.5 2.5 1V11c0 .8-.7 1.5-1.5 1.5C5.4 12.5 3.5 7.6 3 4c0-.8.7-1.5 1.5-1.5H3z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-text-primary)" }}>
      {/* ── Main footer ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">

          {/* Column 1 — Identity */}
          <div className="flex flex-col">
            <p
              className="font-display text-[1.5rem] font-medium leading-tight text-white"
            >
              Zainab Olayiwola, PharmD
            </p>
            <p
              className="mt-3 font-body text-[0.875rem] leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Dedicated to the Science of Healing.
            </p>
            <div
              className="my-4 h-[2px] w-10 rounded-full"
              style={{ backgroundColor: "var(--color-gold)" }}
            />
            <p
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em]"
              style={{ color: "var(--color-gold)" }}
            >
              Future Oncology Pharmacy Specialist
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p
              className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.12em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center font-body text-[0.875rem] transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p
              className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.12em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Get In Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:ztolayiwola@gmail.com"
                  className="group inline-flex items-center gap-2.5 font-body text-[0.875rem] transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span className="flex-shrink-0 transition-colors duration-200 group-hover:text-white">
                    <EmailIcon />
                  </span>
                  ztolayiwola@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17738081544"
                  className="group inline-flex items-center gap-2.5 font-body text-[0.875rem] transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <span className="flex-shrink-0 transition-colors duration-200 group-hover:text-white">
                    <PhoneIcon />
                  </span>
                  (773) 808-1544
                </a>
              </li>
            </ul>
            <p
              className="mt-4 font-body text-[0.8rem] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Open to oncology pharmacy collaborations, research discussions,
              and professional opportunities.
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p
            className="font-mono text-[0.7rem]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            © 2025 Zainab Olayiwola, PharmD. All rights reserved.
          </p>
          <p
            className="font-mono text-[0.7rem]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Ascension St.&nbsp;Vincent Evansville&nbsp;|&nbsp;PGY-1 Pharmacy Resident
          </p>
        </div>
      </div>
    </footer>
  );
}
