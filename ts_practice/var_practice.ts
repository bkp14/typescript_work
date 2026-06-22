function fn(){
    if(true){
        var  localvar =10;
      console.log(localvar);

    }
    console.log("out of if"+localvar)
    function nested(){
            console.log("nested"+localvar)

    }
    nested()
}
fn()