"use client";

import { Info, X } from "lucide-react";
import { useEffect, useRef } from "react";

const noticeKey = "faraz-sanat-template-notice-acknowledged";

export default function FirstVisitNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (window.localStorage.getItem(noticeKey) !== "true" && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  function dismissNotice() {
    window.localStorage.setItem(noticeKey, "true");
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="first-visit-notice"
      aria-labelledby="first-visit-notice-title"
      aria-describedby="first-visit-notice-description"
      onCancel={(event) => {
        event.preventDefault();
        dismissNotice();
      }}
    >
      <div className="first-visit-notice__header">
        <span className="first-visit-notice__icon" aria-hidden="true">
          <Info />
        </span>
        <button
          className="first-visit-notice__close"
          type="button"
          aria-label="بستن اطلاعیه"
          onClick={dismissNotice}
        >
          <X />
        </button>
      </div>
      <span className="first-visit-notice__eyebrow">اطلاعیه</span>
      <h2 id="first-visit-notice-title">دربارهٔ این وب‌سایت</h2>
      <p id="first-visit-notice-description">
        این وب‌سایت یک قالب نمایشی است که توسط سازندهٔ قالب طراحی و توسعه داده شده و صرفاً به‌عنوان نمونه‌کار منتشر شده است.
        نام «فراز صنعت» و تمام محتوا و اطلاعات تماس این سایت جنبهٔ نمونه دارند و به کسب‌وکار واقعی اشاره نمی‌کنند.
        این وب‌سایت برای فروش کالا یا خدمات نیست.
      </p>
      <div className="first-visit-notice__footer">
        <span>
          طراحی و توسعه:{" "}
          <a
            className="first-visit-notice__credit-link"
            href="https://sajadfarghyari.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            سجاد فرق یاری
          </a>
        </span>
        <button className="button button--primary" type="button" onClick={dismissNotice}>
          متوجه شدم
        </button>
      </div>
    </dialog>
  );
}
