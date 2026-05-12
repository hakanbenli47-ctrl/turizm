"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Crown,
  FileCheck2,
  Gem,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const phone = "905533545018";

const motionEase = [0.25, 0.1, 0.25, 1] as const;

const softReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const hizmetler = [
  {
    icon: Crown,
    title: "Yönetici Transferi",
    desc: "Şirket yöneticileri, özel misafirler ve VIP konuklar için prestijli, sessiz ve konforlu ulaşım.",
  },
  {
    icon: Building2,
    title: "Kurumsal Misafir Transferi",
    desc: "İş ortakları, müşteriler, yatırımcılar ve şirket ziyaretçileri için profesyonel karşılama.",
  },
  {
    icon: Users,
    title: "Personel Transfer Planı",
    desc: "Belirli güzergahlarda düzenli, kontrollü ve saat hassasiyeti yüksek ulaşım çözümü.",
  },
  {
    icon: Briefcase,
    title: "Fuar & Toplantı Transferi",
    desc: "Fuar, seminer, lansman ve toplantı günlerinde şirket akışına uygun araç organizasyonu.",
  },
];

const kurumsalAvantajlar = [
  "Şirket imajına uygun prestijli araç seçimi",
  "Toplantı, uçuş ve etkinlik saatine göre rota planlaması",
  "Yönetici, misafir ve personel için ayrı transfer kurgusu",
  "Tek seferlik veya düzenli kurumsal ulaşım desteği",
  "WhatsApp üzerinden hızlı planlama ve operasyon takibi",
  "İhtiyaca göre çoklu araç ve filo koordinasyonu",
];

const operasyonKartlari = [
  {
    icon: ClipboardCheck,
    title: "Planlama",
    desc: "Tarih, saat, kişi sayısı, alınacak nokta ve varış adresi netleştirilir.",
  },
  {
    icon: Route,
    title: "Rota Yönetimi",
    desc: "Güzergah, trafik yoğunluğu ve zaman hassasiyeti dikkate alınarak plan yapılır.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Ulaşım",
    desc: "Konfor, gizlilik ve güvenli sürüş prensibiyle transfer süreci tamamlanır.",
  },
  {
    icon: FileCheck2,
    title: "Kurumsal Takip",
    desc: "Transfer akışı düzenli şekilde takip edilir ve süreç kontrollü ilerler.",
  },
];

const surec = [
  {
    icon: MessageCircle,
    title: "Kurumsal Talep Alınır",
    desc: "Transfer türü, kişi sayısı, tarih, saat, güzergah ve özel ihtiyaçlar paylaşılır.",
  },
  {
    icon: CalendarCheck,
    title: "Operasyon Planı Hazırlanır",
    desc: "Araç tipi, rota, sürücü planı ve transfer saati şirket akışına göre netleştirilir.",
  },
  {
    icon: Car,
    title: "Transfer Başlar",
    desc: "Belirlenen saatte karşılama yapılır ve ulaşım profesyonel şekilde tamamlanır.",
  },
];

const kullanimAlanlari = [
  "Yönetici toplantıları",
  "Havalimanı karşılama",
  "Şirket misafirleri",
  "Fuar ve kongre ulaşımı",
  "Personel transferi",
  "Otel ve ofis arası ulaşım",
  "Lansman ve davet transferi",
  "Çoklu araç organizasyonu",
];

export default function KurumsalTransferPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ecf8fb] text-[#082f49]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(8,145,178,0.24),transparent_32%),radial-gradient(circle_at_92%_10%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_50%_92%,rgba(245,158,11,0.16),transparent_34%),linear-gradient(135deg,#ecf8fb_0%,#dff6ff_42%,#e0f2fe_100%)]" />
        <div className="absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-130px] h-[440px] w-[440px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 text-sm font-black text-cyan-900 shadow-lg shadow-cyan-200/40 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            <ArrowLeft size={17} />
            Anasayfaya Dön
          </a>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={softReveal} initial="hidden" animate="show">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 shadow-md shadow-cyan-200/30 backdrop-blur-xl">
                <Sparkles size={16} className="text-cyan-700" />
                <span className="bg-gradient-to-r from-cyan-900 via-blue-700 to-amber-500 bg-clip-text text-xs font-black uppercase tracking-[0.24em] text-transparent">
                  Kurumsal Transfer Çözümleri
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-cyan-950 via-blue-800 to-sky-600 bg-clip-text text-transparent">
                  Şirket imajına
                </span>
                <span className="block bg-gradient-to-r from-blue-700 via-cyan-700 to-amber-500 bg-clip-text text-transparent">
                  yakışan ulaşım.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-slate-700 sm:text-lg">
                Yönetici transferi, şirket misafiri karşılama, toplantı,
                fuar, otel, havalimanı ve personel ulaşımı için kurumsal
                standartlara uygun, planlı ve güven veren transfer hizmeti
                sunuyoruz.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {["Dakik Planlama", "Kurumsal İmaj", "VIP Araç", "Filo Desteği"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-cyan-100 via-blue-100 to-amber-100 px-4 py-2 text-center text-sm font-black text-cyan-950 shadow-md shadow-cyan-200/40"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20kurumsal%20transfer%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0A%C5%9Eirket%20ad%C4%B1:%0AHizmet%20t%C3%BCr%C3%BC:%0AKi%C5%9Fi%20say%C4%B1s%C4%B1:%0ATarih%20/%20Saat:%0AG%C3%BCzergah:`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-900 via-blue-700 to-amber-500 px-6 py-4 text-sm font-black !text-white shadow-2xl shadow-cyan-400/35 transition hover:-translate-y-1 hover:brightness-110"
                >
                  Kurumsal Plan Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-200 bg-cyan-50/80 px-6 py-4 text-sm font-black text-cyan-950 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-cyan-100"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={softReveal}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-cyan-300 via-blue-300 to-amber-200 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-100 bg-cyan-50/60 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] sm:h-[600px]">
                  <img
                    src="/vip-5.jpg"
                    alt="Kurumsal transfer hizmeti"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/85 via-blue-900/25 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-3xl border border-cyan-100/30 bg-cyan-50/15 px-5 py-4 text-cyan-50 shadow-xl backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em]">
                      Business Class Transfer
                    </p>
                    <p className="mt-1 text-xs font-semibold text-cyan-100">
                      Yönetici • Misafir • Personel • Filo
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-cyan-100/30 bg-cyan-50/15 p-5 text-cyan-50 shadow-2xl backdrop-blur-xl">
                    <p className="text-lg font-black">
                      Kurumsal programınıza uygun araç, rota ve zaman yönetimi.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-cyan-100">
                      Toplantı, uçuş, fuar ve şirket davetlerinde ulaşım süreci
                      profesyonel şekilde planlanır.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
              Kurumsal Hizmet Kapsamı
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-cyan-950 sm:text-5xl">
              Şirketinizin her ulaşım ihtiyacına ayrı plan.
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-slate-700">
              Kurumsal transfer yalnızca araç göndermek değildir. Karşılama,
              zamanlama, rota, gizlilik, konfor ve şirket imajı birlikte
              düşünülerek profesyonel bir ulaşım akışı oluşturulur.
            </p>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {hizmetler.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={item.title}
                  className="rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 p-6 shadow-lg shadow-cyan-200/30 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-900 via-blue-700 to-amber-500 text-white shadow-lg shadow-cyan-300/50">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-cyan-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-cyan-900 via-blue-700 to-amber-500 p-[2px] shadow-2xl shadow-cyan-300/40">
          <div className="rounded-[2.4rem] bg-[#ecf8fb]/95 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                  Operasyon Disiplini
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-cyan-950 sm:text-5xl">
                  Transfer süreci şirket takviminize göre yönetilir.
                </h2>

                <p className="mt-5 text-base font-semibold leading-8 text-slate-700">
                  Yönetici toplantısı, uçuş saati, fuar başlangıcı veya personel
                  vardiyası fark etmeksizin; alınacak nokta, varış noktası,
                  bekleme süresi ve dönüş planı önceden netleştirilir.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-200 via-sky-100 to-blue-100 p-5 shadow-xl shadow-cyan-200/40">
                <div className="grid gap-3">
                  {kurumsalAvantajlar.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-cyan-200 bg-cyan-50/80 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-800"
                      />
                      <p className="text-sm font-bold leading-6 text-cyan-950/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}