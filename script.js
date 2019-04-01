var clothes = {
    shirts: 5,
    pants: 5,
    shoes: 5,
    jackets: 2,
    hats: 3,
    //function or "method" is here
    
    
   calcStuff: function(a) {
        return this.stuff = a + this.shirts;
   }  
    
};

console.log(clothes.calcStuff());

//Helpful code?
//document.getElementById(".fb").innerHTML = clothes.calcStuff();

var food = {
    water: 5,
    steak: 15,
    apple: 10,
    juice: 4,
    canSoup: 6,
    //function or "method" is here
    calcStuff: function(b) {
        return this.stuff = b + this.water;
    }
};

var weapons = {
    knives: 5,
    pistols: 1,
    assaultRifles: ["Ak-47", "M16", "SCAR", "M4 Carbine", "Galil"],
    Shotguns: 3,
    extra: ["Crossbow", "Bow", "Shield", "Grenade"],
    //function or "method" is here
    calcStuff: function(c) {
        return this.stuff = c + this.knives;
    }
};

var drop;
var dropVal;
var ipt;
document.getElementById('btn').addEventListener('click', function() {
    ipt = document.querySelector(".iptVal").value;
    //alert(ipt);
    drop = document.querySelector(".gear");
    dropVal = parseInt(drop.options[drop.selectedIndex].value);
    console.log (dropVal);
    
    switch(dropVal){
        //alert("You now have 6 shirts");
        //document.querySelector(".fb").innerHTML = clothes + "You now have 6 shirts";
        
        case 1: document.querySelector(".fb").innerHTML = "You now have " + clothes.calcStuff(parseInt(ipt)) + " shirts";
        break;
        case 2: document.querySelector(".fb").innerHTML = "You have collected " + food.calcStuff(parseInt(ipt)) + " water bottles";
        break;
        case 3: document.querySelector(".fb").innerHTML = weapons.calcStuff(parseInt(ipt)) + " knives have been added to your arsenal";
        break;
        case 4: alert("Hi Donohue!");
        break;
        default: console.log("Raid failed. Zombies are surrounding you! Retreat!!! ");
        
    }
    
    switch(dropVal){
        case 4: document.querySelector(".fb").innerHTML = " Done! But still gonna work on this and make it better!";
        break;
        }

    
});

// HTML - input, dropdown, button
// Objects created
// getting values from input and from dropdown
// add value to array cosmo.family- .push()