var firebaseConfig = {
      apiKey: "AIzaSyBvKekAgLvg4OsN84M6abzuDGJP4dl0b3k",
      authDomain: "kwitter-6a621.firebaseapp.com",
      databaseURL: "https://kwitter-6a621-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a621",
      storageBucket: "kwitter-6a621.appspot.com",
      messagingSenderId: "675922716659",
      appId: "1:675922716659:web:c1649ceea6d8ae74a11486"
    };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room-name");
      window.location = "index.html";
}