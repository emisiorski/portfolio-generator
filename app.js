const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  for (ket i = 0; i <profileDataArr.length; i++) {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);

