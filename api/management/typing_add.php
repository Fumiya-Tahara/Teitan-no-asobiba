<?php require './header.php';?>
<body>
<div class="main">
    <a href="./index.php" class="button-link">トップへ</a>
<?php	
$pdo = db();
    if(!empty($_REQUEST['sentence'])){
    $flag = 1;
    if($flag = 1){
        $sql=$pdo->prepare('insert into typing_tbl values(null,?,?)');
        $sql->execute([$_REQUEST['sentence'],$_REQUEST['sentence2']]);
        echo "アップロードが完了しました";
    }else{
        echo "アップロードに失敗しました";
    }
    echo "<a href='typing_add.php'>次</a>";
    }else{
            echo '<div clas="news_add">';
            echo '<form action="typing_add.php" method="post" enctype="multipart/form-data" class="blog_up">';
            echo '<p>文<br><textarea name="sentence" class="input_text"></textarea></p>';
            echo '<p>ローマ字<br><textarea name="sentence2" class="input_text"></textarea></p>';
            echo '<p><input type="submit" value="アップロード"></p>';
            echo '</form>';
            echo '</div>';
        }
	?>