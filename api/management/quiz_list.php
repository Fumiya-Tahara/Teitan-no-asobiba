<?php require './header.php';?>
<div class="main">
    <a href="./index.php">トップへ</a>
<?php	
    $pdo = db();
    echo '<table clas="quiz">';
    foreach ($pdo->query('select * from quiz_tbl') as $row) {
        echo '<form action="quiz_update.php" method="post">';
        echo '<input type="hidden" name="quiz_id" value="'. $row['quiz_id']. '">';
        echo '<tr>';
        echo '<td>'.$row["quiz_id"].'</td>';
        echo '<td>'.$row["title"].'</td>';
        echo '<td><input type="submit" value="変更"></td>';
        echo '</tr>';
        echo '</form>';
    }
    echo '</table>';
	?>