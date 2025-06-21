export const randomId = (key: string = '', length: number = 10): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = new Uint8Array(length);

  window.crypto.getRandomValues(randomValues);

  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(randomValues[i] % chars.length);
  }

  return `${ key }-${ id }`;
};
