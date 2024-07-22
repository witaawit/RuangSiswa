import { BreadCrumbSMIP } from "../BreadCrumb";
import { DropSelmapel } from "../Dropdown Select";
import { Searchbar } from "../Search Bar";
import { CardList } from "../Card Mapel";

const MapelSMAIPA = () => {
  return (
    <section className="pt-20">
      <BreadCrumbSMIP />
      <div className="px-16 flex gap-6 mw-auto pb-10">
        <DropSelmapel />
        <Searchbar />
      </div>
      <CardList />
    </section>
  );
};

export { MapelSMAIPA };

