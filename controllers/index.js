const moment = require('moment')
const models = require("../database/models");
const {filterStocks} = require("../util/filterStocks");
const { Op } = require('sequelize')


const get1h = async (req, res) => {
    try {
        const stocks = await models.Stock.findAll({
            where: {
                date: {
                    [Op.gte]: moment().subtract(8, 'hour').toDate()
                }
            }
        })
        return res.status( 200 ).json( filterStocks(stocks).slice(0, 10) );
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
        return res.status( 200 ).json( filterStocks(stocks).slice(0, 10) );
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
        return res.status( 200 ).json( filterStocks(stocks).slice(0, 10) );
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

