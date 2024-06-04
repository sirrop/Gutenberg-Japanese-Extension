<?php
/*
 * Plugin Name: Gutenberg Japanese Extension
 * Plugin URI:
 * Description: Gutenbergの日本語向け拡張です
 * Author: shiro
 * Author URI: https://studrime.com/
 * License: GPL v2 or later
 */

const GJPX_VERSION = '0.1.0';

add_action( 'init', fn() => wp_enqueue_script(
    'gutenberg-auto-completer-for-jp',
    plugins_url( 'js/autocompleters/block-jp.js', __FILE__ ),
    [ 'wp-hooks' ]
));

add_action( 'init', fn() => wp_enqueue_script(
    'gutenbergx-jp-block-transforms',
    plugins_url( 'js/transforms/index.js', __FILE__ ),
    [ 'wp-hooks' ]
));

add_action( 'script_loader_tag', function($tag, $handle, $src) {
    $target_handler = [ 'gutenbergx-jp-block-transforms' ];
    if (!in_array($handle, $target_handler)) return $tag;

    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    return $tag;
}, 10, 3);

// add_action( 'init', fn() => wp_enqueue_script(
//     'gutenbergx-body-placeholder',
//     plugins_url( 'js/body-placeholder.js', __FILE__ ),
//     [ 'wp-hooks' ]
// ));

add_filter( 'block_editor_settings', function( $editor_settings ){
    $editor_settings['bodyPlaceholder'] = 'ブロックを選択するには「/」または「；」を入力';
    return $editor_settings;
});

