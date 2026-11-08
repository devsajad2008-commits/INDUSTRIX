import Link from "next/link";
import type { Metadata } from "next";
import ProjectImage from "@/components/ui/ProjectImage";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "حوزه‌های فعالیت",
  description: "خدمات فراز صنعت در زمینه ساخت تجهیزات، اتوماسیون، تأمین قطعات و نگهداری صنعتی.",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "فراز صنعت",
    title: "حوزه‌های فعالیت | فراز صنعت",
    description: "خدمات فراز صنعت در زمینه ساخت تجهیزات، اتوماسیون، تأمین قطعات و نگهداری صنعتی.",
    images: [
      {
        url: "/images/social/services.jpg",
        width: 1200,
        height: 630,
        alt: "فراز صنعت؛ راهکار فنی برای خطوط تولید",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حوزه‌های فعالیت | فراز صنعت",
    description: "خدمات فراز صنعت در زمینه ساخت تجهیزات، اتوماسیون، تأمین قطعات و نگهداری صنعتی.",
    images: [
      {
        url: "/images/social/services.jpg",
        alt: "فراز صنعت؛ راهکار فنی برای خطوط تولید",
      },
    ],
  },
};

const services: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  details: string[];
}[] = [
  {
    number: "01",
    icon: "idea",
    title: "ساخت تجهیزات صنعتی",
    description: "طراحی مهندسی، ساخت و نصب تجهیزات و ماشین‌آلات متناسب با نیاز و شرایط کاری واحدهای تولیدی.",
    details: ["بررسی نیاز فنی", "ساخت و نصب تجهیزات", "آزمایش و راه‌اندازی"],
  },
  {
    number: "02",
    icon: "design",
    title: "اتوماسیون صنعتی",
    description: "پیاده‌سازی سامانه‌های کنترل و اتوماسیون برای بهبود دقت، ایمنی و بهره‌وری فرایندهای تولید.",
    details: ["کنترل و ابزار دقیق", "بهینه‌سازی خطوط", "راه‌اندازی و آموزش"],
  },
  {
    number: "03",
    icon: "product",
    title: "تأمین قطعات و تجهیزات",
    description: "تأمین قطعات مصرفی و تجهیزات صنعتی با همراهی فنی برای انتخاب گزینه‌ی سازگار با ماشین‌آلات شما.",
    details: ["تأمین قطعات صنعتی", "مشاوره‌ی انتخاب", "پشتیبانی سفارش"],
  },
  {
    number: "04",
    icon: "workflow",
    title: "نگهداری و تعمیرات",
    description: "بازرسی دوره‌ای، سرویس و تعمیرات تخصصی برای افزایش عمر تجهیزات و کاهش توقف‌های ناخواسته.",
    details: ["سرویس و بازرسی", "تعمیرات تخصصی", "برنامه‌ریزی نگهداری"],
  },
];

const steps = [
  { number: "۱", title: "بررسی نیاز فنی", text: "شرایط خط تولید، مشخصات تجهیزات و اولویت‌های اجرایی را با شما بررسی می‌کنیم." },
  { number: "۲", title: "پیشنهاد راهکار", text: "محدوده‌ی کار، تجهیزات موردنیاز و برنامه‌ی اجرا را به‌صورت روشن مشخص می‌کنیم." },
  { number: "۳", title: "اجرا و راه‌اندازی", text: "ساخت، تأمین یا نصب را با رعایت استانداردهای فنی و ایمنی پیش می‌بریم." },
  { number: "۴", title: "پشتیبانی مستمر", text: "برای نگهداری تجهیزات و پاسخ به نیازهای عملیاتی در کنار تیم شما می‌مانیم." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <span className="eyebrow"><span className="eyebrow__dot" /> تخصص و خدمات صنعتی</span>
            <h1>حوزه‌های فعالیت</h1>
            <p>از ساخت و تأمین تجهیزات تا راه‌اندازی و نگهداری؛ خدماتی متناسب با نیاز واقعی واحدهای صنعتی.</p>
            <div className="breadcrumb"><Link href="/">صفحه اصلی</Link><span>/</span><span>خدمات</span></div>
          </div>
          <ProjectImage
            src="/images/pages/services-hero.webp"
            alt="ماشین‌آلات صنعتی و تجهیزات اتوماسیون"
            label="تجهیزات و ماشین‌آلات صنعتی"
            className="page-hero__image"
            preload
          />
          <span className="page-hero__deco" aria-hidden="true">02</span>
        </div>
      </section>

      <section className="section service-details-section">
        <div className="container">
          <div className="service-details-intro">
            <SectionHeading
              eyebrow="خدمات تخصصی"
              title="پشتیبانی فنی در تمام مراحل"
              description="با توجه به نیاز پروژه، از یک خدمت مشخص یا مجموعه‌ای از راهکارهای صنعتی استفاده کنید."
            />
            <span className="service-details-intro__label">فراز صنعت <i /> ۰۱ — ۰۴</span>
          </div>
          <div className="service-details-list">
            {services.map((service) => (
              <article className="service-detail" key={service.number}>
                <span className="service-detail__number">{service.number}</span>
                <span className="service-detail__icon"><Icon name={service.icon} size={24} /></span>
                <div className="service-detail__body">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => <li key={detail}><Icon name="check" size={15} />{detail}</li>)}
                  </ul>
                </div>
                <Link href="/contact" className="service-detail__link" aria-label={`گفتگو درباره ${service.title}`}>
                  <Icon name="arrow-left" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="container process-section__inner">
          <div className="process-section__heading">
            <SectionHeading
              eyebrow="مراحل همکاری"
              title="مسیر روشن از بررسی تا بهره‌برداری"
              description="در هر مرحله از پروژه، برنامه‌ی اجرا و گام بعدی برای تیم شما روشن است."
            />
            <ProjectImage
              src="/images/pages/services-process.webp"
              alt="کارشناس فنی در کنار تجهیزات خط تولید"
              label="کارشناس در حال بررسی تجهیزات صنعتی"
              className="process-section__image"
            />
          </div>
          <div className="process-list">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <Icon name="arrow-down-left" size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
