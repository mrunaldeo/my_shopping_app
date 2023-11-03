export default function Product(){
     //let products=["Laptop","Headphones","keyboard","Mobile","Mouse"];

     let productsList=[{id:1,name:"Laptop",price:35000,},
                       {id:2,name:"Headphones",price:3500},
                       {id:3,name:"keyboard",price:1000},
                       {id:4,name:"Mobile",price:4000},
                       {id:5,name:"Mouse",price:800}];
     return(
        <ul>
           {/* {products.map(function(product){
            return <li>{product}</li>
           })
           } */}
           {/*   */}
           {productsList.map((product)=>{
            return <div key={product.id}>Name:{product.name},and Price:{product.price}</div>
           })}
        </ul>
     )
}