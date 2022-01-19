const userInput = document.getElementById("userInput")

// อันนี้เราจะสร้างค่าที่ user ใส่ค่ามาให้เราทำ
var expression = ''

function press(num){
    expression = expression + num
    userInput.value = expression
}

function equal(){
    userInput.value = eval(expression)
    // EVAL () ฟังก์ชันคำนวณสตริง JavaScript และใช้เป็นรหัสสคริปต์ในการดำเนินการ
    expression = ''
}

function erase(){
    expression = ''
    userInput.value = expression
}

