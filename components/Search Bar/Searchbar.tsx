import Image from "next/image";

const Searchbar = () => {
  return (
    <div className="flex items-center rounded-full gap-2 px-5 bg-white w-150">
      <Image src="images/cari.svg" alt="cari" width={25} height={15} />
      <input className="px-2 w-full outline-none font-semibold text-xl" placeholder="Cari kebutuhan belajarmu" type="text" />
    </div>
  )
}

export {Searchbar}