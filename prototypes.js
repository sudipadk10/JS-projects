let myHeros = ['spyderman', 'thor']

let heroPower = {
    'spyderman': 'super strength',
    'thor': 'lightning',
    getSpiderPower : function(){
        console.log(`Power of spyderman is ${this.spyderman}`);
        
    }
}

Object.prototype.display = function(){  //creating our own method in object
    console.log(this);
}

Array.prototype.show = function() {
    console.log(this);
    
}

// heroPower.display();
// myHeros.display();  //method made on object can be accessed by array .

// myHeros.show();
// heroPower.show()  // but method made on array can't be accessed by object.


//Inheritence

const person = {
    name: 'John',
    age: 30
}

const teacher = {
    tid : 1,
    subject : 'Math'
}

const teacherLead ={
    depart : 'science',
    __proto__ : teacher // inheriting properties of teacher object 
}

// teacher.__proto__ = person;  // inheriting properties of person object
Object.setPrototypeOf(teacher, person) // same as above but more modern way

let username = '  Sudip     ';
// console.log(username.length); //12  ; But we need true value of length which is 5 so we can do that by ,
// console.log(username.trim().length); //5 

// But what if we need to do this many time ? better we make a method truelength so that you can easily get the true length of string .
String.prototype.truelength = function(){
    console.log(`True length of string is ${this.trim().length}`);
}

username.truelength()
" myname ".truelength()