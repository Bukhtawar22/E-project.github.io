// AND operator  / OR operator

let firstName = "bukhtawar";
let age = 24;

if (firstName[0] === "b") {              //ye hum condition check krrhy hein  
    console.log("your name start with b");
} 

if (age > 18) {
    console.log("your are above 18"); // is m bhi hum conditional check kr rhy hein

}
/*************************************************************** */
/// agr hum ek saat condition check krna chate hein inn dono ko to hum ye use krte hein ==>>>>>>>  using [AND operator "&&"]

if (firstName[0] === "b" && age>18) {   // agr dono condition ture hein toh overall condition ture hogi wrna nahi hogi (AND &&)

    console.log("Name start with b and you r above 18");   
}else{
    console.log("inside else");
} 
////////////////////////////////////////////////////////////////////////                                                                        //  (OR operatot '||') agr dono mein sy ek bhi ture hogi toh if wali condition run hojy gi

if (firstName[0] === "B" || age>18) {
console.log("inside if");   
}else{
    console.log("inside else");
}