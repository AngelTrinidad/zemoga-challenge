export const capitalizeFirstLetter = (value: string) => {
  return value.length === 0 ? '' : value.replace(/^./, value[0].toUpperCase());
};
