let val_totalExpenses:number=3500.0
let val_expenses:string="350.00,400.00,500"
let val_allexpenses=val_expenses.split(",")
for (let val_i of val_allexpenses){
    val_totalExpenses-=Number(val_i)
}
console.log(val_totalExpenses)