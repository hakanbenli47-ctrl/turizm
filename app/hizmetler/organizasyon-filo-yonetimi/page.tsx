"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bus,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Headphones,
  MapPinned,
  MessageCircle,
  Phone,
  Plane,
  RadioTower,
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
    icon: Bus,
    title: "Filo Planlama",
    desc: "Etkinlik büyüklüğüne göre araç sayısı, araç tipi ve güzergah planı hazırlanır.",
  },
  {
    icon: Users,
    title: "Misafir Yönlendirme",
    desc: "Katılımcıların alınacağı noktalar, hareket saatleri ve varış düzeni netleştirilir.",
  },
  {
    icon: RadioTower,
    title: "Saha Koordinasyonu",
    desc: "Organizasyon günü transfer akışı takip edilir, ihtiyaç halinde yönlendirme sağlanır.",
  },
  {
    icon: Plane,
    title: "VIP & Protokol Transferi",
    desc: "Özel konuklar, yöneticiler ve protokol misafirleri için ayrı transfer planı oluşturulur.",
  },
];

const avantajlar = [
  "Etkinlik ölçeğine göre çoklu araç planlaması",
  "Gala, lansman, fuar ve özel davet transfer koordinasyonu",
  "VIP konuk, ekip ve davetli transferlerinin ayrı ayrı planlanması",
  "Mekan, otel, havalimanı ve buluşma noktası bağlantılı güzergah",
  "Organizasyon başlangıç ve bitiş saatine göre dönüş transferi",
  "Tek merkezden planlama, iletişim ve operasyon takibi",
];

const surec = [
  {
    icon: MessageCircle,
    title: "Etkinlik Bilgisi Alınır",
    desc: "Tarih, mekan, kişi sayısı, araç ihtiyacı ve transfer noktaları netleştirilir.",
  },
  {
    icon: ClipboardCheck,
    title: "Filo Planı Oluşturulur",
    desc: "Araç sayısı, güzergah, hareket saatleri ve misafir grupları planlanır.",
  },
  {
    icon: RadioTower,
    title: "Operasyon Yönetilir",
    desc: "Etkinlik günü araç akışı, karşılama ve transfer süreci koordineli ilerler.",
  },
];

const kullanimAlanlari = [
  "Gala ve lansman transferi",
  "Fuar ve kongre ulaşımı",
  "Düğün ve davet organizasyonu",
  "Otel ve mekan bağlantılı transfer",
  "VIP protokol ulaşımı",
  "Çoklu araç koordinasyonu",
  "Etkinlik çıkış transferi",
  "Havalimanı karşılama",
];

export default function OrganizasyonFiloYonetimiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f1f4ff] text-[#17113d]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(124,58,237,0.25),transparent_32%),radial-gradient(circle_at_92%_10%,rgba(6,182,212,0.22),transparent_30%),radial-gradient(circle_at_50%_94%,rgba(34,197,94,0.16),transparent_34%),linear-gradient(135deg,#f1f4ff_0%,#e9ddff_42%,#dcf8ff_100%)]" />
        <div className="absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-130px] h-[440px] w-[440px] rounded-full bg-cyan-400/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-2 text-sm font-black text-violet-800 shadow-lg shadow-violet-200/40 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-violet-100"
          >
            <ArrowLeft size={17} />
            Anasayfaya Dön
          </a>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={softReveal} initial="hidden" animate="show">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-2 shadow-md shadow-violet-200/30 backdrop-blur-xl">
                <Sparkles size={16} className="text-violet-700" />
                <span className="bg-gradient-to-r from-violet-800 via-cyan-700 to-emerald-500 bg-clip-text text-xs font-black uppercase tracking-[0.24em] text-transparent">
                  Organizasyon & Filo Yönetimi
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">
                  Büyük etkinliklere
                </span>
                <span className="block bg-gradient-to-r from-cyan-600 via-violet-700 to-emerald-500 bg-clip-text text-transparent">
                  kusursuz ulaşım akışı.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-indigo-950/75 sm:text-lg">
                Gala, lansman, fuar, düğün, davet ve özel organizasyonlarda
                araç planlama, misafir yönlendirme, VIP transfer ve filo
                koordinasyonu tek merkezden yönetilir. Etkinlik günü ulaşım
                tarafında karışıklık oluşmadan düzenli bir akış hazırlanır.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {["Filo Planlama", "Saha Koordinasyonu", "VIP Protokol", "Davetli Transferi"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-violet-100 via-cyan-100 to-emerald-100 px-4 py-2 text-center text-sm font-black text-violet-900 shadow-md shadow-violet-200/40"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20organizasyon%20ve%20filo%20y%C3%B6netimi%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AEtkinlik%20tarihi:%0AKi%C5%9Fi%20say%C4%B1s%C4%B1:%0AAra%C3%A7%20ihtiyac%C4%B1:%0AAl%C4%B1nacak%20noktalar:%0AEtkinlik%20mekan%C4%B1:`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-900 via-cyan-700 to-emerald-500 px-6 py-4 text-sm font-black !text-white shadow-2xl shadow-violet-400/35 transition hover:-translate-y-1 hover:brightness-110"
                >
                  Filo Planı Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-violet-200 bg-violet-50/80 px-6 py-4 text-sm font-black text-violet-900 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-violet-100"
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
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-200 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-violet-100 bg-violet-50/60 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] sm:h-[600px]">
                  <img
                    src="/vip-6.jpg"
                    alt="Organizasyon ve filo yönetimi"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950/85 via-indigo-900/25 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-3xl border border-cyan-100/30 bg-cyan-50/15 px-5 py-4 text-cyan-50 shadow-xl backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.2em]">
                      Event Fleet Control
                    </p>
                    <p className="mt-1 text-xs font-semibold text-cyan-100">
                      Araç • Rota • Misafir • Operasyon
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-violet-100/30 bg-violet-50/15 p-5 text-violet-50 shadow-2xl backdrop-blur-xl">
                    <p className="text-lg font-black">
                      Organizasyon günü araçlar, rotalar ve misafir akışı planlı ilerler.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-violet-100">
                      Çoklu araç, farklı lokasyon ve yoğun misafir akışı için
                      koordineli filo yönetimi sunulur.
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 sm:text-sm">
              Operasyon Kapsamı
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-violet-950 sm:text-5xl">
              Etkinlik ulaşımı yalnızca araç göndermek değildir.
            </h2>

            <p className="mt-4 text-base font-semibold leading-8 text-indigo-950/70">
              Doğru araç sayısı, doğru güzergah, doğru hareket saati ve doğru
              yönlendirme gerekir. Organizasyon & filo yönetimi hizmeti,
              etkinlik günü ulaşım yükünü üzerinizden alacak şekilde planlanır.
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
                  className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-100 via-cyan-50 to-emerald-100 p-6 shadow-lg shadow-violet-200/30 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-900 via-cyan-700 to-emerald-500 text-white shadow-lg shadow-violet-300/50">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-violet-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-indigo-950/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-violet-900 via-cyan-700 to-emerald-500 p-[2px] shadow-2xl shadow-violet-300/40">
          <div className="rounded-[2.4rem] bg-[#f1f4ff]/95 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-700">
                  Filo Koordinasyonu
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-violet-950 sm:text-5xl">
                  Araç sayısı, güzergah ve hareket saatleri önceden netleşir.
                </h2>

                <p className="mt-5 text-base font-semibold leading-8 text-indigo-950/70">
                  Etkinlik alanı, otel, havalimanı, buluşma noktaları ve dönüş
                  güzergahları dikkate alınarak filo planı hazırlanır. Her
                  misafir grubunun doğru zamanda doğru noktaya ulaşması için
                  operasyon akışı organize edilir.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-violet-200 via-cyan-100 to-emerald-100 p-5 shadow-xl shadow-violet-200/40">
                <div className="grid gap-3">
                  {avantajlar.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50/80 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-violet-800"
                      />
                      <p className="text-sm font-bold leading-6 text-violet-950/80">
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

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
              Kullanım Alanları
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-violet-950 sm:text-5xl">
              Kalabalık ve prestijli etkinliklerde ulaşım akışı güçlenir.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kullanimAlanlari.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-100 via-violet-50 to-emerald-100 p-4 text-sm font-black text-violet-950 shadow-md shadow-cyan-200/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-900 via-cyan-700 to-emerald-500 text-white">
                  <BadgeCheck size={20} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 sm:text-sm">
              Süreç
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-violet-950 sm:text-5xl">
              Etkinlik günü karmaşası başlamadan operasyon planı hazır olur.
            </h2>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {surec.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={step.title}
                  className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-100 via-cyan-50 to-emerald-100 p-6 shadow-lg shadow-violet-200/35"
                >
                  <div className="absolute right-5 top-5 text-6xl font-black text-violet-300/30">
                    0{index + 1}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-900 via-cyan-700 to-emerald-500 text-white shadow-lg">
                    <Icon size={27} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-black text-violet-950 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 text-sm font-semibold leading-7 text-indigo-950/70">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {["/vip-6.jpg", "/vip-5.jpg", "/vip-4.jpg"].map((img, index) => (
            <div
              key={img}
              className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-300 via-cyan-200 to-emerald-300 p-2 shadow-xl shadow-violet-200/40 ${
                index === 1 ? "md:mt-10" : ""
              }`}
            >
              <img
                src={img}
                alt="Organizasyon ve filo yönetimi"
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-950 via-cyan-800 to-emerald-700 p-7 shadow-2xl shadow-violet-400/40 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-100/20 text-cyan-50 backdrop-blur-xl">
                <Star size={34} />
              </div>

              <h2 className="text-3xl font-black leading-tight text-cyan-50 sm:text-5xl">
                Organizasyonunuz için güçlü bir filo planı oluşturalım.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-violet-100">
                Etkinlik tarihi, kişi sayısı, araç ihtiyacı ve alınacak
                noktaları paylaşın. Size özel organizasyon ve filo yönetimi
                planını hazırlayalım.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20organizasyon%20ve%20filo%20y%C3%B6netimi%20i%C3%A7in%20planlama%20yapt%C4%B1rmak%20istiyorum.%0AEtkinlik%20tarihi:%0AKi%C5%9Fi%20say%C4%B1s%C4%B1:%0AAra%C3%A7%20ihtiyac%C4%B1:%0AAl%C4%B1nacak%20noktalar:%0AEtkinlik%20mekan%C4%B1:`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-100 via-violet-100 to-emerald-100 px-5 py-4 text-sm font-black !text-violet-950 shadow-xl transition hover:-translate-y-1 hover:brightness-105"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Filo Planı Al
              </a>

              <a
                href={`tel:+${phone}`}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-100/35 bg-cyan-50/15 px-5 py-4 text-sm font-black text-cyan-50 backdrop-blur-xl transition hover:-translate-y-1"
              >
                <Phone size={20} />
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}