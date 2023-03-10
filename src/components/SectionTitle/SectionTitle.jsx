import PropTypes from 'prop-types';
import { Section, SectionHead } from './SectionTitle.styled';

const SectionTitle = ({ children, title }) => {
  return (
    <Section>
      <SectionHead>{title}</SectionHead>
      {children}
    </Section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default SectionTitle;
