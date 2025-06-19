import Checkout from './Checkout';
import i18n from '../../i18n';

export default {
  title: 'Pages/Checkout',
  component: Checkout,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Checkout />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Checkout />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Checkout />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Checkout />;
};
