// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhmPNaW9E7eowaXa4f1u87t1MCzlehX-4",
    authDomain: "train-scheduler-2cee6.firebaseapp.com",
    databaseURL: "https://train-scheduler-2cee6.firebaseio.com",
    projectId: "train-scheduler-2cee6",
    storageBucket: "train-scheduler-2cee6.appspot.com",
    messagingSenderId: "358506507721"
  };
  firebase.initializeApp(config);

  //variable to reference the database
  var database = firebase.database();

   // Click Button changes what is stored in firebase
   $("#click-button").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    //
    name = $("#name-input").val().trim();   

    // Pushing info to database
database.ref().push({
    trainName : trainName,
    destination : destination,
    firstTrain : firstTrain,
    frequency : frequency,
    });