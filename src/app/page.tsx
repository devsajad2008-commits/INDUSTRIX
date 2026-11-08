import Link from "next/link";
import ProjectImage from "@/components/ui/ProjectImage";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import ServicesSection from "@/components/sections/ServicesSection";

const advantages = [
  {
    number: "۰۱",
    title: "کیفیت مهندسی",
    description: "تجهیزات و خدمات را بر پایه استانداردهای فنی و کنترل دقیق کیفیت ارائه می‌کنیم.",
  },
  {
    number: "۰۲",
    title: "تخصص صنعتی",
    description: "تیم فنی ما با نیازها و شرایط واقعی محیط‌های تولیدی آشناست.",
  },
  {
    number: "۰۳",
    title: "پاسخ‌گویی سریع",
    description: "برای تأمین قطعه، پشتیبانی و رسیدگی به نیازهای عملیاتی در دسترس شما هستیم.",
  },
  {
    number: "۰۴",
    title: "همکاری بلندمدت",
    description: "از بررسی اولیه تا نصب و نگهداری، شریکی قابل اتکا برای مجموعه‌ی شما هستیم.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow"><span className="eyebrow__dot" /> مهندسی، ساخت و پشتیبانی صنعتی</span>
            <h1>مهندسی دقیق برای <span>صنعتی پایدار</span></h1>
            <p className="hero__description">
              از ساخت تجهیزات و اتوماسیون خطوط تولید تا نگهداری و تأمین قطعات، فراز صنعت برای افزایش بهره‌وری کنار شماست.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/services">
                حوزه‌های فعالیت <Icon name="arrow-left" />
              </Link>
              <Link className="button button--text" href="/about">
                درباره‌ی فراز صنعت <Icon name="arrow-left" />
              </Link>
            </div>
            <div className="hero__note">
              <span className="hero__note-icon"><Icon name="product" /></span>
              <span>همراه مطمئن خطوط تولید</span>
            </div>
          </div>
          <div className="hero__visual">
            <ProjectImage
              src="/images/pages/home-hero.webp"
              alt="نمای یک کارخانه صنعتی در حال تولید"
              label="نمای کارخانه و خطوط تولید"
              className="hero__image"
              preload
            />
            <div className="hero-float hero-float--top">
              <span className="hero-float__icon"><Icon name="chart" /></span>
              <span><strong>تولید پایدار</strong><small>کیفیت در تمام مراحل کار</small></span>
            </div>
            <div className="hero-float hero-float--bottom">
              <span className="hero-float__status" />
              <span><strong>پشتیبانی فنی</strong><small>در کنار تیم‌های صنعتی</small></span>
              <Icon name="arrow-left" />
            </div>
            <span className="hero__visual-index">01 <i /> 03</span>
          </div>
        </div>
        <div className="hero__bottom container">
          <span>راهکارهای مهندسی برای نیازهای واقعی صنعت</span>
          <Link href="/about">آشنایی با مجموعه <Icon name="arrow-down-left" /></Link>
        </div>
      </section>
      <section className="section about-preview">
        <div className="container about-preview__grid">
          <div className="about-preview__visual">
            <ProjectImage
              src="/images/pages/home-about.webp"
              alt="چرخ‌دنده‌ها و تجهیزات ماشین‌آلات صنعتی"
              label="تجهیزات و ماشین‌آلات صنعتی"
              className="about-preview__image"
            />
            <div className="about-preview__caption">
              <span className="about-preview__caption-mark">F</span>
              <span>مهندسی دقیق<br />برای صنعت پایدار</span>
            </div>
          </div>
          <div className="about-preview__content">
            <SectionHeading eyebrow="درباره‌ی فراز صنعت" title="راهکار صنعتی؛ از ایده تا بهره‌برداری" />
            <p className="body-copy">
              ما با تکیه بر دانش مهندسی و تجربه‌ی کار در محیط‌های تولیدی، تجهیزات و خدماتی متناسب با نیاز هر مجموعه ارائه می‌کنیم.
              هدف ما افزایش بهره‌وری، ایمنی و تداوم فعالیت خطوط تولید است.
            </p>
            <Link className="inline-link" href="/about">بیشتر درباره‌ی مجموعه <Icon name="arrow-left" /></Link>
            <div className="about-preview__signature">
              <span className="signature-line" />
              <span>شریک فنی صنایع کشور</span>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />

      <section className="section why-section">
        <div className="container">
          <div className="why-section__top">
            <SectionHeading
              eyebrow="مزیت‌های همکاری"
              title="همراهی مطمئن برای تولید"
              description="در صنعت، کیفیت کار و زمان پاسخ‌گویی اهمیت دارد. ما این مسئولیت را جدی می‌گیریم."
            />
            <span className="why-section__stamp"><span>FARAZ</span><small>صنعت<br />و تولید</small></span>
          </div>
          <div className="advantage-list">
            {advantages.map((item) => (
              <article className="advantage-row" key={item.number}>
                <span className="advantage-row__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="advantage-row__arrow"><Icon name="arrow-left" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
