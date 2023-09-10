"use strict";

// let student1 = {
//     name: "Elsad",
//     surname: "Ceferli",
//     age: 18,
//     email: "elsade23@mail.ru"
// }

// let student2 = {
//     name: "Sadiq",
//     surname: "Memmedov",
//     age: 22,
//     email: "sadiq@mail.ru"
// }

// let student3 = {
//     name: "Murad",
//     surname: "Veliyev",
//     age: 23,
//     email: "murad@mail.ru"
// }

// let student4 = {
//     name: "Emin",
//     surname: "Imanov",
//     age: 25,
//     email: "emin@mail.ru"
// }

// let student5 = {
//     name: "Vusal",
//     surname: "Feyzullayev",
//     age: 28,
//     email: "vusal@mail.ru"
// }


// let students =  [student1, student2, student3, student4, student5];

// function student() {
//     let count = 0;
//     for (const student of students) {
        
//         if (student.age > 18 && student.age < 25) {
//             count++;
//         }
//       }
//       console.log(count);
// }
// student(students);

  
let student1 = {
    name: "Elsad",
    surname: "Ceferli",
    age: 18,
    email: "elsade23@mail.ru"
}

let student2 = {
    name: "Sadiq",
    surname: "Memmedov",
    age: 22,
    email: "sadiq@mail.ru"
}

let student3 = {
    name: "Murad",
    surname: "Veliyev",
    age: 23,
    email: "murad@mail.ru"
}

let student4 = {
    name: "Emin",
    surname: "Imanov",
    age: 25,
    email: "emin@mail.ru"
}

let student5 = {
    name: "Vusal",
    surname: "Feyzullayev",
    age: 28,
    email: "vusal@mail.ru"
}


let students =  [student1, student2, student3, student4, student5];

function student() {
    for (const student of students) {
       student.includes("c")
      }
      console.log();
}
student(students);
  
    
if (student.email == "c") {
    count++;
}