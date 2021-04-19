const moment = require('moment')
const models = require("../database/models");
const { Op } = require('sequelize')

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
    return set.sort( (a, b) => b.value - a.value).slice(0, 20)
}

const get1h = async (req, res) => {
    try {
        const stocks = await models.Stock.findAll({
            where: {
                date: {
                    [Op.gte]: moment().subtract(1, 'hours').toDate()
                }
            }
        })
        return res.status( 200 ).json( filterStocks( stocks ) );
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get1d = async (req, res) => {
    try {
        const stocks = await models.Stock.findAll({
            where: {
                date: {
                    [Op.gte]: moment().subtract(1, 'days').toDate()
                }
            }
        })
        return res.status( 200 ).json( filterStocks( stocks ) );
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get1w = async (req, res) => {
    try {
        const stocks = await models.Stock.findAll({
            where: {
                date: {
                    [Op.gte]: moment().subtract(1, 'weeks').toDate()
                }
            }
        })
        return res.status( 200 ).json( filterStocks( stocks ) );
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

