"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  Hotel,
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
  hidden: { opacity: 0, y: 28 },
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
    transition: { duration: 0.55, ease: motionEase },
  },
};

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const services = [
  {
    icon: Users,
    title: "Davetli Karşılama",
    desc: "Misafirleriniz belirlenen noktadan alınır ve organizasyon alanına düzenli şekilde ulaştırılır.",
  },
  {
    icon: Hotel,
    title: "Otel & Mekan Transferi",
    desc: "Otel, düğün salonu, davet alanı ve özel mekanlar arasında planlı ulaşım sağlanır.",
  },
  {
    icon: Route,
    title: "Toplu Transfer Planı",
    desc: "Misafir sayısı, güzergah ve saat bilgisine göre uygun araç ve rota planlaması yapılır.",
  },
  {
    icon: Clock,
    title: "Etkinlik Çıkış Transferi",
    desc: "Organizasyon bitiminde misafirlerin dönüş ulaşımı güvenli ve kontrollü şekilde organize edilir.",
  },
];

const advantages = [
  "Misafir yoğunluğuna göre araç planlaması",
  "Otel, mekan, ev ve buluşma noktası bağlantılı transfer",
  "Davet başlangıç ve bitiş saatine uygun zamanlama",
  "Kalabalık organizasyonlarda düzenli yönlendirme",
  "Misafirlerin beklemeden, konforlu şekilde ulaşması",
  "WhatsApp üzerinden hızlı planlama ve teklif desteği",
];

const steps = [
  {
    icon: MessageCircle,
    title: "Misafir Bilgisini Paylaşın",
    desc: "Kişi sayısı, alınacak nokta, mekan ve saat bilgisini gönderin.",
  },
  {
    icon: CalendarCheck,
    title: "Transfer Planı Hazırlansın",
    desc: "Araç sayısı, güzergah ve hareket saatleri organizasyon akışına göre düzenlensin.",
  },
  {
    icon: Car,
    title: "Misafirleriniz Rahat Ulaşsın",
    desc: "Davetlileriniz zamanında, güvenli ve konforlu şekilde organizasyon alanına ulaşsın.",
  },
];

export default function MisafirDavetliTransferiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eef2ff] text-[#14112d]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(79,70,229,0.26),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(236,72,153,0.24),transparent_30%),radial-gradient(circle_at_50%_92%,rgba(14,165,233,0.24),transparent_36%),linear-gradient(135deg,#eef2ff_0%,#ede9fe_44%,#dff7ff_100%)]" />
        <div className="absolute left-[-130px] top-16 h-80 w-80 rounded-full bg-indigo-400/35 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-fuchsia-400/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-sm font-black text-indigo-700 shadow-lg shadow-indigo-200/30 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-indigo-100"
          >
            <ArrowLeft size={17} />
            Anasayfaya Dön
          </a>

          <div className="grid items-center gap-9 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div
              variants={softReveal}
              initial="hidden"
              animate="show"
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/75 px-4 py-2 shadow-md shadow-indigo-200/30 backdrop-blur-xl">
                <Sparkles size={16} className="text-fuchsia-600" />
                <span className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-sky-600 bg-clip-text text-xs font-black uppercase tracking-[0.24em] text-transparent">
                  Misafir & Davetli Transferi
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-indigo-800 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Misafirleriniz
                </span>
                <span className="block bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                  özenle karşılansın.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-indigo-950/75 sm:text-lg">
                Düğün, davet, toplantı, gala ve özel organizasyonlarda
                misafirlerinizin ulaşımı planlı şekilde yönetilir. Alınacak
                noktalar, güzergahlar, saatler ve dönüş transferleri önceden
                belirlenerek düzenli bir akış oluşturulur.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Davetli Karşılama", "Toplu Transfer", "Etkinlik Çıkışı"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-indigo-200 via-violet-100 to-sky-100 px-4 py-2 text-sm font-black text-indigo-800 shadow-md shadow-indigo-200/40"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20misafir%20ve%20davetli%20transferi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AEtkinlik%20tarihi:%0AKi%C5%9Fi%20say%C4%B1s%C4%B1:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20mekan:`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-800 via-fuchsia-600 to-sky-600 px-6 py-4 text-sm font-black !text-indigo-50 shadow-2xl shadow-indigo-400/35 transition hover:-translate-y-1 hover:brightness-110"
                >
                  Transfer Planı Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50/80 px-6 py-4 text-sm font-black text-indigo-800 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-indigo-100"
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
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-sky-300 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-indigo-100 bg-indigo-50/65 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[390px] overflow-hidden rounded-[1.7rem] sm:h-[560px]">
                  <img
                    src="/vip-4.jpg"
                    alt="Misafir ve davetli transferi"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-violet-900/25 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-indigo-100/30 bg-indigo-50/20 p-5 text-indigo-50 shadow-2xl backdrop-blur-xl">
                    <p className="text-lg font-black text-sky-50">
                      Kalabalık organizasyonlarda düzenli ulaşım akışı.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-indigo-100">
                      Misafir karşılama, mekan transferi ve dönüş planı tek
                      merkezden yönetilir.
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-600 sm:text-sm">
              Hizmet Detayları
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-indigo-950 sm:text-5xl">
              Davetli ulaşımı, organizasyonun ilk izlenimini belirler.
            </h2>

            <p className="mt-4 text-base font-semibold leading-8 text-indigo-950/70">
              Misafirlerinizin organizasyon alanına rahat, zamanında ve güvenli
              şekilde ulaşması için araç, rota ve saat planı önceden hazırlanır.
            </p>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={item.title}
                  className="rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-100 via-violet-50 to-sky-100 p-6 shadow-lg shadow-indigo-200/30 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-fuchsia-600 to-sky-600 text-indigo-50 shadow-lg shadow-indigo-300/50">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-indigo-950">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-800 via-fuchsia-600 to-sky-600 p-[2px] shadow-2xl shadow-indigo-300/40">
          <div className="rounded-[2.4rem] bg-[#eef2ff]/95 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-fuchsia-600">
                  Organizasyon Akışı
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-indigo-950 sm:text-5xl">
                  Alınacak noktalar, saatler ve dönüş transferleri netleşir.
                </h2>

                <p className="mt-5 text-base font-semibold leading-8 text-indigo-950/70">
                  Misafir sayısı, etkinlik saati, buluşma noktaları ve mekan
                  bilgisi alınır. Buna göre araç tipi, güzergah ve hareket
                  saatleri belirlenir. Böylece davet günü karışıklık azalır,
                  misafirleriniz daha rahat yönlendirilir.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-indigo-200 via-violet-100 to-sky-100 p-5 shadow-xl shadow-indigo-200/40">
                <div className="grid gap-3">
                  {advantages.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-indigo-200 bg-indigo-50/80 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-indigo-700"
                      />
                      <p className="text-sm font-bold leading-6 text-indigo-950/75">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-600 sm:text-sm">
              Süreç
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-indigo-950 sm:text-5xl">
              Kalabalık davetlerde ulaşım adım adım yönetilir.
            </h2>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  variants={cardReveal}
                  key={step.title}
                  className="relative overflow-hidden rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-100 via-violet-50 to-sky-100 p-6 shadow-lg shadow-indigo-200/35"
                >
                  <div className="absolute right-5 top-5 text-6xl font-black text-indigo-300/30">
                    0{index + 1}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-fuchsia-600 to-sky-600 text-indigo-50 shadow-lg">
                    <Icon size={27} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-black text-indigo-950 sm:text-2xl">
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
          {["/vip-4.jpg", "/vip-5.jpg", "/vip-6.jpg"].map((img, index) => (
            <div
              key={img}
              className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-300 via-violet-200 to-sky-300 p-2 shadow-xl shadow-indigo-200/40 ${
                index === 1 ? "md:mt-10" : ""
              }`}
            >
              <img
                src={img}
                alt="Misafir davetli transfer hizmeti"
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-fuchsia-700 to-sky-700 p-7 shadow-2xl shadow-indigo-400/40 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-100/20 text-sky-50 backdrop-blur-xl">
                <Star size={34} />
              </div>

              <h2 className="text-3xl font-black leading-tight text-sky-50 sm:text-5xl">
                Misafirleriniz için düzenli bir transfer planı oluşturalım.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-indigo-100">
                Etkinlik tarihi, kişi sayısı, alınacak noktalar ve mekan
                bilgisini paylaşın. Size uygun davetli transfer planını
                hazırlayalım.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20misafir%20ve%20davetli%20transferi%20i%C3%A7in%20planlama%20yapt%C4%B1rmak%20istiyorum.%0AEtkinlik%20tarihi:%0AKi%C5%9Fi%20say%C4%B1s%C4%B1:%0AAl%C4%B1nacak%20yer:%0AGidilecek%20mekan:`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-100 via-indigo-100 to-fuchsia-100 px-5 py-4 text-sm font-black !text-indigo-900 shadow-xl transition hover:-translate-y-1 hover:brightness-105"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Plan Al
              </a>

              <a
                href={`tel:+${phone}`}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-sky-100/35 bg-sky-50/15 px-5 py-4 text-sm font-black text-sky-50 backdrop-blur-xl transition hover:-translate-y-1"
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