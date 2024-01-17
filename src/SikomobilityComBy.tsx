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
import { getTextByIdAndLang, Lang } from './texts';


export const SikomobilityComBy: React.FC = (): JSX.Element => {
  const currentLanguage: Lang = useSelector((state: RootState) => state.lang.language as Lang);
  const titre = getTextByIdAndLang(34, currentLanguage)
  const confiance = getTextByIdAndLang(11, currentLanguage)
  const tour = getTextByIdAndLang(12, currentLanguage)
  return (
    <div className="bg-gray-800">
      <div className="flex bg-gray-800 flex-col min-h-screen mx-auto max-w-screen-xl">
        <Nav />

        {/* Section 1 */}
        <section className="flex-1 bg-gray-800 flex flex-col justify-center items-center text-gray-300">
          <div className="up">
            <h1 className="text-white lg:text-center text-3xl md:text-5xl font-extrabold mb-8 max-w-4xl w-full z-50">{titre}</h1>
          </div>
          <div className="down flex flex-row gap-4 justify-center items-center w-full">
            <MainSectionItem
              title={getTextByIdAndLang(5, currentLanguage)}
              backgroundImage={paiementImage}
              text={getTextByIdAndLang(6, currentLanguage)}
            />

            <MainSectionItem
              title={getTextByIdAndLang(7, currentLanguage)}
              backgroundImage={financementImage}
              text={getTextByIdAndLang(8, currentLanguage)}
            />

            <MainSectionItem
              title={getTextByIdAndLang(9, currentLanguage)}
              backgroundImage={mobiliteImage}
              text={getTextByIdAndLang(10, currentLanguage)}
            />
            {/* ... (autres MainSectionItem) */}
          </div>
        </section>

        {/* Section 2 */}
        <section className="sm:mx-auto bg-gray-dark">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-8">{confiance}</h2>
            <h2 className="text-white md:text-2xl font-extrabold mb-8">{tour}</h2>
          </div>
          <div>
            <CarouselTweets />
          </div>
        </section>


        <Footer />


        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-10 flex justify-center items-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Chargement...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
