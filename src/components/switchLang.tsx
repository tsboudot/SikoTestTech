// switchLang.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, Lang } from '../store/actions/langActions';
import { RootState } from '../store';

const LanguageSwitcher: React.FC = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.lang.language);

    const handleLanguageChange = (newLanguage: Lang) => {
        dispatch(setLanguage(newLanguage));
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('fr')} disabled={currentLanguage === 'fr'}>
                Français
            </button>
            <button onClick={() => handleLanguageChange('en')} disabled={currentLanguage === 'en'}>
                English
            </button>
        </div>
    );
};

export default LanguageSwitcher;
