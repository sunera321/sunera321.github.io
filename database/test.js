import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);







const app = initializeApp(firebaseConfig);
console.log(app);

const db=getDatabase(app);
document.getElementById("userform").addEventListener("submit",function(e){
      e.preventDefault();
      let userId =document.getElementById("id").value;
      let name=document.getElementById("name").value;
  
      set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });



  }
























