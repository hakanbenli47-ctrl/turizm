"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Home,
  Hospital,
  MessageCircle,
  Phone,
  Plane,
  Sparkles,
} from "lucide-react";

const phone = "905533545018";

const hizmetler = [
  {
    icon: Hospital,
    title: "Hastane Ulaşımı",
    desc: "Randevu, kontrol ve tedavi süreçlerinde güvenli, konforlu ve ücretsiz ulaşım desteği sağlanır.",
    color: "from-rose-400 via-orange-400 to-amber-300",
  },
  {
    icon: Home,
    title: "Evden Alım",
    desc: "Kapınızdan alınır, gideceğiniz noktaya rahat, güvenli ve ücretsiz şekilde ulaştırılırsınız.",
    color: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    icon: Plane,
    title: "Havalimanı Transferi",
    desc: "Uçuş öncesi ve sonrası erişilebilir araç desteğiyle yolculuk süreci kolaylaştırılır.",
    color: "from-cyan-400 via-blue-400 to-indigo-400",
  },
  {
    icon: CalendarCheck,
    title: "Sosyal Yaşam & Özel Günler",
    desc: "Ziyaret, davet, etkinlik ve özel günlerde özgürce hareket edebilmeniz için ücretsiz destek sunulur.",
    color: "from-fuchsia-400 via-purple-400 to-pink-400",
  },
];

const guvenlik = [
  "Özel gereksinimli bireyler için ücretsiz erişilebilir ulaşım",
  "Asansörlü ve erişilebilir araç kullanımı",
  "Güvenli sabitleme sistemi",
  "Kapıdan alım ve güvenli bırakma desteği",
  "Saygılı, sabırlı ve destekleyici ekip yaklaşımı",
  "Hastane, ev, otel, havalimanı ve şehir içi ulaşım desteği",
];

export default function EngelsizUlasimPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fdff] text-slate-900">
      <section className="relative px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.32),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(217,70,239,0.25),transparent_31%),radial-gradient(circle_at_50%_88%,rgba(251,191,36,0.28),transparent_34%)]" />
        <div className="absolute left-[-120px] top-20 h-72 w-72 animate-[glowPulse_5s_ease-in-out_infinite] rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-130px] h-80 w-80 animate-[glowPulse_6s_ease-in-out_infinite] rounded-full bg-fuchsia-300/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/75 px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
          >
            <ArrowLeft size={17} />
            Anasayfaya Dön
          </a>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <Sparkles size={16} className="text-teal-500" />
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 bg-[length:220%_100%] bg-clip-text text-xs font-black uppercase tracking-[0.22em] text-transparent animate-[textFlow_5s_linear_infinite]">
                  Engelsiz Ulaşım
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_5s_linear_infinite]">
                  Özgürlüğe Giden Her Yol
                </span>
                <span className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_6s_linear_infinite]">
                  Bizimle Daha Kolay.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 sm:text-lg">
                <span className="bg-gradient-to-r from-cyan-700 via-purple-700 to-amber-600 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_7s_linear_infinite]">
                  Erişilebilir ulaşım desteği, hayatın her alanına daha rahat
                  ulaşabilmeniz için ücretsiz sunulur. Amacımız yalnızca bir
                  yere götürmek değil; kendinizi rahat, değerli ve özgür
                  hissettiren güvenli bir yolculuk deneyimi sağlamaktır.
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Ücretsiz Hizmet", "Asansörlü Araç", "Güvenli Sabitleme"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-cyan-100 via-purple-100 to-amber-100 px-4 py-2 text-sm font-black text-slate-700 shadow-md"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20engelsiz%20ula%C5%9F%C4%B1m%20%C3%BCcretsiz%20hizmetinden%20yararlanmak%20istiyorum.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-cyan-300/40 transition hover:-translate-y-1"
                >
                  Ücretsiz Destek Al
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-cyan-200 bg-white/80 px-6 py-4 text-sm font-black text-cyan-700 shadow-lg backdrop-blur-xl transition hover:-translate-y-1"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[390px] overflow-hidden rounded-[1.7rem] sm:h-[560px]">
                  <img
                    src="/vip-1.jpg"
                    alt="Engelsiz ulaşım hizmeti"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/70 via-purple-900/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/25 bg-white/20 p-5 text-white shadow-2xl backdrop-blur-xl">
                    <p className="bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-[length:220%_100%] bg-clip-text text-base font-black text-transparent animate-[textFlow_5s_linear_infinite]">
                      Daha rahat, daha özgür, daha erişilebilir.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/90">
                      Ücretsiz, güvenli, saygılı ve konforlu ulaşım desteği.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-100 via-cyan-100 to-fuchsia-100 p-6 shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/35 blur-3xl" />

            <div className="relative">
              <HeartHandshake size={42} className="text-teal-600" />

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_6s_linear_infinite]">
                  Bu hizmet ücretsiz sunulur.
                </span>
              </h2>

              <p className="mt-5 text-base font-semibold leading-8">
                <span className="bg-gradient-to-r from-sky-700 via-purple-700 to-pink-600 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_7s_linear_infinite]">
                  Ulaşımda en önemli şey kişinin kendini yük gibi değil, hayatın
                  doğal akışının içinde hissetmesidir. Bu yüzden hizmetin dili
                  de yaklaşımı da nettir: erişilebilir ulaşım desteği ücretsizdir.
                  Her yolculukta rahatlık, saygı, güven ve özgürlük hissi
                  önceliğimizdir.
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hizmetler.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.8rem] border border-white bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    animation: `softFloat ${5 + index}s ease-in-out infinite`,
                  }}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-25 blur-2xl`}
                  />

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="relative mt-5 text-xl font-black">
                    <span
                      className={`bg-gradient-to-r ${item.color} bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_6s_linear_infinite]`}
                    >
                      {item.title}
                    </span>
                  </h3>

                  <p className="relative mt-3 text-sm font-semibold leading-7">
                    <span className="bg-gradient-to-r from-teal-700 via-cyan-700 to-purple-700 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_7s_linear_infinite]">
                      {item.desc}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 p-[2px] shadow-2xl shadow-cyan-300/30">
          <div className="rounded-[2.3rem] bg-[#f8ffff]/90 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-[length:220%_100%] bg-clip-text text-sm font-black uppercase tracking-[0.25em] text-transparent animate-[textFlow_5s_linear_infinite]">
                  Tamamen Ücretsiz
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                  <span className="bg-gradient-to-r from-emerald-500 via-cyan-600 to-purple-600 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_6s_linear_infinite]">
                    Özel gereksinimli bireyler için ücretsiz erişilebilir ulaşım.
                  </span>
                </h2>

                <p className="mt-5 text-base font-semibold leading-8">
                  <span className="bg-gradient-to-r from-emerald-700 via-cyan-700 to-purple-700 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_7s_linear_infinite]">
                    Bu hizmet ücretli bir transfer hizmeti olarak değil,
                    hayatı kolaylaştıran sosyal bir destek anlayışıyla
                    hazırlanmıştır. Bilgi almak, güzergahı paylaşmak ve uygun
                    saat için iletişime geçmeniz yeterlidir.
                  </span>
                </p>
              </div>

              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20engelsiz%20ula%C5%9F%C4%B1m%20%C3%BCcretsiz%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 px-7 py-5 text-base font-black text-white shadow-xl transition hover:-translate-y-1"
              >
                Ücretsiz Hizmet İçin Yaz
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-[length:220%_100%] bg-clip-text text-xs font-black uppercase tracking-[0.25em] text-transparent animate-[textFlow_5s_linear_infinite]">
              Güvenli ve Saygılı Yolculuk
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-amber-500 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_6s_linear_infinite]">
                Her detay ücretsiz, güvenli ve konforlu ulaşım için düşünülür.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guvenlik.map((item, index) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-white/90 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-300 via-purple-300 to-amber-200 opacity-30 blur-2xl" />

                <div className="relative flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-1 shrink-0 ${
                      index % 3 === 0
                        ? "text-emerald-500"
                        : index % 3 === 1
                        ? "text-cyan-500"
                        : "text-purple-500"
                    }`}
                  />
                  <p className="text-sm font-bold leading-7">
                    <span className="bg-gradient-to-r from-slate-700 via-cyan-700 to-purple-700 bg-[length:220%_100%] bg-clip-text text-transparent animate-[textFlow_8s_linear_infinite]">
                      {item}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {["/vip-1.jpg", "/vip-2.jpg", "/vip-3.jpg"].map((img, index) => (
              <div
                key={img}
                className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-200 via-purple-200 to-amber-200 p-2 shadow-xl ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <img
                  src={img}
                  alt="Engelsiz ulaşım görseli"
                  className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-purple-500 to-amber-300 p-7 shadow-2xl sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/25 text-white backdrop-blur-xl">
                <Accessibility size={34} />
              </div>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                Özgürlüğe giden her yol bizimle daha kolay.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/90">
                Gideceğiniz yeri, alınacak noktayı ve uygun zamanı paylaşın.
                Size güvenli, konforlu ve erişilebilir ücretsiz ulaşım desteği
                için yardımcı olalım.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20engelsiz%20ula%C5%9F%C4%B1m%20%C3%BCcretsiz%20hizmetinden%20yararlanmak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-cyan-700 shadow-xl transition hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Yaz
              </a>

              <a
                href={`tel:+${phone}`}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/15 px-5 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1"
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