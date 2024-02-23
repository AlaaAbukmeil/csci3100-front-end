<<<<<<< HEAD
function Test(){
    return (<div>login</div>)
=======
import  Gadget from './Gadget.jpg' 
import  Food from './Food.jpg'
import  Furniture from './Furniture.jpg' 
import  Cosmetics from '/Cosmetics.jpg' 
function Test(){
    let productList =[
        {"id" : 1, "name" : "Gadget", "price" : 5, "image" : Gadget.jpg, "description" : "testing"},
        {"id" : 2, "name" : "Food", "price" : 3, "image" : Food.jpg, "description" : "testing"},
        {"id" : 3, "name" : "Furniture", "price" : 10, "image" : Furniture.jpg, "description" : "testing"},
        {"id" : 4, "name" : "Cosmetics", "price" : 10, "image" : Cosmetics.jpg, "description" : "testing"}
    ]
    return (
        <div>
        {
            productList.map(product=>(
                <div key = {product.id}>
                {product.name}<br/>
                {product.price}<br/>
                {product.image}<br/>
                {product.description}<br/>
                </div>
            ))
        }   
      </div>
    )
>>>>>>> Ming
}

export default Test