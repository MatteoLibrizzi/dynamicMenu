export const useABTestPool = () => {
  const randomNumber = Math.random();

  const isPoolA = randomNumber > 0.5;

  return isPoolA;
};
