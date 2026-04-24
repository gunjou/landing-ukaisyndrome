"use client";

import Image from "next/image";

const CDN_ASSET_URL = process.env.NEXT_PUBLIC_CDN_ASSET_URL;

export default function Hero() {
  return (
    <section
      id="capaian"
      className="bg-gradient-to-r from-[#a11d1d] to-[#531d1d] mt-5 pt-20 text-center w-auto h-auto poppins relative"
    >
      {/* Background lines */}
      <Image
        src={`${CDN_ASSET_URL}/garis-kanan.png`}
        alt=""
        width={300}
        height={800}
        className="absolute top-0 right-0 pt-[90px] h-full w-auto"
      />

      <Image
        src={`${CDN_ASSET_URL}/garis-kanan.png`}
        alt=""
        width={300}
        height={800}
        className="absolute bottom-0 left-0 pt-[15rem] h-full w-auto scale-x-[-1] transform z-0"
      />

      {/* Title */}
      <div className="flex justify-center text-4xl sm:text-7xl md:text-6xl font-bold text-white mb-4 tracking-wide whitespace-nowrap">
        SYNDROME UKAI
      </div>

      {/* Doctor image */}
      <div
        className="
        absolute 
        left-1/2 
        transform -translate-x-1/2
        top-[90px]

        w-[65vw]
        max-w-[420px]
        sm:w-[50vw]
        md:w-[35vw]
        lg:w-[30vw]

        flex justify-center items-center
        z-20
      "
      >
        <Image
          src={`${CDN_ASSET_URL}/dokter.png`}
          alt="Dokter"
          width={500}
          height={500}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Info box */}
      <div className="absolute top-[190px] left-1/2 pl-[60px] sm:pl-[20px] md:pl-[50px] hidden sm:block">
        <div className="bg-gradient-to-b from-red-600 to-transparent text-white mx-auto block mb-20 px-8 py-4 w-[16rem] sm:w-[12rem] md:w-[20rem] rounded-tr-[50px] text-left font-semibold">
          Platform penyedia layanan pendidikan farmasi berbasis teknologi
          <strong className="font-extrabold text-white">
            {" "}
            terbaik dan termurah
          </strong>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-yellow-500 py-2.5 px-5 rounded-full text-white text-sm font-semibold absolute top-[290px] left-1/2 ml-[195px] sm:ml-[150px] md:ml-[195px] hidden sm:block">
        <strong className="font-bold">5000+</strong> Siswa Terdaftar
      </div>

      <div className="flex justify-center text-white items-center pt-8 mt-[250px] sm:mt-[480px] md:mt-[350px] text-sm sm:text-4xl md:text-3xl font-extrabold sm:font-extrabold md:font-extrabold leading-[0.9] poppins sticky z-30">
        Bimbingan Berkualitas Untuk <br />
        Apoteker Masa Depan
      </div>

      {/* Decorative white card */}
      <div
        className="flex justify-left -mb-1 left-0 sm:w-[20rem] w-[10rem] bg-white sm:h-[8rem] h-[4rem] mt-4"
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 100% 100%, 0 100%)",
          borderTopLeftRadius: "40px",
        }}
      ></div>

      {/* Indonesia flag */}
      <div className="absolute bottom-0 sm:pb-[250px] pb-[100px] left-0 sm:w-64 w-32 sm:h-40 h-32 z-20">
        <Image
          src={`${CDN_ASSET_URL}/indo_flag.png`}
          alt="Bendera Indonesia"
          width={200}
          height={150}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
