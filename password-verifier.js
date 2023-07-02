// Utility functions

const hasRightLength = (string) => string.length < 9;

const isNotNull = (string) => string !== null;

const hasUpperCaseCharacter = (string) => /[A-Z]/.test(string);

const hasLowerCaseCharacter = (string) => /[a-z]/.test(string);

const hasDigit = (string) => /[0-9]/.test(string);

const minimumConditionsReached = (conditions) => {
  const trueConditions = conditions.filter(Boolean);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
