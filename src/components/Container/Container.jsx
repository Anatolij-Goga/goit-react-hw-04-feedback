import PropTypes from 'prop-types';
import { Main } from './Container.styled';

const Container = ({ children }) => {
  return <Main>{children}</Main>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
