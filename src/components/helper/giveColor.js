export const giveColor = (arr) => {
  if (arr.length >= 0 && arr.length <= 2) {
    arr.forEach((user) => (user.color = "grey"));
  }
  if (arr.length >= 3 && arr.length <= 6) {
    arr.forEach((user) => (user.color = "blue"));
  }
  if (arr.length >= 7 && arr.length <= 10) {
    arr.forEach((user) => (user.color = "green"));
  }
  if (arr.length >= 11) {
    arr.forEach((user) => (user.color = "red"));
  }
};
