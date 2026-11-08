import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <span className="cta-section__eyebrow"><span /> همراه پروژه‌های صنعتی شما</span>
          <h2>برای توسعه‌ی خط تولیدتان آماده‌ایم</h2>
          <p>نیاز فنی یا پروژه‌ای در دست دارید؟ جزئیات را با کارشناسان ما در میان بگذارید.</p>
        </div>
        <Link className="button button--light" href="/contact">
          تماس با کارشناسان <Icon name="arrow-left" />
        </Link>
        <span className="cta-section__decoration" aria-hidden="true">F.</span>
      </div>
    </section>
  );
}
