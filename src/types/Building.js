import PropTypes from 'prop-types';

const BuildingType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    users: PropTypes.string.isRequired,
    offices: PropTypes.string.isRequired,
    price:  PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    forRent: PropTypes.bool
});

export default BuildingType;