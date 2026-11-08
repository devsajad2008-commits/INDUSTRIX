import Link from "next/link";
import Icon from "@/components/ui/Icon";

const pages = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/about", label: "درباره ما" },
  { href: "/services", label: "خدمات" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Link className="brand brand--footer" href="/" aria-label="فراز صنعت، صفحه اصلی">
              <span className="brand__word">FARAZ<span>INDUSTRIES</span></span>
            </Link>
            <p>فراز صنعت؛ همراه واحدهای صنعتی در ساخت تجهیزات، اتوماسیون، تأمین قطعات و پشتیبانی فنی.</p>
            <div className="social-links" aria-label="شبکه‌های اجتماعی">
              <span role="img" aria-label="اینستاگرام، لینک نمونه"><Icon name="instagram" size={16} /></span>
              <span role="img" aria-label="لینکدین، لینک نمونه"><Icon name="linkedin" size={16} /></span>
              <span role="img" aria-label="تلگرام، لینک نمونه"><Icon name="send" size={16} /></span>
            </div>
          </div>
          <div className="footer-column">
            <h2>دسترسی سریع</h2>
            {pages.map((page) => <Link href={page.href} key={page.href}>{page.label}</Link>)}
          </div>
          <div className="footer-column">
            <h2>حوزه‌های فعالیت</h2>
            <Link href="/services">ساخت تجهیزات صنعتی</Link>
            <Link href="/services">اتوماسیون صنعتی</Link>
            <Link href="/services">تأمین قطعات</Link>
            <Link href="/services">نگهداری و تعمیرات</Link>
          </div>
          <div className="footer-column footer-contact">
            <h2>ارتباط با ما</h2>
            <span><Icon name="mail" size={17} /> info@example.com</span>
            <span><Icon name="phone" size={17} /> ۰۲۱ ـ ۸۸۰۰ ۰۰۰۰</span>
            <span><Icon name="pin" size={17} /> تهران، شهرک صنعتی</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>فراز صنعت · راهکارهای مهندسی و تولید · ۱۴۰۵</p>
          <span>برای دریافت مشاوره‌ی فنی با کارشناسان ما تماس بگیرید.</span>
        </div>
        <div className="footer-credit">
          <span className="footer-credit__label"><Icon name="workflow" size={15} /> مهندسی برای صنعت</span>
          <span className="footer-credit__name">FARAZ INDUSTRIES</span>
        </div>
      </div>
    </footer>
  );
}
