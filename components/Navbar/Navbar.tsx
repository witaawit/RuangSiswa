import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Link from "next/link";

// type MenuType = "ruangBelajar" | "ruangLatihan";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Beranda",
    route: "/",
  },
  {
    title: "RuangBelajar",
    children: [
      {
        title: "Sekolah Dasar (SD)",
        route: "/",
      },
      {
        title: "Sekolah Menengah Pertama (SMP)",
        route: "/",
      },
      {
        title: "Sekolah Menengah Atas (SMA)",
        route: "/ruangBelajar",
        children: [
          {
            title: "SAINTEK",
            route: "/",
          },
          {
            title: "SOSHUM",
            route: "/",
          },
          {
            title: "Bahasa",
            route: "/",
          },
        ],
      },
    ],
  },
  {
    title: "RuangLatihan",
    children: [
      {
        title: "Sekolah Dasar (SD)",
        route: "/",
      },
      {
        title: "Sekolah Menengah Pertama (SMP)",
        route: "/",
      },
      {
        title: "Sekolah Menengah Atas (SMA)",
        route: "/",
        children: [
          {
            title: "SAINTEK",
            route: "/",
          },
          {
            title: "SOSHUM",
            route: "/",
          },
          {
            title: "Bahasa",
            route: "/",
          },
        ],
      },
    ],
  },
  {
    title: "RuangUjian",
    route: "/",
  },
  {
    title: "Tentang Kami",
    route: "/",
  },
];

export const Navbar = () => {

  return (
    <nav className="z-10 fixed top-0 bg-white flex flex-row justify-between w-full items-center py-2 lg:px-5 md:px-12 sm:px-12 shadow-[0px_1px_4px_0px_#0000001d]">
      <a className="">
        <Image
          src="/images/Logo.svg"
          alt="Landscape picture"
          width={130}
          height={400}
        />
      </a>
      <div className="flex gap-8 items-center text-white">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className="text-black" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Button
          content="Masuk"
          href="/"
          className="py-1 px-4 text-xs text-yellow border-2 border-yellow bg-white  rounded-2xl"
        ></Button>
        <Button
          content="Daftar"
          href="/"
          className="py-1 px-4 text-xs text-black border-2 border-yellow bg-yellow rounded-2xl"
        ></Button>
      </div>
    </nav>
  );
};
