import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price } = bottle;


    return (
        <div className="bottle-container">
            <h3>Bottle: {name}</h3>
            <img src={img}></img>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>

        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;