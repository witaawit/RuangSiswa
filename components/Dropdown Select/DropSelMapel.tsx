import React from "react";
import { DropSel } from "./DropSel";

const items = [
  { key: "Sekolah Dasar", label: "Sekolah Dasar" },
  { key: "Sekolah Menengah Pertama", label: "Sekolah Menengah Pertama" },
  { key: "Sekolah Menengah Atas - IPA", label: "Sekolah Menengah Atas - IPA" },
  { key: "Sekolah Menengah Atas - IPS", label: "Sekolah Menengah Atas - IPS" },
];

const DropSelmapel = () => {
  return (
    <div>
      <DropSel items={items} />
    </div>
  );
};

export {DropSelmapel};