import * as React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainSectionItem from "./components/MainSectionItem";
import "../tailwind.css";
import paiementImage from "../public/images/Paiement-1c17143b.png";
import mobiliteImage from "../public/images/Mobilite-9de2bf13.png";
import financementImage from "../public/images/Financement-560da06b.png"
import CarouselTweets from "./components/CarousselTweets";
import { RootState } from './store';
import { useSelector } from 'react-redux';
import { getTexts, Lang, TextsFunction } from './texts'; // Assurez-vous d'avoir cette importation


export const SikomobilityComBy: React.FC = (): JSX.Element => {
  const currentLanguage: Lang = useSelector((state: RootState) => state.lang.language as Lang);
  return (
    <div className="bg-gray-800">
      <div className="flex bg-gray-800 flex-col min-h-screen mx-auto max-w-screen-xl">

        <Nav />
        {/* Section 1 */}
        <section className="flex-1 bg-gray-800 flex flex-col justify-center items-center">
          <div className="up">
            <h1 className="text-white lg:text-center text-3xl md:text-5xl font-extrabold mb-8 max-w-4xl w-full brightened">Découvrez notre gamme de services pour toutes les mobilités</h1>
          </div>
          <div className="down flex flex-row gap-4 justify-center items-center w-full">
            <MainSectionItem
              title="PAIEMENT 3/4/10 FOIS"
              backgroundImage={paiementImage}
              text="Faites un paiement 3, 4 ou 10 fois en carte bleue. C'est sans justificatif"
            />

            <MainSectionItem
              title="PAIEMENT 3/4/10 FOIS"
              backgroundImage={financementImage}

              text="Faites une demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires."
            />
            <MainSectionItem
              title="PAIEMENT 3/4/10 FOIS"
              backgroundImage={mobiliteImage}
              text="Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement."
            />
            {/* ... (autres MainSectionItem) */}
          </div>
        </section>

        {/* Section 2 */}
        <section className="sm:mx-auto bg-gray-dark">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 className="text-gray-900 text-white text-3xl md:text-5xl font-extrabold mb-8">Ils nous ont fait confiance !</h2>
            <h2>A votre tour ! </h2>
          </div>
          <div>
            <CarouselTweets />
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex-1 bg-gray-600 flex flex-row justify-center items-center">
          <p className="text-white">Contenu de la Section 2</p>

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
