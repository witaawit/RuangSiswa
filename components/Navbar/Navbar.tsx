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
      {/* <ul className=" relative flex flex-row gap-6"> */}
        {/* <li className="flex items-center gap-1 flex-row">
          {" "}
          <a href="/" className="alist">
            Beranda
          </a>
        </li>
        <li className="flex items-center gap-1 flex-row">
          {" "}
          <a
            href="/"
            className="alist"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(title.toLowerCase() as MenuType);
            }}
          >
            {title}
          </a>
        </li>
        <li className="flex items-center gap-1 flex-row">
          {" "}
          <a
            href="/"
            className="alist"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(title.toLowerCase() as MenuType);
            }}
          >
            {title}
          </a>
        </li>
        <li className="flex items-center gap-1 flex-row">
          {" "}
          <a href="/" className="alist">
            {title}
          </a>
        </li> */}
        {/* {[
          ["Beranda", "/", ""],
          ["RuangBelajar", "", "/images/Arrow Dropdown1.svg"],
          ["RuangLatihan", "", "/images/Arrow Dropdown1.svg"],
          ["RuangUjian", "/", ""],
          ["Tentang Kami", "/", ""],
        ].map(([title, url, image], index) => (
          <li key={index} className="flex items-center gap-1 flex-row relative">
            <a
              href={url}
              className="alist"
              onClick={(e) => {
                if (title === "RuangBelajar" || title === "RuangLatihan") {
                  e.preventDefault();
                  toggleDropdown(title.toLowerCase() as MenuType);
                }
              }}
            >
              {title}
            </a>
            {image && <Image src={image} alt="arrow" width={10} height={20} />}
            {title === "ruangbelajar" && dropdownOpen.ruangBelajar && (
              <ul className="flex mt-2 z-20 bg-black shadow-md">
                <li className="p-2">Belajar 1</li>
                <li className="p-2">Belajar 2</li>
                <li className="p-2">Belajar 3</li>
              </ul>
            )}
            {title === "ruanglatihan" && dropdownOpen.ruangLatihan && (
              <ul className="absolute top-0 left-0 mt-2 bg-white shadow-md">
                <li className="p-2">Latihan 1</li>
                <li className="p-2">Latihan 2</li>
                <li className="p-2">Latihan 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul> */}
      {/* <ul className="flex flex-row gap-6">
        {[
          ["Beranda", "/", ""],
          ["RuangBelajar", "", "/images/Arrow Dropdown1.svg"],
          ["RuangLatihan", "/", "/images/Arrow Dropdown1.svg"],
          ["RuangUjian", "/", ""],
          ["Tentang Kami", "/", ""],
        ].map(([title, url, image, index]) => (
          <li key={index} className="flex items-center gap-1 flex-row">
            <a href={url} className="alist">
              {title}
            </a>
            {image && <Image src={image} alt="arrow" width={10} height={20} />}
          </li>
        ))}
      </ul> */}

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
