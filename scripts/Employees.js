import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const employeeOrders = (id) => {
    let fulfilledOrders = 0
    // Iterate all of the order ids

    for (const order of orders) {
        // Does the employeeId foreign key match the id?
        if (order.employeeId === id) {
            // Increase the counter by 1
            fulfilledOrders++
        }
    }
    return fulfilledOrders
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was an employee list item clicked?
        if (itemClicked.dataset.type === "employee") {
            // Get the id of the employee clicked
            const employeeId = parseInt(itemClicked.dataset.id)
            // Start a counter variable at 0

            for (const employee of employees) {
                if (employeeId === employee.id) {
                    const orderCount = employeeOrders(employeeId)
                    window.alert(`${itemClicked.dataset.name} sold ${orderCount} products`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-name="${employee.name}"
                    data-id="${employee.id}" >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

