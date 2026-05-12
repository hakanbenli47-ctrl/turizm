"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Camera,
  Car,
  CheckCircle2,
  Crown,
  Gem,
  Heart,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
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

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
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

const services = [
  {
    icon: Crown,
    title: "Gelin Arabası Hazırlığı",
    desc: "Özel gününüzün ruhuna uygun, şık ve özenli gelin arabası planlaması yapılır.",
  },
  {
    icon: Users,
    title: "Aile Transferi",
    desc: "Aile büyükleri ve yakın misafirleriniz için konforlu ulaşım düzeni sağlanır.",
  },
  {
    icon: HeartHandshake,
    title: "Davetli Ulaşımı",
    desc: "Düğün salonu, otel, kuaför ve çekim alanları arasında planlı transfer desteği verilir.",
  },
  {
    icon: Camera,
    title: "Fotoğraf Çekimi Rotası",
    desc: "Dış çekim, kuaför, ev ve düğün mekanı arasındaki zamanlama dikkatle planlanır.",
  },
];

const advantages = [
  "Düğün günü akışına uygun araç ve rota planlaması",
  "Gelin arabası, aile ve davetli transferi için tek merkezden çözüm",
  "Kuaför, ev, fotoğraf çekimi, salon ve otel arası ulaşım desteği",
  "Zamanlama hassasiyetiyle sakin ve düzenli süreç yönetimi",
  "Şık, konforlu ve özel güne yakışan araç deneyimi",
  "WhatsApp üzerinden hızlı bilgi ve rezervasyon desteği",
];

const steps = [
  {
    icon: MessageCircle,
    title: "Bilgileri Paylaşın",
    desc: "Tarih, saat, alınacak nokta, düğün mekanı ve ihtiyaç duyulan araç bilgisini gönderin.",
  },
  {
    icon: CalendarCheck,
    title: "Plan Oluşturulsun",
    desc: "Gelin arabası, aile transferi ve davetli ulaşımı için en uygun plan hazırlansın.",
  },
  {
    icon: Heart,
    title: "Gününüz Rahat Geçsin",
    desc: "Belirlenen saatlerde ulaşım düzenli şekilde sağlansın, siz sadece özel anınıza odaklanın.",
  },
];

export default function DugunGelinArabasiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff1f6] text-[#4a1026]">
      <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(190,24,93,0.24),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_92%,rgba(244,114,182,0.28),transparent_36%),linear-gradient(135deg,#fff1f6_0%,#ffe4ef_42%,#f8d7ff_100%)]" />
        <div className="absolute left-[-130px] top-16 h-80 w-80 rounded-full bg-pink-400/35 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-purple-400/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-rose-50/80 px-4 py-2 text-sm font-black text-rose-700 shadow-lg shadow-pink-200/30 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-pink-100"
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-rose-50/75 px-4 py-2 shadow-md shadow-pink-200/30 backdrop-blur-xl">
                <Sparkles size={16} className="text-rose-600" />
                <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-purple-600 bg-clip-text text-xs font-black uppercase tracking-[0.24em] text-transparent">
                  Düğün & Gelin Arabası
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-rose-800 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                  En özel gününüz
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-rose-600 to-[#b88746] bg-clip-text text-transparent">
                  zarafetle başlasın.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-rose-900/75 sm:text-lg">
                Düğün, nişan ve özel davetleriniz için gelin arabası, aile
                transferi ve davetli ulaşımı tek plan altında hazırlanır.
                Saat, rota ve araç seçimi özel gününüzün akışına göre dikkatle
                düzenlenir.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Gelin Arabası", "Aile Transferi", "Davetli Ulaşımı"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-rose-200 via-pink-100 to-purple-100 px-4 py-2 text-sm font-black text-rose-800 shadow-md shadow-pink-200/40"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20d%C3%BC%C4%9F%C3%BCn%20ve%20gelin%20arabas%C4%B1%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0ATarih:%0ASaat:%0AAl%C4%B1nacak%20yer:%0AD%C3%BC%C4%9F%C3%BCn%20mekan%C4%B1:`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-800 via-pink-600 to-purple-600 px-6 py-4 text-sm font-black !text-rose-50 shadow-2xl shadow-pink-400/35 transition hover:-translate-y-1 hover:brightness-110"
                >
                  Düğün Planı Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-pink-50/80 px-6 py-4 text-sm font-black text-rose-800 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-rose-100"
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
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-pink-100 bg-rose-50/65 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[390px] overflow-hidden rounded-[1.7rem] sm:h-[560px]">
                  <img
                    src="/vip11.jpg"
                    alt="Düğün ve gelin arabası hizmeti"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/75 via-pink-900/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-pink-100/30 bg-rose-50/20 p-5 text-rose-50 shadow-2xl backdrop-blur-xl">
                    <p className="text-lg font-black text-pink-50">
                      Gelin arabası, aile transferi ve davetli ulaşımı.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-pink-100">
                      Özel gününüzde ulaşım detayları sakin, düzenli ve şık
                      şekilde planlanır.
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-rose-600 sm:text-sm">
              Hizmet Detayları
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-rose-950 sm:text-5xl">
              Düğün günü ulaşımı şansa bırakılmaz.
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-rose-900/70">
              Özel günlerde en büyük ihtiyaç; zamanında, temiz, düzenli ve
              güven veren bir ulaşım planıdır. Bu hizmet tam olarak bu süreci
              rahatlatmak için hazırlanır.
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
                  className="rounded-[2rem] border border-pink-200 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 p-6 shadow-lg shadow-pink-200/30 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-800 via-pink-600 to-purple-600 text-pink-50 shadow-lg shadow-pink-300/50">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-rose-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-7 text-rose-900/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-rose-800 via-pink-600 to-purple-700 p-[2px] shadow-2xl shadow-pink-300/40">
          <div className="rounded-[2.4rem] bg-[#fff1f6]/95 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
                  Planlı ve Zarif Ulaşım
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-rose-950 sm:text-5xl">
                  Kuaförden çekime, salondan otele kadar tüm rota netleşir.
                </h2>

                <p className="mt-5 text-base font-semibold leading-8 text-rose-900/70">
                  Gelin alma, kuaför çıkışı, fotoğraf çekimi, düğün salonu,
                  otel ve aile transferleri için saatler ve güzergahlar önceden
                  belirlenir. Böylece düğün günü ulaşım tarafında acele,
                  karışıklık ve belirsizlik yaşanmaz.
                </p>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-rose-200 via-pink-100 to-purple-100 p-5 shadow-xl shadow-pink-200/40">
                <div className="grid gap-3">
                  {advantages.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-pink-200 bg-rose-50/80 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-rose-700"
                      />
                      <p className="text-sm font-bold leading-6 text-rose-900/75">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-rose-600 sm:text-sm">
              Süreç
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-rose-950 sm:text-5xl">
              Her detay önceden konuşulur, gün içinde akış rahat ilerler.
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
                  className="relative overflow-hidden rounded-[2rem] border border-pink-200 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 p-6 shadow-lg shadow-pink-200/35"
                >
                  <div className="absolute right-5 top-5 text-6xl font-black text-rose-300/30">
                    0{index + 1}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-800 via-pink-600 to-[#b88746] text-pink-50 shadow-lg">
                    <Icon size={27} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-black text-rose-950 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="relative mt-3 text-sm font-semibold leading-7 text-rose-900/70">
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
          {["/vip-3.jpg", "/vip-4.jpg", "/vip10.jpg"].map((img, index) => (
            <div
              key={img}
              className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-300 via-pink-200 to-purple-300 p-2 shadow-xl shadow-pink-200/40 ${
                index === 1 ? "md:mt-10" : ""
              }`}
            >
              <img
                src={img}
                alt="Düğün transfer hizmeti"
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-900 via-pink-700 to-purple-800 p-7 shadow-2xl shadow-pink-400/40 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-pink-100/20 text-pink-50 backdrop-blur-xl">
                <Star size={34} />
              </div>

              <h2 className="text-3xl font-black leading-tight text-pink-50 sm:text-5xl">
                Düğün günü ulaşım detaylarını birlikte planlayalım.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-pink-100">
                Tarih, saat, alınacak yer ve düğün mekanını paylaşın. Size özel
                gelin arabası ve transfer planını oluşturalım.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20d%C3%BC%C4%9F%C3%BCn%20ve%20gelin%20arabas%C4%B1%20hizmeti%20i%C3%A7in%20rezervasyon%20bilgisi%20almak%20istiyorum.%0ATarih:%0ASaat:%0AAl%C4%B1nacak%20yer:%0AD%C3%BC%C4%9F%C3%BCn%20mekan%C4%B1:`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-100 via-rose-100 to-purple-100 px-5 py-4 text-sm font-black !text-rose-900 shadow-xl transition hover:-translate-y-1 hover:brightness-105"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Plan Al
              </a>

              <a
                href={`tel:+${phone}`}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-pink-100/35 bg-pink-50/15 px-5 py-4 text-sm font-black text-pink-50 backdrop-blur-xl transition hover:-translate-y-1"
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