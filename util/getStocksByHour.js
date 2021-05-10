const moment = require('moment')
const { Op } = require('sequelize')
const models = require("../database/models");

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

module.exports = { getStocksByHour }
