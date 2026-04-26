interface PageHeaderProps {
  title: string;
  label?: string;
  subtitle?: string;
}

export default function PageHeader({ title, label, subtitle }: PageHeaderProps) {
  return (
    <section
      className="bg-surface"
      style={{ paddingTop: "calc(5rem + 72px)", paddingBottom: "5rem" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {label && (
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
            }}
          >
            {label}
          </p>
        )}

        <h1
          className="font-display font-normal leading-[1.1] text-text-primary"
          style={{
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
            maxWidth: "700px",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-body text-text-secondary"
            style={{
              fontSize: "1.05rem",
              maxWidth: "580px",
              marginTop: "1rem",
              lineHeight: "1.7",
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          className="rounded-full bg-gold"
          style={{ width: "64px", height: "2px", marginTop: "1.75rem" }}
        />
      </div>
    </section>
  );
}
