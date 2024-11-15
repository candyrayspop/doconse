function getUTCQuarter() {
  var date = new Date();
  var month = date.getUTCMonth();
  var quarter;

  if (month >= 0 && month <= 2) {
    quarter = 1;
  } else if (month >= 3 && month <= 5) {
    quarter = 2;
  } else if (month >= 6 && month <= 8) {
    quarter = 3;
  } else if (month >= 9 && month <= 11) {
    quarter = 4;
  }

  return quarter;
}
