import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const services: { icon: IconName; number: string; title: string; description: string }[] = [
  {
    icon: "idea",
    number: "۰۱",
    title: "ساخت تجهیزات صنعتی",
    description: "طراحی مهندسی و ساخت تجهیزات متناسب با شرایط کاری و نیاز خطوط تولید.",
  },
  {
    icon: "design",
    number: "۰۲",
    title: "اتوماسیون صنعتی",
    description: "بهینه‌سازی فرایندهای تولید با سامانه‌های کنترل و راهکارهای اتوماسیون.",
  },
  {
    icon: "product",
    number: "۰۳",
    title: "تأمین قطعات و تجهیزات",
    description: "تأمین قطعات و تجهیزات موردنیاز کارخانه‌ها با پشتیبانی فنی و پاسخ‌گویی سریع.",
  },
  {
    icon: "workflow",
    number: "۰۴",
    title: "نگهداری و تعمیرات",
    description: "بازرسی، سرویس و تعمیرات تخصصی برای افزایش ایمنی و تداوم کار تجهیزات.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-section__top">
          <SectionHeading
            eyebrow="حوزه فعالیت"
            title="پشتیبان مطمئن خطوط تولید"
            description="از ساخت و تأمین تجهیزات تا راه‌اندازی و نگهداری، کنار تیم‌های صنعتی هستیم."
          />
          <Link className="inline-link" href="/services">مشاهده‌ی حوزه‌های فعالیت <Icon name="arrow-left" /></Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span className="service-card__icon"><Icon name={service.icon} size={23} /></span>
                <span className="service-card__number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="service-card__link">
                اطلاعات بیشتر <Icon name="arrow-left" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
