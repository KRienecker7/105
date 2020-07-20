//object literal for the pet salon (one)
//name,phone,address(street,number),

const salon={
    name:"Pet Grooming for All Paws!",
    phone:"555-555-5555",
    address:{
        number:"528",
        street:"Univeristy Ave"
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


//console.log(pets);

//object constructor for the pets (mutltiple)
//name,age,breed,gender,service,ownerName,contactPhone
var petId=0;
class pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age
        this.breed=breed
        this.gender=gender
        this.service=service
        this.ownerName=ownerName
        this.contactPhone=contactPhone
        this.id=petId;
        petId+=1;
    }
}
//create pets
const scooby = new pet("Scooby",60,"Dane","male","Full Service","Shaggy","555-666-7788");
const saber = new pet("Saber",6,"Shepherd","male","Hair Cut","Kenny","444-666-7788");
const gracie = new pet("Gracie",8,"PitBull","female","Bath and Nail Trim","Kenny","333-666-7788");

pets.push(scooby);
pets.push(saber);
pets.push(gracie);

displayTable(saber);
displayTable(gracie);

//geting the values form the HTML inputs
var txtName=document.getElementById("petName");
var txtAge=document.getElementById("petAge");
var txtBreed=document.getElementById("petBreed");
var txtGender=document.getElementById("petGender");
var txtService=document.getElementById("petService");
var txtOwner=document.getElementById("ownerName");
var txtPhone=document.getElementById("contactPhone");


//register function
function register(){

    const thePet = new pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value)
    console.log(thePet);
    //push the pet to the array
    pets.push(thePet);
    console.log(pets);
    //call the counter function
    //counter();0
    clear();
    //display on console the pets
    displayTable(thePet);

}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtOwner.value="";
    txtPhone.value="";
   
}

function status(){
    alert("register pets:" + pets.length);
    console.log("Registered pets:" + pets.length);
    
    //travel the array to display pets name
    for (i=0;i<3;i++){
        console.log(pets[i].name);
    }
}

//status();

function displayList(aPet){
    //select the HTML element petList
    var list= document.getElementById("petList");
    //create the li code for the pet
    var li=`
    <li id="${aPet.id}"> ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.service} ${aPet.ownerName} ${aPet.contactPhone}
    <button onclick="deletePet(aPet.Id)">Delete</button></li>`;
    //insert the li in the petList
    list.innerHTML+=li;
}

displayTable(scooby); //display the pet in a li *** change ***

function displayTable(aPet){
    //** register.html create a <table id= ""></table> **without row
    var table= document.getElementById("petTable");
    //select the table $ or js (getElementById)
    var tr=`
    <tr id="${aPet.id}"><td>${aPet.name}</td><td>${aPet.age}</td><td>${aPet.breed}</td><td>${aPet.gender}</td><td>${aPet.service}</td><td>${aPet.ownerName}</td><td>${aPet.contactPhone}</td><td><button onclick="deletePet(${aPet.id});">Delete</button></td></tr>`;

    //create a table row <tr> <td>name</td> <td>age</td></tr>
    
    //insert the <tr> in table
    table.innerHTML+=tr;
  }

  function deletePet(petId){
    console.log("delete pet " + petId);
    //add and id to the tr/li and add a delete button
    var indexDelete;
    var tr=document.getElementById(petId)
    //search the pet (travel array and find the pet)
    for(var i=0;i<pets.length;i++){
        var selectedId=pets[i].id;
        if(selectedId===petId){
            indexDelete=i;
        }
    }
    //deleter from array  splice()
    pets.splice(indexDelete,1);
    //delete from html     remove()
    tr.remove();
  }

  function search(aPet){
      //get the info from the input and save it in a var .value [line 56])
      var animal=document.getElementById("searchPet").value;
      //txt search
      console.log(animal);
    for(var i=0;i<pets/length;i++)
        var foundPet=pets[i];
        if(foundPet.name.toLowerCase()==animal.toLowerCase()){
          //do something to highlight the result on the table
          console.log("Found"+foundPet.id);

          //CR HomeWork to highligh the result on the table
          //do something to highlight results
          //use the id setAttribute("id, class, src, href", "http//www.google.com");
          //add css to the inputs and to the table(bootstrap)
        }
        else{
              console.log("It doesn't exist");
         }
      }