/*1. Написать класс User, в котором описаны поля name, 
surname, age (имя, фамилия, возраст), так же присутствует 
метод showInfo для вывода в консоль информации о пользователе. 
От этого класса унаследовать класс Student, в 
котором описать поля курса и специальности. 
Предусмотреть метод для вывода этой информации.*/

class User{
	constructor(options){
		this.name = options.name
		this.surname = options.surname
		this.age = options.age
	}
}

const user = new User({
name: "Ivan",
surname:"Ivanov",
age: 20
})
console.log(user);


class Student extends User{
	constructor(options){
		super(options)
		this.course = options.course
		this.specialty = options.specialty
		
	}
}

const student = new Student({
name: "Ivan",
surname:"Ivanov",
age: 20,
course: "3",
specialty:"programming",
})
console.log(student);