type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const vit: User = {
  name: "Vit",
  surname: "Art",
  email: "vvv@mail.com",
  password: "111222333",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  return { ...vit, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
