import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const HeaderLight = () => {document.body.className="light"; return <Header />;};

export const HeaderDark = () =>{document.body.className="dark"; return <Header />;}; 
