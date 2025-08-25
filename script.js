/*localStorage.setItem('name', 'Alice');  // сохраняем строку
localStorage.setItem('age', 25);        // сохраняем число
localStorage.setItem('isLoggedIn', true); // сохраняем булево значение

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
const isLoggedIn = localStorage.getItem('isLoggedIn');*/


const user = { name: 'Alice', age: 25, isLoggedIn: true };
const userJSON = JSON.stringify(user); // преобразуем объект в строку
localStorage.setItem('user', userJSON); // сохраняем строку

const storedUser = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUser); // преобразуем строку обратно в объект

const user1 = {
  name: 'Alice',
  age: 25,
  isLoggedIn: true,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};
const userJSON1 = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON = localStorage.getItem('user');
const parsedUser1 = JSON.parse(storedUserJSON);
console.log(parsedUser.name);
console.log(parsedUser.preferences.theme);

const user1777 = {
  name: 'Alice',
  age: 25,
  isLoggedIn: true,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};
const userJSON177 = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON76 = localStorage.getItem('user');
const parsedUser71 = JSON.parse(storedUserJSON);
console.log(parsedUser.name);
console.log(parsedUser.preferences.theme);

const user178 = {
  name: 'Alice',
  age: 25,
  isLoggedIn: true,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};
const userJSON17 = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON7 = localStorage.getItem('user');
const parsedUser17 = JSON.parse(storedUserJSON);
console.log(parsedUser.name);
console.log(parsedUser.preferences.theme);

const user17 = {
  name: 'Alice',
  age: 25,
  isLoggedIn: true,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};
const userJSON12 = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON2 = localStorage.getItem('user');
const parsedUser12 = JSON.parse(storedUserJSON);
console.log(parsedUser.name);
console.log(parsedUser.preferences.theme);