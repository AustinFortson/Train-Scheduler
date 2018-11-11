  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSVdrmOS-_OY1dIoVRgHncydkomv8hhVg",
    authDomain: "train-scheduler-9eb7b.firebaseapp.com",
    databaseURL: "https://train-scheduler-9eb7b.firebaseio.com",
    projectId: "train-scheduler-9eb7b",
    storageBucket: "train-scheduler-9eb7b.appspot.com",
    messagingSenderId: "1095063882547"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //submit
  $("#add-train-btn").on("click", function(event) {
      event.preventDefault();

      var empName = $("#train-name-input").val().trim();
      var empDestination = $("#destination-input").val().trim();
      var empFirstTime = $("#first-input").val().trim();
      var empFrequency = $("#frequency-input").val().trim();
  

  //local object
  var newEmp = {
    name: empName,
    destination: empDestination,
    firsttime: empFirstTime,
    frequency: empFrequency
  };

  database.ref().push(newEmp);

  //consone log
  console.log(newEmp.name);
  console.log(newEmp.destination);
  console.log(newEmp.firsttime);
  console.log(newEmp.frequency);

  //confirmation
  alert("Thats a new train rii therr");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#firsttime-input").val("");
  $("#frequency-input").val("");

});

//firebase event
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

var empName = childSnapshot.val().name;
var empDestination = childSnapsho.val().destination;
var empFirstTime = childSnapshot.val().firsttime;
var empFrequency = childSnapshot.val().frequency;

//console log
console.log(empName);
console.log(empDestination);
console.log(empFirstTime);
console.log(empFrequency);


// append
var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empDestination),
    $("<td>").text(empFirstTime),
    $("<td>").text(empFrequency)
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});
