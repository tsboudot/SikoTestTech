import { LangAction, SET_LANGUAGE } from "../types";

export type Lang = 'fr' | 'en';

export const setLanguage = (language: Lang) => {
    return {
        type: SET_LANGUAGE,
        payload: language,
    };
};