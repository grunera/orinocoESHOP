
function getProductId(){
  const params = (new URL(document.location)).searchParams;
  const id = params.get("_id")
}

async function getProducts(){
	const response = await fetch('http://localhost:3000/api/teddies')
    return response.json()

}
async function loadProductDetails(id){
	const productDetail = document.createElement('div')
		for(let product of products){
			displayItemProduct(product,listElement)
}

document.getElementById('focusproduit').appendChild(listElement)

}
 

function displayItemProduct(product,listElement){
	const itemElement = document.createElement('div');
  itemElement.className = "produit";

	const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('img');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myList = document.createElement('ul');
    
    myH2.textContent = product.name;
    myPara1.src = product.imageUrl;
    myPara2.textContent = 'id_Produit : ' + product._id;        
    myPara3.textContent = 'Prix :  ' + product.price + '€';
    myPara4.textContent = 'Existe en différents coloris : ';
    
    const colors = product.colors; 
    for(let color of colors){
     var listItem = document.createElement('li');
               listItem.textContent = color;
          myList.appendChild(listItem);
        }

    

     itemElement.appendChild(myH2);
     itemElement.appendChild(myPara1);
     itemElement.appendChild(myPara2);
     itemElement.appendChild(myPara3);
     itemElement.appendChild(myPara4);
     itemElement.appendChild(myList);

       listElement.appendChild(itemElement);
     

 }







async function init(){
	const id = getProductId();


}

init() 