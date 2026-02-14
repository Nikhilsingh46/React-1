import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {
// if(Price > 30000){
//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price : {Price}</h5>
//       <p>Discount of 5%</p>
//     </div>
//   );
// }else{
//   return (
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>Price : {Price}</h5>
//     </div>
//   );
//   }
// let isDiscount = Price > 30000 ? "Discount of 5%" : "";
// let isDiscount = Price > 30000;
// let styles = {backgroundColor : isDiscount ? "blue" : "red"}
let oldPrice = ["52,654", "63,450", "9,000", "10,500"];
let newPrice = ["8,999", "54.000", "8500", "7999"];
let Description = ["8500 DPI", "intutive surface", "Design for human use", "Design for make task easy"]
return(
<div className="Product">
  <h3>{title}</h3>
  <p>{Description[idx]} </p>
  <Price oldPrice= {oldPrice[idx]} newPrice= {newPrice[idx]}/>
</div>
);
}
export default Product;
