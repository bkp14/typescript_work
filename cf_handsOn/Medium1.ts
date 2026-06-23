import readline from 'readline';
import { stdin as input,   stdout as output} from 'process'

async function  main() {

    let  rl =readline.promises.createInterface({input,output})
    let val = await rl.question("enter the age: ")
    rl.close()
    let ages = Number(val)
    if(ages<=0){
        console.log("invalid age")
    }
    else if(ages <= 12){
        console.log("Cartoon Club")

    }
    else if(ages>=13 && ages <=19){
       console.log("Teens club")
    }
    else if (ages>= 20){
    console.log("not allowed")
    }
    else{
        console.log("enter a valid input ")
    }
    
}
main()