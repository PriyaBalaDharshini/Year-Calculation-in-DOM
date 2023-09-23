let parentDiv = document.createElement("div");
parentDiv.style.textAlign = "center";
parentDiv.style.paddingTop = "40px";


let inputDate = document.createElement("input");
inputDate.setAttribute("type", "date");
inputDate.setAttribute("id", "dobCal");
inputDate.style.height = "40px"
inputDate.style.width = "280px"
inputDate.style.borderRadius = "10px"
inputDate.style.margin = "15px"


let button = document.createElement("button");
button.innerHTML = "Display Data";
button.className = "btn btn-primary";
button.addEventListener("click", displayData);

let displyDiv = document.createElement("div");
displyDiv.style.fontFamily = "Times New Roman";
displyDiv.style.padding = "20px";




parentDiv.append(inputDate, button, displyDiv);
document.body.append(parentDiv);


function displayData() {

    let input = document.getElementById("dobCal").value;
    let dateInput = new Date(input); //return date object;
    let currentDate = new Date();
    let milliSecond = currentDate.getTime() - dateInput.getDate();
    let second = mathFloor(milliSecond, 1000);
    let minutes = mathFloor(second, 60);
    let hour = mathFloor(minutes, 60);
    let day = mathFloor(hour, 24);
    let month = getMonth(dateInput, currentDate)
    let year = getYear(dateInput, currentDate);

    /* 
        console.log(dateInput);
        console.log(currentDate);
        console.log(milliSecond);
        console.log(second);
        console.log(minutes);
        console.log(hour);
        console.log(day);
        console.log(month);
        console.log(year); */

    // 1970-1995 milliseconds calculation step-1
    // 1970-2023 milliseconds calculation step-2
    //step2 minus step-1; 1970 reference point
    displyDiv.innerHTML =
        `Current Date: ${currentDate}<br>
Input Date: ${dateInput}<br>
Year: ${year}<br>
Months: ${month}<br>
Days: ${day}<br>
Hours: ${hour}<br>
Minnute: ${minutes}<br>
Seconds: ${second}<br>
Milli Seconds: ${milliSecond}`

}

function mathFloor(value1, value2) {
    return (Math.floor(value1 / value2));
}


function getYear(value1, value2) {
    let d1 = new Date(value1);
    let d2 = new Date(value2);
    return (d2.getFullYear() - d1.getFullYear());
}

function getMonth(value1, value2) {
    let yearDiff = getYear(value1, value2)
    let monthDiff = (yearDiff * 12) + (value2.getMonth() - value1.getMonth());
    return monthDiff

}


