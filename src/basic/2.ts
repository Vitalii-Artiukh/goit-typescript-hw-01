console.log("Hello ts.1");

type hw1 = {
  age: number;
  username: string;
  toggle: boolean;
  empty: null;
  callback(a: number): number;
};

const hw01: hw1 = {
  age: 50,
  username: "Max",
  toggle: true,
  empty: null,
  callback(a: number): number {
    return 100 + a;
  },
};

const age: hw1 = 50;
const username: hw1 = "Max";
const toggle: hw1 = true;
const empty: hw1 = null;
const callback = (a: number): number => {
  return 100 + a;
};

// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;
// const callback = (a) => {
//   return 100 + a;
// };
