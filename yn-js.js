module.exports = exports = yn

function yn (input, replace = ['True', 'False']) {
  let tmp = input;
  if (typeof input === 'string') {
    input = input.toLowerCase();
    tmp = parseInt(input, 10);
    if (isNaN(tmp)) {
      if (['on','true','yes'].includes(input)) {
        tmp = true;
      } else {
        tmp = false;
      }
    } else {
      tmp = (tmp === 0) ? false : true;
    }
  }
  return (tmp) ? replace[0] : replace[1];
};
