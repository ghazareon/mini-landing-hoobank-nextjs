<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ecoland
 */
?>
<head>
 <title><?= bloginfo('name') ?></title>
 <meta charset="UTF-8" />
 <meta content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,maximum-scale=4,user-scalable=yes" name="viewport" />
 <meta content="notranslate" name="google" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-40x40.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="40x40" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-57x57.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="57x57" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-60x60.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="60x60" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-72x72.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="72x72" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-76x76.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="76x76" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-80x80.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="80x80" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-87x87.pic.png"          rel="apple-touch-icon"             type="image/png"     sizes="87x87" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-114x114.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="114x114" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-120x120.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="120x120" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-144x144.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="144x144" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-152x152.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="152x152" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-167x167.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="167x167" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-180x180.pic.png"        rel="apple-touch-icon"             type="image/png"     sizes="180x180" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-1024x1024.pic.png"      rel="apple-touch-icon"             type="image/png"     sizes="1024x1024" />
 <link href="<?= $assets ?>/img/pic/apple-icon.pic.png"                      rel="apple-touch-icon-precomposed" type="image/png"     sizes="192x192" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-40x40.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="40x40" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-57x57.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="57x57" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-58x58.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="58x58" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-60x60.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="60x60" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-72x72.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="72x72" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-76x76.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="76x76" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-80x80.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="80x80" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-87x87.pic.png"          rel="apple-touch-icon-precomposed" type="image/png"     sizes="87x87" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-114x114.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="114x114" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-120x120.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="120x120" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-144x144.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="144x144" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-152x152.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="152x152" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-167x167.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="167x167" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-180x180.pic.png"        rel="apple-touch-icon-precomposed" type="image/png"     sizes="180x180" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-1024x1024.pic.png"      rel="apple-touch-icon-precomposed" type="image/png"     sizes="1024x1024" />
 <link href="<?= $assets ?>/img/pic/favicon-without-bg.pic.png"              rel="icon"                         type="image/png"     sizes="93x105" />
 <link href="<?= $assets ?>/img/pic/favicon-16x16.pic.png"                   rel="icon"                         type="image/png"     sizes="16x16" />
 <link href="<?= $assets ?>/img/pic/favicon-32x32.pic.png"                   rel="icon"                         type="image/png"     sizes="32x32" />
 <link href="<?= $assets ?>/img/pic/favicon-96x96.pic.png"                   rel="icon"                         type="image/png"     sizes="96x96" />
 <link href="<?= $assets ?>/img/pic/favicon-128x128.pic.png"                 rel="icon"                         type="image/png"     sizes="128x128" />
 <link href="<?= $assets ?>/img/pic/favicon-192x192.pic.png"                 rel="icon"                         type="image/png"     sizes="192x192" />
 <link href="<?= $assets ?>/img/pic/favicon-194x194.pic.png"                 rel="icon"                         type="image/png"     sizes="194x194" />
 <link href="<?= $assets ?>/img/pic/favicon-196x196.pic.png"                 rel="icon"                         type="image/png"     sizes="196x196" />
 <link href="<?= $assets ?>/img/pic/favicon-with-bg.pic.svg"                 rel="icon"                         type="image/svg+xml" sizes="300x300" />

 <meta content="project"                                                     name="msapplication-tooltip" />
 <meta content="/"                                                           name="msapplication-starturl" />
 <meta content="#ffffff"                                                     name="msapplication-TileColor" />
 <meta content="browserconfig.xml"                                           name="msapplication-config" />
 <meta content="<?= $assets ?>/img/pic/ms-icon-310x310.pic.png"              name="msapplication-TileImage" />
 <meta content="<?= $assets ?>/img/pic/mstile-70x70.pic.png"                 name="msapplication-square70x70logo" />
 <meta content="<?= $assets ?>/img/pic/mstile-150x150.pic.png"               name="msapplication-square150x150logo" />
 <meta content="<?= $assets ?>/img/pic/msapplicationWide310x150logo.pic.png" name="msapplication-wide310x150logo" />
 <meta content="<?= $assets ?>/img/pic/ms-icon-310x310.pic.png"              name="msapplication-square310x310logo" />
 <meta content="address=no"                                                  name="format-detection" />
 <meta content="email=no"                                                    name="format-detection" />
 <meta content="telephone=no"                                                name="format-detection" />
 <meta content="date=no"                                                     name="format-detection" />
 <meta content="project"                                                     name="keywords" />

 <meta content="project"                                                     name="description" />
 <meta content=""                                                            name="author" />
 <link href="https://github.com/ghazareon" rel="author" />
 <meta content=""                                                            name="creator" />
 <meta content=""                                                            name="publisher" />

 <meta content=""                                                            property="article:published_time" />
 <meta content=""                                                            property="article:published_time" />
 <meta content=""                                                            property="article:author" />

 <meta content="summary"                                                     name="twitter:card" />
 <meta content="project"                                                     name="twitter:title" />
 <meta content="project"                                                     name="twitter:description" />

 <meta content="project"                                                     property="og:title" />
 <meta content="project"                                                     property="og:description" />
 <meta content="project"                                                     property="og:url" />
 <meta content="project"                                                     property="og:site_name" />
 <meta content="en_US"                                                       property="og:locale" />
 <meta content="en_US"                                                       property="og:locale" />
 <meta content="<?= $assets ?>/img/pic/project-share-screen.png"             property="og:image" />
 <meta content="1024"                                                        property="og:image:width" />
 <meta content="1024"                                                        property="og:image:height" />
 <meta content="project"                                                     property="og:image:alt" />

 <meta content="<?= $assets ?>/img/pic/project-share-screen.png"             name="twitter:image" />
 <meta content="1024"                                                        name="twitter:image:width" />
 <meta content="1024"                                                        name="twitter:image:height" />
 <meta content="project"                                                     name="twitter:image:alt" />
 <meta content="project"                                                     name="application-name" />
 <meta content="yes"                                                         name="mobile-web-app-capable" />
 <meta content="black-translucent"                                           name="apple-mobile-web-app-status-bar-style" />
 <meta content="project"                                                     name="apple-mobile-web-app-title" />

 <link href="<?= $TEMPLATE_PATH ?>/build/manifest.json"                      rel="manifest" crossorigin="use-credentials" />
 <link href="<?= $assets ?>/img/pic/apple-touch-icon-1024x1024.pic.png"      rel="apple-touch-startup-image" type="image/png" />
 <link href="<?= $assets ?>/img/pic/favicon.ico"                             rel="alternate icon"            type="image/x-icon" />
 <link href="<?= $assets ?>/img/pic/favicon-without-bg.pic.svg"              rel="mask-icon"                 type="image/svg+xml" color="#ffffff" />
 <?php wp_head(); ?>
 <link href="<?= $assets ?>/css/main.css" rel="stylesheet" crossorigin />
</head>
