
const firebaseConfig = {
      apiKey: "AIzaSyBrqQn8bKqRmS3d-PJAyJa5eiAXdYFsmac",
      authDomain: "fir-kwitter-b0392.firebaseapp.com",
      projectId: "fir-kwitter-b0392",
      storageBucket: "fir-kwitter-b0392.appspot.com",
      messagingSenderId: "575910989941",
      appId: "1:575910989941:web:40a74c053512a88fdc283c"
    };
    

    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
