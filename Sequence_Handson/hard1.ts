let val_r:number=5
let val_angle:number=60
const val_diameter=2*val_r;
const val_circumference=2*Math.PI*val_r;
const val_sectorArea=(val_angle/360)*Math.PI*val_r*val_r;
const val_arcLength=(val_angle/360) *2*Math.PI*val_r;
console.log("Radius:", val_r);
console.log("Diameter:", val_diameter);
console.log("Circumference:", val_circumference);
console.log("Sector Area: ", val_sectorArea);
console.log("Arc Length: ", val_arcLength);