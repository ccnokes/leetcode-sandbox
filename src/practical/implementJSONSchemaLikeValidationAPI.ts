
// { oneOf: [ {type: "string" }, {type: "number" } ] }

type OneOfType = {
  oneOf: TypeDef[];
};

type StringType = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
};

type NumberOrIntType = {
  type: 'number' | 'integer';
  min?: number;
  max?: number;
};

type BooleanType = {
  type: 'boolean';
};

type TypeDef = StringType | NumberOrIntType | BooleanType;


function validate(val: any, typeDef: TypeDef | OneOfType): boolean {
  // oneOf check
  // iterate thru arr, check each typeDef - validate(val, typeDef[i])
  // if any of them is true, return true

  // check if oneOf
  if ('oneOf' in typeDef) {
    return typeDef.oneOf.some((typeDef) => primitiveValidate(val, typeDef));
  } else {
    return primitiveValidate(val, typeDef);
  }
}

function primitiveValidate(val: any, typeDef: TypeDef): boolean {
  switch (typeDef.type) {
    case 'string':
      return validateString(val, typeDef);
    case 'integer':
    case 'number':
      return validateIntOrNumber(val, typeDef);
    case 'boolean':
      return typeof val === 'boolean';
  }
  return false;
}

function validateString(val: any, typeDef: StringType): boolean {
  const isString = typeof val === 'string';
  if (isString === false) {
    return false;
  }
  let isMinLengthValid = true;
  let isMaxLengthValid = true;
  if (typeDef?.minLength !== undefined) {
    isMinLengthValid = val.length >= typeDef.minLength;
  }
  if (typeDef?.maxLength !== undefined) {
    isMaxLengthValid = val.length <= typeDef.maxLength;
  }
  return isMinLengthValid && isMaxLengthValid;
}

function validateIntOrNumber(val: any, typeDef: NumberOrIntType): boolean {
  let isValidNumberType = false;
  if (typeDef.type === 'integer') {
    isValidNumberType = Number.isInteger(val);
  } else if (typeDef.type === 'number') {
    isValidNumberType = typeof val === 'number';
  }
  if (isValidNumberType === false) {
    return false;
  }

  let isMinValid = true;
  let isMaxValid = true;
  if (typeDef?.min !== undefined) {
    isMinValid = val >= typeDef.min;
  }
  if (typeDef?.max !== undefined) {
    isMaxValid = val <= typeDef.max;
  }
  return isMinValid && isMaxValid;
}

console.log(
  validate("hello", { oneOf: [ {type: "string", minLength: 500 }, {type: "number" } ] }), // f
  validate(1, { oneOf: [ {type: "string", minLength: 500 }, {type: "number", min: 10 } ] }) // f

  // validate("hello world", { type: "string" }), // t
  // validate("hello world", { type: "string", minLength: 500 }), // f
  // validate("hello world", { type: "string", maxLength: 5 }), // f
  // validate("hello world", { type: "string", minLength: 1, maxLength: 30 }), // t

  // validate(42, { type: "string" }), // f
  // validate(42, { type: "number" }), // t
  // validate(true, { type: "boolean" }), // t

  // validate(42, { type: "integer" }), // t
  // validate(1.23, { type: "integer" }), // f
);

