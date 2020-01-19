'use strict';

let user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// user = {
//   ...user,
//   mood: 'happy',
//   hobby: 'skydiving',
//   premium: false,
// }

user.mood = 'happpy';
user.hobby = 'skydiving';
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}