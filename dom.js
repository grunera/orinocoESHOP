function getMyApp() {
    return document.getElementById("app")
}

function changeAppStyle(element) {
    element.setAttribute("class", "myApp")
}

function createText(content) {
    const textElement = document.createElement("h1")
    textElement.textContent = content;
    return textElement;
}

function insertElement(parent, child) {
    parent.appendChild(child);
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

const getData = async () => {
    return [
        {
            name: "moto"
        },
        {
            name: "voiture"
        },
        {
            name: "maison"
        }
    ]
}

const init = async () => {
    const data = await getData()
    console.log(data)
    const myApp = getMyApp()
    changeAppStyle(myApp)
    for (let product of data) {
        const textElement = createText(product.name)
        insertElement(myApp, textElement)
        //textElement.addEventListener("click", () => changeBackgroundColor(myApp, "yellow"))
    }
    
    
}

init()


