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
   document.getElementById('app').appendChild(listElement)

}

function displayItemProduct(product,listElement){
	const itemElement = document.createElement('div')



	itemElement.textContent = product.name;
	itemElement.imageUrl = product.imageUrl;
	itemElement._id = product._id;
	itemElement.price = product.price;


    listElement.appendChild(itemElement)

}

  
async function init(){
	const products = await getProducts()
	displayListProducts(products)



}

 














init()







