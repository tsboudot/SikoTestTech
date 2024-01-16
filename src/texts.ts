// texts.ts
import frTexts from './lang/fr.json';
import enTexts from './lang/en.json';

const texts = {
    fr: frTexts,
    en: enTexts,
} as const;

export type NavSection = "nav";
export type MainSection = "mainSection";
export type SecondSection = "secondSection";
export type FooterSection = "footer";

export type Section = NavSection | MainSection | SecondSection | FooterSection;

export type TextsObject = {
    fr: {
        [key in Section]: Record<string, string> | string;
    };
    en: {
        [key in Section]: Record<string, string> | string;
    };
};

export type Lang = keyof TextsObject;
export type TextKey = keyof TextsObject[Lang];

export type TextsFunction = (lang: Lang, section: Section) => Record<string, string>;

export const getTexts: TextsFunction = (lang, section) => {
    // Vérifie si la langue et la section existent
    if (texts[lang] && texts[lang][section]) {
        const sectionData = texts[lang][section];

        // Si la section est un objet, retourne cet objet, sinon retourne un objet vide
        return typeof sectionData === 'object' ? sectionData : {};
    }

    // Si la langue ou la section n'existe pas, retourne un objet vide
    return {};
};

export default texts;
