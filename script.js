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
  student: 'ENUcollege'
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUserJSON);
//4-задание
parsedUser.country = 'Kazakhstan';
localStorage.setItem('user', JSON.stringify(parsedUser));
const storedUserJSON1 = localStorage.getItem('user');
const parsedUser1 = JSON.parse(storedUserJSON1);
console.log(parsedUser1);
//5-задание
const storedUser2 = localStorage.getItem("user");

if (storedUser2) {
  // 2. Если данные существуют → парсим и выводим
  const parsedUser2 = JSON.parse(storedUser2);
  console.log("Пользователь найден:", parsedUser2);
} else {
  // 3. Если данных нет → создаём нового и сохраняем
  const newUser = {
    name: "Rustem",
    age: 22,
    student: "KazUTB"
  };
  localStorage.setItem("user2", JSON.stringify(newUser));
  console.log("Новый пользователь создан и сохранён:", newUser);
}




//6-задание
//7-задание
//8-задание


const user8 = { name: 'ЫРЫРЫР', age: 25, isLoggedIn: true };
const userJSON8 = JSON.stringify(user8); // преобразуем объект в строку
localStorage.setItem('user8', userJSON8); // сохраняем строку

const storedUser8 = localStorage.getItem('user8');
const parsedUser8 = JSON.parse(storedUser8);

console.log(parsedUser8.age);












