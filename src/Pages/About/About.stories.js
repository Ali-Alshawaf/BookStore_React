import About from './About';
import i18n from '../../i18n';

export default {
  title: 'Pages/About',
  component: About,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <About />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <About />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <About />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <About />;
};
