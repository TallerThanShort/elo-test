const selectorA = () => {
    numberd++
    console.log(emptyArray.length)
    db.collection("listItems").where("src", "==", officialArray[numberd]).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("op2").src = doc.data().src;
        })
    })
}

const selectorB = () => {
    numberd++
    console.log(emptyArray.length)
    db.collection("listItems").where("src", "==", officialArray[numberd]).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("op1").src = doc.data().src;
        })
    })
}

function acceptCookie() {
    localStorage.setItem("cookie", 'true');
    document.getElementById("cookcons").style.display = 'none';
}