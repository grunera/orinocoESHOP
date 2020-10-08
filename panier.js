



function readStorage(){
const storage = localStorage.getItem("shop")
return JSON.parse(storage)



}

async function getProducts(){
	const response = await fetch('http://localhost:3000/api/teddies')
    return response.json()

}

function displaySelectedProducts(filteredProducts,selectedProducts){
	
  const tableElement = document.getElementById('cart-tablebody')
  for (let product of filteredProducts){
  	product.option = selectedProducts[product._id]

  	
  	const lineElement = document.createElement('tr')
  	const articleElement = document.createElement('td')
  	articleElement.textContent = product.name;
  	const priceElement = document.createElement('td')
  	priceElement.textContent = product.price/100 + '€';
  	const imageElement = document.createElement('img')
  	imageElement.src = product.imageUrl;
  	const colorElement = document.createElement('td')
  	colorElement.textContent = product.option;
  	

  	lineElement.appendChild(articleElement);
  	lineElement.appendChild(priceElement);
  	lineElement.appendChild(imageElement);  	
  	lineElement.appendChild(colorElement)
  	tableElement.appendChild(lineElement);
  }

}

function recalculPrice(filteredProducts){
   const newprice = filteredProducts.reduce((acc,cur)=> acc + cur.price,0)
   document.getElementById('prixrecalcule').textContent = newprice/100;

}


function displayTotal(filteredProducts){
   const total = filteredProducts.reduce((acc,cur)=> acc + cur.price,0)
   document.getElementById('total').textContent = total/100;

}

async function init(){
	const selectedProducts = await readStorage()
	console.log(selectedProducts)
    const products = await getProducts()
    console.log(products)
    const filteredProducts = products.filter(
    	(product)=>selectedProducts[product._id])
    console.log(filteredProducts)
    displaySelectedProducts(filteredProducts,selectedProducts)
    displayTotal(filteredProducts)

    const formElement = document.getElementById('myForm')
    formElement.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    	console.log(evt.target)
    	if(isFormValid(evt.target)){
        await sendOrder(evt.target, filteredProducts,selectedProducts)
    	}


    })

  }


init() 

async function sendOrder(form,filteredProducts,selectedProducts){
const nomElement
const prenomElement
const emailElement
const adressElement
const villeElement

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FORMULAIRE DE COMMANDE//

//Mes coordonnées

var nomElt = document.getElementById("nom");
nomElt.value = "MonNom";

function isFormValid(form){
 const nomElement = form.nom;
 const prenomElement = form.prenom;
 const emailElement =form.courriel;
 const adressElement = form.adress;
 const villeElement = form.ville;

const regexCourriel = /.+@.+\..+/;
    const validiteCourriel = "";
    if (!regexCourriel.test(emailElement.value)) {
        alert('insérer un email valide');
        return false
    }

if (nomElement.value.length<3){
    alert ('inserer un nom valide');
    return false

}
if (prenomElement.value.length<3){
    alert ('inserer un prénom valide');
    return false
}

if (adressElement.value.length<3){
    alert ('inserer une adresse valide');
    return false

}

if (villeElement.value.length<3){
    alert ('inserer un nom de ville valide');
    return false

}

return true
}