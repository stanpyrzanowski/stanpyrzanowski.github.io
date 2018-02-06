<?php
function my_theme_enqueue_styles() {

    $parent_style = 'parent-style'; // This is 'twentyseventeen-style' for the Twenty Fifteen theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );


/* Custom post type "Wiadomości" */

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'news',
    array(
      'labels' => array(
        'name' => __( 'Wiadomości' ),
        'singular_name' => __( 'Wiadomość' )
      ),
      'public' => true,
      'has_archive' => true,
	  'supports' => array( 'title', 'editor', 'thumbnail')
    )
  );
}
