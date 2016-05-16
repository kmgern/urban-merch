/* When the document is ready, run this function */
$(document).ready(function () {

  /* Find the cart on the page (it has the data-cart-count attribute) and save it in the "cart" variable. */
  var cart = $('[data-cart-count]');

  /* When the user clicks on elements with the data-cart-add attribute (add icon), run this function */
  $('[data-cart-add]').click(function () {
    /* Get the text of the cart element and convert it to a number */
    var currentCount = Number(cart.text());

    /* Add one to the cart count */
    var newCount = currentCount + 1;

    /* Set the new count as the cart's html */
    cart.html(newCount);

    /* bounce the cart count */
    cart.effect('bounce', {times: 1});
  });

  /* when the user clicks on the remove icon run this function */ /*Go out and find an element with this attribute on the DOM*/
  $('[data-cart-remove]').click(function () {

    /* shake the cart count */
    cart.effect('shake', {times: 1, distance: 5});

    /* get the text of the cart element and convert it to a number */
    var currentCount = Number(cart.text());

    /* if there are items in the cart, run the code below */
    if (currentCount > 0) {
      /* subtract one from the cart count */
      var newCount = currentCount - 1;

      /* set the new count as the cart's html */
      cart.html(newCount);
    }
  });
});
/*-------------------------------------------------------------------------*/

/*js for "join" icon in footer for call-to-action: signing up for email newsletter*/

/* When the document is ready, run this function */
$(document).ready(function () {

  /* Find the "data-join-icon" on the html page footer and recognize it as the variable "joinIcon". */
  var joinIcon = $('[data-join-icon]');

  /* bounce the join-icon */
  // 1000 miliseconds is one second
  setInterval(function () {
    joinIcon.effect('bounce', {times: 1, distance: 5});
  }, 3000);

  /*-------------------------------------------------------------------------*/

  /* When the user clicks the joinIcon run this function */
  joinIcon.click(function () {
    /* hide social media icons, toggle left email field */
    // find the element with the data-social attribute, and toggle between the social div and the email me field
    $('[data-social]').toggle();
    $('[data-email-me]').toggle();
  });

  $('[data-email-me]').submit(function (event) {
    // Make sure the default action (refreshing the page) does not happen when the form is submitted.
    event.preventDefault();

    $('[data-social]').toggle();
    $('[data-email-me]').toggle();
  });

});

// customize email field.  when the user hits enter. Autobox appears that reads: Thanks for your interest in our Newsletter and promotions. We'll send you a surprise in your inbox shortly!
    /* Get the hidden field/text from the html element page and open/toggle to left */
    // var (join.emailMe());


// });
