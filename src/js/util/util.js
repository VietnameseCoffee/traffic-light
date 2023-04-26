export const addStyle = function (el, style) {
  const kv = Object.entries(style);
  const elStyles = el.style;

  kv.forEach((kv) => {
    const [key, val] = kv;
    elStyles[key] = val;
  });

  return el;
};
