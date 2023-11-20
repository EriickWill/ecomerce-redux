import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import NavBar from "../../components/NavBar";
import "./App.css";

function Cart() {
  const cart = useSelector((state) => state.addCart);
  const itemsInCart = cart.itemsInCart;
  return (
    <>
      <NavBar />
      <header>
        <h1>Carrinho</h1>
      </header>
      <div className="container">
        {itemsInCart != 0 &&
          itemsInCart.map((e) => {
            return e.quantity > 0 ? (
              <CartProduct
                produto={e}
                quant={e.quantity}
                key={e.id}
                img={e.image}
                title={e.title}
                price={e.price}
              />
            ) : null;
          })}
      </div>
    </>
  );
}

export default Cart;
