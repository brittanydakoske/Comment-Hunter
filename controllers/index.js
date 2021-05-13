const {getStocksByHour} = require("../util/getStocksByHour");
const {filterStocks} = require("../util/filterStocks");


const get1h = async (req, res) => {
    try {
        return getStocksByHour( 1 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ).slice(0, 10) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get12h = async (req, res) => {
    try {
        return getStocksByHour( 13 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ).slice(0, 10) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get24h = async (req, res) => {
    try {
        return getStocksByHour( 25 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ).slice(0, 10) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

module.exports =
    {
        get1h,
        get12h,
        get24h,
    }

