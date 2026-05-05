export class ParseError extends Error {
  constructor(message) {
    super(message); 
    this.name = "ParseError";
  }
}

// BEGIN
const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    throw new ParseError('Invalid JSON string');
  }
};

export { parseJson };
// END
