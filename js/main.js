var inPut = document.getElementById("inpu")

function display(num){
    inPut.value += num
}
function Clear(){
    inPut.value = ""
} 
function Delete(){
    inPut.value = inPut.value.slice( 0 , -1)
}
function equal(){
    try{
        inPut.value = eval(inPut.value)
    }
    catch(errorr){
        inPut.value = "Error"
    }
}