"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { bioParagraph1, aboutStats } from "@/lib/content";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="overflow-x-hidden bg-background"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-[40fr_60fr] md:gap-24">

          {/* ── LEFT: Photo ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto w-full md:mx-0"
            style={{ maxWidth: "360px" }}
          >
            {/* Frame wrapper — extra margin top+left creates space for the
                decorative rectangle that peeks -12px above and left */}
            <div
              className="relative"
              style={{ marginTop: "12px", marginLeft: "12px" }}
            >
              {/* Decorative offset rectangle */}
              <div
                aria-hidden="true"
                className="absolute rounded-[1.25rem]"
                style={{
                  top: "-12px",
                  left: "-12px",
                  right: 0,
                  bottom: 0,
                  backgroundColor: "var(--color-accent-light)",
                  zIndex: 0,
                }}
              />
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[1.25rem]"
                style={{ aspectRatio: "3/4", zIndex: 1 }}
              >
                <Image
                  src="/headshot.png"
                  alt="Zainab Olayiwola, PharmD — PGY-1 Pharmacy Resident at Ascension St. Vincent Evansville"
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAEAAQBAREA/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAHhAAAQQDAAMAAAAAAAAAAAAAAQIDBBEFITFS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCtyN6xbwrqKz2irP4lp4SvGLZZUY7fQAB/2Q=="
                />
              </div>
            </div>

            {/* Caption pill */}
            <div style={{ marginLeft: "12px", marginTop: "0.75rem" }}>
              <span
                className="inline-block rounded-full border font-mono text-[0.65rem] uppercase tracking-[0.1em]"
                style={{
                  backgroundColor: "var(--color-gold-light)",
                  borderColor: "rgba(201,168,76,0.2)",
                  color: "var(--color-gold)",
                  padding: "0.25rem 0.75rem",
                }}
              >
                Evansville, Indiana · 2025
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Bio text ──────────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent"
              style={{ marginBottom: "0.75rem" }}
            >
              About Zainab
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-display font-medium leading-[1.2] text-text-primary"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              A Non-Linear Path Is Still a Path Forward
            </motion.h2>

            {/* Gold rule */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="rounded-full bg-gold"
              style={{
                width: "48px",
                height: "2px",
                margin: "1.25rem 0",
                transformOrigin: "left",
              }}
            />

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="font-body leading-[1.75] text-text-secondary"
              style={{ fontSize: "0.9375rem" }}
            >
              {bioParagraph1}
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              style={{
                borderLeft: "3px solid var(--color-gold)",
                paddingLeft: "1.25rem",
                margin: "1.75rem 0",
                fontFamily:
                  'var(--font-cormorant), "Cormorant Garamond", serif',
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "var(--color-text-primary)",
              }}
            >
              "You have to keep going even when the going gets hard."
            </motion.blockquote>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="flex items-start"
              style={{ marginTop: "2rem" }}
            >
              {aboutStats.map((stat, i) => (
                <div
                  key={stat.value}
                  className="flex flex-1 flex-col"
                  style={{
                    paddingLeft: i === 0 ? 0 : "1.25rem",
                    paddingRight: i === aboutStats.length - 1 ? 0 : "1.25rem",
                    borderLeft:
                      i > 0 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  <span
                    className="font-display font-medium leading-none text-accent"
                    style={{ fontSize: "1.75rem" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="mt-1 font-mono uppercase text-text-muted"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      lineHeight: "1.5",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
