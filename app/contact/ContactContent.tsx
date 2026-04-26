"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/* ── Inline SVG icons ─────────────────────────────────────────────────── */

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="15" height="11" rx="1.5" stroke="var(--color-accent)" strokeWidth="1.4" />
      <path d="M2.5 7l7.5 5 7.5-5" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5h-2A1.5 1.5 0 003 5c0 7.18 5.82 13 13 13a1.5 1.5 0 001.5-1.5v-2a1.5 1.5 0 00-1.5-1.5c-.97 0-1.9-.15-2.77-.43a1.5 1.5 0 00-1.53.36l-1.07 1.07A11.04 11.04 0 016.5 9.37l1.07-1.07a1.5 1.5 0 00.36-1.53A9.23 9.23 0 017.5 5a1.5 1.5 0 00-1-.5z"
        stroke="var(--color-accent)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z"
        stroke="var(--color-accent)"
        strokeWidth="1.4"
      />
      <circle cx="10" cy="8" r="2" stroke="var(--color-accent)" strokeWidth="1.4" />
    </svg>
  );
}

/* ── Form field component ─────────────────────────────────────────────── */

const fieldStyle = {
  fontFamily: "inherit",
  fontSize: "0.9rem",
  backgroundColor: "var(--color-surface)",
  border: "1.5px solid var(--color-border)",
  borderRadius: "0.625rem",
  padding: "0.875rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 200ms, box-shadow 200ms",
  color: "var(--color-text-primary)",
} as const;

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono uppercase"
        style={{
          display: "block",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: "var(--color-text-secondary)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ── Contact row ──────────────────────────────────────────────────────── */

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4" style={{ padding: "1rem 0", borderBottom: "1px solid var(--color-border)" }}>
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p
          className="font-mono uppercase"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "var(--color-text-muted)",
            marginBottom: "0.2rem",
          }}
        >
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="font-body font-medium text-text-primary transition-colors duration-200 hover:text-accent"
            style={{ fontSize: "0.9rem" }}
          >
            {value}
          </a>
        ) : (
          <p className="font-body font-medium text-text-primary" style={{ fontSize: "0.9rem" }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────────────── */

export default function ContactContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Message from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:ztolayiwola@gmail.com?subject=${subject}&body=${body}`;
  }

  function inputStyle(fieldName: string) {
    return {
      ...fieldStyle,
      borderColor: focusedField === fieldName ? "var(--color-accent)" : "var(--color-border)",
      boxShadow:
        focusedField === fieldName
          ? "0 0 0 3px var(--color-accent-light)"
          : "none",
    };
  }

  return (
    <>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <PageHeader
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to oncology pharmacy collaborations, research discussions, residency mentorship, and professional opportunities."
        />
      </motion.div>

      {/* Contact section */}
      <section
        ref={sectionRef}
        className="bg-white"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

            {/* ── Left: Contact form ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" id="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("name")}
                    />
                  </Field>
                  <Field label="Email Address" id="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("email")}
                    />
                  </Field>
                </div>

                <Field label="Subject" id="subject">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle("subject")}
                  />
                </Field>

                <Field label="Message" id="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message…"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle("message"), minHeight: "150px", resize: "vertical" }}
                  />
                </Field>

                <button
                  type="submit"
                  className="font-body font-medium text-white transition-all duration-[250ms]"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--color-accent)",
                    padding: "0.875rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.925rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-accent-hover)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "var(--shadow-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-accent)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  Send Message →
                </button>

                <p
                  className="font-mono text-text-muted text-center"
                  style={{ fontSize: "0.7rem" }}
                >
                  Submissions open your email client via mailto
                </p>
              </form>
            </motion.div>

            {/* ── Right: Contact info ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            >
              <h2
                className="font-display font-medium text-text-primary"
                style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}
              >
                Direct Contact
              </h2>
              <p
                className="font-body text-text-secondary"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                The best way to reach me is via email. I typically respond within
                48 hours. I am especially interested in conversations around
                oncology pharmacy, clinical research, and the future of
                pharmacist-led patient care.
              </p>

              {/* Contact rows */}
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                <ContactRow
                  icon={<EmailIcon />}
                  label="Email"
                  value="ztolayiwola@gmail.com"
                  href="mailto:ztolayiwola@gmail.com"
                />
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="(773) 808-1544"
                  href="tel:+17738081544"
                />
                <ContactRow
                  icon={<LocationIcon />}
                  label="Location"
                  value="Evansville, Indiana"
                />
              </div>

              {/* Info box */}
              <div
                style={{
                  marginTop: "2rem",
                  backgroundColor: "var(--color-accent-light)",
                  border: "1px solid rgba(15,76,58,0.12)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                }}
              >
                <p
                  className="font-body text-accent"
                  style={{ fontSize: "0.875rem", lineHeight: "1.7" }}
                >
                  Zainab will be joining the Medical College of Wisconsin as a
                  PGY-2 Oncology Pharmacy Resident beginning July 2025. Interested
                  in oncology pharmacy collaborations and research opportunities.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
