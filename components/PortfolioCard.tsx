import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function PortfolioCard({
  title,
  description,
  href,
  tag,
}: PortfolioCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-[var(--color-accent-light)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-light)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] group-hover:underline">
        Read more →
      </span>
    </Link>
  );
}
