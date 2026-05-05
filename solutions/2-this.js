// BEGIN
const make = (numerator = 0, denominator = 1) => {
  let numer = numerator;
  let denom = denominator;
  
  return {
    setNumer(value) {
      numer = value;
    },
    setDenom(value) {
      denom = value;
    }, 
    getNumer() {
      return numer;
    },
    getDenom() {
      return denom;
    },
    toString() {
      return `${numer}/${denom}`;
    },
    add(other) {
      // a/b + c/d = (a * d + b * c) / (b * d)
      const newNumer = numer * other.getDenom() + denom * other.getNumer();
      const newDenom = denom * other.getDenom();
      return make(newNumer, newDenom);
    }
  };
};

export default make;
// END 