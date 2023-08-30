<?php
    $pdo = db();
    function db() {
        $pdo=new PDO('mysql:host=localhost;dbname=teitan_db;charset=utf8', 
            'administrator', 'a1d2m3i4n5');
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
    
    $bytes = file_put_contents("../front/public/quiz.json", $json); 
?>