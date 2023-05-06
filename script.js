let result = document.getElementById("result");

function clearResult() {
    result.value = "0";
}

function calculate(value) {
    if (result.value == "0") {
        result.value = value;
    } else if (value === "=") {
        result.value = eval(result.value);
    } else {
        result.value += value;
    }
}