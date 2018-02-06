<?php
 /* Template Name: Wiadomości */

get_header(); ?>

<div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php 
			// the query
			$the_query = new WP_Query( array( 'post_type' => 'news') ); ?>

			<?php if ( $the_query->have_posts() ) : ?>

				<!-- pagination here -->

				<!-- the loop -->
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
					<h2>
						<a href="<?php echo get_post_permalink(); ?>"><?php the_title(); ?></a>
					</h2>
					<a href="<?php echo get_post_permalink(); ?>">
						<?php echo get_the_post_thumbnail() ?>
					</a>
				<?php endwhile; ?>
				<!-- end of the loop -->

				<!-- pagination here -->

				<?php wp_reset_postdata(); ?>

			<?php else : ?>
				<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php get_footer();
