<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package BS
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-last-articles-zig-zag';

// Hook server side rendering into render callback
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'content' => array(
				'type' => 'string',
			),
			'max_posts' => array(
				'type' => 'string',
			),
		),
		'render_callback' => 'render_bs_last_articles_zig_zag',
	)
);


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_last_articles_zig_zag_assets()
{
	wp_enqueue_style(
		'bs_last_articles_zig_zag-style-css',
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
		array('wp-editor')
	);
}
add_action('enqueue_block_assets', 'bs_last_articles_zig_zag_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_last_articles_zig_zag_editor_assets()
{ // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'bs_last_articles_zig_zag-block-js', // Handle.
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bs_last_articles_zig_zag-block-editor-css', // Handle.
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
		array('wp-edit-blocks') // Dependency to include the CSS after it.
	// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

function render_bs_last_articles_zig_zag_element($post, $isReverse)
{
	$modifier = $isReverse ? 'is-reverse' : '';
	$post_id = $post['ID'];
	if (function_exists('get_field')) {
		$seoDescription = get_field('seoDescription', $post_id);
		$description = $seoDescription ? $seoDescription : get_the_excerpt($post_id);
	} else {
		$description = $post['post_content'];
	}

	return '
		<div class="ml-article-extract l-flex l-flex--wrap a-pad ' . $modifier . '">
			<div class="ml-article-extract__image l-column--1-2 l-column--mobile--1-1">
				<picture class="">
					<img style="width:100%; object-fit: cover;" 
						 class="a-image a-image--thumbnail " 
						 src="' . esc_url(get_the_post_thumbnail_url($post_id)) . '">
				</picture>
			</div>
			<div class="ml-article-extract__content
					l-flex
					l-flex--direction-column
					l-flex--justify-space-around
					
					l-column--1-2
					l-column--mobile--1-1
					a-pad--x-40">
				<h3 class="a-text a-text--l  l-column--1-1">
					' . esc_html(get_the_title($post_id)) . '
				</h3>
				<div class="entry-resume-content a-pad"> ' . wp_trim_words($description, 20, '...') . '</div>
				<a href="' . esc_url(get_the_permalink($post_id)) . '" class="a-button a-button--rounded a-button--s a-button--secondary l-flex--align-center">
					Leer Más
				</a>
			</div>
		</div>';
}


function render_bs_banner_posts($posts)
{
	$html = '';
	foreach ($posts as $key => $post) {
		$html .= render_bs_last_articles_zig_zag_element($post, $key % 2 == 0);
	}
	return $html;
}

function render_bs_last_articles_zig_zag($attributes)
{
	if ($attributes['max_posts']) {
		$POST_TO_SHOW = $attributes['max_posts'];
	} else {
		$POST_TO_SHOW = 5;
	}

	$posts = wp_get_recent_posts([
		'numberposts' => $POST_TO_SHOW,
		'post_status' => 'publish',
	]);

	if (empty($posts)) {
		return '';
	}
	return '
	<section class="og-articles-zigzag a-pad-20">
		<h2 class="a-text a-text--xl  a-text--center a-text--bold a-pad">
        	' . $attributes['content'] . '
   		</h2>
   		' . render_bs_banner_posts($posts) . '
	</section>';

}


// Hook: Editor assets.
add_action('enqueue_block_editor_assets', 'bs_last_articles_zig_zag_editor_assets');
