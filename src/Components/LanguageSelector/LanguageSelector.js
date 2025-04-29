import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown mr-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >Language
      </button>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => changeLanguage('ar')}>العربية</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
