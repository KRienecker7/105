//object literal for the pet salon (one)
//name,phone,address(street,number),

const salon={
    name:"Pet Grooming for All Paws!",
    phone:"555-555-5555",
    address:{
        street:"Ave. University",
        number:"528-k"
    },
    counter:function(){
        alert("A pet was registered!")

    },
    pets:[]
}


//object destructuring
let {name,phone,address:{street,number},counter,pets}=salon;
document.getElementById("footer-info").innerHTML=`
    <p class="text-center">${name} ${phone} <br> ${street}, ${number}</p>
`;


console.log(pets);

//object constructor for the pets (mutltiple)
//name,age,breed,gender,service,ownerName,contactPhone
class pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age
        this.breed=breed
        this.gender=gender
        this.service=service
        this.ownerName=ownerName
        this.contactPhone=contactPhone
    }
}
//create pets
const scooby = new pet("Scooby",60,"Dane","Full Service","555-666-7788");
const saber = new pet("Saber",6,"Shepherd","Hair Cut","444-666-7788");
const gracie = new pet("Gracie",8,"PitBull","Bath and Nail Trim","333-666-7788");

register(scooby);
register(saber);
register(gracie);

//register function
function register(aPet){
    //push the pet to the array
    pets.push(aPet);

    //call the counter function
    
    counter();
    //display on console the pets array
    console.log(aPet);
   
}
function status(){
    alert("register pets:" + pets.length);
    console.log("Registered pets:" + pets.length);
    
    //travel the array to display pets name
    for (i=0;i<3;i++){
        console.log(pets[i].name);
    }
}

status();