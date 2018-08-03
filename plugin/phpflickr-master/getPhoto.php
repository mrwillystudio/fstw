<?php
header("Content-Type:text/html; charset=utf-8");
if($_GET["pid"]) {
    
    require_once("./phpFlickr.php");
    $f = new phpFlickr("0b59e5a973367dbb171a86756d5ae480");
    $f->enableCache("db", "mysql://mrtasiwilly:root@127.0.0.1/c9");
    
    $photosets_info = $f->photosets_getInfo($photoset_id = $_GET["pid"]);
    $photosets_photos = $f->photosets_getPhotos($photoset_id = $_GET["pid"]);
    
    $arr = [];
    $arr["info"] = $photosets_info;
    $arr["photos"] = [];
    $index = 0;
    foreach ($photosets_photos['photoset']['photo'] as $photo) {
        $arr["photos"][$index] = array(
            "title" => $photo['title'],
            "url" => "https://farm".$photo['farm'].".staticflickr.com/".$photo['server']."/".$photo['id']."_".$photo['secret']."_h.jpg"
        );
        $index++;  
    }
    print(json_encode($arr));

}

?>
