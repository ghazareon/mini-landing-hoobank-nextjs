<?php
/**
 * Hoobank functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Hoobank
 */

// Define a constant to indicate whether it's a development environment
define('DEV_ENVIRONMENT', true);

if (!defined('_S_VERSION')) {
 // Replace the version number of the theme on each release.
 define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function hoobank_setup() {
 /*
  * Make theme available for translation.
  * Translations can be filed in the /languages/ directory.
  * If you're building a theme based on hoobank, use a find and replace
  * to change 'hoobank' to the name of your theme in all the template files.
  */
 load_theme_textdomain('hoobank', get_template_directory() . '/languages');

 // Add default posts and comments RSS feed links to head.
 add_theme_support('automatic-feed-links');

 /*
  * Let WordPress manage the document title.
  * By adding theme support, we declare that this theme does not use a
  * hard-coded <title> tag in the document head, and expect WordPress to
  * provide it for us.
  */
 add_theme_support('title-tag');

 /*
  * Enable support for Post Thumbnails on posts and pages.
  *
  * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
  */
 add_theme_support('post-thumbnails');

 // This theme uses wp_nav_menu() in one location.
 register_nav_menus([
  'menu-1' => esc_html__('Primary', 'hoobank'),
 ]);

 /*
  * Switch default core markup for search form, comment form, and comments
  * to output valid HTML5.
  */
 add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

 // Set up the WordPress core custom background feature.
 add_theme_support(
  'custom-background',
  apply_filters('hoobank_custom_background_args', [
   'default-color' => 'ffffff',
   'default-image' => '',
  ]),
 );

 // Add theme support for selective refresh for widgets.
 // add_theme_support( 'customize-selective-refresh-widgets' );

 /**
  * Add support for core custom logo.
  *
  * @link https://codex.wordpress.org/Theme_Logo
  */
 add_theme_support('custom-logo', [
  'height' => 250,
  'width' => 250,
  'flex-width' => true,
  'flex-height' => true,
 ]);
}
// add_action( 'after_setup_theme', 'hoobank_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function hoobank_content_width() {
 $GLOBALS['content_width'] = apply_filters('hoobank_content_width', 640);
}
// add_action( 'after_setup_theme', 'hoobank_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function hoobank_widgets_init() {
 register_sidebar([
  'name' => esc_html__('Sidebar', 'hoobank'),
  'id' => 'sidebar-1',
  'description' => esc_html__('Add widgets here.', 'hoobank'),
  'before_widget' => '<section id="%1$s" class="widget %2$s">',
  'after_widget' => '</section>',
  'before_title' => '<h2 class="widget-title">',
  'after_title' => '</h2>',
 ]);
}
// add_action( 'widgets_init', 'hoobank_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function hoobank_scripts() {
 wp_enqueue_style('hoobank-style', get_stylesheet_uri(), [], _S_VERSION);
 wp_style_add_data('hoobank-style', 'rtl', 'replace');

 // wp_enqueue_script( 'hoobank-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

 if (is_singular() && comments_open() && get_option('thread_comments')) {
  wp_enqueue_script('comment-reply');
 }
}

// add_action( 'wp_enqueue_scripts', 'hoobank_scripts' );

// Function to include Livereload script in the footer
function liveReload() {
 if (defined('DEV_ENVIRONMENT') && DEV_ENVIRONMENT) {
  echo '<script src="http://' . $_SERVER['HTTP_HOST'] . ':35729/livereload.js?snipver=1"></script>';
 }
}
add_action('wp_footer', 'liveReload', 100);

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');

function smartwp_disable_emojis() {
 remove_action('wp_head', 'print_emoji_detection_script', 7);
 remove_action('admin_print_scripts', 'print_emoji_detection_script');
 remove_action('wp_print_styles', 'print_emoji_styles');
 remove_filter('the_content_feed', 'wp_staticize_emoji');
 remove_action('admin_print_styles', 'print_emoji_styles');
 remove_filter('comment_text_rss', 'wp_staticize_emoji');
 remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
 add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
}

//Disable emojis in WordPress
add_action('init', 'smartwp_disable_emojis');

function disable_emojis_tinymce($plugins) {
 if (is_array($plugins)) {
  return array_diff($plugins, ['wpemoji']);
 } else {
  return [];
 }
}

function stop_self_ping(&$links) {
 $home = get_option('home');
 foreach ($links as $l => $link) {
  if (0 === strpos($link, $home)) {
   unset($links[$l]);
  }
 }
}

add_action('pre_ping', 'stop_self_ping');

function remove_api() {
 remove_action('wp_head', 'rest_output_link_wp_head', 10);
 remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
}

add_action('after_setup_theme', 'remove_api');

/*  DISABLE GUTENBERG STYLE IN HEADER| WordPress 5.9 */
function wps_deregister_styles() {
 wp_dequeue_style('global-styles');
}
add_action('wp_enqueue_scripts', 'wps_deregister_styles', 100);

add_action(
 'wp_enqueue_scripts',
 function () {
  wp_dequeue_style('global-styles-inline-css');
  wp_deregister_style('global-styles-inline-css');
 },
 100000,
);

add_action(
 'wp_enqueue_scripts',
 function () {
  wp_dequeue_style('global-styles');
  wp_deregister_style('global-styles');
 },
 PHP_INT_MAX,
);

add_action(
 'wp_enqueue_scripts',
 function () {
  wp_dequeue_style('classic-theme-styles');
 },
 20,
);

add_filter('xmlrpc_enabled', '__return_false');

//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css() {
 wp_dequeue_style('wp-block-library');
 wp_dequeue_style('wp-block-library-theme');
 wp_dequeue_style('wc-blocks-style'); // Remove WooCommerce block CSS
}
add_action('wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100);

add_filter('use_block_editor_for_post_type', '__return_false', 10);
// Don't load Gutenberg-related stylesheets.
add_action('wp_enqueue_scripts', 'remove_block_css', 100);
function remove_block_css() {
 wp_dequeue_style('wp-block-library'); // Wordpress core
 wp_dequeue_style('wp-block-library-theme'); // Wordpress core
 wp_dequeue_style('wc-block-style'); // WooCommerce
 wp_dequeue_style('storefront-gutenberg-blocks'); // Storefront theme
}

// <style>img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }</style>
add_filter('wp_lazy_loading_enabled', '__return_false');
add_filter('wp_img_tag_add_auto_sizes', '__return_false');


// function add_file_types_to_uploads($file_types){
// 	$new_filetypes = array();
// 	$new_filetypes['svg'] = 'image/svg+xml';
// 	$file_types = array_merge($file_types, $new_filetypes );
// 	return $file_types;
// 	}
// 	add_filter('upload_mimes', 'add_file_types_to_uploads');


	// EXCLUDE NODE MODULES
// add_filter( 'ai1wm_exclude_content_from_export',
// function ( $exclude_filters ) {
//   $exclude_filters[] = 'wp-content/themes/hoobank/node_modules';
// 		$exclude_filters[] = 'wp-content/themes/hoobank/.git';
// 		$exclude_filters[] = 'wp-content/themes/hoobank/.next';
//   return $exclude_filters;
// } );

// dd_filter('ai1wm_exclude_content_from_export', 'ignoreCertainFiles');

// function ignoreCertainFiles($exclude_filters)
// {
//     $exclude_filters[] = 'themes/hoobank/node_modules';
//     $exclude_filters[] = 'themes/hoobank/.git';
//     $exclude_filters[] = 'themes/hoobank/.next';
//     return $exclude_filters;
// }




// EXCLUDE NODE MODULES
// add_filter( 'ai1wm_exclude_themes_from_export',
// function ( $exclude_filters ) {
// 	$exclude_filters[] = 'hoobank/node_modules';
// 	$exclude_filters[] = 'hoobank/.git';
// 	$exclude_filters[] = 'hoobank/.next';
//   return $exclude_filters;
// } );