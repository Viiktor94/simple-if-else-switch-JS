var age = -1

if(age >= 65) {
    console.log("You get your income from your pension")
} else if(age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if(age < 18) {
    console.log("You get an allowance")
} else {
    "The value of the age variable is not numerical"
}

var day = "hello"

switch(day){
    case "monday":
    console.log("Go to work")
    break

    case "tuesday":
    console.log("Go to gym")
    break

    case "wednesday":
    console.log("Go shopping")
    break

    case "thursday":
    console.log("Go swim")
    break

    case "friday":
    console.log("Go to run")
    break

    case "saturday":
    console.log("Go dance")
    break

    case "sunday":
    console.log("Rest at home")
    break

    default:
    console.log("There is no such day")
}
