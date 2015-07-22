// The MIT License (MIT)

// Copyright (c) [2015] [Keegan Donley]

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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