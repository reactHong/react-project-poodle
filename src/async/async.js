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

const login = async (id, password) => {
  try {
    const userID = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(userID);
    alert(`Hello ${user.name}, you have a ${user.role} role`);
  } catch (error) {
    console.log('[login]', error);
  }
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

login(id, password);
