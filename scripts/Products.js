import { getProducts } from "./database.js"

const products = getProducts()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a product list item clicked?
        if (itemClicked.dataset.type === "product") {
            // Get the id of the hauler clicked
            window.alert(`${itemClicked.dataset.name} costs $${itemClicked.dataset.price}`)
        }

    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-name="${product.name}" data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

