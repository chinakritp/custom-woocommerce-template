function change_woo_search(new_placeholder) {
  var select_title = $('form.woocommerce-product-search .search-field');
  if(select_title.length > 0) {
    select_title.attr('placeholder', new_placeholder).attr('title', new_placeholder);
  }
}