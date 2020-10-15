


function displayConfirmation(orderId,total) {
    document.getElementById('confirmation').textContent = `Nous vous confirmons que la commande ${orderId}, pour un montant de ${parseInt(total)/100} €, a bien été prise en compte`;
    localStorage.clear()
}



function init() {

    const params = (new URL(document.location)).searchParams;
    const orderId = params.get("order_id")

    if(!orderId) document.location.href = "index.html"
    const total = localStorage.getItem('total_order')
    displayConfirmation(orderId, total)

}

init()