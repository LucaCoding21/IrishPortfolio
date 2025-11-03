export default function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
    </div>
  );
}

