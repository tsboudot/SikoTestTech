import * as React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainSectionItem from "./components/MainSectionItem";
import "../tailwind.css";
export const SikomobilityComBy: React.FC = (): JSX.Element => {

  return (
    <div className=" bg-gray-800 ">
      <div className="flex bg-gray-800 flex-col min-h-screen mx-auto max-w-screen-xl">

        <Nav />
        {/* Section 1 */}
        <section className="flex-1 bg-gray-800 flex flex-row justify-center items-center">
          <div className="up">
            <h1>Découvrez notre gamme de services pour toutes les mobilités</h1>
          </div>
          <div className="down">
            <MainSectionItem />
            <MainSectionItem />
            <MainSectionItem />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex-1 bg-gray-700 flex flex-row justify-center items-center">
          <p className="text-white">Contenu de la Section 2</p>
        </section>

        {/* Section 3 */}
        <section className="flex-1 bg-gray-600 flex flex-row justify-center items-center">
          <p className="text-white">Contenu de la Section 3</p>
        </section>


        <Footer />


        {/* Loader (à ajouter ou supprimer selon vos besoins) */}
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Chargement...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
