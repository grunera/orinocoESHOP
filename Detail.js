

/*
* create the div.produit elment corresponding to the given product
* The created element receives the id "index-product" where index is replaced by param's value
* @param product (product object) = the product for which the element is created
* @param index (int) = the index of the product in catalog, used to set the id of the created element
*/
var createProduct = function (product, index) {
    // build the div element for product
    var block = document.createElement("div");
    block.className = "produit";
    // set the id for this product
    block.id = index + "-" + productIdKey;
    // build the h4 part of 'block'
    block.appendChild(createBlock("h4", product.name)); 
    // add the figure of the product...
    block.appendChild(createFigureBlock(product.imageUrl, "imageUrl"));
    // build and add the div.description part of 'block' 
    block.appendChild(createBlock("div", product.description, "description"));
    // build and add the div.price part of 'block'
    block.appendChild(createBlock("div", product.price, "prix"));
    // build and add control div block to product element
    block.appendChild(createOrderControlBlock(index));
    return block;
}




