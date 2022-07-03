function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ?? "null extra"}`)
}

printIngredient("1C", "Flour")
printIngredient("1C", "Suger", "some thing more")

interface User {
    id: string
    info?: {
        email?: string
    }
}

function getEmail(user: User): string {
    return user?.info?.email ?? "empty"
}


console.log(getEmail({ id: "123" }))
console.log(getEmail({ id: "123", info: { email: "email.com" } }))

function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial
    return [
        () => str,
        (v: string) => {
            str = v
        }
    ]
}

const[str1getter, str1setter] = simpleStringState("hello")
const[str2getter, str2setter] = simpleStringState("jack")
console.log(str1getter())
console.log(str2getter())
str1setter("goodbye")
console.log(str1getter())
console.log(str2getter())