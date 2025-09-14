export const delay = async () => {
  await new Promise((res, _) => {
    setTimeout(() => {
      res("");
    }, 300);
  });
};
