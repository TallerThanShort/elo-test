const one = "op1";
const two = "op2";
let officialArray = [];
let emptyArray = []; 
let nextItem = ''
let numberd = 0

const firebaseConfig = {
    apiKey: "AIzaSyA_-N3zwxB_ty-5fj37wIz-Dk6IeQl8T74",
    authDomain: "ckschat-af6fb.firebaseapp.com",
    databaseURL: "https://ckschat-af6fb.firebaseio.com",
    projectId: "ckschat-af6fb",
    storageBucket: "ckschat-af6fb.appspot.com",
    messagingSenderId: "655383881512",
    appId: "1:655383881512:web:171a4e7d857901e7bd521d",
    measurementId: "G-852X7206HW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

db.collection('listItems').get().then(snapshot => {
    randomiseData(snapshot.docs);
});

const randomiseData = (data) => {
    let tutal = 0;
    let list = [];
    data.forEach(doc => {
        tutal++
        list[tutal] = `${doc.data().src}`;
    });
    shuffle(list);
    setTimeout(function(){setupSite(list)}, 100);
}

function shuffle(array) {
    var m = array.length, t, i;
    
    while(m){
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

const setupSite = (data) => {
    if(localStorage.getItem('cookie') != 'true'){
        document.getElementById("cookcons").style.display = 'flex';
    }
    let tital = 0
    data.forEach((div) => {
        if(div != undefined){
            tital++
            officialArray[tital] = div;
        }
    })
}

document.addEventListener("click", (e) => {
    let element = e.target.id;
    if(element == one){
        let second = document.getElementById("op2").src
        emptyArray[numberd] = second;
        setTimeout(function(){selectorA();}, 800)
    } else if(element == two){
        let first = document.getElementById("op1").src
        emptyArray[numberd] = first;
        setTimeout(function(){selectorB();}, 800)
    }
})