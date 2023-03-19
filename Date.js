function dayOfYear(string) {
  let date = new Date(string);
  let year = date.getFullYear();
  let lastDate = `01/01/${year}`;
  let d = date - lastDate;
}

dayOfYear("12/13/2020");
