
import { useSelector } from 'react-redux'
import Product from '../../components/Product'
import { useEffect, useState } from 'react'
import "./style.css";

export default function Products() {
const productsReducer = useSelector((state => state.products))
const [products,setProducts] = useState()
const [mostrar,setMostrar] = useState(false)

useEffect(()=>{
  setProducts(productsReducer.data)
  if(products != undefined){
    setMostrar(true)
  }
  
},[productsReducer])

  return(
    <section className='container products'>
      {
        mostrar && productsReducer.data.map((e)=>{
          return <Product produto={e}key={e.id} title={e.title} price={`$ ${e.price}`} image={e.image} id={e.id}/>
        })
      } 
    </section>
  )
}
