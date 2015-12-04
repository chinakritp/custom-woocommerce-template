# Custom WooCommerce Template

# How to

Main thing is **custom-main.less**, which you have to apply to site.<br>
*Feel free to change color of button which are placed very top of less file*



## Custom [+] and [-] of product's quantity

![alt tag](http://toon.bypronto.com/wp-content/uploads/sites/878/2015/03/Capture2.png)

Apply **custom-quantity-minus-and-plus.js** to site.<br>
*Suggestion: add into global footer with code snippets plugin*



## Custom Add to Cart button

![alt tag](http://toon.bypronto.com/wp-content/uploads/sites/878/2015/03/Capture.png)

Apply **custom-shop.css** and **custom-shop.js** to site.<br>
*Suggestion: add into global footer with code snippets plugin*



## Change WooCommerce's description title

Call function of **fn-change-description-title.js** by<br>
change_woo_title( {-- Selected word --} , {-- Replace word --} );

For example:<br>
change_woo_title('Product Description', 'Property Description');<br>
change_woo_title('Related Products', 'Related Properties');<br>
*Reference: https://rogersprop.bypronto.com/wp-admin/post.php?post=369&action=edit*



## Change WooCommerce's search placeholder

Call function of **fn-change-search-placeholder.js** by<br>
change_woo_search( {-- Replace word --} );

For example:<br>
change_woo_search('Search Properties');<br>
*Reference: https://rogersprop.bypronto.com/wp-admin/post.php?post=369&action=edit*
