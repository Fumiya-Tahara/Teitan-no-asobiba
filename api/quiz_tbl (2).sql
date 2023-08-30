-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 
-- サーバのバージョン： 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teitan_db`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `quiz_tbl`
--

CREATE TABLE `quiz_tbl` (
  `quiz_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `problem` varchar(200) NOT NULL,
  `choices1` varchar(200) NOT NULL,
  `choices2` varchar(200) NOT NULL,
  `choices3` varchar(200) NOT NULL,
  `choices4` varchar(200) NOT NULL,
  `right_answer` int(11) NOT NULL,
  `commentary` varchar(200) NOT NULL,
  `url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `quiz_tbl`
--

INSERT INTO `quiz_tbl` (`quiz_id`, `title`, `problem`, `choices1`, `choices2`, `choices3`, `choices4`, `right_answer`, `commentary`, `url`) VALUES
(6, '自動車の節約テクニック', '自動車の燃費をよくするためのテクニックはどれでしょう。', 'ゆっくアクセルを踏む', 'ゆっくりブレーキを踏む', 'なるべく強くアクセルを踏む', 'ゆっくり走る', 1, 'ゆっくりとアクセルを踏むことでガソリン代の節約になるぞ！', ''),
(8, '食品ロスについて', '食べられる食品を捨ててしまう「食品ロス」だけど、日本の一年間(2017年)で生まれた「食品ロス」の総量として正しいものは次のうちどれでしょう。', '約6120トン', '約61200トン', '約612000トン', '約6120000トン', 4, '日本の食品ロスの主な原因はコンビニエンスストアなどでの売れ残りや飲食店での食べ残し、家庭で発生する料理の作りすぎなどがあげられるぞ！ごはんを残さず食べて食品ロスを減らすことは節約にもつながるぞ！', ''),
(9, 'ごみをださない方法', 'ごみをださないための方法としてよくないのは次のうちどれでしょう。', 'ウォーターサーバーを使う', '吸水性の高いふきんを使う', '電池を充電式に交換', '新たな製品をこまめに購入', 4, 'できるだけものを長く使うことでごみを減らすことができる！充電池は繰り返し使えば使うほどお得になるぞ！', ''),
(10, 'グリーン電力', '環境対策に有効な「グリーン電力」は次のうちどれでしょう。', '「グリーン」社によるエコロジー電力', '木材を利用した火力発電による電力', '自然エネルギーから生まれた環境にやさしい電力', '巨大発電機「グリーン」による電力', 3, 'グリーン電力には自然エネルギーを利用した、風力発電、太陽光発電、地熱発電などがあるぞ！', ''),
(11, '食品ロス対策', '食べられる食品を捨ててしまう「食品ロス」の対策で正しいのは次のうちどれでしょう。', '食材は常に多めに購入する', 'フードバンクを利用する', '外食では食べたいものを好きなだけ注文する', '購入した食材の賞味、消費期限は気にしなくてよい', 2, 'フードバンクは食べきれない食材をもっていくとそれを必要な人に届けてくれるサービスだ！必要なものだけ買って、食べられるものだけを注文しよう！ちなみに北九州ではフードバンク北九州ライフアゲインというサービスがあるぞ！保護者の方と利用してみるといいかもしれないぞ！？\r\n', ''),
(12, '着れなくなった服', 'サイズの合わなくなった服はどうすればいい？次のうちどれでしょうか。', 'そのままごみ袋にいれて捨てる', '燃やして灰にする', '無理やり着る', 'リサイクルショップに持っていく', 4, '服に限らず、不要になったものはリサイクルショップを利用して処分ついでにお金ももらっちゃおう！', ''),
(13, 'ごみの排出量', '次のうち2020年のごみ総排出量が最も多い市はどこでしょう。', '北九州市(福岡県)', 'さいたま市(埼玉県)', '京都市(京都府)', '仙台市(宮城県)', 1, '北九州市のごみ総排出量(総量)は428,667(t)だ！ちなみに全国でのランキングでは横浜市の1,135,309(t)が最も多い結果になったぞ！　', ''),
(14, '地球にやさしい食べ物', '環境にやさしい食べ物は次のうちどれでしょう。', '牛肉', '鶏肉', '野菜', 'チーズ', 3, '肉や乳製品の生産には温室効果ガスを多く排出してしまう！家庭菜園などで野菜を作ると楽しみながらお得に野菜を食べられるぞ！', ''),
(15, 'エアコンの節電術', 'エアコンの節電術として正しくないのはどれでしょう。', 'フィルターをきれいにする', 'エアコンだけで室温調整をする', '室外機の近くに物を置かない', '壊れかけてもなるべく長く使う', 4, '最新のエアコンのほうが効率がいいから節電には新しいエアコンのほうがいいぞ！', ''),
(16, '冷蔵庫の節電術', '冷蔵庫の節電方法でよくないのはどれでしょう。', 'いっぱい食べ物をいれすぎない', 'カレーをさまして入れる', '温度を低くしすぎない', 'ずっと同じ温度で使う', 4, '夏は食べ物が傷まないように冷たくしないといけないけど、冬は冷蔵庫も冷たくなるから弱くしても大丈夫だぞ！', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz_tbl`
--
ALTER TABLE `quiz_tbl`
  ADD PRIMARY KEY (`quiz_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quiz_tbl`
--
ALTER TABLE `quiz_tbl`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
