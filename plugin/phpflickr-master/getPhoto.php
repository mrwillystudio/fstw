<?php
header("Content-Type:text/html; charset=utf-8");
if($_GET["pid"]) {
    
    require_once("./phpFlickr.php");
    $f = new phpFlickr("0b59e5a973367dbb171a86756d5ae480");
    //$f->enableCache("db", "mysql://mrtasiwilly:root@127.0.0.1/c9");
    //$f->enableCache("db", "mysql://mrwillystudio:root@127.0.0.1/flickr");
    
    $photosets_info = $f->photosets_getInfo($photoset_id = $_GET["pid"]);
    $photosets_photos = $f->photosets_getPhotos($photoset_id = $_GET["pid"]);
    
    $arr = [];
    $arr["info"] = $photosets_info;
    $arr["photos"] = [];
    $index = 0;
    
    try {
        if ($photosets_photos && array_key_exists('photoset', $photosets_photos)){
            if (array_key_exists('photo', $photosets_photos['photoset'])){
                foreach ($photosets_photos['photoset']['photo'] as $photo) {
                    $arr["photos"][$index] = array(
                        "title" => $photo['title'],
                        "url" => "https://farm".$photo['farm'].".staticflickr.com/".$photo['server']."/".$photo['id']."_".$photo['secret']."_b.jpg",
                        "thumb" => "https://farm".$photo['farm'].".staticflickr.com/".$photo['server']."/".$photo['id']."_".$photo['secret']."_t.jpg"
                    );
                    $index++;  
                }
            }else{
                $arr["photosets_photos_photoset"] = $photosets_photos['photoset'];
            }
        }else{
            $arr["photosets_photos"] = $photosets_photos;
        }
    } catch (Exception $e) {
        $arr["photosets_photos"] = $photosets_photos;
        $arr["error"] = $e->getMessage();
    }
    print(json_encode($arr));

}

?>
