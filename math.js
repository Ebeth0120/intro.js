export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Input must be Numbers!');
  }
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

module.export ={add, subtract };