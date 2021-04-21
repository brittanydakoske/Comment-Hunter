const moment = require('moment')
const models = require("../database/models");
const {filterStocks} = require("../util/filterStocks");
const { Op } = require('sequelize')

const getStocksByHour = async ( hours ) => {
    const timezoneAdjustment = 7
    const date = moment().subtract(timezoneAdjustment + hours, 'hours').toDate()
    return await models.Stock.findAll({
        where: {
            date: {
                [Op.gte]: date
            }
        },
        order: [['date', 'DESC']]
    })
}

const get1h = async (req, res) => {
    try {
        return getStocksByHour( 1 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get1d = async (req, res) => {
    try {
        return getStocksByHour( 25 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ) ))
    } catch ( e ) {
        return res.status( 500 )
    }
}

const get1w = async (req, res) => {
    try {
        return getStocksByHour( 169 )
            .then( stocks => res.status( 200 ).json( filterStocks( stocks ) ))
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

