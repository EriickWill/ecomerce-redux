import "./style.css";
import { BiCartAlt, BiSolidUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



export default function NavBar() {

  const cart = useSelector((state) => state.addCart);
  const itemsInCart = cart.itemsInCart

  const contItensCart = itemsInCart.reduce((acumulator,currentValue)=>{
    return acumulator + currentValue.quantity
  },0)
  return (
    <nav>
      <div className="container">
        <p>E-commerce</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Categorias</li>
          <li className="carrinhoIcon">
            <Link to="/carrinho">
              <BiCartAlt className="icon" />
              {contItensCart > 0 &&
                <span>{contItensCart}</span>
              }
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <BiSolidUserCircle className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
