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

   // Click Button for adding changes to firebase
   $("#click-button").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    //Grabbed values from text boxes

var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var firstTrain = moment($("#firstTrain").val().trim(), "LT").format("X");
var frequency = $("#frequency").val().trim(); 

// Creates local "temporary" object for train data
var newTrain = {
    trainName : trainName,
    destination : destination,
    firstTrain : firstTrain,
    frequency : frequency,
  };

    // Pushing info to database
database.ref().push(newTrain);

// Logs everything to console
console.log(newTrain.trainName);
console.log(newTrain.destination);
console.log(newTrain.firstTrain);
console.log(newTrain.frequency);

alert("Train added successfully");

// Clears all of the text-boxes
$("#trainName").val("");
$("#destination").val("");
$("#firstTrain").val("");
$("#frequency").val("");
});

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
var trainName = childSnapshot.val().trainName;
var destination = childSnapshot.val().destination;
var firstTrain = childSnapshot.val().firstTrain;
var frequency = childSnapshot.val().frequency;

// Train Info
console.log(trainName);
console.log(destination);
console.log(firstTrain);
console.log(frequency;

// Making time show for next arrival time
var nextTime = moment.unix().format('LTS');
// Create the new row
var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(firstTrain),
    $("<td>").text(frequency),
    $("<td>").text(empRate),
    $("<td>").text(empBilled)
  );
