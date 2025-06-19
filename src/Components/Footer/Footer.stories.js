import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

export const FooterLight = () => {document.body.className="light"; return <Footer />;};

export const FooterDark = () =>{document.body.className="dark"; return <Footer />;}; 
