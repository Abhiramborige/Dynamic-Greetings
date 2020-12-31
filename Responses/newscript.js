// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
var user=(queryDict2[queryDict1.indexOf('name1')])[0];
var url=decodeURIComponent(location.search).substr(1);

document.addEventListener('DOMContentLoaded', event => {  
    db.collection('users').add({
        id:user,
        details:url
    });
});
