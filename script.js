// Function Constructor
/*var Person = function(name, 
    yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;     
}

//Function Prototype Method (Inheritance)
Person.prototype.calculateAge = 
function (){
    console.log(2016 - this.yearOfBirth);
};
// Function prototype property
Person.prototype.lastName = 'Smith';

// Instantaniation
var john = new Person('John', 1996, 'Developer');
var jane = new Person('Jane', 1998, 'Designer');
var mark = new Person('Mark', 1986, 'Driver');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/




// Object.Create
// Prototype
/*
var personProto = {
    calculateAge : function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name : {value : 'Jane'},
    yearOfBirth : { value : 1969},
    job : {value : 'Designer'}
});*/



//Prmimitive vs Objects

//Primitives
/*var a = 23;
var b = a;
a = 46;
console.log(a,b);

//Objects
var obj1 = {
    name : 'John',
    age : 26
};

var obj2 = obj1; // New reference that points to obj1
                // both obj1 and obj2 points to the same object in memory


obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Function
var age = 27;
var obj = {
    name : 'Debjit',
    city : 'Kolkata'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age); 
console.log(obj.city);*/



/*
// Old way of defining objects
var debjit = {
    name : 'Debjit',
    yearOfBirth : 1999,
    calculateAge : function () {
        console.log(2019 - this.yearOfBirth);
    }
};
debjit.calculateAge();



// Function constructor
var Person = function (name, yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth ;
    this.job = job;
}
// function Prototype
Person.prototype.calculateAge = 
function() {
    console.log(2019 - this.yearOfBirth);
}


var dan = new Person('Dan', 1995, 'CEO');
console.log(dan);

var mike = new Person('Mike', 1978, 'Driver');
console.log(mike);

dan.calculateAge();
mike.calculateAge();*/




//Function Constructor
/*
var People =  function (firstName, lastName, job, yearOfBirth) {
    this.firstName = firstName ;
    this.lastName = lastName;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

// Function Prototype
People.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

// Create New Objects from the function constructor
var obj1 = new People('dan', 'smith', 'Driver', 1945);
var obj2 = new People('john', 'smith', 'Artist', 1978);
var obj3 = new People('mike', 'smith', 'Designer', 1986);
var obj4 = new People('jane', 'smith', 'Developer', 1990);

obj1.calculateAge();
obj2.calculateAge();
obj3.calculateAge();
obj4.calculateAge();
*/


// Passing function as Arguments
/*
var years = [1990,1965, 1937, 2015, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];    
    for (var i = 0; i < arr.length;i++) {
            arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullage (el) {       //callback function
    if (el >= 18) {return true;}
    else { return false;}
}

function maxHeartRate (el) {    // callback function
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else
        return -1;
}

function calculateAge(el) {        // Callback function
    return (2019 - el);
}

var ages = arrayCalc(years,calculateAge);
var rates = arrayCalc (ages, maxHeartRate);
var fullages = arrayCalc(ages,isFullage);

console.log(ages);
console.log(fullages);
console.log(rates);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name) { // Anonymous function
            console.log(name + ', can you please explain what UX design is this ?');
        }
    }
    else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach ? ');
        }
    }
    else {
        return function (name) {
            console.log('Hello '+name+ ' what do you do ?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


designerQuestion('John');
teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/




// IIFE

/*function game() {
    var score = Math.random() * 10 ;
    console.log(score, score>=5);

 }
 game();*/

 //IIFE
 /*
(function() {
    var score = Math.random() * 10 ;
    console.log(score>=5);
})();

//console.log(score);

(function(goodLuck) {
    var score = Math.random() * 10 ;
    console.log(score>=5-goodLuck);
})(5);
*/

// Closures
/*

function yearsUntilRetirement(retirementAge) {
    var a = ' years until retirement.'
    return function (yearOfBirth) {
        var age = 2019- yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retireUS = yearsUntilRetirement(65);
retireUS(1999);

yearsUntilRetirement(60)(1999);



function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher')
            console.log(name + ', which subject do you teach?');
        else if (job === 'designer') 
            console.log(name + ', please explain this UX design');
        else 
            console.log(name + ', what do you do ?');
        }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion ('designer');

teacherQuestion('Mark');
designerQuestion('John');

interviewQuestion('teacher')('Jane')
*/


// Call, Bind , Apply
/*
var john = {
    name : 'John', 
    age : 26,
    job : 'teacher',
    presentation : function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m '+ this.name + ', I\'m  a ' + this.job + ' and I\'m ' + this.age + ' years old');
        } 
        else if(style === 'friendly') {
            console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m  a ' + this.job + ' and I\'m ' + this.age + ' years old');
        } 
        }
    };
john.presentation('formal', 'morning');

var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
};
//CAll
john.presentation.call(emily, 'friendly', 'afternoon');


//john.presentation.apply(emily, ['friendly', 'night']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
johnFriendly('afternoon');

//console.log(john,emily);

*/

(function () {
    // Function Constructor 
    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.selectQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length;i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correctAnswer) {
            console.log('Correct answer');
        }else {
            console.log('Wrong Answer');
        }
    }   
        
    var questionOne = new Question('Is JavaScript the most popular programming language ? ', ['Yes','No'], 0);
    var questionTwo = new Question('What is your instructors name', ['Mark','John', 'Jonas'], 2);
    var questionThree = new Question('What does best describe Coding ? ', ['Bring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [questionOne, questionTwo, questionThree];
    
    var r = Math.floor(Math.random() * questions.length) ;
    questions[r].selectQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer :=')) ;
    console.log(answer);
    
    questions[r].checkAnswer(answer);
})();







































































































































































































