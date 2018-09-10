import PropTypes from 'prop-types';

const date = PropTypes.instanceOf(Date);

const name = PropTypes.exact({
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired
});

const address = PropTypes.exact({
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
});

const location = PropTypes.exact({
  name: PropTypes.string.isRequired,
  address: address.isRequired
});

const spouse = PropTypes.exact({
  name: name.isRequired,
  nickname: PropTypes.string.isRequired
});

const spouses = PropTypes.arrayOf(spouse);

const content = PropTypes.exact({
  spouses: spouses.isRequired,
  date: date.isRequired,
  location: location.isRequired
})

const PropTypesEx = { date, name, address, location, spouse, content };

export default PropTypesEx;
