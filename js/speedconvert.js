let in_min = document.getElementById('min-km');
let in_hour = document.getElementById('km-h');
let button = document.getElementById('in-button');
let result = document.getElementById('result');

function toMinKm(a) {
    return (a != 0 ? 60.0 / a : 0.0);
}
function toKmH(a) {
    return (a != 0 ? 60.0 / a : 0.0);
}

function decIfAny(value, yes){

    return (value % 1 == 0 ? value.toFixed(0): value.toFixed(yes));
}

button.addEventListener('click', function () {

    if (in_hour.value == "" && !in_min.value == "") {
        result.innerText = `${in_min.value} min/km is ${decIfAny(toKmH(parseFloat(in_min.value)),1)} km/h`;
        in_min.value = "";
    } else if (in_min.value == "" && !in_hour.value == "") {
        let min = parseInt(toMinKm(parseFloat(in_hour.value))); 
        let sec = (toMinKm(parseFloat(in_hour.value)) % 1) * 60;
        result.innerText = (sec != 0 ? (`${in_hour.value} km/h is ${min}:${sec.toFixed(0)} min/km`) : (`${in_hour.value} km/h is ${min} min/km`));
        in_hour.value = "";
    } else if (!in_min.value == "" && !in_hour.value == "") {
        result.innerText = "Please enter only one value ..."
    } else { result.innerText = "Please enter a value ..." }

});



