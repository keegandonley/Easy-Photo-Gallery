<?php
$images = array();

$dir = opendir('../img/easyPhotoGallery/');
while (($file = readdir($dir)) !== false)
{
	if (substr($file,0,1) !== ".") {

	$images[] = $file;
	}
}
closedir($dir);

echo json_encode($images);
// To add multiple galleries, the best way (currently) is to create another php file to do the same thing
// on a different directory.
?>
