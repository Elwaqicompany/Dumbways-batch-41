// console.log("hello world");

// variable

// var
// let
// const

// // var - bisa dideklarasikan ulang
// var name = "waqi"
// var name = "joko"


// // let - gak bisa dideklarasikan ulang
// let name = "abdullah"
// let school = "smait"

// // type data
// string = ""
// Number = angka
// boolean = true/false

// console.log("Hi, my name is abdullah");
// console.log("HI, my name is", name, "I like to eat", sego)
// console.log(`Hi, my name is ${name}, I like to eat ${food}`);

//Operator
// / : pembagian
// * : perkalian
// ** : perkalian berpangkat
// let x = 10
// let y = 20
// let result = x + y
// console.log(result);
// console.log(x*y);
// console.log(x/y);

// //condition
// // if - else if - else
// let score = 70

// if (score = 80) {
//     console.log("kamululus");
// } else if (scrore <= 70) {
//     console.log("maaf kamu gak luljs");
// } else {
//     console.log("selamat kamu lulus");
// }

// let word = "jono"
// if (word == "jono") {
//     console.log("kok kenal?");
// } else {
//     console.log("maaf, ga kenal");
// }

// function aritmatika() {
//     let bilangan1 = 20
//     let bilangan2 =40
//     console.log(bilangan1 + bilangan2);
// }

// function myName(name) {
//     console.log(name);
// }
// myName = ("joko");

function sendBiodata() {
    //untuk mengambil data dari Id HTML
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(subject);
    console.log(message);

    if (name == "") {
        return alert("insert name");
    } else if (email = "") {
        return alert("insert email")
    } else if (phone = "") {
        return alert("insert phone")
    } else if (subject = "") {
        return alert("insert subject")
    } else if (message = "") {
        return alert("insert message")
    }
    let emailReceiver = "alwaqipanglima@gmail.com";
    let a = document.createElement('a');
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=Hello my name is ${name}, Let's Talk, with me asap`;
    a.click();
}    