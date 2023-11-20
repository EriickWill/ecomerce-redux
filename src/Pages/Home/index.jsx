import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/productsSlice";
import Products from "../../layout/Products";
import NavBar from '../../components/NavBar';


function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function iniciar() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts({ data }));
    }
    iniciar();
  }, []);

  return (
    <>
      <NavBar/>
      <header className="container">
        <h1>Produtos</h1>
      </header>
      <Products />
    </>
  );
}

export default Home;
