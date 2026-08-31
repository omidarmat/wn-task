import { FooterContact, FooterNavbarItem } from "@/types/ui/footer";

export const footerNavbar: Record<string, FooterNavbarItem> = {
  suits: {
    id: "suits",
    label: "سوئیت‌ها و اقامت",
  },
  guide: {
    id: "guide",
    label: "راهنمای مهمان‌ها",
  },
  about: {
    id: "about",
    label: "درباره گیلمار",
  },
  magazine: {
    id: "magazine",
    label: "مجله گیلمار",
  },
};

export const footerContacts: Record<string, FooterContact> = {
  support: {
    id: "support",
    contact: "01334775411 - 01334775400",
    method: "تلفن پشتیبانی",
  },
  email: {
    id: "email",
    contact: "info@gilmar-gilan.com",
    method: "ایمیل",
  },
  location: {
    id: "location",
    contact:
      "گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران، اقامتگاه گلیمار",
    method: "موقعیت گیلمار",
  },
};
