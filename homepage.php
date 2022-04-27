<?php
/**
 * Template name: Home
 *
 */

$context = Timber::context();

// Contexto e Query dos blog posts
$args = array(
	'post_type' => 'evento',
	'posts_per_page' => 5,
);
$context['eventos'] = new Timber\PostQuery($args);
//End - Contexto e Query dos blog posts

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'homepage.twig' ), $context );
