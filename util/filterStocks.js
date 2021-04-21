const filterStocks = ( stocks ) => {
    let set = []
    stocks.forEach( s => {
        let index = set.findIndex( elem => elem.name === s.name)
        index !== -1 ? set[index].value += 1 : set.push(
            {
                ticker: s.ticker,
                name: s.name,
                sector: s.sector,
                value: 1
            })
    })
    return set.sort( (a, b) => b.value - a.value)
}

module.exports = { filterStocks }
