import type { Product } from './types';

export const WHATSAPP_NUMBER = "+201033787515";

export const WHATSAPP_MESSAGE = (productName: string, lang: 'en' | 'ar') => {
  const message = lang === 'ar'
    ? `مرحبًا، أرغب في طلب ${productName} من متجر Protech. أرجو إرسال التفاصيل والسعر.`
    : `Hi, I want to order the ${productName} from Protech Store. Please send details and the price.`;
  return encodeURIComponent(message);
};

export const LOGO_URL = "https://i.postimg.cc/qR44hJz1/logo.png";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583161845820";

export const PRODUCTS: Product[] = [
  {
    id: "pen",
    img: "https://i.postimg.cc/zXWp9sY2/pen-cam.jpg",
  },
  {
    id: "charger",
    img: "https://i.postimg.cc/mD3w8yB0/charger-cam.jpg",
  },
  {
    id: "mini",
    img: "https://i.postimg.cc/Y0d2yNfT/mini-cam.jpg",
  },
];

export const i18n = {
  ar: {
    nav: {
      products: 'المنتجات',
      how: 'كيف يعمل',
      faq: 'الأسئلة الشائعة',
      order: 'اطلب عبر واتساب'
    },
    hero: {
      title: 'أجهزة ذكية بتصميم أنيق — تكنولوجيا بحجم الجيب',
      subtitle: 'اختَر من بين أقلام بكاميرا، شواحن بخاصية التسجيل، وكاميرات صغيرة — كل منتج يأتي بجودة Full HD واتصال Wi‑Fi. السعر؟ مفاجأة عند الطلب ✨',
      cta: 'تسوّق الآن',
      feature1: 'جودة Full HD 1080p',
      feature2: 'بث مباشر عبر Wi‑Fi',
      feature3: 'متوافق مع Android و iOS',
      feature4: 'تصميم قوي وجذاب'
    },
    products: {
      title: 'الأكثر مبيعاً',
      pen: {
        name: 'قلم بكاميرا ذكية',
        short: 'قلم أنيق مع كاميرا Full HD مدمجة.',
        bullets: ['فيديو Full HD 1080p', 'Wi‑Fi وتخزين محلي', 'متوافق مع Android و iOS', 'هيكل معدني أنيق']
      },
      charger: {
        name: 'شاحن USB بكاميرا',
        short: 'كاميرا خفية داخل شاحن USB عملي.',
        bullets: ['جودة Full HD 1080p', 'صغير الحجم وغير ملحوظ', 'يعمل عند توصيله بالكهرباء', 'سهل الإعداد والاستخدام']
      },
      mini: {
        name: 'كاميرا صغيرة محمولة',
        short: 'كاميرا HD مدمجة للاستخدام أثناء التنقل.',
        bullets: ['فيديو Full HD 1080p', 'بث مباشر عبر Wi‑Fi', 'بطارية طويلة الأمد', 'محمولة وخفيفة الوزن']
      },
      viewDetails: 'عرض التفاصيل',
      priceLabel: 'السعر:',
      priceValue: 'مفاجأة'
    },
    howItWorks: {
      title: 'كيف تعمل الطلبات',
      step1: 'اختر المنتج الذي تريده',
      step2: 'اضغط "اطلب" للانتقال إلى واتساب',
      step3: 'سنرسل لك السعر وخيارات الشحن',
      step4: 'أكّد طلبك واستلمه',
      shippingTitle: 'الشحن والدفع',
      shippingBody: 'نوفّر الشحن لجميع المحافظات. الدفع نقدًا عند الاستلام أو عبر طرق الدفع الإلكترونية المتاحة.',
      shippingFeature1: 'شحن سريع',
      shippingFeature2: 'ضمان جودة',
      shippingFeature3: 'دعم فني 24/7',
      privacyTitle: 'الخصوصية والقانون',
      privacyBody: 'المنتجات مخصّصة للاستخدام القانوني فقط. يُمنع التسجيل والتصوير دون إذن الأطراف المعنية وفقًا للقوانين المحلية.'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      q1: 'كيف أحصل على السعر؟',
      a1: 'السعر يظهر بعد التواصل عبر WhatsApp — نوفّر سعر مفاجأة وعروض حصرية لعملائنا.',
      q2: 'ما طرق الدفع المتاحة؟',
      a2: 'نقبل الدفع نقدًا عند الاستلام، تحويل بنكي، ومدفوعات إلكترونية حسب الاتفاق.',
      q3: 'هل هناك ضمان؟',
      a3: 'نقدّم ضمان جودة لمدة 3 أشهر على عيوب الصناعة (تختلف الشروط حسب المنتج).',
      q4: 'هل المنتجات قانونية؟',
      a4: 'نؤكد أهمية الاستخدام القانوني فقط. نحن لا نتحمل مسؤولية أي استخدام يخالف القوانين المحلية.'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      contact: 'تواصل معنا'
    },
    modal: {
      orderViaWhatsapp: 'اطلب عبر واتساب',
      close: 'إغلاق',
      priceInfo: 'السعر مفاجأة (ستصلك التفاصيل بعد التواصل معنا)',
    }
  },
  en: {
    nav: {
      products: 'Products',
      how: 'How It Works',
      faq: 'FAQ',
      order: 'Order via WhatsApp'
    },
    hero: {
      title: 'Smart Devices, Elegant Design — Pocket-Sized Technology',
      subtitle: 'Choose from camera pens, recording chargers, and mini cameras—all with Full HD quality and Wi-Fi connectivity. The price? A surprise when you order ✨',
      cta: 'Shop Now',
      feature1: 'Full HD 1080p Quality',
      feature2: 'Wi-Fi Live Streaming',
      feature3: 'Android & iOS Compatible',
      feature4: 'Durable & Sleek Design'
    },
    products: {
      title: 'Our Bestsellers',
      pen: {
        name: 'Smart Pen Camera',
        short: 'Sleek pen with a built-in Full HD camera.',
        bullets: ['Full HD 1080p video', 'Wi-Fi & local storage', 'Compatible with Android & iOS', 'Elegant metal build']
      },
      charger: {
        name: 'USB Charger Camera',
        short: 'A hidden camera inside a functional USB charger.',
        bullets: ['Full HD 1080p quality', 'Discreet and unnoticeable', 'Plug & record functionality', 'Easy to set up and use']
      },
      mini: {
        name: 'Mini Portable Camera',
        short: 'A compact HD camera for on-the-go use.',
        bullets: ['Full HD 1080p video', 'Wi-Fi streaming', 'Long battery life', 'Portable and lightweight']
      },
      viewDetails: 'View Details',
      priceLabel: 'Price:',
      priceValue: 'Surprise'
    },
    howItWorks: {
      title: 'How to Order',
      step1: 'Choose your desired product',
      step2: 'Click "Order" to go to WhatsApp',
      step3: 'We will send you the price & shipping options',
      step4: 'Confirm your order and receive it',
      shippingTitle: 'Shipping & Payment',
      shippingBody: 'We ship to all governorates. Payment is cash on delivery or via available electronic payment methods.',
      shippingFeature1: 'Fast Shipping',
      shippingFeature2: 'Quality Guarantee',
      shippingFeature3: '24/7 Support',
      privacyTitle: 'Privacy & Legality',
      privacyBody: 'These products are intended for legal use only. Recording without consent is prohibited according to local laws.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How do I get the price?',
      a1: 'The price is revealed after contacting us via WhatsApp. We offer a surprise price and exclusive deals for our customers.',
      q2: 'What are the available payment methods?',
      a2: 'We accept cash on delivery, bank transfers, and electronic payments by agreement.',
      q3: 'Is there a warranty?',
      a3: 'We offer a 3-month quality guarantee against manufacturing defects (terms may vary by product).',
      q4: 'Are the products legal?',
      a4: 'We emphasize the importance of legal use only. We are not responsible for any use that violates local laws.'
    },
    footer: {
      rights: 'All rights reserved.',
      contact: 'Contact Us'
    },
    modal: {
      orderViaWhatsapp: 'Order via WhatsApp',
      close: 'Close',
      priceInfo: 'Price is a surprise (you will receive details after contacting us)',
    }
  }
};
