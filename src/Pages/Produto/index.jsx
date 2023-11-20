import { useEffect, useState } from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../../redux/cartSlice";
import NavBar from "../../components/NavBar";

function Produto() {
  const [produto, setProduto] = useState();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function iniciar() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduto(data);
      setShow(true);
    }
    iniciar();
  }, []);

  function handleAddCart() {
    dispatch(
      addCart({
        produto: { ...produto, quantity: 1 },
      })
    );
  }
  return (
    <>
      <NavBar />
      <header className="container header-product">
        {show && (
          <>
            <img src={produto.image} alt={produto.image} />
            <div className="description">
              <h1>{produto.title}</h1>
              <p>{produto.description}</p>
              <div className="addCartAndPrice">
                <span>{`$${produto.price}`}</span>
                <button onClick={handleAddCart}>Add Cart</button>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Produto;
