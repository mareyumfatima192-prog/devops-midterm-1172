// delivery fee in rupees for a parcel of the given weight in kilograms.
// up to 1 kg: 200; up to 5 kg: 350; up to 10 kg: 500; above 10 kg: 1500.

function shipping(weightKg) {
  if (typeof weightKg !== 'number' || weightKg <= 0) {
    throw new RangeError('Weight must be a number greater than 0');
  }

  if (weightKg <= 1) return 200;
  if (weightKg <= 5) return 350;
  if (weightKg <= 10) return 500;

  return 1500;
}

module.exports = { shipping };
