"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const CDN_ASSET_URL = process.env.NEXT_PUBLIC_CDN_ASSET_URL;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l from-[#a11d1d] to-[#531d1d] fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <Image
            src={`${CDN_ASSET_URL}/logo_syndrome_kuning.png`}
            alt="Logo"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-white">
          <li>
            <a
              href="#capaian"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              Capaian
            </a>
          </li>
          <li>
            <a
              href="#mentor"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              Mentor
            </a>
          </li>
          <li>
            <a
              href="#modul"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              Modul
            </a>
          </li>
          <li>
            <a
              href="#program"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              Program
            </a>
          </li>
          <li>
            <a
              href="#download"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              Download
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-yellow-500 px-1.5 py-2 rounded-lg"
            >
              About
            </a>
          </li>

          {/* Login → ke app */}
          <Link
            href="https://app.ukaisyndrome.id/login"
            className="ml-4 bg-yellow-500 text-white font-semibold px-6 py-1 rounded-[20px] hover:bg-yellow-700 transition"
          >
            Login
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 text-gray-700">
          <li>
            <a href="#capaian" onClick={() => setIsOpen(false)}>
              Capaian
            </a>
          </li>
          <li>
            <a href="#mentor" onClick={() => setIsOpen(false)}>
              Mentor
            </a>
          </li>
          <li>
            <a href="#modul" onClick={() => setIsOpen(false)}>
              Modul
            </a>
          </li>
          <li>
            <a href="#program" onClick={() => setIsOpen(false)}>
              Program
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <Link
            href="https://app.ukaisyndrome.id/login"
            className="bg-yellow-600 text-white text-center font-semibold px-6 py-2 rounded-[20px] hover:bg-yellow-700 transition"
          >
            Masuk
          </Link>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
