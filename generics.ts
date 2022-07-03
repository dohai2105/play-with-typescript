function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial
    return [
        () => val,
        (v: T) => {
            val = v
        }
    ]
}


const [strgetter, strsetter] = simpleState(10)
console.log(strgetter())
strsetter(62)
console.log(strgetter)

const [st2getter, st2setter] = simpleState<null | string>(null)
console.log(st2getter)
st2setter("test")
console.log(st2getter)

interface Rank<RankItem> {
    item: RankItem
    rank: number
}

function ranker<RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
): RankItem[] {
    const ranks = items.map((item) => ({
        item,
        rank: rank(item)
    }))
    ranks.sort((a, b) => a.rank - b.rank)
    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string
    hp: number
}

const pokemons: Pokemon[] = [
    {
        name: "test1",
        hp: 20
    },
    {
        name: "test2",
        hp: 5
    }
]

const rankers = ranker(pokemons, ({ hp }) => hp)
console.log(rankers)