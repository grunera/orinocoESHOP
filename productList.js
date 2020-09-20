class Product 
{
	constructor(pId, pImageUrl, pName, pPrice)
	{
	     this.id  = pId;
         this.imageUrl = pImageUrl;
         this.name = pName;
         this.price = pPrice;
	}
}   

//A remplacer plus tard par l'utilisation du json
//const prod1 = new Product(1,);
//const prod2 = new Product(2,);
//const prod3 = new Product(3,);
//const prod4 = new Product(4,"./images/teddy_4.jpg","Gustav",45.00);
//const prod5 = new Product(5,"./images/teddy_5.jpg","Garfunkel",55.00);

//En dehors de populateTableList3 sinon ne sera pas visible par AjouteLigneProduit
var listOfProducts = "";


//Fonction appelée lors du clic sur le bouton "Show all"
const populateTableList3=async()=>{
       
        
	const productsResource = await fetch ("http://localhost:3000/api/teddies")
	const products = await productsResource.json ()
	console.log (products)
    	//products.push(prod1,prod2,prod3,prod4,prod5);

      	products.forEach(AjouteLigneProduit);

	document.getElementById("productArray").innerHTML = listOfProducts;

    }



function AjouteLigneProduit(prod)
{
listOfProducts += "<tr class=\"text-center\"><td>"+prod.id+"</td> <td><img src=\"" + prod.imageUrl + "\" class=\"img-fluid img-thumbnail w-50\"></td> <td class=\"w-25 align-middle\">" + prod.name + "</td> <td class=\"w-25 align-middle\">"+ prod.price + "€</td> <td class=\"w-25 align-middle\"><button id="btn btn-primary mt-2 mb-2" onclick="myFunction()";>View</button></td></tr>";  
}


//Fonction appelée lors du clic sur le bouton "view"

function myFunction() {
    window.open("Detail.html"); 
}
 





