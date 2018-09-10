import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default BackgroundImage;