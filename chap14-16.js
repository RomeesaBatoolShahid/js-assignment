//q1
var StdName = [];

//q3
var names = ["Ali", "Uzma", "Yasmine", "Iqra"];

//q4
var numbers = [34, 55, 78, 11];

// Question No 05
var booleans = [true, false];

//q6
var mixs = ["Romeesa", "Raya", "Sugar" , 98, 87, true];

//q7
var qualifications = [ "BCOM", "MS", "M. Phil.", "PhD","SSC", "HSC", "BCS", "BS"];
document.write("<h2> 7. Qualifications:</h2>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// q8
var studentNames = ["John", "Jane", "David"];
var studentScores = [420, 380, 450]; 
var totalMarks = 500; 
document.write("<h2> 8. Student Scores and Percentages:</h2>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Student Name: " + studentNames[i] + "<br>");
    document.write("Score: " + studentScores[i] + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");
}

//q9
// Initial array of colors
var colors = ["Red", "Blue", "Green", "Yellow"];
document.write("<h2>Original Color Array:</h2>");
document.write(colors.join(", ") + "<br><br>");
// a. Add color to the beginning
var colorAtBeginning = prompt("What color do you want to add at the beginning?");
colors.unshift(colorAtBeginning);
document.write("<h3>After adding color to the beginning:</h3>");
document.write(colors.join(", ") + "<br><br>");
// b. Add color to the end
var colorAtEnd = prompt("What color do you want to add at the end?");
colors.push(colorAtEnd);
document.write("<h3>After adding color to the end:</h3>");
document.write(colors.join(", ") + "<br><br>");
// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("<h3>After adding two more colors to the beginning:</h3>");
document.write(colors.join(", ") + "<br><br>");
// d. Delete the first color
colors.shift();
document.write("<h3>After deleting the first color:</h3>");
document.write(colors.join(", ") + "<br><br>");
// e. Delete the last color
colors.pop();
document.write("<h3>After deleting the last color:</h3>");
document.write(colors.join(", ") + "<br><br>");
// f. Add color at a specific index
var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h3>After adding color at index " + indexToAdd + ":</h3>");
document.write(colors.join(", ") + "<br><br>");
// g. Delete color(s) from a specific index
var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numberOfColorsToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h3>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</h3>");
document.write(colors.join(", "));

//q10
var studentScores = [320, 230, 480, 120];
document.write("<h2>Original Student Scores:</h2>");
document.write(studentScores.join(", ") + "<br><br>");
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("<h2>Sorted Student Scores in Ascending Order:</h2>");
document.write(studentScores.join(", "));

//q 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Original Cities List:</h2>");
document.write(cities.join(", ") + "<br><br>");
var selectedCities = cities.slice(1, 4); 
document.write("<h2>Selected Cities List:</h2>");
document.write(selectedCities.join(", "));

//q12
var arr = ["This", " is", " my", " cat"];
var singleString = arr.join("");
document.write("<h2>Single String:</h2>");
document.write(singleString);

//q 13
var fifoArray = [];
fifoArray.push("First Value");
fifoArray.push("Second Value");
fifoArray.push("Third Value");
document.write("<h2>Original Array:</h2>");
document.write(fifoArray + "<br><br>");
document.write("<h2>Accessing values in FIFO order:</h2>");
document.write(fifoArray.shift() + "<br>"); 
document.write(fifoArray.shift() + "<br>"); 
document.write(fifoArray.shift() + "<br>"); 
document.write("<br><h2>Array after accessing all elements:</h2>");
document.write(fifoArray);

//q 14
var lifoArray = [];
lifoArray.push("First Value");
lifoArray.push("Second Value");
lifoArray.push("Third Value");
document.write("<h2>Original Array:</h2>");
document.write(lifoArray + "<br><br>");
document.write("<h2>Accessing values in LIFO order:</h2>");
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 
document.write("<br><h2>Array after accessing all elements:</h2>");
document.write(lifoArray); 

//q15
var phoneManufacturers = ["Samsung", "Motorola", "Nokia","Apple", "Sony", "Haier"];
document.write("<h2>Select Phone Manufacturer:</h2>");
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");