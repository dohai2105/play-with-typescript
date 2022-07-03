export function printToFile(text: string, callback: () => void): void {
    console.log(text)
    callback()
}

type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], (v) => v * 10))


type AdderFunction = (v: number) => number;

// closure
export function createAdder(num: number): AdderFunction {
    return (val: number) => num + val
}

const addOne = createAdder(3)
console.log(addOne(55))