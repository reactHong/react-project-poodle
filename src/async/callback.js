// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'hong' && password === '1234') ||
        (id === 'mushoot' && password === '4321')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'hong') {
        onSuccess({ name: 'hong', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passwo>>>>rd');

userStorage.loginUser(
  id,
  password,
  (id) => {
    console.log('[loginUser] Login Success - id:', id);
    userStorage.getRoles(
      id,
      (user) => {
        alert(`Hello ${user.name}, you have a ${user.role} role`);
      },
      (error) => {
        console.log('[getRoles] Error:', error);
      }
    );
  },
  (error) => console.log('[loginUser] Error:', error)
);

const promise = new Promise((resolve, reject) => {});
