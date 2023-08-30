<?php require './header.php'; ?>
<div class="main">
    <a href="./index.php" class="button-link">トップへ</a>
<?php	
$pdo = db();
if(!empty($_REQUEST['flag'])){
    $sql=$pdo->prepare('update quiz_tbl set title =?, problem =? ,choices1 =? ,choices2 =? ,choices3 =? ,choices4 =? ,right_answer =? ,commentary =? ,url =? where quiz_id=?');
    $sql->execute([$_REQUEST['title'],$_REQUEST['problem'],$_REQUEST['choices1'],$_REQUEST['choices2'],$_REQUEST['choices3'],$_REQUEST['choices4'],$_REQUEST['right_answer'],$_REQUEST['commentary'],$_REQUEST['url'],$_REQUEST['quiz_id']]);
} else {
    $sql = $pdo->prepare('select * from quiz_tbl where quiz_id = ?');
    $sql->execute([$_REQUEST['quiz_id']]);
    foreach ($sql as $row) {
        echo '<form action="quiz_update.php" method="post">';
        echo '<input type="hidden" name="flag" value=1>';
        echo '<input type="hidden" name="quiz_id" value="'. $row['quiz_id']. '">';
        echo '<p>'. $row['quiz_id']. '</p>';
        echo '<p>タイトル<br><input type="text" name="title" class="input_quiz" value="'. $row['title']. '"></p>';
        echo '<p>問題文<br><textarea name="problem" class="input_text">'. $row['problem'] .'</textarea></p>';
        echo '<p>選択肢１<br><input type="text" name="choices1" class="input_quiz" value="'. $row['choices1']. '"></p>';
        echo '<p>選択肢２<br><input type="text" name="choices2" class="input_quiz" value="'. $row['choices2']. '"></p>';
        echo '<p>選択肢３<br><input type="text" name="choices3" class="input_quiz" value="'. $row['choices3']. '"></p>';
        echo '<p>選択肢４<br><input type="text" name="choices4" class="input_quiz" value="'. $row['choices4']. '"></p>'; 
        echo '<p>正解<br><input type="text" name="right_answer" value="'. $row['right_answer']. '"></p>';
        echo '<p>解説<br><textarea name="commentary" class="input_text">'. $row['commentary'] .'</textarea></p>';
        echo '<p>URL<br><input type="text" name="url" class="input_quiz" value="'. $row['url']. '"></p>';
        echo '<p><input type="submit" value="アップロード"></p>';
        echo '</form>';
        }
    }