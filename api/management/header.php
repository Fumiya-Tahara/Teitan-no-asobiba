<?php
    function db() {
        $pdo=new PDO('mysql:host=localhost;dbname=teitan_db;charset=utf8', 
            'administrator', 'a1d2m3i4n5');
        // $pdo = new PDO('mysql:host=mysql215.phy.lolipop.lan;dbname=LAA1530773-cafe22teamb;charset=utf8', 
        // 'LAA1530773', 'Fic20222023It');
        return $pdo;
    }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>管理画面</title> 
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>