function readStorage(){
const storage = localStorage.getItem("shop")
return JSON.parse(storage)



}

async function getProducts(){
	const response = await fetch('http://localhost:3000/api/teddies')
    return response.json()

}

async function getOrderId(){
  const response = await fetch('http://localhost:3000/api/teddies/order_id')
    return response.json()

}

function displayTotal(filteredProducts){
   const total = filteredProducts.reduce((acc,cur)=> acc + cur.price,0)
   document.getElementById('total').textContent = total/100;

}

function displayOrderId(order_id){
  const orderId = document.getElementById('order_id')
}

async function init(){
	const selectedProducts = await readStorage()
	console.log(selectedProducts)
    const products = await getProducts()
    console.log(products)
    const filteredProducts = products.filter(
    	(product)=>selectedProducts[product._id])
    console.log(filteredProducts)
    displayOrderId(order_id)
    displayTotal(filteredProducts)

  }


init() 
