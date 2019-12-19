const NAMES = [
  "Sophia",
  "Miah",
  "Malik",
  "Karson",
  "Courtney",
  "Graham",
  "Brock",
  "Jorge",
  "Zechariah",
  "Fletcher",
  "Buck",
  "Huffman",
  "Wolf"
];

export function getRandomItem(arr: Array<any>) {
  return arr[getRandomInt(0, arr.length)];
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomName() {
  return getRandomItem(NAMES);
}
