function sendBiodata() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name == "") {
        return alert("insert name")
    } else if (email == "") {
        return alert("insert email")
    } else if (phone == "") {
        return alert("insert phone")
    } else if (subject == "") {
        return alert("insert subject")
    } else if (message == "") {
        return alert("insert message")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    
    let a = document.createElement('a');
    a.href = `mailto:panglimalwaqi@gmail.com?subject=${subject}&body=Hello \nmy name is ${name}, Let's Talk with me asap`;
    a.click();
}