import { BreadCrumbSMABio } from "../BreadCrumb";
import { DropSelmapel } from "../Dropdown Select";
import { Searchbar } from "../Search Bar";
// import { CardList } from "../Card Mapel";

const SMAIPABio = () => {
  return (
    <section className="pt-20">
      <BreadCrumbSMABio />
      <div className="px-16 flex justify-between gap-6 mw-auto pb-10">
        <DropSelmapel />
        <Searchbar />
      </div>
    </section>
  );
};

export { SMAIPABio };

