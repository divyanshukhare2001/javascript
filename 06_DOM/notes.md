/* getting attribute from element */

document.getElementById('title')
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

/* getting & setting attribute from element */

document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class' , 'test')
undefined
document.getElementById('title').className
'test'
document.getElementById('title').setAttribute('class' , 'test heading')
/* when we write a class name giving spaces then that class posseses multiple class names like in dis case title and heading */
undefined
document.getElementById('title').className
'test heading'

/* styling the element */

title.style.backgroundColor = 'green'
'green'
title.style.padding = '10px'
'10px'
title.style.borderRadius = '15px'
'15px'

/* extracting content from the element */

title.textContent
'DOM learning on chai aur code test text '
title.innerHTML
'DOM learning on chai aur code<span style="display: none;"> test text </span>'
title.innerText
'DOM learning on chai aur code'

/*  difference b/w all 3 of them:
if a part of content is been hidden using css like in this case then , that part won't be visible through innerText but will be visible through textContent  and with innerHTML all the text with the html tags used inside them will also be visible  */


/* more selectors */

document.querySelector('h2')
<h2>​Lorem ipsum dolor sit 1.​</h2>
​
/* it selects the first h2 element out of all h2 in page */

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('input')
<input type=​"password">​
document.querySelector('input[type="password"]')
<input type=​"password">​
document.querySelector('p:first-child')
null

/* how to select & make changes in a single element */

document.querySelector('UL')
<ul>​…​</ul>​
const ul = document.querySelector('UL')
undefined
ul
<ul>​…​</ul>​
const myLi = ul.querySelector('li')
undefined
myLi.style.color = 'green'
'green'
myLi.style.color = 'white'
'white'
myLi.style.backgroundColor = 'green'
'green'
myLi.style.padding = '10px'
'10px'
myLi.innerText
'one'
myLi.innerText = 'five'
'five'

/* when we use querySelectAll for selecting all elements , it binds all elements into a NodeList that is not exactly similar to Array

Operations on NodeList:- */

const myLiList = document.querySelectorAll('li')
undefined
myLiList
NodeList(3) [li, li, li]
myLiList[0].style.color = 'black'
'black'
myLiList.forEach(function (l) {
    l.style.backgroundColor = 'blue'
})
undefined

/* document.getElementByClass() returns classes binded in HTMLcollection which not an array and we can't even run forEch loop on dis like NodeList , thus we change HTMLcollection to an array by 
Array.from(tempClassList) */

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
const tempClassList = document.getElementsByClassName('list-item') 
undefined
tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray.forEach(function(li) {
    li.style.color = 'blue'
})
undefined



document.querySelectorAll('h3')
NodeList(32) [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3]
document.querySelectorAll('h2')
NodeList(15) [h2.vector-pinnable-header-label, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2]0: h2.vector-pinnable-header-label1: h22: h23: h24: h25: h26: h27: h28: h29: h210: h211: h212: h213: h214: h2length: 15[[Prototype]]: NodeList
const allH2 = document.querySelectorAll('h2')
undefined
allH2[0].innerText
''
allH2[1].innerText
'History'
const myH2 =  document.querySelectorAll('.mw-headline')
undefined
myH2[0].innerText
'History'
myH2.forEach(function (h) {
    h.style.color = 'black';
    h.style.backgroundColor = 'red';
    h.innerText = 'divyanshu'
})
undefined