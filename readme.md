##Easy Photo Gallery
####The simpest way to add a photo gallery to your website
<hr>
#####Index
- [Contents](#contents)
- [Installation](#installation)
- [Bootstrap Integration](#bootstrap-integration)
- [Adding Photos](#adding-photos)
- [Modifying easyphotogallery.js](#modifying-easyphotogalleryjs)
- [Modifying EPGgetimages.php](#modifying-epggetimagesphp)
- [Displaying Individual Photos](#displaying-individual-photos)
- [File Type Support](#file-type-support)
- [Multiple Galleries](#multiple-galleries)

<hr>

####Contents
*Requires:*

- Bootstrap css
- Bootstrap js
- jQuery

*Includes:*

- Bootstrap css
- Bootstrap js
- jQuery
- index.html
- easyphotogallery.js. 
- EPGgetimages.php
- style.css

####Installation

*I. Download and extract files*

Rendering index.html as-is will produce a sample gallery with 4 images and a little bit of data. The simplest way to run the PHP scripts locally is to use [MAMP](https://www.mamp.info/en/downloads/), which includes Apache, MySQL, & PHP.

*II. To add the gallery to your site, you must copy the files into the proper directories, or change the file paths accordingly. 
Defaults:*

<code>index.html</code>  |  <code> root directory </code>

<code>easyphotogallery.js</code> and <code>EPGGgetimages.php</code>  |  <code> /scripts/ </code>

<code>style.css</code>  |  </code> <code> /styles/ </code>


the gallery will be displayed in a div. Your html document must include this div with id photoGallery-Container to display the photos gallery:

<code> &lt;div id="photoGallery-Container"&gt;&lt;/div&gt; </code>

*Note: Your server must be running php for this gallery to work*


*III. add the <code>easyphotogallery.js</code> file in the head of your document in which the div appears.*

####Bootstrap Integration
Easy Photo Gallery uses Bootstrap in order to mantain a fluid layout of the photos on differing screen sizes. Each photo is 
appended inside a <code>div</code>: <code>&lt;div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer"&gt;</code> These
classes are used by bootstrap to determine the column width of each image on differing screen sizes (xs, sm, md, lg). See the 
bootstrap documentation for more information on using this feature: http://getbootstrap.com/css/#grid and http://getbootstrap.com/css/#responsive-utilities

See also [Displaying Individual Photos](#displaying-individual-photos) below.

####Adding Photos
Photos can be added to the directory <code>/img/easyPhotoGallery/</code> and they'll be automatically added to the photo gallery wherever your div appears.

####Modifying easyphotogallery.js
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

####Modifying EPGgetimages.php
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

####Displaying Individual Photos

Clicking an image opens a Bootstrap modal, showing the filename and the image.

In your <code>index.html</code> file, there's a heading which the js file displays the filename inside of:
<pre>
	&lt;h4 class=&quot;modal-title&quot; id=&quot;photoview-label&quot;&gt;&lt;/h4&gt;
</pre>
There's also a div in which the image is displayed:
<pre>
	&lt;div class=&quot;modal-body photoview-image&quot;&gt;&lt;/div&gt;
</pre>
*This modal is the reason that <code>bootstrap.js</code> is included in the dependencies. As with both the Bootstrap js and css, the .min versions may be substitued out.*

####File Type Support

This photo gallery supports any file type supported by standard HTML. The 3 commonly supported image types are <code>JPEG</code>, <code>PNG</code>, and <code>GIF</code>. <code>BMP</code> files should work fairly well across browser, but it's safest to stick to those 3. There's a great table on Wikipedia with full cross-browser compatibility of most common image files: [Wikipedia Table](https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support).

####Multiple Galleries

Currently, there is no support for multiple galleries to be displayed. One way around this is to open multiple directories manually (i.e running a similar php function on each separate directory as a different photo 'library'). In this way, multiple divs may be created with different ID's and the js file adjusted accordingly to put the correct photo library in each div. The next version will add this functionality automatically in order to display multiple libraries seamlessly. See comments in the files for more information.
