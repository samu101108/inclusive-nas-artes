<?php
/**
 * Template name: Eventos
 */

$timber_post     = new Timber\Post();
$context = Timber::context();

// Contexto e Query dos blog posts
$args = array(
	'post_type' => 'evento',
	'posts_per_page' => -1,
);
$context['eventos'] = new Timber\PostQuery($args);
//End - Contexto e Query dos blog posts

Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'eventos.twig' ), $context );
