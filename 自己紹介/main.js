let school = document.getElementById("school")
let birthday = document.getElementById("birthday")
let hobby = document.getElementById("hobby")
const qbutton1 = document.getElementById("q-button1")
const qbutton2 = document.getElementById("q-button2")
const qbutton3 = document.getElementById("q-button3")
const q2button1 = document.getElementById("q2button1")
const q2button2 = document.getElementById("q2button2")
const q2button3 = document.getElementById("q2button3")

school.onclick = function(){
 school.textContent = "埼玉工業大学"
}
school.ondblclick = function(){
  school.textContent = "情報システム"
}
birthday.onclick = function(){
  birthday.textContent = "2001/05/08"
}
birthday.ondblclick = function(){
  birthday.textContent = "19"
}
hobby.onclick = function(){
  hobby.textContent ="ダンス"
}
hobby.ondblclick = function(){
  hobby.textContent ="ゴルフ"
}

qbutton1.onclick = function(){
  qbutton1.textContent = "残念！"
}
qbutton2.onclick = function(){
  qbutton2.textContent = "正解！"
}
qbutton3.onclick = function(){
  qbutton3.textContent = "残念！"
}
// 選択肢のCSSが使えない。

q2button1.onclick = function(){
  q2button1.textContent = "残念！"
}
q2button2.onclick = function(){
  q2button2.textContent = "正解！"
}
q2button3.onclick = function(){
  q2button3.textContent ="惜しい！今度焼肉屋になります"
}