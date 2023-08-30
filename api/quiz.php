<?php
    $pdo = db();
    function db() {
        $pdo=new PDO('mysql:host=localhost;dbname=teitan-no-asobiba;charset=utf8', 'root', '');
        // $pdo = new PDO('mysql:host=mysql215.phy.lolipop.lan;dbname=LAA1530773-cafe22teamb;charset=utf8', 
        // 'LAA1530773', 'Fic20222023It');
        return $pdo;
    }

    $quizArray = [];    
    foreach ($pdo->query('select * from quiz_tbl') as $row) {
        $array = [
            "quiz_id" => $row["quiz_id"], 
            "title" => $row["title"], 
            "problem" => $row["problem"], 
            "choices1" => $row["choices1"], 
            "choices2" => $row["choices2"], 
            "choices3" => $row["choices3"], 
            "choices4" => $row["choices4"], 
            "right_answer" => $row["right_answer"], 
            "commentary" => $row["commentary"], 
            "url" => $row["url"]
        ];
        array_push($quizArray, $array);
    }
    $index = range(0, count($quizArray) - 1); 
    shuffle($index);
    $quizArray2 = [];
    
    foreach ($index as $row) {
        array_push($quizArray2, $quizArray[$row]);
    }
    $json = json_encode($quizArray2, JSON_UNESCAPED_UNICODE);
?>
<!-- 
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Quiz Page</title>
</head>
<body>
<script>
// PHPから生成されたJSONデータを直接埋め込む
var array = 
<?php echo $json; ?>;

array.forEach(elm => {
    document.write(elm['title']+'<br>');
    document.write(elm['problem']+'<br>');
    document.write(elm['choices1']+'<br>');
    document.write(elm['choices2']+'<br>');
    document.write(elm['choices3']+'<br>');
    document.write(elm['choices4']+'<br>');
    document.write(elm['right_answer']+'<br>');
    document.write('<br>'); // 各データの間に改行を追加
});
</script>
</body>
</html> -->
