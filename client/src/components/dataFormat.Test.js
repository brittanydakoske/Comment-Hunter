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
const {filterStocks} = require("./filterStocks");
const {testData_1, testData_2, testData_3} = require("./testData");
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const testData = [testData_1, testData_2, testData_3]

const schema = {
    type :'object',
    properties: {
        name: { type: 'string' },
        children:{ type: 'array' }
     
    },
    required: ['ticker', 'name', 'sector', 'value'],
    additionalProperties: false
};

testData.forEach( data => {
    it('jsonTest', () => { expect( filterStocks(data) ).toMatchSchema( schema ) })
})
module.exports = { filterStocks }