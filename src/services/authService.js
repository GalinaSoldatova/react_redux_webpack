const md5 = require('md5');

export const logIn = (username, password) => (
  new Promise((resolve, reject) => {
    if (username === 'Test' && md5(password) === '25f9e794323b453885f5181f1b624d0b') {
      resolve();
    } else {
      reject(new Error('Имя пользователя или пароль введены неверно'));
    }
  })
);
