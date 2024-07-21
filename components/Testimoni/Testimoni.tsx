import Image from "next/image";
import { Button } from "../Button";

export const Testimoni = () => {
  return (
    <div className="flex bg-yellow py-12 px-24 justify-center items-center">
      <div className="flex flex-col">
        <p className="w-28 rounded-2xl flex justify-center py-1 bg-gray-800 text-white">
          Testimoni
        </p>
        <h2 className="font-semibold text-5xl leading-tight">
          Apa kata mereka tentang RuangSiswa?
        </h2>
      </div>
      <div className="flex flex-col gap-3 w-110 p-5 rounded-xl bg-white">
        <div className="flex gap-3">
          <Image src="/images/Hanif.svg" alt="hanif" width={50} height={50} />
          <div>
            <h3 className="text-xl font-medium">Muhammad Hanif</h3>
            <div className="flex flex-row gap-2 items-center">
              <p>Matematika</p>
              <Image
                src="/images/Ellipse 48.svg"
                alt="titik"
                width={5}
                height={10}
              />
              <p>Universitas Gadjah Mada (UGM)</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-400 border-1/2 w-full" />
        <p className="text-justify">
          Belajar di RuangSiswa beneran asik banget! Tutornya jelasinnya satset
          dan ngajarinnya selalu dari konsep, jadi bikin lebih paham deh.
          Latihan soalnya juga menantang banget, bikin ketagihan buat belajar
          dan latihan soal tiap hari. Terima kasih RuangSiswa!
        </p>
        <hr className="border-gray-400 border-1/2 w-full" />
        <div>
          <Button content="Paket Sepuh UTBK" className="bg-gray-800 text-white py-1 px-3 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
