import _ from 'lodash';

// Interpolates a number
export const interpolateNumber = (value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => {
  const clampedValue = _.clamp(value, inputMin, inputMax);
  return ((clampedValue - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) + outputMin;
};
