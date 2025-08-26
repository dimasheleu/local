//1-задание
localStorage.setItem('greeting', 'Привет, мир!');
const storedGreeting = localStorage.getItem('greeting');
// console.log(storedGreeting);
//2-задание
const deletedGreeting = localStorage.removeItem('greeting');
console.log(deletedGreeting);


//3-задание
const user = {
  name: 'Dimash',
  age: 18,
  student: 'ENUcollege',
  country: 

};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUserJSON);
console.log(parsedUser);





//4-задание
//5-задание
//6-задание
//7-задание
//8-задание