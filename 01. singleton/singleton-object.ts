let count = 0;

const counter = {
  getCount: () => count,
  increment: () => ++count,
  decrement: () => --count,
} as const;

export default counter;
