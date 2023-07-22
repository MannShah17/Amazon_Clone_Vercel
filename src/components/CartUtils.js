export const getOrderTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const getDiscount = (cartItems) => {
  const orderTotal = getOrderTotal(cartItems);
  return orderTotal > 2000 ? 0.1 * orderTotal : 0;
};

export const getGrandTotal = (cartItems) => {
  const orderTotal = getOrderTotal(cartItems);
  const discount = getDiscount(cartItems);
  return orderTotal - discount;
};
