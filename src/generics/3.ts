function merge<T extends object, P extends object>(objA: T, objB: P): object {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

console.log(merged);
