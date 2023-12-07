import { v4 as uuid } from 'uuid'

let myUuid = uuid()
console.log(myUuid)

type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User ={
    id: string,
    name: string,
    age: number,
    cart: Item[]
}

function createUser (newAge:number, newName:string) {
    let newUser:User={
        id: uuid(),
        name: newName,
        age: newAge,
        cart: []
    }

    return newUser
}

function createItem (newName:string, newPrice:number, newDesc:string) {
    let newItem:Item={
        id: uuid(),
        name: newName,
        price: newPrice,
        description: newDesc
    }

    return newItem
}

function addToCart(item:Item, user:User) {
    user.cart.push(item)
}

function removeFromCart(item:Item, user:User) {
    for(let i = 0; i < user.cart.length; i++){
        if(user.cart[i] == item){
            delete user.cart[i]
        }
    }
}

function printCart(user:User){
    console.log(user.cart)
}


let user1:User = createUser(23, "Javi");

let ItemA = createItem("Apples", 1.00, "Tasty red apples")

let ItemB = createItem("Bananas", 1.52, "Bright yummy yellow bananas")

let ItemC = createItem("Grapes", 2.32, "Bunch of delicious juicy red grapes")

let ItemD = createItem("Apple Juice", 2.00, "Apple juice, what can you say?")

addToCart(ItemA, user1)

printCart(user1)

console.log(user1.cart[0].price)

addToCart(ItemB, user1)
addToCart(ItemC, user1)
addToCart(ItemD, user1)

let totalPrice = 0
for (let i = 0; i < user1.cart.length; i++){
    totalPrice += user1.cart[i].price

}
console.log(`Total price: $${totalPrice}`)

