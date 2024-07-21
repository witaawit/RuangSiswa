import Image from "next/image";

export const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center px-20 bg-white">
        <div className="flex flex-col gap-2 w-1/4 py-8">
          <Image src="/images/Logo.svg" alt="logo" width={250} height={100} />
          <p className="text-sm">
            Academic excellence and street-smart intelligence through
            groundbreaking insights and effective practices.
          </p>
          <ul className="flex flex-row gap-6">
            {[
              // ["/images/facebook logo.svg"],
              ["/images/Twitter logo.svg"],
              ["/images/linkedin logo.svg"],
              ["/images/instagram logo.svg"],
            ].map(([image, index]) => (
              <li key={index} className="flex items-center gap-1 flex-row">
                <Image src={image} alt="logo" width={15} height={10} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Pages</h3>
            <div className="flex flex-col gap-1 text-sm">
              <a href="">Beranda</a>
              <a href="">RuangBelajar</a>
              <a href="">RuangLatihan</a>
              <a href="">RuangUjian</a>
              <a href="">Tentang Kami</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Hubungi Kami</h3>
            <ul>
              <li className="flex gap-2 items-center">
                <Image src="/images/Call.svg" alt="call" width={12} height={10} />
                <p className="text-sm">081234567899 (chat only)</p>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/images/Mail.svg" alt="call" width={12} height={10} />
                <p className="text-sm">ruangsiswa@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 bg-yellow">
        <p className="text-lg">Copyright © Group 4 SISTECH 2024. Trademarks belong to their respective owners. All rights reserved.</p>
      </div>
    </section>
  );
};
