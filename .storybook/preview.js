import '../src/index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'flag-icon-css/css/flag-icon.min.css';



/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;