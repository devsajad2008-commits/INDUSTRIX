import Link from "next/link";
import type { Metadata } from "next";
import ProjectImage from "@/components/ui/ProjectImage";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "درباره‌ی ما",
  description: "با فراز صنعت و تخصص ما در ساخت، تأمین و پشتیبانی تجهیزات واحدهای صنعتی آشنا شوید.",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "فراز صنعت",
    title: "درباره‌ی ما | فراز صنعت",
    description: "با فراز صنعت و تخصص ما در ساخت، تأمین و پشتیبانی تجهیزات واحدهای صنعتی آشنا شوید.",
    images: [
      {
        url: "/images/social/about.jpg",
        width: 1200,
        height: 630,
        alt: "فراز صنعت؛ همراه صنایع کشور",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره‌ی ما | فراز صنعت",
    description: "با فراز صنعت و تخصص ما در ساخت، تأمین و پشتیبانی تجهیزات واحدهای صنعتی آشنا شوید.",
    images: [
      {
        url: "/images/social/about.jpg",
        alt: "فراز صنعت؛ همراه صنایع کشور",
      },
    ],
  },
};

const values = [
  { number: "01", title: "ایمنی در اولویت", text: "در تمام مراحل اجرا، ایمنی کارکنان و محیط کار را در نظر می‌گیریم." },
  { number: "02", title: "کیفیت قابل اتکا", text: "تجهیزات و خدمات را با استانداردهای فنی و کنترل دقیق ارائه می‌کنیم." },
  { number: "03", title: "راهکار متناسب", text: "پیشنهادها را با ظرفیت، شرایط کاری و اهداف هر واحد صنعتی هماهنگ می‌کنیم." },
  { number: "04", title: "پشتیبانی مسئولانه", text: "پس از راه‌اندازی نیز برای حفظ عملکرد و تداوم تولید در کنار شما می‌مانیم." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <div className="page-hero__copy">
            <span className="eyebrow"><span className="eyebrow__dot" /> درباره‌ی ما</span>
            <h1>همراه صنایع کشور</h1>
            <p>با مهندسی، ساخت و پشتیبانی تجهیزات صنعتی، به پایداری و بهره‌وری خطوط تولید کمک می‌کنیم.</p>
            <div className="breadcrumb"><Link href="/">صفحه اصلی</Link><span>/</span><span>درباره ما</span></div>
          </div>
          <ProjectImage
            src="/images/pages/about-hero.webp"
            alt="خط تولید صنعتی با ماشین‌آلات خودکار"
            label="کارخانه و محیط تولید"
            className="page-hero__image"
            preload
          />
          <span className="page-hero__deco" aria-hidden="true">01</span>
        </div>
      </section>
      <section className="section about-story">
        <div className="container about-story__grid">
          <div>
            <SectionHeading eyebrow="معرفی مجموعه" title="تخصص فنی، شناخت نزدیک از صنعت" />
            <p className="body-copy">
              فراز صنعت با هدف پاسخ‌گویی به نیازهای فنی کارخانه‌ها و واحدهای تولیدی فعالیت می‌کند.
              ما با بررسی شرایط هر مجموعه، راهکارهای عملی در زمینه‌ی تجهیزات، اتوماسیون و نگهداری ارائه می‌دهیم.
            </p>
            <p className="body-copy">
              همکاری ما از شناخت دقیق نیاز آغاز می‌شود و با تأمین، نصب و پشتیبانی ادامه پیدا می‌کند؛
              تا مشتریان بتوانند با اطمینان بیشتری روی ظرفیت تولید خود حساب کنند.
            </p>
            <Link className="inline-link" href="/services">آشنایی با حوزه‌های فعالیت <Icon name="arrow-left" /></Link>
          </div>
          <div className="about-story__visual">
            <ProjectImage
              src="/images/pages/about-intro.webp"
              alt="بازوی رباتیک در حال کار روی خط تولید"
              label="خط تولید و تجهیزات کارخانه"
              className="about-story__image"
            />
            <span className="about-story__note"><Icon name="product" size={18} /> مهندسی و پشتیبانی صنعتی</span>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-grid">
          <article className="mission-card mission-card--light">
            <span className="mission-card__index">01 / مأموریت ما</span>
            <span className="mission-card__icon"><Icon name="idea" size={23} /></span>
            <h2>تقویت توان تولید</h2>
            <p>با تجهیزات مطمئن و خدمات فنی کارآمد، به افزایش بهره‌وری و کاهش توقف خطوط تولید کمک می‌کنیم.</p>
            <span className="mission-card__line" />
          </article>
          <article className="mission-card mission-card--blue">
            <span className="mission-card__index">02 / چشم‌انداز ما</span>
            <span className="mission-card__icon"><Icon name="workflow" size={23} /></span>
            <h2>صنعتی پایدار و ایمن</h2>
            <p>می‌خواهیم واحدهای صنعتی با ایمنی بیشتر، عملکرد پایدارتر و دسترسی بهتر به پشتیبانی فعالیت کنند.</p>
            <span className="mission-card__line" />
          </article>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="ارزش‌های اصلی"
            title="اصولی که به آن پایبندیم"
            description="پایه‌های همکاری حرفه‌ای ما در هر پروژه و هر محیط تولیدی."
            align="center"
          />
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span className="value-card__number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
                <span className="value-card__mark"><Icon name="check" size={16} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
