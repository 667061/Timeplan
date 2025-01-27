"using strict";

let in_min = document.getElementById('min-km');
let in_hour = document.getElementById('km-h');
let button = document.getElementById('in-button');
let result = document.getElementById('result');

function toMinKm(a) { //Converts From km/h to min/km
    return (a != 0 ? 60.0 / a : 0.0);
}
function toKmH(a) { //Converts from min/km to km/h
    return (a != 0 ? 60.0 / a : 0.0);
}

function decIfAny(value, yes){ //if any decimal points then yes number 

    return (value % 1 == 0 ? value.toFixed(0): value.toFixed(yes));
}

function hourToString(inTime){ //Converts a decimal of hours to hh:mm:ss
    
    let hours = Math.floor(inTime);
    
    hours = (hours < 1 ? "00" : hours < 10 ? `0${hours}` : hours);

    inTime = (inTime % 1) * 60;

    let minutes = (Math.floor(inTime));
    minutes = (minutes < 1 ? "00" : minutes < 10 ? `0${minutes}` : minutes);
    
    inTime = (inTime % 1) * 60;


    let secs = (Math.floor(inTime).toFixed(0));
    secs = (secs < 1 ? "00" : secs < 10 ? `0${secs}` : secs);
    
    return `${hours}:${minutes}:${secs}`;
}


function deleteChildrenOfId(id){ //Deletes all children of element of id
    let obj = document.getElementById(id);
    
    if(!obj.lastElementChild)
        return;

    let child = obj.lastElementChild;
    while(child){
        obj.removeChild(child);
        child=obj.lastElementChild;
    }

}


function displayTimes(speed){ //Portrays the different times for different distances with a given speed

    deleteChildrenOfId("speeds");

    const distNames = ["1k", "3k","5k", "10k", "Half marathon", "Marathon"];
    const kmDistances = [1,3,5,10,21.097,42.195];

    let head = document.createElement("thead");
    let headrow = document.createElement("tr");
    let headel1 = document.createElement("th");
    let headel2 = document.createElement("th");
    headel1.innerText="Distance";
    headel2.innerText="Time";
    
    headrow.appendChild(headel1);
    headrow.appendChild(headel2);

    head.appendChild(headrow);

    document.getElementById("speeds").appendChild(head);

    for(let i = 0; i < kmDistances.length;i++){    
        let val = kmDistances[i] / speed; 
        let row = document.createElement("tr");
        let distance = document.createElement("td");
        let time = document.createElement("td");
        
        distance.innerText = distNames[i];
        time.innerText = hourToString(val);
        
        row.appendChild(distance);
        row.appendChild(time);

        document.getElementById("speeds").appendChild(row);
    }

}



button.addEventListener('click', function () {

    

    if (in_hour.value == "" && !in_min.value == "") {
        result.innerText = `${in_min.value} min/km is ${decIfAny(toKmH(parseFloat(in_min.value)),1)} km/h`;
        displayTimes(toKmH(parseFloat(in_min.value)));
        in_min.value = "";
        

    } else if (in_min.value == "" && !in_hour.value == "") {
        let min = parseInt(toMinKm(parseFloat(in_hour.value))); 
        let sec = (toMinKm(parseFloat(in_hour.value)) % 1) * 60;
        result.innerText = (sec != 0 ? (`${in_hour.value} km/h is ${min}:${(sec.toFixed(0) < 10 ? `0${sec.toFixed(0)}`:sec.toFixed(0))} min/km`) : (`${in_hour.value} km/h is ${min} min/km`));
        displayTimes(parseFloat(in_hour.value));
        in_hour.value = "";
        
    } else if (!in_min.value == "" && !in_hour.value == "") {
        result.innerText = "Please enter only one value ..."
    } else { result.innerText = "Please enter a value ..." }


    



});



