const t = (o) => o.stopPropagation();
function p(o, a) {
  (typeof o.cancelable != "boolean" || o.cancelable) && o.preventDefault(), a && t(o);
}
export {
  p as preventDefault,
  t as stopPropagation
};
