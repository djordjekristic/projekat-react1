import { useState } from "react";



    

    


function Products(props){
    
    let [products,setProducts] = useState({
        'Iphone14': 1000,
        'SamsungS23':1200,
        'Iphone15':1250
    }); 

    let [newProductName,setNewProductName]=useState("");
    let [newProductPrice,setNewProductPrice]=useState("");
    let [infoMessage,setInfoMessage]=useState("");
    function addProduct(){
        if(newProductName === ""){
            return

        }
        if(newProductPrice === ""){
            return

        }
        let newProduct = {[newProductName]:parseInt(newProductPrice)};
        setProducts(currentProducts=>({
           ...currentProducts,
           ...newProduct 
        }))
    }

    function search(e){
        const searchTerm = e.currentTarget.value.toLowerCase();
        const productNames = Object.keys(products);
        
        
        for(let product in productNames){
            let productName = productNames[product].toLowerCase();

            if(searchTerm === productName){
                setInfoMessage('we find product');
                break
              
            }else{
                setInfoMessage('We did not find product');
            }


        }
        

    }
        
    
    
    return(

        <div >
        
        <div className="d-flex justify-content-center">
            {Object.entries(products).map(([phone,price])=>(
            <div>
                <h5 className="m-4">{phone}</h5>
                <p className="d-flex justify-content-center">{calculatePrice(price,props.tax)}</p>
            </div>
            )
        )}
        </div>
        
        <div className="m-5">
            <input className="form-control" onInput={(e)=>setNewProductName(e.target.value)} type="text" placeholder="unesite ime proizvoda" />
            <input className="form-control" onInput={(e)=>setNewProductPrice(e.target.value)} type="number" placeholder="unesite cenu proizvoda" />
            
            <button className="btn btn-primary" onClick={addProduct}>create product</button>
            <button className="d-flex justify-content-end mt-2 btn btn-danger" onClick={()=>setProducts({})}>Delete product</button>
        </div>
        <div className="m-5">
            <p>{infoMessage}</p>
            <input onInput={search} type="text" placeholder="unesite ime pretrage" />
        </div>
        </div>

        

    )
    function calculatePrice(price,tax){
        return ((price*tax)/100)+price;
        
    }
}
    




export default Products;