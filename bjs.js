var lbb = jQuery("md-item-content")
lbb.each(function (n) {
jQuery(this).click()
      console.log( n + ": " + jQuery( this ).text() );

})
