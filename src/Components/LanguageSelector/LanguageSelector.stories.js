import LanguageSelector from './LanguageSelector';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n'; 

export default {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
};

export const Default = () => (
  <I18nextProvider i18n={i18n}>
    <LanguageSelector />
  </I18nextProvider>
);
