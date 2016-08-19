<?php

class InertiaPost extends TimberPost {

	function siblings() {
		return Timber::get_posts('post_type='.$this->post_type);
	}
}