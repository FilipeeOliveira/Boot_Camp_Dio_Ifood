//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Filipe", 
    age: 22,
    products: {
        product0: ["Mouse Logitch g209", 79.90, ],
        product1: ["Teclado Mêcanico", 129.99],
        product2: ["Monitor", 899.99],
        product3: ["RTX 4070 TI", 4.449],
    }

}


generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------")


    for(let index in invoice.products){ /* o for in vai percorrer a lista products no invoice.products (lembrando que o for in vai de casa em casa automaticamente) */
        let [productName, productPrice] = invoice.products[index] /* aqui ele criar duas variaveis dentro dos [] para poder pegar as informacoes do invoice.products (lembrando que criou duas variaveis pq so tem duas informacoes que é o nome do produto e o valor, caso tivesse mais uma informacao era so criar mais uma varivavel) */
        console.log(`- ${productName}: ${productPrice}`) /* aqui ele mostra */
    }
}













/* let name = "Filipe"
let age = 22
let products = ["mouse logitech G209", "Teclado mecânico", "Monitor"]
let productsValues = [79.90, 129.99, 899.99]


generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é: " + name)
    console.log("A idade é: " + age)
    console.log("---------------")
    console.log("O produto é: " + products[0])
    console.log("O valor é: " + productsValues[0])
}
 */