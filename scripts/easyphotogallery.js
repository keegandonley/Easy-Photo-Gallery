
$(function loadimages() {
	$('#photoGallery-Container').empty();
	var dataPhotoReturn;

	// You may need to change this to the directory you have placed the EasyPhotoGallery php file
    $.getJSON('/scripts/EPGgetimages.php', 
    function(data) {
	    dataPhotoReturn = data;

	    var photos = dataPhotoReturn,
	    i = 0;
		while (i < photos.length) {
			// Appends a div containing the respecive image
			$('#photoGallery-Container').append('<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer"> <img class="galleryImage" src="/images/gallery/czechrepublic/' +  photos[i] +'"" style="width: 100%"></div>');
			i++
		}
	})
});