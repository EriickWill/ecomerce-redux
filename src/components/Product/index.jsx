import { Link } from 'react-router-dom';
import "./style.css"
import { BiPlusCircle } from "react-icons/bi";
import { addCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product({title,image,price,id,produto}) {
  const dispatch = useDispatch()

  function addProductCart(){
    dispatch(addCart({
      produto:produto
    }))
  }
  return (
    
    <Link to={`/produto/${id}`} className='cardProduct'>
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <div className='priceAndAdd'>
          <span><p>{price}</p></span>
          <BiPlusCircle className='add' onClick={addProductCart}/>
        </div>
       
      </div>
    </Link>
  )
}
