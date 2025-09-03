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
    name: "Rustem",
    age: 22,
    student: "KazUTB"
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  console.log("Новый пользователь создан и сохранён:", newUser);
}

//6-задание
// localStorage.clear();
// console.log("LocalStorage чистый:");
// если хотите очистить то можете эту использовать



const CheckData = localStorage.getItem('user');

if (CheckData === null) {
  console.log("LocalStorage пустой");
} else {
  console.log("Данные остались:", CheckData);
}
//7-задание
const taskcompleted = [
  { title: "Забрать с школы сестренку", completed: true },
  { title: "Cделать домашку", completed: true },
  { title: "Поиграть футбол в 19:00", completed: false }
];

localStorage.setItem('taskcompleted', JSON.stringify(taskcompleted));
const storedTask = localStorage.getItem('taskcompleted');
const parsedTask = JSON.parse(storedTask);
console.log(parsedTask);
//8-задание
parsedTask[2].completed = true;
localStorage.setItem('taskcompleted', JSON.stringify(taskcompleted));
const storedTask1 = localStorage.getItem('user');
const parsedTask1 = JSON.parse(storedTask1);
console.log(parsedTask1);