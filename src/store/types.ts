// types.ts
export const SET_LANGUAGE = 'SET_LANGUAGE';
export interface langState {
    language: string;
}

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
    // Ajoutez une signature d'index pour résoudre l'erreur
    [key: string]: any;
}

export type LangAction = SetLanguageAction;
