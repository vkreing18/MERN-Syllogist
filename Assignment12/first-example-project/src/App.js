import { Product } from './components/product/Product';
import ProductForm from './components/product-form/ProductForm'
import {useState} from 'react';

function App() {
  const [products,setProduct] =useState([
    {
      product_name:"APPLE iPhone 12 (Black, 128 GB)",
      product_image:"https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202206302212",
      product_price:"₹56,999"
      
      
    },
    {
      product_name:"Readmi Note 9",
      product_image:"https://www.91-cdn.com/hub/wp-content/uploads/2020/04/redmi-note-9-design-render.jpeg",
      product_price:"₹13,000"
      
     
      
    },
    {
      product_name:"APPLE 2020 Macbook Air M1",
      product_image:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_next-generation-mac-MacBookAir-MacBookPro-Mac-mini_11102020.jpg.og.jpg?202206290847",
      product_price:"₹1,12,990"
      
      
    }
  ]);
  const addNewProductHandler=(product)=>{
    const productObj = {
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage
    }
    setProduct([...products,productObj]);
  }
  return (
    <div className="App">

      <ProductForm onProductAdded ={addNewProductHandler}/>
      <h1>List of Products</h1>
      {products.map((product,index) =>
      <Product key = {index} pname = {product.product_name} 
      pimage = {product.product_image} 
      pprice = {product.product_price}/>
    )}
    </div>
  )
}
export default App;