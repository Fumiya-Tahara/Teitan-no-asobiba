<?php require './header.php';?>
<div class="main">
    <a href="./index.php">トップへ</a>
<?php	
$pdo = db();
if($_REQUEST['flag'] == 1){
        $sql=$pdo->prepare('update quiz_tbl set title =?, problem =? ,choices1 =? ,choices2 =? ,choices3 =? ,choices4 =? ,right_answer =? ,commentary =? ,url =? ');
        $sql->execute([$_REQUEST['name'],$_REQUEST['price'],$_REQUEST['introduction'],$flag,$_REQUEST['id']]);
    }else{
        $pdo->prepare('select * from product_tbl where quiz_id = ?') 
        $sql->execute([$_REQUEST['quiz_id']]);
        foreach ($sql as $row) {
            echo '<form action="quiz_update.php" method="post">';
            echo '<input type="hidden" name="flag" value=1>';
            echo '<input type="hidden" name="quiz_id" value="'. $row['quiz_id']. '">';
            echo '<p>'. $row['quiz_id']. '<p> ';
            echo '<p>タイトル<br><input type="text" name="title" class="input_title" value="'. $row['title']. '"></p>';
            echo '<p>問題文<br><textarea name="problem" class="input_text">'. $row['problem']. '"</textarea></p>';
            echo '<p>選択肢１<br><input type="text" name="choices1" class="input_title" value="'. $row['choices1']. '"></p>';
            echo '<p>選択肢２<br><input type="text" name="choices2" class="input_title" value="'. $row['choices2']. '"></p>';
            echo '<p>選択肢３<br><input type="text" name="choices3" class="input_title" value="'. $row['choices3']. '"></p>';
            echo '<p>選択肢４<br><input type="text" name="choices4" class="input_title" value="'. $row['choices4']. '"></p>'; 
            echo '<p>正解<br><input type="text" name="right_answer" value="'. $row['right_answer']. '"></p>';
            echo '<p>解説<br><textarea name="commentary" class="input_text">'. $row['commentary']. '"</textarea></p>';
            echo '<p>URL<br><input type="text" name="url" class="input_title" value="'. $row['url']. '"></p>';
            echo '<p><input type="submit" value="アップロード"></p>';
            echo '</form>';
            if($row['flag'] == 1){
                echo '<input type="checkbox" name="flag2" value="1" checked class="order_check_input">表示';
            }else{

                echo '<input type="checkbox" name="flag2" value="1"  class="order_check_input">表示';
            }

            echo '<div class="td2"><input type="submit" value="更新"></div>';
            echo '</form>';
            echo "\n";
        }
    }