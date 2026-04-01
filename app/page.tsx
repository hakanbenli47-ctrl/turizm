"use client";

import { motion } from "framer-motion";

export default function Home() {
  const yorumlar = [
    {
      text: "Havalimanından otele kadar tüm süreç kusursuzdu. Araç gerçekten VIP seviyedeydi.",
      name: "Mehmet K."
    },
    {
      text: "Antalya’da bu seviyede hizmet bulmak zor. Gerçekten profesyonel bir ekip.",
      name: "James R."
    },
    {
      text: "Araç tertemizdi ve çok konforluydu. Zamanlama da mükemmeldi.",
      name: "Ahmet Y."
    },
    {
      text: "Everything was perfectly organized. Very luxury and smooth experience.",
      name: "Daniel M."
    },
    {
      text: "Ailecek kullandık, inanılmaz rahat bir yolculuktu.",
      name: "Ayşe T."
    },
    {
      text: "Gerçek VIP hizmet. Kesinlikle tekrar tercih ederim.",
      name: "Mustafa A."
    }
  ];

  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-[#d4af37] to-yellow-300 text-transparent bg-clip-text">
              Jade Travel
            </h1>
            <p className="text-[10px] text-gray-400 tracking-widest">
              VIP TRAVEL SERVICE
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-200">
            <a href="#" className="hover:text-[#d4af37]">Ana Sayfa</a>
            <a href="#" className="hover:text-[#d4af37]">Turlar</a>
            <a href="#" className="hover:text-[#d4af37]">Hizmetler</a>
            <a href="#" className="hover:text-[#d4af37]">İletişim</a>
          </nav>

          <a
            href="https://wa.me/905079358768"
            className="bg-gradient-to-r from-[#d4af37] to-yellow-300 text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            İletişim
          </a>

        </div>
      </header>

      {/* IŞIK */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#d4af37]/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="h-screen flex pt-24 flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[url('/gorsel1.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] text-transparent bg-clip-text">
              Jade Travel
            </span>
            <br />
            Ayrıcalıklı Tatil Deneyimi
          </motion.h1>

          <p className="text-gray-200 mb-8 text-lg">
            VIP hizmet, lüks deneyim ve kusursuz organizasyon.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://wa.me/905079358768"
            className="bg-gradient-to-r from-[#d4af37] to-yellow-300 text-black px-8 py-3 rounded-full font-semibold"
          >
            WhatsApp’tan Rezervasyon
          </motion.a>

        </div>
      </section>

      {/* TURLAR */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 text-[#d4af37]">
          Seçkin Turlar
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Kapadokya", "Pamukkale", "Tekne"].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl mb-2">{t} Tur</h3>
              <p className="text-gray-300 mb-4">
                VIP deneyim • Konfor • Rehberli tur
              </p>
              <a href="#" className="text-[#d4af37]">Detay →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl text-[#d4af37] mb-12">
          Müşteri Deneyimleri
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {yorumlar.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-md"
            >
              <p className="text-gray-200 mb-4 leading-relaxed">
                “{item.text}”
              </p>
              <p className="text-[#d4af37] text-sm font-semibold">
                — {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-6 text-[#d4af37]">
          Instagram
        </h2>

        <a
          href="https://www.instagram.com/jadetravelcom"
          target="_blank"
          className="bg-gradient-to-r from-[#d4af37] to-yellow-300 text-black px-6 py-3 rounded-full"
        >
          @jadetravelcom
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-t from-black to-[#111] pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-gray-300">

          <div>
            <h3 className="text-[#d4af37] text-xl mb-4">Jade Travel</h3>
            <p className="text-sm">VIP tur & transfer hizmetleri</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li>VIP Transfer</li>
              <li>Özel Turlar</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>Ana Sayfa</li>
              <li>İletişim</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">İletişim</h4>
            <p>📞 0507 935 87 68</p>
          </div>

        </div>

        <div className="text-center mt-10 text-xs text-gray-500">
          © 2026 Jade Travel
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/905079358768"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#d4af37] to-yellow-300 text-black px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

    </main>
  );
}