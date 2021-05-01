
/* "name": "TOPICS", "children": [{
        "name": "Topic A",
        "children": [
            {"name": "Sub A1", "size": 4},
            {"name": "Sub A2", "size": 4}]
    }, {
        "name": "Topic B",
        "children": [{"name": "Sub B1", "size": 3},
         {"name": "Sub B2", "size": 3}, 
         {"name": "Sub B3", "size": 3}]
    }, {
        "name": "Topic C",
        "children": [
            {"name": "Sub C1", "size": 4},
            {"name": "Sub C2", "size": 4}]
    }]
   }*/

   

//    import {sampleData} from "../../../controllers/index"
const empty = "there is no data to display" ;
const large = " the array size is too large";

export function dataFormat(input){
   if (!input){
       return null
   }

   if (input.length === 0){
   return null;
   }
       else if (input.length > 10) {
       return large;
       }
let doneFormat = { 
    name:"stocks", 
    
}
const sectors= new Set(input.map((stock)=> {return stock.sector}   ))
let children = []
sectors.forEach(sector => {
   children.push({name: sector, children: []})
});
input.forEach(stock=>{ 
let index = children.findIndex(s => s.name === stock.sector)
children[index].children.push({name: stock.name , size: stock.value})

})
doneFormat["children"]= children

console.log(doneFormat)

return doneFormat
}

// }
// const sampleData =
//    [
//        {
//            "ticker":"ETSY",
//            "name":"Etsy",
//            "sector":"Commercial Services",
//            "values":"321"
//        },
//        {
//            "ticker":"VZ",
//            "name":"Verizon",
//            "sector":"Communications",
//            "values":"124"
//        },
//        {
//            "ticker":"APPL",
//            "name":"Amazon",
//            "sector":"Electronic Technology",
//            "values":"25"
//        },
//        {
//            "ticker":"",
//            "name":"AT&T",
//            "sector":"Communications",
//            "values":"221"
//        },
//        {
//            "ticker":"GME",
//            "name":"GameStop",
//            "sector":"Retail",
//            "values":"420"
//        },
//        {
//            "ticker":"TSLA",
//            "name":"Tesla",
//            "sector":"Consumer Durables",
//            "values":"123"
//        },
//        {
//            "ticker":"MRNA",
//            "name":"Moderna",
//            "sector":"Health Technology",
//            "values":"154"
//        },
//        {
//            "ticker":"COKE",
//            "name":"Coca-Cola",
//            "sector":"Consumer non-durables",
//            "values":"231"
//        },
//        {
//            "ticker":"BAC",
//            "name":"Bank of America",
//            "sector":"Finance",
//            "values":"157"
//        },
//        {
//            "ticker":"FDX",
//            "name":"FedEx",
//            "sector":"Transportation",
//            "values":"207"
//        }
//    ]
// var testAr =  [
//     {
//         "ticker":"ETSY",
//         "name":"Etsy",
//         "sector":"Commercial Services",
//         "values":"321"
//     }]

//     var formatEnd = dataFormat(sampleData);
// console.log(formatEnd)
