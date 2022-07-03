import { classicNameResolver } from "typescript"

interface Database {
    get(id: string): string
    set(id: string, value: string): void
}

interface Persistable {
    saveToString(): string
    restoreFromString(storedStage: string): void
}


class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {}
    get(id: string): string {
        return this.db[id]
    }
    set(id: string, value: string): void {
        this.db[id] = value
    }
}

class PersistenMemoryDb extends InMemoryDatabase  implements Persistable{
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