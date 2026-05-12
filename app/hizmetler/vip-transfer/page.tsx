"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  Gem,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Sparkles,
  Star,
} from "lucide-react";

const phone = "905533545018";

const hizmetler = [
  {
    icon: Plane,
    title: "Havalimanı VIP Transfer",
    desc: "Uçuş saatinize göre planlanan, konforlu ve prestijli karşılama hizmeti.",
    color: "from-red-600 via-rose-500 to-sky-500",
  },
  {
    icon: Briefcase,
    title: "Kurumsal Misafir Transferi",
    desc: "Şirket misafirleri, yöneticiler ve özel davetliler için profesyonel ulaşım.",
    color: "from-rose-600 via-red-500 to-violet-500",
  },
  {
    icon: CalendarCheck,
    title: "Özel Gün Transferi",
    desc: "Davet, toplantı, lansman ve organizasyonlar için planlı VIP ulaşım.",
    color: "from-red-700 via-pink-500 to-blue-500",
  },
  {
    icon: MapPin,
    title: "Şehir İçi Özel Transfer",
    desc: "İstanbul içinde konforlu, hızlı ve güven veren özel ulaşım deneyimi.",
    color: "from-sky-500 via-rose-500 to-red-600",
  },
];

const avantajlar = [
  "Modern ve konforlu VIP araçlar",
  "Zamanında karşılama ve bırakma",
  "Prestijli, sade ve güven veren hizmet",
  "Havalimanı, otel, toplantı ve özel nokta transferi",
  "Gizlilik ve konfor odaklı yolculuk",
  "Profesyonel sürücü desteği",
];

export default function VipTransferPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff1f3]">
      <section className="relative px-4 py-6 sm:px-6 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.24),transparent_31%),radial-gradient(circle_at_50%_88%,rgba(190,24,93,0.24),transparent_34%)]" />
        <div className="absolute left-[-120px] top-20 h-72 w-72 animate-[glowPulse_5s_ease-in-out_infinite] rounded-full bg-red-400/40 blur-3xl" />
        <div className="absolute bottom-10 right-[-130px] h-80 w-80 animate-[glowPulse_6s_ease-in-out_infinite] rounded-full bg-sky-400/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/75 px-4 py-2 text-sm font-bold text-red-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <Sparkles size={16} className="text-red-600" />
                <span className="animate-[textFlow_5s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-500 to-sky-500 bg-[length:220%_100%] bg-clip-text text-xs font-black uppercase tracking-[0.22em] text-transparent">
                  VIP Transfer & Lüks Araç
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                <span className="animate-[textFlow_5s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-500 to-sky-500 bg-[length:220%_100%] bg-clip-text text-transparent">
                  Yolculuğunuz
                </span>
                <span className="block animate-[textFlow_6s_linear_infinite] bg-gradient-to-r from-sky-500 via-rose-500 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                  Prestijli Başlasın.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 sm:text-lg">
                <span className="animate-[textFlow_7s_linear_infinite] bg-gradient-to-r from-sky-700 via-rose-700 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                  VIP transfer hizmetimiz; havalimanı, otel, toplantı, özel
                  davet ve şehir içi ulaşım ihtiyaçlarınız için konforlu,
                  zamanında ve güven veren bir yolculuk deneyimi sunar. Her
                  detay, daha rahat ve daha özel hissetmeniz için planlanır.
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["VIP Araç", "Konforlu Yolculuk", "Zamanında Transfer"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gradient-to-r from-red-100 via-rose-100 to-sky-100 px-4 py-2 text-sm font-black text-red-700 shadow-md"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:flex">
                <a
                  href={`https://wa.me/${phone}?text=Merhaba,%20VIP%20transfer%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noreferrer"
                 className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-800 via-fuchsia-600 to-blue-600 px-6 py-4 text-sm font-black !text-white shadow-2xl shadow-fuchsia-400/35 transition hover:-translate-y-1 hover:brightness-110"
                >
                  VIP Transfer İçin Yaz
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-white/80 px-6 py-4 text-sm font-black text-sky-700 shadow-lg backdrop-blur-xl transition hover:-translate-y-1"
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
              <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-r from-red-300 via-rose-300 to-sky-300 opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[390px] overflow-hidden rounded-[1.7rem] sm:h-[560px]">
                  <img
                    src="/vip-2.jpg"
                    alt="VIP transfer ve lüks araç hizmeti"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-red-950/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/25 bg-white/20 p-5 text-white shadow-2xl backdrop-blur-xl">
                    <p className="animate-[textFlow_5s_linear_infinite] bg-gradient-to-r from-rose-200 via-white to-sky-200 bg-[length:220%_100%] bg-clip-text text-base font-black text-transparent">
                      Sadece ulaşım değil, özel bir deneyim.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-rose-50">
                      Prestijli araçlar, planlı rota ve konforlu transfer.
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
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-100 via-rose-100 to-sky-100 p-6 shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-300/35 blur-3xl" />

            <div className="relative">
              <Gem size={44} className="text-red-600" />

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                <span className="animate-[textFlow_6s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-600 to-sky-600 bg-[length:220%_100%] bg-clip-text text-transparent">
                  Her yolculuk aynı değildir; bazıları prestij ister.
                </span>
              </h2>

              <p className="mt-5 text-base font-semibold leading-8">
                <span className="animate-[textFlow_7s_linear_infinite] bg-gradient-to-r from-sky-700 via-rose-700 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                  VIP transfer, yalnızca lüks araçla yapılan bir ulaşım hizmeti
                  değildir. Zamanında karşılanmak, rahat hissetmek, sessiz ve
                  konforlu bir yolculuk yapmak, gideceğiniz yere güçlü bir ilk
                  izlenimle ulaşmak demektir.
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
                      className={`animate-[textFlow_6s_linear_infinite] bg-gradient-to-r ${item.color} bg-[length:220%_100%] bg-clip-text text-transparent`}
                    >
                      {item.title}
                    </span>
                  </h3>

                  <p className="relative mt-3 text-sm font-semibold leading-7">
                    <span className="animate-[textFlow_7s_linear_infinite] bg-gradient-to-r from-sky-700 via-rose-700 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] bg-gradient-to-r from-red-700 via-rose-600 to-sky-600 p-[2px] shadow-2xl shadow-red-300/30">
          <div className="rounded-[2.3rem] bg-[#fff7f8]/90 p-6 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="animate-[textFlow_5s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-600 to-sky-600 bg-[length:220%_100%] bg-clip-text text-sm font-black uppercase tracking-[0.25em] text-transparent">
                  Premium Planlama
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                  <span className="animate-[textFlow_6s_linear_infinite] bg-gradient-to-r from-sky-600 via-rose-600 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                    Araç, rota ve zamanlama sizin için özel planlanır.
                  </span>
                </h2>

                <p className="mt-5 text-base font-semibold leading-8">
                  <span className="animate-[textFlow_7s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-700 to-sky-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                    Alınacak nokta, gidilecek adres, saat bilgisi ve hizmet türü
                    netleştirilir. Ardından ihtiyacınıza uygun VIP araç ve rota
                    planlaması yapılır. Böylece yolculuğunuz daha başlamadan
                    düzenli, güvenli ve konforlu hale gelir.
                  </span>
                </p>
              </div>

              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20VIP%20transfer%20i%C3%A7in%20ara%C3%A7%20ve%20rota%20planlamas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
               className="flex min-h-16 items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-red-700 via-rose-600 to-sky-600 px-7 py-5 text-base font-black !text-white shadow-2xl shadow-red-500/30 transition hover:-translate-y-1 hover:brightness-110"
              >
                Transfer Planı Al
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="animate-[textFlow_5s_linear_infinite] bg-gradient-to-r from-red-700 via-rose-600 to-sky-600 bg-[length:220%_100%] bg-clip-text text-xs font-black uppercase tracking-[0.25em] text-transparent">
              Neden VIP Transfer?
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              <span className="animate-[textFlow_6s_linear_infinite] bg-gradient-to-r from-sky-600 via-rose-600 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
                Konfor, zaman ve prestij aynı yolculukta birleşir.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {avantajlar.map((item, index) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-3xl border border-red-100 bg-white/90 p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-red-300 via-rose-300 to-sky-300 opacity-30 blur-2xl" />

                <div className="relative flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-1 shrink-0 ${
                      index % 3 === 0
                        ? "text-red-600"
                        : index % 3 === 1
                        ? "text-rose-600"
                        : "text-sky-600"
                    }`}
                  />
                  <p className="text-sm font-bold leading-7">
                    <span className="animate-[textFlow_8s_linear_infinite] bg-gradient-to-r from-sky-700 via-rose-700 to-red-700 bg-[length:220%_100%] bg-clip-text text-transparent">
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
            {["/vip-2.jpg", "/vip-5.jpg", "/vip-6.jpg"].map((img, index) => (
              <div
                key={img}
                className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-200 via-rose-200 to-sky-200 p-2 shadow-xl ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <img
                  src={img}
                  alt="VIP transfer görseli"
                  className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-700 via-rose-600 to-sky-600 p-7 shadow-2xl sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/25 text-white backdrop-blur-xl">
                <Star size={34} />
              </div>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                Gideceğiniz yere prestijli ve konforlu ulaşın.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-rose-50">
                Alınacak nokta, gidilecek adres ve saat bilgisini paylaşın.
                Size uygun VIP transfer planını birlikte oluşturalım.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`https://wa.me/${phone}?text=Merhaba,%20VIP%20transfer%20hizmetinden%20yararlanmak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
               className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black !text-red-700 shadow-xl transition hover:-translate-y-1 hover:bg-red-50"
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