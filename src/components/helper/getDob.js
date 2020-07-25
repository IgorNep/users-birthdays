export const getDOB = (dob) => {
  const birthMonth = new Date(dob);
  return birthMonth.getMonth();
};

export const getDate = (dob) => {
  const birthDate = new Date(dob);

  return `${
    birthDate.getDate() < 10 ? "0" + birthDate.getDate() : birthDate.getDate()
  }.${
    birthDate.getMonth() < 9
      ? "0" + (birthDate.getMonth() + 1)
      : birthDate.getMonth() + 1
  }.${birthDate.getFullYear()}`;
};

const getDateForCompare = (dob) => {
  const birthDate = new Date(dob);

  return birthDate.getDate();
};

export const sortByDate = (arr) => {
  return arr.sort((a, b) =>
    getDateForCompare(a.dob) > getDateForCompare(b.dob) ? 1 : -1
  );
};
