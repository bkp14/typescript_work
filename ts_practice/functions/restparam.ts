function sum(a:number,...b:number[]){
   let res:number = a
   for (var i =0;i<b.length;i++){
    res+=b[i]

   }
   console.log(res)
}
sum(3,5)
sum(3,2,3,4)
sum(3,-1,-4,-8)