import * as React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../tailwind.css";
export const SikomobilityComBy: React.FC = (): JSX.Element => {

  return (
    <div className="flex flex-col min-h-screen mx-auto">

      <Nav />
      {/* Main Content */}
      <main className="flex-1 bg-gray-800 flex flex-row justify-center items-center ">
        <p className="text-white">Bonjour</p>
      </main>


      <Footer />

      {/* Loader (à ajouter ou supprimer selon vos besoins) */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="spinner-border text-white" role="status">
          <span className="sr-only">Chargement...</span>
        </div>
      </div>
    </div>
  );
};
