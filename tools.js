function getValueFromInput(id){
    const value = document.getElementById(id).value;
    const number = parseFloat(value)
    return number
}
function getValueFromText(id){
    const value = document.getElementById(id).innerText;
    const number = parseFloat(value)
    return number
}