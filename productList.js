//lister les produits pour une categorie fixee
//utiliser fetch
// créer un affichage pour chaque produit NOM/PHOTO/PRIX
// fonction recup données + fonction créer affichage



async function getProducts(){
	const response = await fetch('http://localhost:3000/api/teddies')
    return response.json()

}


function displayListProducts(products){
	const listElement = document.createElement('div')
	for(let product of products){
   	displayItemProduct(product,listElement)


   }
   document.getElementById('boutique').appendChild(listElement)

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

	

// correction displayItemProduct ajout à un listElement :
// un element dans lequel il y a un element image, un element texte avec le nom du produit et un element texte avec le prix du produit
//donc const priceElement / titleElement / imageElement dans itemElement qui lui même est => listElement

  
async function init(){
	const products = await getProducts()
	displayListProducts(products)



}

init() 


 
  // Show details button
  
var btn = document.createElement("button");
    itemElement.appenChild(btn);
    btn.innerHTML ="SHOW PRODUCT DETAIL"
    btn.addEventListener("click",function(listELement) {
    alert("")
    })
















