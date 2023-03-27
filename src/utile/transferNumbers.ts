let persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];

export const perToEn = (str: string) => {
  for (let i: any = 0; i < 10; i++) {
    str = str.replace(persianNumbers[i], i);
  }
  return str.split("٬").join("");
};
