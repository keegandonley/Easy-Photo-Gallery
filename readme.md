##Easy Photo Gallery##
####The simpest way to add a photo gallery to your website####

*Requires:*

1. bootstrap css
2. jquery

*Includes:*

1. bootstrap css
2. jquery
3. index.html
4. easyphotogallery.js
5. EPGgetimages.php
6. Style.CSS

####Installation####

I. Download and extract files

II. To add the gallery to your site, you must copy the files into the proper directories, or change the file paths accordingly. 
Defaults:

<code>index.html</code> - <code> root directory </code>

the gallery will be displayed in a div. Your html document must include this div to display the photos gallery:

<code> &lt;div id="photoGallery-Container"&gt;&lt;/div&gt; </code>

<code>easyphotogallery.js</code> and <code>EPGGgetimages.php</code> - <code> /scripts/ </code>

<code>style.css</code> - </code> <code> /styles/ </code>

*Note: Your server must be running php for this gallery to work*

III. add the <code>easyphotogallery.js</code> file in the head of your document in which the div appears.

####Bootstrap Integration####
Easy Photo Gallery uses Bootstrap in order to mantain a fluid layout of the photos on differing screen sizes. Each photo is 
appended inside a <code>div</code>: <code>&lt;div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer"&gt;</code> These
classes are used by bootstrap to determine the column width of each image on differing screen sizes (xs, sm, md, lg). See the 
bootstrap documentation for more information on using this feature: http://getbootstrap.com/css/#grid and http://getbootstrap.com/css/#responsive-utilities

####Adding Photos####
Photos can be added to the directory <code>/img/easyPhotoGallery/</code> and they'll be automatically added to the photo gallery wherever your div appears.

####Javascript File####
<pre>
var photos = dataPhotoReturn,
	    i = 0;
		while (i &lt; photos.length) {
			// Appends a div containing the respecive image
			$('#photoGallery-Container').append('&lt;div class=&quot;col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer&quot;&gt; &lt;a href=&quot;/img/easyPhotoGallery/' +  photos[i] + '&quot;&gt;&lt;img class=&quot;galleryImage&quot; src=&quot;/img/easyPhotoGallery/' +  photos[i] +'&quot;&quot; style=&quot;width: 100%&quot;&gt;&lt;/a&gt;&lt;/div&gt;');
			i++
		}
</pre>
The javascript file simply gets the JSON object passed from the PHP function and loops through it, appending each div containing each image in the array.

####PHP File####
<pre>
$dir = opendir('../img/easyPhotoGallery/');
</pre>
Line 4 (above) opens the directory with the photos. This can be set to any directory in order to use this photo gallery with multiple different galleries.

<pre>
if (substr($file,0,1) !== ".") {

$images[] = $file;
}
</pre>
These lines (7-10) simply ignore system files (beginning with '.'). Currently, there's no way to ignore other non-image files, so the directory needs to only contain images.
