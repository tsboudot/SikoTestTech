import { SET_LANGUAGE, LangAction, langState } from "../types";

const localStorageLang = localStorage.getItem('language');

const initialState: langState = {
    language: localStorageLang ? localStorageLang.toLowerCase() : 'fr',
}

const langReducer = (state = initialState, action: LangAction) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export default langReducer;