let val_Quantities:string="10,20,5"
let val_prices:string="2.5,1.99,10.0"
var val_total=0
let val_allQuantites=val_Quantities.split(",")
let val_allPrices=val_prices.split(",")
for (let val_i = 0; val_i <val_allQuantites.length; val_i++) {
    val_total += Number(val_allQuantites[val_i]) * Number(val_allPrices[val_i]);
}
console.log(val_total)