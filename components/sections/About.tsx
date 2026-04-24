"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className=" bg-gradient-to-l from-[#531d1d] to-[#a11d1d] text-white py-16 border-t border-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <p className="font-bold text-lg">Syndrome UKAI</p>

          <p className="text-sm mt-4 text-justify">
            Temukan revolusi dalam pendidikan farmasi dengan platform teknologi
            terdepan, kami menawarkan pengalaman belajar yang mudah, didukung
            oleh mentor-mentor terbaik dan kurikulum terbaru. Bergabunglah
            dengan kami untuk meraih keunggulan dan sukses di industri farmasi
            dengan cara yang lebih mudah dan efisien.
          </p>

          <div className="flex gap-6 mt-6 text-xl">
            <a
              href="https://www.instagram.com/syndrome_ukai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-500" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-400" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600" />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Layanan</h2>

          <a href="#capaian" className="text-sm mb-2 block">
            Capaian
          </a>
          <a href="#mentor" className="text-sm mb-2 block">
            Mentor
          </a>
          <a href="#modul" className="text-sm mb-2 block">
            Modul
          </a>
          <a href="#download" className="text-sm mb-2 block">
            Download
          </a>

          {/* Internal pages */}
          <Link
            href="/privacy-policy-id"
            className="text-sm mb-2 block font-semibold hover:underline"
          >
            Kebijakan Privasi
          </Link>

          <Link
            href="/data-deletion-request-id"
            className="text-sm mb-2 block font-semibold hover:underline"
          >
            Hapus Akun
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
          <div className="text-sm">
            <p className="mb-2 font-semibold">Hubungi Kami</p>

            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>admin@ukaisyndrome.id</p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <FaPhoneAlt />
              <p>+62 8895946963</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
