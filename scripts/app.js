$('document').ready(function () {
  $('[data-cart-add]').click(function () {
    var cart = $('[data-cart-count]');

    cart.html(Number(cart.text())+ 1);
  });
});

$('document').ready(function () {
  $('[data-cart-remove]').click(function () {
    var cart = $('[data-cart-count]');
    var cartCount = Number(cart.text());

    if (cartCount > 0) {
      cart.html(cartCount - 1);
    }
  });
});
