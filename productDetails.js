
function getProductId(){
  const params = (new URL(document.location)).searchParams;
  const id = params.get("id")
  return id
}

async function getProduct(id){
	const response = await fetch('http://localhost:3000/api/teddies/'+ id)
    return response.json()

}
async function loadProductDetails(id){
	const productDetail = document.createElement('div')
		for(let product of products){
			displayItemProduct(product,listElement)
}

document.getElementById('product').appendChild(listElement)

}
 

function displayItemProduct(product,listElement){
	const itemElement = document.createElement('div');
  itemElement.className = "produit";

	  const myH2 = document.createElement('h2');
    myH2.className = "nomproduit";
    const myPara1 = document.createElement('img');
    myPara1.className ="image";
    const myPara2 = document.createElement('p');
    myPara2.className="id";
    const myPara3 = document.createElement('p');
    myPara3.className = "description"
    const myPara4 = document.createElement('p');
    myPara4.className ="pricedetail";
    const myPara5 = document.createElement('p');
    myPara5.className ="colors";
    
    const myList = document.createElement('select');
    myList.id = 'selectedoption';
    
    myH2.textContent = 'PELUCHE ' + product.name;
    myPara1.src = product.imageUrl;
    myPara2.textContent = 'id_Produit : ' + product._id;
    myPara3.textContent = 'Description : '+ product.description;      
    myPara4.textContent = product.price/100 + '€';
    myPara5.textContent = 'Choisissez votre coloris : ';
  
    const colors = product.colors; 
    for(let color of colors){
     var listItem = document.createElement('option');

               listItem.textContent = color;
          myList.appendChild(listItem);
        }

     

     itemElement.appendChild(myH2);
     itemElement.appendChild(myPara1);
     itemElement.appendChild(myPara2);
     itemElement.appendChild(myPara3);
     itemElement.appendChild(myPara4);
     itemElement.appendChild(myPara5);
     itemElement.appendChild(myList);
     

       listElement.appendChild(itemElement);
     

 }
function readStorage(){
const storage = localStorage.getItem("shop")
return JSON.parse(storage)



}

function addToStorage(id,option){
 const storage = readStorage()||{}
 storage[id] = option
 localStorage.setItem("shop",JSON.stringify(storage))
}




async function init(){
  const id = getProductId();
  const product = await getProduct(id)
  console.log(product)
  displayItemProduct(product,document.getElementById('product'))
  document.getElementById("submitbutton").addEventListener("click", function(){
    console.log('')
    const option = document.getElementById("selectedoption").value;
    addToStorage(id,option)
    alert('votre produit a été ajouté au panier')

  })



  



}

init() 



