import Login from './Login';
import i18n from '../../i18n';

export default {
  title: 'Pages/Login',
  component: Login,
};

export const EnglishDark = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Login />;
};

export const EnglishLight = () => {
  i18n.changeLanguage('en');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Login />;
};

export const ArabicDark = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'dark');
  document.body.className = 'dark';
  return <Login />;
};

export const ArabicLight = () => {
  i18n.changeLanguage('ar');
  localStorage.setItem('theme', 'light');
  document.body.className = 'light';
  return <Login />;
};
