
const {dataFormat} = require("./components/dataFormat");
const {testData_1, testData_2, testData_3} = require("./components/datatest");
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
    it('jsonTest', () => { expect( dataFormat(data) ).toMatchSchema( schema ) })
})
