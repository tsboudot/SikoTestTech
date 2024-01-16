// texts.ts
import db from './lang/db.json';

export type Lang = 'fr' | 'en';

export const getTextByIdAndLang = (id: number, lang: Lang): string => {
    const textObject = db[id.toString() as keyof typeof db]; // Utilise une assertion de type pour informer TypeScript que la clé est valide
    return textObject ? textObject[lang] || '' : ''; // Renvoie le texte correspondant à la langue ou une chaîne vide si non trouvé
};

export default getTextByIdAndLang;
