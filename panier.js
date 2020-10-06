



function readStorage(){
const storage = localStorage.getItem("shop")
return JSON.parse(storage)



}

async function getProducts(){
	const response = await fetch('http://localhost:3000/api/teddies')
    return response.json()

}

function displaySelectedProducts(filteredProduct,selectedProduct){
	const itemElement = document.createElement('div');
  itemElement.className = "produit";

	const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('img');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    
    
    const myList = document.createElement('select');
    myList.id = 'selectedoption';
    
    myH2.textContent = filteredProduct.name;
    myPara1.src = filteredProduct.imageUrl;
    
        
    myPara2.textContent = 'Prix :  ' + filteredProduct.price + '€';
    myPara3.textContent = 'Color : ' + filteredProduct.color;
  
         

     itemElement.appendChild(myH2);
     itemElement.appendChild(myPara1);
     itemElement.appendChild(myPara2);
     itemElement.appendChild(myPara3);
     
       listElement.appendChild(itemElement);
     

 }


async function init(){
	const selectedProduct = await readStorage()
	console.log(selectedProduct)
    const products = await getProducts()
    console.log(products)
    const filteredProducts = products.filter(
    	(product)=>selectedProduct[product._id])
    console.log(filteredProducts)
  }



  





init() 
