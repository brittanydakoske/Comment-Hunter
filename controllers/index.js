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

const get1d = async (req, res) => {
    try {
        return getStocksByHour( 25 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ).slice(0, 10) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get1w = async (req, res) => {
    try {
        return getStocksByHour( 169 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ).slice(0, 10) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

module.exports =
    {
        get1h,
        get1d,
        get1w,
    }

