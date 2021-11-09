export const times = <T>(n: number, fn: (n: number) => T) => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push(fn(i));
  }
  return result;
};
