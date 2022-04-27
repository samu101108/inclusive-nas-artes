<?php
/**
 * Template name: Seja volutário
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'sejavoluntario.twig' ), $context );
