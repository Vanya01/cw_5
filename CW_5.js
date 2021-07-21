
// Взяти файл template_2.html та працювати в ньому - Done
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year) - DONE
let one = document.getElementById('main_header')
    one.onclick = function () {
        one.style.color = 'red'
        one.innerText = 'mon-year'
}
// b) робить шириниу елементу ul 400px - DONE
let two = document.getElementsByTagName('ul')
for ( let two_ of two ){
two_.style.width = '400px'}
// c) робить шириниу всіх елементів з класом linkList шириною 50% - DONE
let three = document.getElementsByClassName('linkList')
for (let thre__ of three){
    thre__.style.width='50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2 -DONE
let four = document.getElementsByClassName('listElement2')
for (let four__ of four){
    console.log(four__.innerText);}
    // e) отримує всі елементи li та змінює ім колір фону на сірий
let fifth = document.getElementsByTagName('li')
for (let fifth__ of fifth){
    fifth__.style.background = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let sixth = document.getElementsByTagName('a')
for (let sixth__ of sixth){
    sixth__.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
   let seventh = document.getElementsByTagName('a')
for (let seventh__ of seventh){
    console.log(seventh__.innerText);
    if (seventh__ === seventh[2]){
            seventh__.style.fontSize='40px'

    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let eight = document.getElementsByTagName('a')
for (let eight__ of eight){
    eight__.classList.add('element_XXX')

}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let ninth = document.getElementsByClassName('sub-header')
for ( let ninth__ of ninth){
    ninth__.style.background =prompt()
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// l) отримати елементи p та змінити їм padding на 20px
let oneMore = document.getElementsByTagName('p')
for (let one__more of oneMore){
    one__more.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let us = document.getElementsByClassName('text2')
for (let last of us ) {
    last.innerText = 'mon-year'
}