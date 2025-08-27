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
const storedUser = localStorage.getItem("user");

if (storedUser) {
  // 2. Если данные существуют → парсим и выводим
  const parsedUser = JSON.parse(storedUser);
  console.log("Пользователь найден:", parsedUser);
} else {
  // 3. Если данных нет → создаём нового и сохраняем
  const newUser = {
    name: "Dimash",
    age: 18,
    student: "ENUcollege"
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  console.log("Новый пользователь создан и сохранён:", newUser);
}
//6-задание
//7-задание
//8-задание