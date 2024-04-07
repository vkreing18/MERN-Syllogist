import { Product } from'./components/Product'


function App() {
  const product_arr=[
    {
      product_name:"APPLE iPhone 12 (Black, 128 GB)",
      product_image:"https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020.jpg.og.jpg?202206302212",
      product_price:"₹56,999",
      product_desc:"4 GB RAM | 32 GB ROM | Expandable Upto 256 GB ,16.51 cm (6.5 inch) Display,8MP Rear Camera | 5MP Front Camera,5000 mAh Battery ,SC9863A456 "
      
    },
    {
      product_name:"Readmi Note 9",
      product_image:"https://www.91-cdn.com/hub/wp-content/uploads/2020/04/redmi-note-9-design-render.jpeg",
      product_price:"₹13,000",
      product_desc:"5 GB RAM | 32 GB ROM | Expandable Upto 256 GB ,16.51 cm (6.5 inch) Display,8MP Rear Camera | 5MP Front Camera,5000 mAh Battery,SC9863A478 "
     
      
    },
    {
      product_name:"APPLE 2020 Macbook Air M1",
      product_image:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_next-generation-mac-MacBookAir-MacBookPro-Mac-mini_11102020.jpg.og.jpg?202206290847",
      product_price:"₹1,12,990",
      product_desc:"8 GB RAM | 128 GB ROM | Expandable Upto 256 GB ,16.51 cm (6.5 inch) Display,8MP Rear Camera | 5MP Front Camera,5000 mAh Battery,SC9863A768 "
      
    }
   
  ]
  return (
    <div>
      
      <h1>| PRODUCTS |</h1>
      
      <Product product_name={product_arr[0].product_name} product_image={product_arr[0].product_image} product_price={product_arr[0].product_price} product_conducted_by={product_arr[0].product_conducted_by} product_desc={product_arr[0].product_desc}/>
      <Product product_name={product_arr[1].product_name} product_image={product_arr[1].product_image} product_price={product_arr[1].product_price} product_conducted_by={product_arr[1].product_conducted_by} product_desc={product_arr[1].product_desc}/>
      <Product product_name={product_arr[2].product_name} product_image={product_arr[2].product_image} product_price={product_arr[2].product_price} product_conducted_by={product_arr[2].product_conducted_by} product_desc={product_arr[2].product_desc}/>
     
    </div>
  );
}
  
export default App;