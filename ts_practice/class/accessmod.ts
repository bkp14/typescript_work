class car{
    public  brand:string
    private speed : number
    protected fuel :string
    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand;
        this.speed=speed;
        this.fuel=fuel;

    }
public accelerate(){
    this.speed+=10
    console.log(`accelerate with ${this.speed}`)
}
private refuel(){
    console.log(`refueling with ${this.fuel}`)
}
protected honk(){
    console.log("honk,honk")
}
public displayCarInfo(){
    console.log(`brand:${this.brand}`)
        console.log(`speeed:${this.speed}`)
    console.log(`fuel:${this.fuel}`)
this.refuel();
this.honk();
}
}
let mycar = new car("toyota",60,"Nitro")
console.log(`brand:${mycar.brand}`);
mycar.accelerate();
mycar.displayCarInfo()