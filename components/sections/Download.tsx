"use client";

import { FaGooglePlay, FaApple, FaDownload } from "react-icons/fa";

const CDN_ASSET_URL = process.env.NEXT_PUBLIC_CDN_ASSET_URL;

export default function Download() {
  const handleNotAvailable = (platform: string) => {
    alert(`Link ${platform} belum tersedia 🚧`);
  };

  return (
    <section
      id="download"
      className="relative py-20 bg-gradient-to-l from-[#531d1d] to-[#a11d1d] text-white px-6 font-poppins overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left leading-tight">
              Belajar Lebih Mudah, <br /> Kapanpun & Dimanapun
            </h2>

            <p className="mt-4 text-sm md:text-base text-center md:text-left text-gray-200">
              Bawa <strong>Syndrome UKAI</strong> ke dalam genggaman Anda. Akses{" "}
              <em>modul terbaru</em>, <em>mentor profesional</em>, dan{" "}
              <em>latihan soal interaktif</em> langsung dari smartphone. Unduh
              sekarang & raih sukses UKAI dengan cara yang lebih praktis!
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-start">
            {/* PLAYSTORE */}
            <button
              onClick={() => handleNotAvailable("Google Play")}
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaGooglePlay className="text-green-500 text-2xl" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px]">GET IT ON</span>
                <span className="font-semibold text-sm">Google Play</span>
              </div>
            </button>

            {/* APP STORE */}
            <button
              onClick={() => handleNotAvailable("App Store")}
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaApple className="text-white text-2xl" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px]">Download on the</span>
                <span className="font-semibold text-sm">App Store</span>
              </div>
            </button>

            {/* APK */}
            <a
              href="https://drive.google.com/file/d/1VdDzp8K9p7GBmjgaNynCx8YCtKhbvKiI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaDownload className="text-blue-600 text-2xl" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px]">Direct Install</span>
                <span className="font-semibold text-sm">Download APK</span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={`${CDN_ASSET_URL}/screenshot.png`}
            alt="Tampilan Aplikasi Syndrome UKAI"
            loading="lazy"
            className="rounded-2xl shadow-2xl max-w-[180px] object-contain transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
