// import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
// import Button, { ButtonTheme } from 'shared/ui/Button/Button';
//
// interface LangSwitcherProps {
//     className?: string;
// }
//
// const LangSwitcher = ({ className }: LangSwitcherProps) => {
//     const { t, i18n } = useTranslation();
//
//     const toggleLanguage = async () => {
//         i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//     };
//     return (
//         <Button
//             className={classNames('', {}, [className])}
//             onClick={toggleLanguage}
//             theme={ButtonTheme.CLEAR}
//         >
//             {t('Language')}
//         </Button>
//     );
// };
//
// export default LangSwitcher;

import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import './LangSwitcher.module.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languageOptions = [
        { value: 'en', label: '🇺🇸 EN' },
        { value: 'ru', label: '🇷🇺 RU' },
        { value: 'gr', label: '🇬🇷 GR' },
        { value: 'et', label: '🇪🇪 ET' },
        { value: 'es', label: '🇪🇸 ES' },
        { value: 'fr', label: '🇫🇷 FR' },
        { value: 'de', label: '🇩🇪 DE' },

        // Add as many languages as you need.
    ];

    const currentLanguage = languageOptions.find(
        (option) => option.value === i18n.language,
    );

    const handleLanguageChange = (selectedOption: { value: string; }) => {
        i18n.changeLanguage(selectedOption.value);
    };

    return (
        <Select
            maxMenuHeight={null}
            className="select"
            defaultValue={currentLanguage || languageOptions.find((option) => option.value === 'en')}
            options={languageOptions}
            onChange={handleLanguageChange}
            isSearchable={false}
            styles={{
                input: (provided) => ({
                    ...provided,
                    caretColor: 'transparent',
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                }),
                dropdownIndicator: () => ({
                    display: 'none',
                }),
                indicatorSeparator: () => ({
                    display: 'none',
                }),
                option: (provided) => ({
                    ...provided,
                    color: 'black',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                }),
                container: (provided) => ({
                    ...provided,
                    fontSize: '12px',
                }),
                menuList: (provided) => ({
                    ...provided,

                }),

            }}

        />
    );
};

export default LanguageSwitcher;
