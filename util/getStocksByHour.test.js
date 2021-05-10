const {getStocksByHour} = require('./getStocksByHour')
const moment = require('moment')

const hours = [...Array(169).keys()]

describe("Test stock dates", () => {
    hours.map( h => {
        it("Should return values greater than date - hour", async () => {
            const timezoneAdjustment = 7
            const date = moment().subtract(timezoneAdjustment + h, 'hours').toDate()
            const stocks = await getStocksByHour(h)
                .then(stocks => Array.from(JSON.parse(JSON.stringify(stocks))))
            expect( stocks.some(s => s.date < date) && !stocks.some(s => s.date >= date)).toEqual(false);
        })
    })
})

