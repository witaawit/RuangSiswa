import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";


export type CrumbItem = {
  label: ReactNode;
  path: string;
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex gap-2 items-center">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <div key={i} className="flex items-center gap-4">
              <Link
                href={crumb.path}
                key={i}
                className="text-gray-800 font-semibold text-xl pl-2 hover:text-amber-500 transition-colors "
              >
                {crumb.label}
              </Link>
              <Image src="/images/Arrow route.svg" alt="arrow" width={10} height={10} />
            </div>
          );
        } else {
          return <div key={i} className="text-xl px-5 py-2 bg-yellow rounded-3xl font-semibold">{crumb.label}</div>;
        }
      })}
    </div>
  );
};

export { Breadcrumbs };