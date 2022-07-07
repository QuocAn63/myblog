import PropTypes from 'prop-types';
import './GlobalStyles.css';
import './GlobalStyles.scss';
import './grid.css';

function GlobalStyle({ children }) {
   return children;
}

GlobalStyle.propTypes = {
   children: PropTypes.node.isRequired,
};

export default GlobalStyle;
