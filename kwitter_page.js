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

  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value"+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;
      
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
      
}