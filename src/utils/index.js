export function setNoScroll(isScroll) {
  if (isScroll) {
    document.getElementById("html").style.overflow = "auto";
    return;
  }
  document.getElementById("html").style.overflow = "hidden";
}

export function getFinalPrice(arr) {
  let finalPrice = 0;
  arr.forEach((item) => {
    finalPrice += item.price * item.quantity;
  });
  return finalPrice;
}
