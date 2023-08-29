<?php require './header.php';?>
<div class="main">
    <a href="./index.php">トップへ</a>
<?php	
    $pdo = db();
        if(!empty($_REQUEST['title'])){
        $flag = 1;
        if($flag = 1){
            $sql=$pdo->prepare('insert into quiz_tbl values(null,?,?,?,?,?,?,?,?,?)');
            $sql->execute([$_REQUEST['title'],$_REQUEST['problem'],$_REQUEST['choices1'],$_REQUEST['choices2'],$_REQUEST['choices3'],$_REQUEST['choices4'],$_REQUEST['right_answer'],$_REQUEST['commentary'],$_REQUEST['url']]);
            echo "アップロードが完了しました";
        }else{
            echo "アップロードに失敗しました";
        }
        echo "<a href='quiz_add.php'>次</a>";
    }else{
            echo '<div clas="news_add">';
            echo '<form action="quiz_add.php" method="post" enctype="multipart/form-data" class="blog_up">';
            echo '<p>タイトル<br><input type="text" name="title" class="input_title"></p>';
            echo '<p>問題文<br><textarea name="problem" class="input_text"></textarea></p>';
            echo '<p>選択肢１<br><input type="text" name="choices1" class="input_title"></p>';
            echo '<p>選択肢２<br><input type="text" name="choices2" class="input_title"></p>';
            echo '<p>選択肢３<br><input type="text" name="choices3" class="input_title"></p>';
            echo '<p>選択肢４<br><input type="text" name="choices4" class="input_title"></p>'; 
            echo '<p>正解<br><input type="text" name="right_answer"></p>';
            echo '<p>解説<br><textarea name="commentary" class="input_text"></textarea></p>';
            echo '<p>URL<br><input type="text" name="url" class="input_title"></p>';
            echo '<p><input type="submit" value="アップロード"></p>';
            echo '</form>';
            echo '</div>';
        }
	?>