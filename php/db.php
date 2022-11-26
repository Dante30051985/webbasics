<?php
define('database', 'a0676704_vreale');
define('user', 'a0676734_vreale');
define('password', 'admia!!!2@');
define('HOST', 'localhost');

// подключаемся к серверу
$link = mysqli_connect(HOST, user, password, database) or die("Ошибка " . mysqli_error($link));
?>
