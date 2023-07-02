const minimumConditionsReached = (conditions) => {
  const trueConditions = conditions.filter(Boolean);
  return trueConditions.length >= 3;
};

module.exports = minimumConditionsReached;
