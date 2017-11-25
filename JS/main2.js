// const id = document.querySelector('#id-selector')
// console.log(id)

// const classNode = document.querySelector('.class-selector')
// console.log(classNode)

// const p = document.querySelector('p')
// console.log(p)


// const attrNode = document.querySelector('[data-test]')
// console.log(attrNode)


// // node.style.cssProperty = 'something'

// // id.style.backgroundColor = 'green'
// id.style.fontFamily = 'Helvetica'


// classNode.style.color ='red'
// classNode.style.paddingTop ='2em'

// p.style.fontSize = '2em'

// attrNode.style.fontWeight = 'bold'


// // node.classList.add('class1 class2 class3')
// // node.classList.remove('class1 class2 class3')

// id.classList.add('white','fontWeight')


// node.addEventListener('eventName')
// functionToDoSomething

const button = document.querySelector('.button')
console.log(button)

const menu = document.querySelector('.menu')
console.log(menu)

button.addEventListener('click', function (){
	console.log('button clicked')
// 	menu.classList.toggle('is-open')
// })

if (menu.classList.contains('is-open')){
	menu.classList.remove('is-open')
} else {
	menu.classList.add('is-open')
}
})




