function change_woo_title(old_title, new_title) {
  var select_title = $('.woocommerce h2:contains("'+ old_title +'")');
  if(select_title.length > 0) {
    select_title.html(new_title);
  }
}