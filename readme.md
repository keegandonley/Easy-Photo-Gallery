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

####Installation####

1. Download and extract files
2. To add the gallery to your site, you must copy the files into the proper directories, or change the file paths accordingly. 
Defaults:

<code>index.html</code> - <code> root directory </code>

the gallery will be displayed in a div. Your html document must include this div to display the photos gallery:

<code> &lt;div id="photoGallery-Container"&gt;&lt;/div&gt; </code>

<code>easyphotogallery.js</code> and <code>EPGGgetimages.php</code> - <code> /scripts/ </code>

*Note: Your server must be running php for this gallery to work*

####Bootstrap Integration####
Easy Photo Gallery uses Bootstrap in order to mantain a fluid layout of the photos on differing screen sizes. Each photo is 
appended inside a <code>div</code>: <code>&lt;div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 imageContainer"&gt;</code> These
classes are used by bootstrap to determine the column width of each image on differing screen sizes (xs, sm, md, lg). See the 
bootstrap documentation for more information on using this feature: http://getbootstrap.com/css/#grid and http://getbootstrap.com/css/#responsive-utilities
