// texts.ts
import frTexts from './lang/fr.json';
import enTexts from './lang/en.json';

const texts = {
    fr: frTexts,
    en: enTexts,
} as const;

export type TextsObject = typeof texts;

export type Lang = keyof TextsObject;
export type TextKey = keyof TextsObject[Lang];

export type TextsFunction = (lang: Lang) => TextsObject[Lang];

export const getTexts: TextsFunction = (lang) => texts[lang];

export default texts;
