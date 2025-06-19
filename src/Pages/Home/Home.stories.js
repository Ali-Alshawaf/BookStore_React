import Home from './Home';
import i18n from '../../i18n';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Home />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Home />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Home />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Home />;
};
