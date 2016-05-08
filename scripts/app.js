$(document).ready(function () {
  $('[data-cart-add]').click(function () {
    var cart = $('[data-cart-count]');
    var currentCount = Number(cart.text());

    cart.html(currentCount + 1);
  });

  $('[data-cart-remove]').click(function () {
    var cart = $('[data-cart-count]');
    var currentCount = Number(cart.text());

    if (currentCount > 0) {
      cart.html(currentCount - 1);
    }
  });
});
