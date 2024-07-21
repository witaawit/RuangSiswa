import Image from "next/image";
import { CardList } from "../Card Paket";
import { Button } from "../Button";

const data = [
  {
    image: "/images/check 1.svg",
    title: "Paket Sepuh Biologi",
    desc: "Belajar dan akses semua materi biologi secara lengkap mulai dari jenjang SD hingga SMA",
    lists: [
      "1 User",
      "Masa aktif 36 bulan",
      "Unlock >200 soal biologi",
      "Unlock >70 rangkuman biologi",
      "Unlock >30 materi biologi",
      "Free template rencana belajar",
    ],
    price: "Rp 130.000,-"
  },
  {
    image: "/images/check 1.svg",
    title: "Paket Pemula",
    desc: "Akses seluruh fitur dari jenjang SD hingga SMA selama 1 minggu",
    lists: [
      "1 User",
      "Masa aktif 7 hari",
      "Unlock seluruh soal",
      "Unlock seluruh rangkuman",
      "Unlock seluruh materi",
      "Free template rencana belajar",
    ],
    price: "Rp 15.000,-"
  },
];

export const PilPaket = () => {
  return (
    <section className="bg-yellow flex justify-center items-center px-20 py-8 gap-16">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-3xl">Pilihan Paket</h1>
          <p className="text-xl">Berbagai jenis paket sesuai kebutuhanmu!</p>
        </div>
        <CardList cards={data} />
      </div>
      <div className="flex flex-col items-center gap-5 w-2/5 mx-auto">
        <Image src="/images/Credit Card.svg" alt="CC" width={250} height={200} />
        <h2 className="font-semibold text-3xl text-center leading-tight">Temukan paket belajar lainnya sesuai dengan kebutuhanmu!</h2>
        <Button className="border-2 border-black px-6 py-1 font-medium text-lg rounded-3xl" content="Lihat semua paket" />
      </div>
    </section>
  );
};
