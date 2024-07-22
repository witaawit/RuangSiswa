import React from "react";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

type DropdownItemType = {
  key: string;
  label: string;
};

type DropSelProps = {
  items: DropdownItemType[];
};

const DropSel: React.FC<DropSelProps> = ({ items }) => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Pilih Jenjang Pendidikan"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(true);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          // variant="solid"
          className={`z-0 px-6 flex items-center py-3 rounded-full font-semibold text-xl overflow-clip outline-none ${
            selected ? "bg-yellow " : "bg-gray-700 text-white"
          }`}
        >
          {selectedValue}{" "}
          {selected ? (
            <Image
              src="/images/panah2.png"
              alt="panah"
              width={18}
              height={10}
            />
          ) : (
            <Image src="/images/panah.svg" alt="panah" width={18} height={10} />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="shadow"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
          setSelectedKeys(keys as Set<string>);
          handleClick();
        }}
        className="bg-gray-100 p-5 rounded-2xl"
      >
        {items.map((item) => (
          <DropdownItem className="dropdown" key={item.key} onClick={handleClick}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { DropSel };
