import { classicNameResolver } from "typescript"

interface Database<T> {
    get(id: string): T
    set(id: string, value: T): void
}

interface Persistable {
    saveToString(): string
    restoreFromString(storedStage: string): void
}


class InMemoryDatabase<T> implements Database<T> {
    protected db: Record<string, T> = {}
    get(id: string): T {
        return this.db[id]
    }
    set(id: string, value: T): void {
        this.db[id] = value
    }
}

class PersistenMemoryDb<T> extends InMemoryDatabase<T>  implements Persistable{
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedStage: string) : void {
        this.db = JSON.parse(storedStage)
    }
}

classicNameResolver
const myDb = new InMemoryDatabase()
myDb.set("foo", "bar")
// myDb.db["foo"] = "k"
console.log(myDb.get("foo"))

const myDb2 = new PersistenMemoryDb()
myDb2.set("foo", "bar")
const saved = myDb2.saveToString()

const myDb3 = new PersistenMemoryDb
myDb3.restoreFromString(saved)

console.log(myDb3.get("foo"))