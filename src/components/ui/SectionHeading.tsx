type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "right" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
