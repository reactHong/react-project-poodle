// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'hong' && password === '1234') ||
          (id === 'mushoot' && password === '4321')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'hong') {
          resolve({ name: 'hong', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passwo>>>>rd');

userStorage
  .loginUser(id, password)
  .catch((error) => {
    console.log('[loginUser]', error);
    return undefined;
  })
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch((error) => console.log('[getRoles]', error))
  .finally(() => console.log('finally!!!'));
