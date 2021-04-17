const models = require("../database/models");
const sampleData =
    [
        {
            "ticker":"ETSY",
            "name":"Etsy",
            "sector":"Commercial Services",
            "values":"321"
        },
        {
            "ticker":"VZ",
            "name":"Verizon",
            "sector":"Communications",
            "values":"124"
        },
        {
            "ticker":"APPL",
            "name":"Amazon",
            "sector":"Electronic Technology",
            "values":"25"
        },
        {
            "ticker":"",
            "name":"AT&T",
            "sector":"Communications",
            "values":"221"
        },
        {
            "ticker":"GME",
            "name":"GameStop",
            "sector":"Retail",
            "values":"420"
        },
        {
            "ticker":"TSLA",
            "name":"Tesla",
            "sector":"Consumer Durables",
            "values":"123"
        },
        {
            "ticker":"MRNA",
            "name":"Moderna",
            "sector":"Health Technology",
            "values":"154"
        },
        {
            "ticker":"COKE",
            "name":"Coca-Cola",
            "sector":"Consumer non-durables",
            "values":"231"
        },
        {
            "ticker":"BAC",
            "name":"Bank of America",
            "sector":"Finance",
            "values":"157"
        },
        {
            "ticker":"FDX",
            "name":"FedEx",
            "sector":"Transportation",
            "values":"207"
        }
    ]

const get1h = async (req, res) => {
    try {
        return res.status(200).json(sampleData);
    } catch (e) {
        return res.status(500)
    }
}

const get1d = async (req, res) => {
    try {
        return res.status(200).json(sampleData);
    } catch (e) {
        return res.status(500)
    }
}

const get1w = async (req, res) => {
    try {
        return res.status(200).json(sampleData);
    } catch (e) {
        return res.status(500)
    }
}

/* query all config and haiku data */
const getAll = async (req, res) => {
    try {
        const stocks = await models.Stock.findAll();
        return res.status( 200 ).json( { stocks } );
    } catch ( e ) {
        return res.status( 500 )
    }
}

module.exports =
    {
        get1h,
        get1d,
        get1w,
        getAll
    }
