let counter = 0;

export const generateId = (prefix: string = 'id'): string => {
  counter += 1;
  return `${prefix}-${counter}`;
};
