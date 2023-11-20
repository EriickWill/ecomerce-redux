import { useDispatch } from 'react-redux'
import "./style.css"
import { addCart, removeCart } from '../../redux/cartSlice'

export default function CartProduct({img,title,price,quant,produto}) {
  const dispatch = useDispatch()

  function removeProductCart(){
    dispatch(removeCart({
      produto:produto
    }))
  }
  function addProductCart(){
    dispatch(addCart({
      produto:produto
    }))
  }
  return (
    <div className='productCardCart'>
        <img src={img} alt="" />
        <div>
          <div>
            <h2>{title} <span>({quant})</span></h2>
            <span>{price}</span>
          </div>
          <div className='btn-products'>
            <button onClick={removeProductCart}>Remover</button>
            <button onClick={addProductCart}>Adicionar</button>
          </div>
          
        </div>
    </div>
  )
}
