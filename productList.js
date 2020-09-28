//lister les produits pour une categorie fixee
//utiliser fetch
// créer un affichage pour chaque produit NOM/PHOTO/PRIX
// fonction recup données + fonction créer affichage



init()async function getProducts(){
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
	const itemElement = document.createElement('article');

	const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('img');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = product.name;
    myPara1.imageUrl = product.imageUrl;
    myPara2.textContent = product._id;        
    myPara3.textContent = product.price;
    myPara4.textContent = product.colors;

    }

    const colors = product.colors; {
     var listItem = document.createElement('li');
          listItem.textContent = colors;
          myList.appendChild(listItem);
        }

     itemElement.appendChild(myH2);
     itemElement.appendChild(myPara1);
     itemElement.appendChild(myPara2);
     itemElement.appendChild(myPara3);
     itemElement.appendChild(myList);

 }


       listELement.appendChild(itemElement);
     

 }

	

// correction displayItemProduct ajout à un listElement :
// un element dans lequel il y a un element image, un element texte avec le nom du produit et un element texte avec le prix du produit
//donc const priceElement / titleElement / imageElement dans itemElement qui lui même est => listElement

  
async function init(){
	const products = await getProducts()
	displayListProducts(products)



}

 



















