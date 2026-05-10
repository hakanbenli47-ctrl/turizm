"use client";

import { motion, type Variants } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Briefcase,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  Gem,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  QrCode,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const phone = "905533545018";

const motionEase = [0.25, 0.1, 0.25, 1] as const;

const softReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: motionEase,
    },
  },
};

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -34,
    y: 12,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: motionEase,
    },
  },
};

const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    y: 12,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: motionEase,
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: motionEase,
    },
  },
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const gradientIcon =
  "bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-white shadow-lg shadow-slate-300/60";

const goldText =
  "bg-gradient-to-r from-slate-950 via-slate-600 to-[#b0894f] bg-clip-text text-transparent";

const galleryImages = [
  "/vip-1.jpg",
  "/vip-2.jpg",
  "/vip-3.jpg",
  "/vip-4.jpg",
  "/vip-5.jpg",
  "/vip-6.jpg",
];

const videoCards = [
  {
    title: "VIP Transfer Tanıtımı",
    desc: "Havalimanı, otel, toplantı ve özel davet transferleri için profesyonel tanıtım videosu.",
    video: "/vipvideo1.mp4",
    icon: Gem,
  },
  {
    title: "Engelsiz Araç Hizmeti",
    desc: "Asansörlü araç desteği ve güvenli ulaşım sürecini gösteren video alanı.",
    video: "/vipvideo2.mp4",
    icon: Accessibility,
  },
  {
    title: "Düğün & Organizasyon",
    desc: "Gelin arabası, davetli transferi ve organizasyon ulaşımı için video alanı.",
    video: "/vipvideo3.mp4",
    icon: HeartHandshake,
  },
];

const conceptSections = [
  {
    icon: Accessibility,
    title: "Engel Tanımayan Ulaşım",
    subtitle: "Asansörlü ve erişilebilir araç desteği",
    desc: "Tam donanımlı, asansörlü ve güvenlik standartları yüksek araçlarla Özel misafirlerimize güvenli, konforlu ve huzurlu ulaşım sağlıyoruz.",
    bullets: [
      "Asansörlü araç desteği",
      "Güvenli sabitleme sistemi",
      "Empati odaklı destek",
      "Ev, hastane, otel ve özel nokta transferi",
    ],
    image: "/vip-1.jpg",
  },
  {
    icon: Gem,
    title: "VIP Transfer & Lüks Araç",
    subtitle: "Konfor, prestij ve gizlilik",
    desc: "Havalimanı, otel, toplantı ve özel davet transferlerinde modern, geniş ve konforlu VIP araçlarla ayrıcalıklı ulaşım sunuyoruz.",
    bullets: [
      "Havalimanı VIP transfer",
      "Şehir içi özel şoförlü ulaşım",
      "Otel ve toplantı transferi",
      "Lüks araç deneyimi",
    ],
    image: "/vip-2.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Düğün & Gelin Arabası",
    subtitle: "Özel günlere özel ulaşım",
    desc: "Düğün, nişan ve özel günlerde gelin arabası, aile transferi ve davetli ulaşımı için planlı hizmet sunuyoruz.",
    bullets: [
      "Gelin arabası hizmeti",
      "Aile transferi",
      "Davetli ulaşımı",
      "Düğün salonu ve otel transferi",
    ],
    image: "/vip-3.jpg",
  },
  {
    icon: Users,
    title: "Misafir & Davetli Transferi",
    subtitle: "Kalabalık organizasyonlar için",
    desc: "Davetlilerinizin organizasyon alanına güvenli, zamanında ve konforlu ulaşması için transfer planlaması yapıyoruz.",
    bullets: [
      "Davetli karşılama",
      "Toplu transfer planı",
      "Otel ve mekan bağlantısı",
      "Etkinlik çıkış transferi",
    ],
    image: "/vip-4.jpg",
  },
  {
    icon: Briefcase,
    title: "Kurumsal Transfer",
    subtitle: "Şirketler için profesyonel çözüm",
    desc: "Personel, yönetici, misafir ve iş ortakları için kurumsal imaja uygun, planlı ve güvenilir transfer hizmeti sunuyoruz.",
    bullets: [
      "Yönetici transferi",
      "Kurumsal misafir taşıma",
      "Fuar ve toplantı ulaşımı",
      "Düzenli personel transferi",
    ],
    image: "/vip-5.jpg",
  },
  {
    icon: Plane,
    title: "Organizasyon & Filo Yönetimi",
    subtitle: "Etkinlik günü ulaşım koordinasyonu",
    desc: "Gala, lansman, tanıtım günü ve özel organizasyonlarda araç planlama, misafir yönlendirme ve filo yönetimi desteği sağlıyoruz.",
    bullets: [
      "Gala ve lansman transferi",
      "Filo planlama",
      "Misafir yönlendirme",
      "Etkinlik ulaşım koordinasyonu",
    ],
    image: "/vip-6.jpg",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Güvenlik",
    desc: "Periyodik bakımlı araçlar ve profesyonel sürücü kadrosu.",
  },
  {
    icon: Accessibility,
    title: "Hassasiyet",
    desc: "Engelsiz ulaşımında dikkatli, duyarlı ve destekleyici hizmet.",
  },
  {
    icon: Clock,
    title: "Dakiklik",
    desc: "Planlanan saatlere sadık, düzenli ve güvenilir ulaşım.",
  },
  {
    icon: Star,
    title: "Konfor",
    desc: "Modern, temiz ve prestijli araçlarla özel yolculuk deneyimi.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Talebinizi iletin",
    desc: "Hizmet türü, alınacak yer, gidilecek yer, tarih ve saat bilgisini gönderin.",
  },
  {
    icon: CalendarCheck,
    title: "Planlama yapılsın",
    desc: "İhtiyacınıza göre araç, rota ve transfer planı hazırlansın.",
  },
  {
    icon: Car,
    title: "Yolculuğunuz başlasın",
    desc: "Belirlenen saatte güvenli, konforlu ve profesyonel ulaşım sağlansın.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f3f1ed] text-slate-950">
      <motion.section
        initial="hidden"
        animate="show"
        variants={softReveal}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),linear-gradient(135deg,#f8f7f4_0%,#e8e5df_42%,#cfd3d8_100%)]" />
        <div className="absolute left-[-160px] top-[-160px] h-[480px] w-[480px] rounded-full bg-white/80 blur-[110px]" />
        <div className="absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] rounded-full bg-slate-400/30 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:pb-24 lg:pt-8">
          <header className="mb-10 flex items-center justify-between gap-3 rounded-[1.6rem] border border-white/80 bg-white/70 px-4 py-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:bg-white/85 sm:rounded-full sm:px-6">
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500 sm:text-xs sm:tracking-[0.32em]">
                Sezen / Mir Turizm
              </p>
              <h1 className="mt-1 text-sm font-black text-slate-950 sm:text-xl">
                VIP • Engelsiz Araç • Düğün • Kurumsal Transfer
              </h1>
            </div>

            <a
              href={`https://wa.me/${phone}?text=Merhaba,%20transfer%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <motion.div variants={revealLeft} className="max-w-2xl">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/65 px-3 py-2 shadow-sm backdrop-blur-xl transition duration-500 hover:bg-white/90 sm:px-4">
                <Sparkles size={15} className="shrink-0 text-[#b0894f]" />
                <span className="text-[11px] font-medium text-slate-600 sm:text-sm">
                  Konfor, erişilebilirlik ve lüks ulaşım bir arada
                </span>
              </div>

              <h2 className="text-[38px] font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Yolculuğun <span className={goldText}>en özel</span> hali.
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
                VIP transferden engelsiz araç hizmetine, düğün ulaşımından
                kurumsal organizasyonlara kadar her ihtiyaca özel, planlı ve
                prestijli ulaşım çözümleri sunuyoruz.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:gap-4">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20transfer%20hizmetleri%20i%C3%A7in%20fiyat%20almak%20istiyorum.%0AHizmet%20t%C3%BCr%C3%BC:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:%0ATarih%20/%20Saat:`}
                  target="_blank"
                  rel="noreferrer"
className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-600 to-[#b0894f] px-5 py-4 text-sm font-bold text-white shadow-xl shadow-slate-400/30 transition duration-300 hover:-translate-y-1 hover:from-slate-900 hover:via-slate-700 hover:to-[#c49a5d] hover:shadow-2xl sm:px-7 sm:text-base"
                >
                  Hemen Fiyat Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-sm font-bold text-slate-950 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:px-7 sm:text-base"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
              </div>

              <motion.div
                variants={staggerParent}
                className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {[
                  ["VIP", "Transfer"],
                  ["Engelsiz", "Ulaşım"],
                  ["Düğün", "Organizasyon"],
                  ["Kurumsal", "Filo"],
                ].map(([title, desc]) => (
                  <motion.div
                    variants={cardReveal}
                    key={title}
                    className="rounded-3xl border border-white/80 bg-white/65 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,0.09)]"
                  >
                    <p className={`text-xl font-black sm:text-2xl ${goldText}`}>
                      {title}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={revealRight} className="relative w-full">
  <div className="absolute -inset-2 sm:-inset-4 rounded-[2rem] sm:rounded-[2.8rem] bg-gradient-to-br from-white via-slate-300/50 to-slate-500/20 blur-xl sm:blur-2xl" />

  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-[0_20px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl transition duration-500 hover:shadow-[0_35px_100px_rgba(15,23,42,0.18)] sm:rounded-[2.7rem] sm:p-4">
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.2rem] border border-white/80 bg-[#f8f7f4] sm:min-h-[610px] sm:rounded-[2.1rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(176,137,79,0.18),transparent_32%),linear-gradient(135deg,#ffffff_0%,#eef0f2_45%,#d6d9de_100%)]" />
      <div className="absolute left-4 top-4 h-20 w-20 rounded-full border border-white/80 sm:left-6 sm:top-6 sm:h-28 sm:w-28" />
      <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full border border-slate-300/60 sm:bottom-8 sm:right-8 sm:h-40 sm:w-40" />

      <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-4 sm:min-h-[610px] sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.24em]">
              Premium Ulaşım Planı
            </p>

            <h3 className="mt-2 max-w-[430px] text-xl font-black leading-tight text-slate-950 sm:mt-3 sm:text-4xl">
              Araç, rota ve zamanlama tek merkezden planlanır.
            </h3>
          </div>

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${gradientIcon}`}
          >
            <Plane size={20} className="sm:hidden" />
            <Plane size={24} className="hidden sm:block" />
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:mt-0 sm:gap-3 sm:grid-cols-2">
          {[
            {
              title: "VIP Araç",
              desc: "Prestijli ve konforlu transfer",
              icon: Gem,
            },
            {
              title: "Engelsiz Araç",
              desc: "Asansörlü güvenli ulaşım",
              icon: Accessibility,
            },
            {
              title: "Düğün",
              desc: "Özel gün transfer planı",
              icon: HeartHandshake,
            },
            {
              title: "Filo",
              desc: "Organizasyon günü koordinasyon",
              icon: Users,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl sm:rounded-3xl border border-white/80 bg-white/72 p-3 sm:p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl sm:mb-4 sm:h-11 sm:w-11 sm:rounded-2xl ${gradientIcon}`}
                >
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={21} className="hidden sm:block" />
                </div>

                <h4 className="text-sm font-black text-slate-950 sm:text-base">
                  {item.title}
                </h4>

                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-[1.2rem] sm:mt-0 sm:rounded-[1.6rem] border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex items-start gap-3 sm:gap-4">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${gradientIcon}`}
            >
              <Car size={20} className="sm:hidden" />
              <Car size={24} className="hidden sm:block" />
            </div>

            <div>
              <p className="text-sm font-black text-slate-950 sm:text-base">
                Talebe göre doğru araç ve doğru güzergah seçilir.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Hizmet türünü, tarih bilgisini ve güzergahı gönderin; size özel transfer planı hazırlansın.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.2rem] sm:mt-0 sm:rounded-[1.6rem] bg-gradient-to-r from-slate-800 via-slate-600 to-[#b0894f] p-4 sm:p-5 text-white shadow-xl shadow-slate-400/30">
          <p className="text-xs font-black sm:text-base">
            Kurumsal, sade ve güven veren transfer deneyimi.
          </p>

          <p className="mt-2 text-[11px] leading-5 text-white/75 sm:text-xs">
            VIP, engelsiz araç, düğün ve organizasyon transferleri için tek noktadan profesyonel çözüm.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={softReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="border-y border-slate-200 bg-white/80 px-4 py-10 backdrop-blur-xl sm:px-6"
      >
       <motion.div
  variants={staggerParent}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.05 }}
  className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
>
  {galleryImages.map((img, index) => (
    <motion.div
      variants={cardReveal}
      key={img}
      className="relative h-[130px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[170px] lg:h-[190px]"
    >
      <img
        src={img}
        alt={`Transfer araç görseli ${index + 1}`}
        loading={index < 4 ? "eager" : "lazy"}
        fetchPriority={index < 4 ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </motion.div>
  ))}
</motion.div>
      </motion.section>

     <motion.section
  variants={softReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.05 }}
  className="relative block w-full overflow-visible px-4 py-14 sm:px-6 sm:py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
        Hizmet Konseptleri
      </p>

      <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
        Her ihtiyaca ayrı çözüm, her yolculuğa ayrı plan.
      </h2>
    </div>

    <div className="space-y-6 sm:space-y-7">
      {conceptSections.map((item, index) => {
        const Icon = item.icon;
        const reverse = index % 2 === 1;

        return (
          <motion.div
            key={item.title}
            variants={index % 2 === 0 ? revealLeft : revealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className={`grid w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-500 sm:rounded-[2rem] lg:grid-cols-2 lg:hover:-translate-y-1 lg:hover:shadow-[0_35px_110px_rgba(15,23,42,0.12)] ${
              reverse ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative h-[230px] w-full overflow-hidden sm:h-[360px] lg:h-auto lg:min-h-[380px]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-xl sm:bottom-5 sm:left-5 sm:px-4 sm:text-xs">
                {item.subtitle}
              </div>
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${gradientIcon}`}
              >
                <Icon size={24} className="sm:w-[27px] sm:h-[27px]" />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                {item.subtitle}
              </p>

              <h3 className="mt-3 text-xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {item.desc}
              </p>

              <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition duration-300 hover:bg-white hover:shadow-sm"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-slate-700"
                    />
                    <span className="text-sm leading-6 text-slate-600">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</motion.section>

      <motion.section
        variants={softReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="bg-white px-4 py-16 text-slate-950 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
              Neden Biz?
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Güven, hassasiyet, dakiklik ve konfor aynı hizmette.
            </h2>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${gradientIcon}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={softReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
              Video Tanıtımları
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Yolculuk deneyimini yakından görün.
            </h2>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {videoCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_25px_90px_rgba(15,23,42,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_110px_rgba(15,23,42,0.16)]"
                >
                <div className="relative aspect-video overflow-hidden bg-slate-950">
  <video
    src={item.video}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="h-full w-full object-cover"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

  <div
    className={`pointer-events-none absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl ${gradientIcon}`}
  >
    <Icon size={23} />
  </div>

  <div className="pointer-events-none absolute bottom-4 left-4 right-4">
    <p className="text-sm font-bold text-white sm:text-base">
      {item.title}
    </p>
  </div>
</div>

                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
<motion.section
  variants={softReveal}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.18 }}
  className="px-4 py-14 sm:px-6 sm:py-20"
>
  <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#b0894f]/20 bg-gradient-to-r from-slate-900 via-slate-700 to-[#b0894f] shadow-[0_30px_100px_rgba(15,23,42,0.2)] sm:rounded-[3rem]">
    <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-sm">
          Özel Kampanya
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          Havalimanı transferlerinde
          <span className="block text-[#f7d79a]">%20’ye varan avantaj</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          Belirli güzergahlarda sınırlı süreli VIP transfer fırsatı.
          Hemen teklif alın, size özel fiyat oluşturalım.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/12 p-5 backdrop-blur-xl">
          <p className="text-3xl font-black text-white">VIP</p>
          <p className="mt-2 text-sm text-white/75">
            Premium araçlarla konforlu transfer
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/12 p-5 backdrop-blur-xl">
          <p className="text-3xl font-black text-white">7/24</p>
          <p className="mt-2 text-sm text-white/75">
            Günün her saati rezervasyon
          </p>
        </div>

        <a
          href={`https://wa.me/${phone}?text=Merhaba,%20kampanyal%C4%B1%20VIP%20transfer%20fiyat%C4%B1%20almak%20istiyorum.`}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-black text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 sm:text-base"
        >
          Kampanyadan Yararlan
        </a>

        <a
          href={`tel:+${phone}`}
          className="flex min-h-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:text-base"
        >
          Hemen Ara
        </a>
      </div>
    </div>
  </div>
</motion.section>
      <motion.section
        variants={softReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="bg-white px-4 py-16 text-slate-950 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
              Nasıl Çalışır?
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Hangi hizmet olursa olsun süreç sade ve hızlı.
            </h2>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={step.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-black sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={softReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_25px_90px_rgba(15,23,42,0.1)] transition duration-500 hover:shadow-[0_35px_110px_rgba(15,23,42,0.14)] sm:rounded-[3rem]">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-3 lg:p-14">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
                Rezervasyon
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                Hangi hizmete ihtiyacınız varsa, rotayı birlikte planlayalım.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                VIP transfer, engelsiz araç, düğün, misafir transferi, kurumsal
                taşıma veya organizasyon desteği için bize ulaşın.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${gradientIcon}`}
                  >
                    <QrCode size={26} />
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      QR ile hızlı erişim
                    </p>
                    <p className="text-xs leading-5 text-slate-500">
                      QR kodu okutarak iletişim veya rezervasyon sayfasına
                      hızlıca ulaşabilirsiniz.
                    </p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl bg-white p-3">
                  <img
                    src="/qr-kod.png"
                    alt="Sezen Turizm QR Kod"
                    loading="lazy"
                    className="mx-auto h-36 w-36 object-contain"
                  />
                </div>
              </div>

              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20transfer%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AHizmet%20t%C3%BCr%C3%BC:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20yer:%0ATarih%20/%20Saat:%0AEngelli%20ara%C3%A7%20ihtiyac%C4%B1:%20`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-7 sm:text-base"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Rezervasyon
              </a>

              <a
                href={`tel:+${phone}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/85 px-5 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-slate-300/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#b0894f]/60 hover:bg-[#f8f5ef] hover:text-slate-950 hover:shadow-xl sm:px-7 sm:text-base"
              >
                <Phone size={20} />
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-slate-200 bg-white px-4 pb-24 pt-10 sm:px-6 sm:pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-slate-600 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-950">
              Sezen / Mir Turizm
            </h3>
            <p className="mt-3 leading-7">
              VIP transfer, engelsiz araç, düğün, misafir transferi, kurumsal
              taşıma ve özel organizasyon ulaşım hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-950">Hizmetler</h4>
            <p>VIP Transfer</p>
            <p>Engelsiz Araç Hizmeti</p>
            <p>Düğün ve Gelin Arabası</p>
            <p>Kurumsal Transfer</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-950">İletişim</h4>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> İstanbul / Türkiye
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Phone size={16} /> +90 XXX XXX XX XX
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-3 left-3 right-3 z-50 grid grid-cols-2 gap-2 sm:bottom-5 sm:left-auto sm:right-5 sm:flex sm:w-auto">
        <a
          href={`tel:+${phone}`}
          className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-2xl transition duration-300 hover:-translate-y-1 sm:hidden"
        >
          <Phone size={18} />
          Ara
        </a>

        <a
          href={`https://wa.me/${phone}?text=Merhaba,%20transfer%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-2xl transition duration-300 hover:-translate-y-1 sm:px-5 sm:py-4"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}