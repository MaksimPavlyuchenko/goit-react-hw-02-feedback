import PropTypes from 'prop-types';

import { Header } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <Header>{title}</Header>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};
