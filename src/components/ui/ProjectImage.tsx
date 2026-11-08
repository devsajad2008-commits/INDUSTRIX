import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  preload?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  label,
  className = "",
  preload = false,
}: ProjectImageProps) {
  return (
    <div className={`project-image ${className}`}>
      <Image
        className="project-image__image"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 560px"
        preload={preload}
      />
      <span className="project-image__label" aria-hidden="true">{label}</span>
      <span className="project-image__tag" aria-hidden="true">مهندسی · تولید · پشتیبانی</span>
    </div>
  );
}
