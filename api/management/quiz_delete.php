<?php require './header.php';?>
<div class="main">
    <a href="./index.php">トップへ</a>
<?php	
    $pdo = db();
    if(!empty($_REQUEST['quiz_id'])){

        $sql=$pdo->prepare('delete from quiz_tbl  where quiz_id=?');
        $sql->execute([$_REQUEST['quiz_id']]);
    }else{
            echo '<table clas="quiz">';
            foreach ($pdo->query('select * from quiz_tbl') as $row) {
                echo '<form action="quiz_delete.php" method="post">';
                echo '<input type="hidden" name="quiz_id" value="'. $row['quiz_id']. '">';
                echo '<tr>';
                echo '<td>'.$row["quiz_id"].'</td>';
                echo '<td>'.$row["title"].'</td>';
                echo '<td><input type="submit" value="削除"></td>';
                echo '</tr>';
                echo '</form>';
            }
            echo '</table>';
        }
	?>