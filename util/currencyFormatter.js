export const currencyFormatter = (currency,value) => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(value);
};
