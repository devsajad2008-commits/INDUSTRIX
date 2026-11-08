import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  description: "صفحه‌ای که به دنبال آن هستید پیدا نشد. از صفحه اصلی فراز صنعت دیدن کنید.",
};

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <div className="not-found-art" aria-hidden="true">
            <span className="not-found-art__ring not-found-art__ring--outer" />
            <span className="not-found-art__ring not-found-art__ring--inner" />
            <span className="not-found-art__code">404</span>
            <span className="not-found-art__label">PAGE NOT FOUND</span>
            <span className="not-found-art__mark">F.</span>
          </div>

          <div className="not-found-content">
            <span className="not-found-eyebrow">
              <span className="not-found-eyebrow__dot" />
              خطای ۴۰۴
            </span>
            <h1>این صفحه پیدا نشد</h1>
            <p>
              شاید نشانی صفحه اشتباه باشد یا صفحه جابه‌جا شده باشد. می‌توانید
              از صفحه اصلی شروع کنید یا حوزه‌های فعالیت ما را ببینید.
            </p>
            <div className="not-found-actions">
              <Link className="button button--primary" href="/">
                بازگشت به صفحه اصلی <Icon name="arrow-left" />
              </Link>
              <Link className="button button--text" href="/services">
                دیدن حوزه‌های فعالیت
              </Link>
            </div>
            <span className="not-found-hint">فراز صنعت · راهکارهای مهندسی و تولید</span>
          </div>
        </div>
      </div>
    </section>
  );
}
