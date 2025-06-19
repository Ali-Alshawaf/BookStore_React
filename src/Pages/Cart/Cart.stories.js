import Cart from './Cart';
import i18n from '../../i18n';

export default {
  title: 'Pages/Cart',
  component: Cart,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Cart />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Cart />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Cart />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Cart />;
};
