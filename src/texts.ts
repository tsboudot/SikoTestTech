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
        [key in Section]: Record<string, string>;
    };
    en: {
        [key in Section]: Record<string, string>;
    };
};

export type Lang = keyof TextsObject;
export type TextKey = keyof TextsObject[Lang];

export type TextsFunction = (lang: Lang, section: Section) => TextsObject[Lang][Section];

export const getTexts: TextsFunction = (lang, section) => {
    // Vérifie si la langue et la section existent
    if (texts[lang] && texts[lang][section]) {
        return texts[lang][section];
    }

    // Si la langue ou la section n'existe pas, retourne un objet vide
    return {} as TextsObject[Lang][Section];
};

export default texts;

