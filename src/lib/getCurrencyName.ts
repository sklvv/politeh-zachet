const getCurrencyName = (curr: string) => {
  let res = "";
  if (curr == "1") {
    res = "Доллар";
  }
  if (curr == "2") {
    res = "Евро";
  }
  if (curr == "3") {
    res = "Рубль";
  }
  if (curr == "4") {
    res = "Юань";
  }
  return res;
};
export default getCurrencyName;
