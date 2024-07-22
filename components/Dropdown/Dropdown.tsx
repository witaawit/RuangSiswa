import React, { useState } from "react";
import Link from "next/link";

import { MenuItem } from "../Navbar";
import { Button } from "../Button";

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <Button
          className="text-black flex items-center gap-1 hover:text-yellow"
          img="/images/Arrow Dropdown1.svg"
          widt={8}
          classNameImg="mt-1"
          content={item.title}
          onClick={toggle}
        />
        <div
          className={`absolute top-8 z-30 w-[260px] flex flex-col py-4 px-2 bg-white rounded-md ${transClass}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="hover:bg-yellow rounded-xl hover:font-semibold text-gray-800 px-4 py-1"
              href={item?.route || ""}
              onClick={toggle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
