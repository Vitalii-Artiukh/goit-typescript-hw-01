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
  callback(a) {
    return 100 + a;
  },
};

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};
