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
?>
