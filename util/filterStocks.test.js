const {filterStocks} = require("./filterStocks");
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const {testData_1, testData_2, testData_3} = require("./testData");
const testData = [testData_1, testData_2, testData_3]

const schema = {
    type: 'array',
    properties: {
        ticker: { type: 'string' },
        name: { type: 'string' },
        sector: { type: 'string' },
        value: { type: 'integer' },
    },
    required: ['ticker', 'name', 'sector', 'value'],
    additionalProperties: false
};

testData.forEach( data => it('validates my json', () => {
    let sample = filterStocks(data)
    expect( sample ).toMatchSchema(schema)
    console.log( sample )
}))
