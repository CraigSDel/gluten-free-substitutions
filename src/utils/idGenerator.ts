export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
};
