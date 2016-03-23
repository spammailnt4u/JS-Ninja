function compareNumbers(a,b) {
  return a-b; //used to fix .sort() for #s
}
console.log('Use .sort(compareNumbers) to sort numbers')
function mean(values, callback) {
  var total=0;
  for (var i=0, max = values.length; i < max; i++) {
    if (typeof callback === 'function') {
      total += callback(values[i]);
    }
    else {
      total += values[i]
    }
  }
  return total/max;
}
console.log('Use mean([#,#,#],function(x){return 2*x}) to return the mean of some numbers*2')
