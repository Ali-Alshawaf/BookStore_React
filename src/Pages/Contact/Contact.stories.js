import Contact from './Contact';
import i18n from '../../i18n';

export default {
  title: 'Pages/Contact',
  component: Contact,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  document.body.className = 'dark';
  return <Contact />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  document.body.className = 'light';
  return <Contact />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  document.body.className = 'dark';
  return <Contact />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  document.body.className = 'light';
  return <Contact />;
};
