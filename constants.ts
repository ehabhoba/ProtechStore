import type { Product } from './types';

export const WHATSAPP_NUMBER = "+201033787515";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583161845820";

export const WHATSAPP_MESSAGE = (productName: string) => encodeURIComponent(`Hi, I want to order the ${productName} from Protech Store. Please send details and the surprise price.`);

export const LOGO_URL = "https://i.postimg.cc/zXG6zgpM/logo.jpg";
export const HERO_PRODUCTS_URL = "https://i.postimg.cc/3JgGqVwW/panner.jpg";

export const PRODUCTS_DATA = [
  {
    id: "pen",
    img: "https://i.postimg.cc/kX8SSY7P/pen-cam.jpg",
  },
  {
    id: "charger",
    img: "https://i.postimg.cc/13Y24f99/charger-cam.jpg",
  },
  {
    id: "mini",
    img: "https://i.postimg.cc/x8P4wFjT/mini-cam.jpg",
  },
];

export const translations = {
  ar: {
    meta: {
      title: "متجر بروتك — أجهزة ذكية وأدوات",
      description: "متجر بروتك — أحدث الأجهزة الذكية: أقلام كاميرا، شواحن بكاميرا، وكاميرات محمولة. اطلب الآن عبر WhatsApp مع سعر مفاجأة وعروض حصرية."
    },
    header: {
      storeName: "متجر بروتك",
      tagline: "أجهزة ذكية • جودة تثق بها",
      products: "المنتجات",
      howItWorks: "كيفية الطلب",
      faq: "الأسئلة الشائعة",
      order: "اطلب",
      orderViaWhatsapp: "اطلب عبر WhatsApp",
    },
    hero: {
      title: "أجهزة ذكية بتصميم أنيق — تكنولوجيا بحجم الجيب",
      subtitle: "اختَر من بين أقلام بكاميرا، شواحن بخاصية التسجيل، وكاميرات صغيرة — كل منتج يأتي بجودة Full HD واتصال Wi‑Fi. السعر؟ مفاجأة عند الطلب ✨",
      shopNow: "تسوّق الآن",
      feature1: "فيديو Full HD 1080p",
      feature2: "بث مباشر Wi‑Fi",
      feature3: "متوافق مع Android و iOS",
      feature4: "تصميم قوي وجذاب",
    },
    productsSection: {
      title: "الأكثر مبيعاً",
      subtitle: "أجهزة ذكية عالية الجودة لتلبية احتياجاتك.",
      viewDetails: "عرض التفاصيل",
      price: "السعر",
      surprise: "مفاجأة",
    },
    products: {
      pen: {
        name: "قلم كاميرا ذكي",
        short: "قلم أنيق مع كاميرا Full HD",
        bullets: ["فيديو Full HD 1080p", "تخزين محلي واتصال Wi‑Fi", "متوافق مع Android و iOS", "هيكل معدني أنيق"],
      },
      charger: {
        name: "شاحن USB بكاميرا",
        short: "كاميرا خفية داخل شاحن USB",
        bullets: ["جودة Full HD 1080p", "توصيل وتسجيل فوري", "تصميم غير ملحوظ", "إعداد سهل"],
      },
      mini: {
        name: "كاميرا صغيرة محمولة",
        short: "كاميرا HD مدمجة للاستخدام أثناء التنقل",
        bullets: ["جودة Full HD 1080p", "بث مباشر عبر Wi‑Fi", "عمر بطارية طويل", "محمولة وخفيفة الوزن"],
      }
    },
    howItWorks: {
      title: "كيفية الطلب",
      step1: "اختر المنتج الذي تريده (القلم / الشاحن / الكاميرا)",
      step2: "اضغط 'اطلب' وسيتم تحويلك إلى WhatsApp لإرسال طلبك",
      step3: "سنرسل لك السعر المفاجأة وخيارات الشحن والدفع",
      step4: "تأكيد الطلب والدفع بالطرق المتاحة",
      shippingTitle: "الشحن والدفع",
      shippingBody: "نوفّر الشحن لجميع المحافظات. الدفع نقدًا عند الاستلام أو تحويل بنكي أو بوابات دفع إلكترونية متاحة حسب الطلب.",
      shippingFeature1: "شحن سريع",
      shippingFeature2: "ضمان جودة",
      shippingFeature3: "دعم فني 24/7 عبر WhatsApp",
      privacyTitle: "الخصوصية والقانون",
      privacyBody: "المنتجات مخصّصة للاستخدام القانوني فقط. يُمنع التسجيل والتصوير دون إذن الأطراف المعنية وفقًا للقوانين المحلية.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على الأسئلة الشائعة حول منتجاتنا وخدماتنا.",
      q1: "كيف أحصل على السعر؟",
      a1: "السعر يظهر بعد التواصل عبر WhatsApp — نوفّر سعرًا مفاجأة وعروضًا حصرية لعملائنا.",
      q2: "ما طرق الدفع المتاحة؟",
      a2: "نقبل الدفع نقدًا عند الاستلام، تحويل بنكي، ومدفوعات إلكترونية حسب الاتفاق.",
      q3: "هل هناك ضمان؟",
      a3: "نقدّم ضمان جودة لمدة 3 أشهر على عيوب الصناعة (تختلف الشروط حسب المنتج).",
      q4: "هل المنتجات قانونية؟",
      a4: "نؤكد أهمية الاستخدام القانوني فقط. نحن لا نتحمل مسؤولية أي استخدام يخالف القوانين المحلية.",
    },
    footer: {
      tagline: "أحدث الأجهزة الذكية بتصاميم أنيقة وجودة عالية.",
      contact: "تواصل معنا",
      policy: "السياسات",
      privacyPolicy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      copyright: `© ${new Date().getFullYear()} متجر بروتك. جميع الحقوق محفوظة.`,
    },
    modal: {
      orderViaWhatsapp: "اطلب عبر WhatsApp",
      close: "إغلاق",
      priceInfo: "السعر: مفاجأة (ستصلك تفاصيل السعر بعد التواصل معنا)",
    }
  },
  en: {
    meta: {
      title: "Protech Store — Smart Devices & Gadgets",
      description: "Protech Store — Latest smart devices: camera pens, camera chargers, and portable cameras. Order now via WhatsApp for a surprise price and exclusive offers."
    },
    header: {
      storeName: "Protech Store",
      tagline: "Smart devices • Quality you can trust",
      products: "Products",
      howItWorks: "How it works",
      faq: "FAQ",
      order: "Order",
      orderViaWhatsapp: "Order via WhatsApp",
    },
    hero: {
      title: "Sleek Smart Devices — Pocket-Sized Technology",
      subtitle: "Choose from camera pens, recording chargers, and mini cameras—each with Full HD quality and Wi-Fi connectivity. The price? A surprise upon request ✨",
      shopNow: "Shop Now",
      feature1: "Full HD 1080p Video",
      feature2: "Wi-Fi Streaming",
      feature3: "Android & iOS Compatible",
      feature4: "Durable & Attractive Design",
    },
    productsSection: {
      title: "Our Bestsellers",
      subtitle: "Top-quality smart devices for your needs.",
      viewDetails: "View Details",
      price: "Price",
      surprise: "Surprise",
    },
    products: {
      pen: {
        name: "Smart Pen Camera",
        short: "Sleek pen with a Full HD camera",
        bullets: ["Full HD 1080p video", "Wi-Fi & local storage", "Compatible with Android & iOS", "Elegant metal build"],
      },
      charger: {
        name: "USB Charger Camera",
        short: "Hidden camera inside a USB charger",
        bullets: ["Full HD 1080p", "Plug & record", "Discrete design", "Easy setup"],
      },
      mini: {
        name: "Mini Portable Camera",
        short: "Compact HD camera for on-the-go use",
        bullets: ["Full HD 1080p", "Wi-Fi streaming", "Long battery life", "Portable and lightweight"],
      },
    },
    howItWorks: {
      title: "How to Order",
      step1: "Choose the product you want (Pen / Charger / Camera)",
      step2: "Click 'Order' to be redirected to WhatsApp to send your request",
      step3: "We will send you the surprise price, shipping, and payment options",
      step4: "Confirm your order and pay using our available methods",
      shippingTitle: "Shipping & Payment",
      shippingBody: "We ship to all governorates. Payment is cash on delivery, bank transfer, or electronic payment gateways available upon request.",
      shippingFeature1: "Fast Shipping",
      shippingFeature2: "Quality Guarantee",
      shippingFeature3: "24/7 Support via WhatsApp",
      privacyTitle: "Privacy & Legality",
      privacyBody: "Products are intended for legal use only. Recording and filming without the consent of concerned parties is prohibited according to local laws.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions about our products and services.",
      q1: "How do I get the price?",
      a1: "The price is revealed after contacting us via WhatsApp. We offer a surprise price and exclusive deals for our customers.",
      q2: "What are the available payment methods?",
      a2: "We accept cash on delivery, bank transfers, and electronic payments by agreement.",
      q3: "Is there a warranty?",
      a3: "We offer a 3-month quality warranty against manufacturing defects (terms may vary by product).",
      q4: "Are the products legal?",
      a4: "We emphasize the importance of legal use only. We are not responsible for any use that violates local laws.",
    },
    footer: {
      tagline: "The latest smart devices with sleek designs and high quality.",
      contact: "Contact",
      policy: "Policy",
      privacyPolicy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright: `© ${new Date().getFullYear()} Protech Store. All rights reserved.`,
    },
    modal: {
      orderViaWhatsapp: "Order via WhatsApp",
      close: "Close",
      priceInfo: "Price: Surprise (You will receive price details after contacting us)",
    }
  }
};