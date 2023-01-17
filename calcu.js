function displaydata(data){
 result.value+=data
}
function allclear(){
    result.value=""
}
function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}
function evaluateexp(){
    result.value=eval(result.value)
}