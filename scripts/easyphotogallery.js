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
			var filename = photos[i]
			// Appends a div containing the respecive image
			$('#photoGallery-Container').append('<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer" data-image="' + filename +'" data-toggle="modal" data-target="#photoview-modal"> <img class="galleryImage" src="/img/easyPhotoGallery/' +  filename +'" style="width: 100%"></div>');
			i++
		}
		$('.EPG-numfiles').html(photos.length);
		openimage();

	})
});

function openimage() {
$('.imageContainer').click(function(){
	var image = $(this).data('image')
	$('#photoview-label').html(image);
	$('.photoview-image').html('<img src="/img/easyPhotoGallery/' + image + '" style="width: 100%">');
})
}

// IN ORDER TO ADD MULTIPLE GALLERIES:
// Currently, multiple galleries isn't supported.
// If multiple PHP files are created for each directory (read: 'gallery'),
// Another js function can be writted to display another gallery in a different div.