import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "برای مشاوره فنی، تأمین تجهیزات یا بررسی پروژه صنعتی خود با کارشناسان فراز صنعت در ارتباط باشید.",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "فراز صنعت",
    title: "تماس با ما | فراز صنعت",
    description: "برای مشاوره فنی، تأمین تجهیزات یا بررسی پروژه صنعتی خود با کارشناسان فراز صنعت در ارتباط باشید.",
    images: [
      {
        url: "/images/social/contact.jpg",
        width: 1200,
        height: 630,
        alt: "فراز صنعت؛ برای همکاری تماس بگیرید",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس با ما | فراز صنعت",
    description: "برای مشاوره فنی، تأمین تجهیزات یا بررسی پروژه صنعتی خود با کارشناسان فراز صنعت در ارتباط باشید.",
    images: [
      {
        url: "/images/social/contact.jpg",
        alt: "فراز صنعت؛ برای همکاری تماس بگیرید",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="eyebrow"><span className="eyebrow__dot" /> کارشناسان فراز صنعت</span>
          <h1>برای همکاری تماس بگیرید</h1>
          <p>برای مشاوره‌ی فنی، تأمین تجهیزات یا بررسی پروژه‌ی صنعتی خود با ما در ارتباط باشید.</p>
          <div className="breadcrumb"><Link href="/">صفحه اصلی</Link><span>/</span><span>تماس با ما</span></div>
          <span className="contact-hero__mark" aria-hidden="true">F.</span>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-form-panel">
            <span className="contact-form-panel__eyebrow">درخواست مشاوره</span>
            <h2>نیاز صنعتی خود را مطرح کنید</h2>
            <p>اطلاعات تماس و شرح درخواستتان را ثبت کنید تا کارشناسان ما پیگیری کنند.</p>
            <form className="contact-form">
              <div className="form-field">
                <label htmlFor="full-name">نام و نام خانوادگی <span>*</span></label>
                <input id="full-name" name="name" type="text" placeholder="نام شما" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">ایمیل <span>*</span></label>
                <input id="email" name="email" type="email" placeholder="name@example.com" autoComplete="email" dir="ltr" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">شماره تماس <small>(اختیاری)</small></label>
                <input id="phone" name="phone" type="tel" placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹" autoComplete="tel" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">موضوع پیام <span>*</span></label>
                <input id="subject" name="subject" type="text" placeholder="مثلاً تأمین تجهیزات یا تعمیرات" required />
              </div>
              <div className="form-field form-field--full">
                <label htmlFor="message">متن پیام <span>*</span></label>
                <textarea id="message" name="message" rows={5} placeholder="نوع تجهیزات یا خدمات موردنیاز را توضیح دهید..." required />
              </div>
              <button className="button button--primary contact-form__submit" type="button">
                ثبت درخواست <Icon name="arrow-left" />
              </button>
              <span className="contact-form__note">فرم نمایشی است؛ اطلاعاتی ارسال نمی‌شود.</span>
            </form>
          </div>

          <aside className="contact-info">
            <div className="contact-info__intro">
              <span className="contact-info__eyebrow">راه‌های ارتباطی</span>
              <h2>پاسخ‌گوی نیازهای فنی شما</h2>
              <p>برای هماهنگی مشاوره و دریافت اطلاعات بیشتر با ما تماس بگیرید.</p>
            </div>
            <div className="contact-info__items">
              <div className="contact-info__item">
                <span className="contact-info__icon"><Icon name="mail" /></span>
                <span><small>ایمیل</small><strong>info@example.com</strong></span>
                <Icon name="arrow-left" size={17} />
              </div>
              <div className="contact-info__item">
                <span className="contact-info__icon"><Icon name="phone" /></span>
                <span><small>شماره تماس</small><strong dir="ltr">+۹۸ ۲۱ ۸۸۰۰ ۰۰۰۰</strong></span>
                <Icon name="arrow-left" size={17} />
              </div>
              <div className="contact-info__item">
                <span className="contact-info__icon"><Icon name="pin" /></span>
                <span><small>نشانی دفتر</small><strong>تهران، شهرک صنعتی</strong></span>
                <Icon name="arrow-left" size={17} />
              </div>
              <div className="contact-info__item">
                <span className="contact-info__icon"><Icon name="clock" /></span>
                <span><small>ساعات پاسخ‌گویی</small><strong>شنبه تا چهارشنبه، ساعت ۹ تا ۱۷</strong></span>
                <Icon name="arrow-left" size={17} />
              </div>
            </div>
            <div className="contact-social">
              <span>ما را در شبکه‌های اجتماعی دنبال کنید</span>
              <div className="contact-social__links">
                <span><Icon name="instagram" size={15} /> اینستاگرام</span>
                <span><Icon name="linkedin" size={15} /> لینکدین</span>
                <span><Icon name="send" size={15} /> تلگرام</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
