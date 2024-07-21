import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-row gap-24 justify-start px-16 items-center w-11/12 mx-auto pt-28 pb-16">
      <Image
        src="/images/Hero.svg"
        alt="Hero"
        width={260}
        height={100}
        className=""
      />
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-5xl text-black font-medium leading-snugz">
          Belajar asik dengan hasil <br /> maksimal bersama{" "}
          <span className="font-bold text-6xl text-yellow">RuangSiswa!</span>
        </h1>
        <p className="text-2xl text-gray-600">
          Kini hadir dengan berbagai jenjang kelas!
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-4 ">
            {[
              ["Sekolah Dasar (SD)"],
              ["Sekolah Menengah Pertama (SMP)"],
              // ["Sekolah Menengah Atas(SMA)"],
            ].map(([title, index]) => (
              <div key={index} className="relative flex items-center">
                <Image
                  src="/images/Buku.svg"
                  alt="Buku"
                  width={55}
                  height={20}
                  className="absolute p-2 bg-yellow rounded-full left-0 bottom-auto top-auto"
                />
                <div className="flex items-center gap-5 text-black text-xl font-medium justify-start rounded-l-3xl rounded-r-xl bg-white py-3 pl-16 pr-4">
                  <h4>{title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex items-center">
            <Image
              src="/images/Buku.svg"
              alt="Buku"
              width={55}
              height={20}
              className="absolute p-2 bg-yellow rounded-full left-0 bottom-auto top-auto"
            />
            <div className="flex items-center gap-5 text-black text-xl font-medium justify-start rounded-l-3xl rounded-r-xl bg-white py-3 pl-16 pr-4">
              <h4>Sekolah Menengah Atas(SMA)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
