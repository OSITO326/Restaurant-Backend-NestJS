export const convertToSlug = (text: string) => {
  return text
    .toLowerCase() // text to lowercase
    .trim() // delete space blanks
    .replace(/[\s\W-]+/g, '-') // replace space or char to -
    .replace(/^-+|-+$/g, ''); // delete - final text
};
