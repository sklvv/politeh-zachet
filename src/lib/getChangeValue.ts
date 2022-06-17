interface IGetValue {
  (currFrom: number, currTo: number, sum: number): number;
}

const getChangeValue: IGetValue = (currFrom, currTo, sum) => {
  let res = 0;
  switch (currFrom) {
    case 1:
      res += sum * 51;
      break;
    case 2:
      res += sum * 61;
      break;
    case 3:
      res += sum;
      break;
    case 4:
      res += sum * 9;
      break;

    default:
      break;
  }
  switch (currTo) {
    case 1:
      res = res / 51;
      break;
    case 2:
      res = res / 61;
      break;
    case 3:
      break;
    case 4:
      res = res / 9;
      break;

    default:
      break;
  }
  return Math.round(res * 1.02);
};

export default getChangeValue;
