const validateInteger = (number, fieldName, errors) => {
  if (number < 0 || !Number.isInteger(number)) {
    errors.push(`"${fieldName}" must be a positive integer`);
  }
};

const validateHeroStats = stats => {
  if (!stats) {
    throw new Error('Stats are not specified');
  }

  const { name, strength, dexterity, intellect, isInvincible } = stats;
  const errors = [];

  if (typeof name !== 'string') {
    errors.push('"name" must be a string');
  }

  validateInteger(strength, 'strength', errors);
  validateInteger(dexterity, 'dexterity', errors);
  validateInteger(intellect, 'intellect', errors);

  if (typeof isInvincible !== 'boolean') {
    errors.push('isInvincible must be a boolean');
  }

  if (errors.length) {
    const errorMessage = errors.join(', ');
    throw new Error(errorMessage);
  }
};

const heroStatsValidator = (req, res, next) => {
  try {
    validateHeroStats(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = heroStatsValidator;
