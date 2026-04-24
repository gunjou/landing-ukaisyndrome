"use client";

import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";

export default function DataDeletionRequestID() {
  const adminEmail: string = "admin@ukaisyndrome.id";
  const appName: string = "Syndrome UKAI";
  const developerName: string = "Outlook-Project";
  const privacyPolicyLink: string = "/privacy-policy-id";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* NAV */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-custom-merah hover:text-red-700 flex items-center"
          >
            <span className="text-2xl">
              <MdOutlineKeyboardBackspace />
            </span>
            <span className="text-sm font-medium hidden sm:inline">
              Kembali
            </span>
          </Link>

          <Link
            href="/data-deletion-request"
            className="text-custom-merah hover:text-red-600 font-medium border-b border-custom-merah pb-0.5"
          >
            View in English
          </Link>
        </div>

        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-custom-merah sm:text-4xl">
            Permintaan Penghapusan Akun dan Data
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Aplikasi <span className="font-semibold">{appName}</span>
          </p>
        </header>

        {/* CONTENT */}
        <section className="space-y-8">
          {/* STEP */}
          <div className="bg-custom-merah/30 border-l-4 border-custom-merah p-6 rounded-md">
            <h2 className="text-2xl font-bold text-custom-merah mb-4 flex items-center gap-2">
              <LuSparkles />
              Langkah Pengajuan Permintaan
            </h2>

            <p className="text-black">
              Kami, <span className="font-semibold">{developerName}</span>,
              memproses permintaan penghapusan akun melalui email.
            </p>

            <div className="mt-4 p-4 bg-red-50 rounded-md text-center">
              <p className="text-lg font-semibold text-custom-merah">Email:</p>

              <a
                href={`mailto:${adminEmail}?subject=Permintaan Penghapusan Akun - ${appName}`}
                className="text-2xl font-extrabold text-custom-merah hover:text-red-800"
              >
                {adminEmail}
              </a>
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Detail yang Wajib Disertakan
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Subjek Email:</strong>{" "}
                  <code className="bg-gray-200 text-red-600 px-2 py-1 rounded">
                    Permintaan Penghapusan Akun - {appName}
                  </code>
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Identifikasi Akun:</strong> Email atau username
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Konfirmasi:</strong> Penghapusan permanen
                </div>
              </li>
            </ul>
          </div>

          {/* DATA */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Data yang Dihapus & Dipertahankan
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>Setelah verifikasi:</p>

              <blockquote className="border-l-4 border-red-500 pl-4 italic bg-red-50 p-3 rounded-md">
                <strong className="text-red-700">Dihapus:</strong> Semua data
                pengguna
              </blockquote>

              <blockquote className="border-l-4 border-yellow-500 pl-4 italic bg-yellow-50 p-3 rounded-md">
                <strong className="text-yellow-700">Dipertahankan:</strong> data
                anonim untuk kepatuhan dan analitik. Lihat{" "}
                <Link
                  href={privacyPolicyLink}
                  className="text-custom-merah hover:underline"
                >
                  Kebijakan Privasi
                </Link>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p>
            Disediakan oleh {developerName} - &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
