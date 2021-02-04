let school = document.getElementById("school")
let birthday = document.getElementById("birthday")
let hobby = document.getElementById("hobby")
const qbutton1 = document.getElementById("q-button1")
const qbutton2 = document.getElementById("q-button2")
const qbutton3 = document.getElementById("q-button3")

school.onclick = function(){
 school.textContent = "埼玉工業大学"
}
birthday.onclick = function(){
  birthday.textContent = "2001/05/08"
}
hobby.onclick = function(){
  hobby.textContent ="ダンス"
}

qbutton1.onclick = function(){
  qbutton1.textContent = "残念"
}
qbutton2.onclick = function(){
  qbutton2.textContent = "正解！"
}
qbutton3.onclick = function(){
  qbutton3.textContent = "残念"
}