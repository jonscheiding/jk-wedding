import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = 
  ({image, children, ...props}) => (
    <div 
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat'
      }} 
      {...props}
      >
      {children}
    </div>
  );

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.children
};

export default BackgroundImage;
