<?php require './header.php';?>
<div class="main">
    <a href="./index.php">トップへ</a>
<?php	
    $pdo = db();
    if(!empty($_REQUEST['typing_id'])){

        $sql=$pdo->prepare('delete from typing_tbl  where typing_id=?');
        $sql->execute([$_REQUEST['typing_id']]);
    }else{
            echo '<table clas="typing">';
            foreach ($pdo->query('select * from typing_tbl') as $row) {
                echo '<form action="typing_delete.php" method="post">';
                echo '<input type="hidden" name="typing_id" value="'. $row['typing_id']. '">';
                echo '<tr>';
                echo '<td>'.$row["typing_id"].'</td>';
                echo '<td>'.$row["sentence"].'</td>';
                echo '<td><input type="submit" value="削除"></td>';
                echo '</tr>';
                echo '</form>';
            }
            echo '</table>';
        }
	?>