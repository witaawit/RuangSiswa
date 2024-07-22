// pages/index.tsx
import type { NextPage } from "next";
import { Breadcrumbs } from "./BreadCrumb";
import Image from "next/image";
const BreadCrumbSMIP: NextPage = () => {
  return (
    <div className="container mx-auto pb-5">
      <div className="my-2">
        <Breadcrumbs
          items={[
            {
              label: "RuangBelajar",
              path: "/",
            },
            {
              label: "Sekolah Menengah Atas - IPA",
              path: "/",
            },
          ]}
        />
      </div>
    </div>
  );
};
export {BreadCrumbSMIP};
