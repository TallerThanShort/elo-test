const selectorA = () => {
    // Populate predefined Scores before doing math
    db.collection('listItems').where("src", "==", document.getElementById("op1").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Ra = doc.data().score;
        })
    })

    db.collection('listItems').where("src", "==", document.getElementById("op2").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Rb = doc.data().score;
        })
    })

    // Calculate expected scores for each player
    const Ea = 1 / (1 + Math.pow(10, (Rb - Ra) / 1400));
    const Eb = 1 / (1 + Math.pow(10, (Ra - Rb) / 1400));

    // Update ratings for each player based on the outcome of the match
    const Ra_new = Ra + K * (1 - Ea);
    const Rb_new = Rb + K * (0 - Eb);

    // Save the updated ratings back to the Firebase Firestore collection
    db.collection('listItems').where("src", "==", document.getElementById("op1").src).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
            score: Ra_new
        })
      })  
    });
    // change numberd to match image B
    numberd++
    db.collection('listItems').where("src", "==", document.getElementById("op2").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
              score: Rb_new
          })
        })  
    });

    db.collection("listItems").where("src", "==", officialArray[numberd]).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("op2").src = doc.data().src;
        })
    })
}

const selectorB = () => {
    // Populate predefined Scores before doing math
    db.collection('listItems').where("src", "==", document.getElementById("op2").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Ra = doc.data().score;
        })
    })

    db.collection('listItems').where("src", "==", document.getElementById("op1").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Rb = doc.data().score;
        })
    })

    // Calculate expected scores for each player
    const Ea = 1 / (1 + Math.pow(10, (Rb - Ra) / 1400));
    const Eb = 1 / (1 + Math.pow(10, (Ra - Rb) / 1400));

    // Update ratings for each player based on the outcome of the match
    const Ra_new = Ra + K * (0 - Ea);
    const Rb_new = Rb + K * (1 - Eb);

    // Save the updated ratings back to the Firebase Firestore collection
    db.collection('listItems').where("src", "==", document.getElementById("op2").src).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
              score: Rb_new
          })
        })  
      });
      // change numberd to match image B
      numberd++
      db.collection('listItems').where("src", "==", document.getElementById("op1").src).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
                score: Ra_new
            })
          })  
      });
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
