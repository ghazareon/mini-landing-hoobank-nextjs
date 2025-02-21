<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hoobank
 */
?>
<?php
	$TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
	$assets = $TEMPLATE_PATH . '/build/assets';
?>

<!doctype html>
<html class="notranslate" lang="en" translate="no">
<?php include_once 'src/php/header.php'; ?>
<body>
 <noscript>You need to enable JavaScript to run this app.</noscript>
	<div class="wrap" data-scroll-container></div>
	<?php include_once 'src/php/footer.php'; ?>
</html>
