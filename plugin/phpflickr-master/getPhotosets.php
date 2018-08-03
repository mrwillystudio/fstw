<?php
header("Content-Type:text/html; charset=utf-8");

require_once("./phpFlickr.php");
$f = new phpFlickr("0b59e5a973367dbb171a86756d5ae480");
$f->enableCache("db", "mysql://mrtasiwilly:root@127.0.0.1/c9");

$user_name = 'Mr.Willy.Studio';
$user_info = $f->people_findByUsername($username = $user_name);
$user_id = $user_info['id'];
$user_photosets = $f->photosets_getList($user_id = $user_id);

$arr = [];
$index = 0;
foreach($user_photosets['photoset'] as $photoset){
    $photo = $f->photos_getInfo($photoset['primary'])['photo'];
   
    $arr[$index] = array(
        "id" => $photoset['id'],
        "title" => $photoset['title'],
        "description" => $photoset['description'],
        "url" => "https://farm".$photo['farm'].".staticflickr.com/".$photo['server']."/".$photo['id']."_".$photo['secret'].".jpg"
    );
    $index++;   
}
print(json_encode($arr));

?>
