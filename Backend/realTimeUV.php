<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';
$data = json_decode(file_get_contents('php://input'), true);
$db = new MySQLDatabase();
$db->connect();
$email = $data["email"];
$uv_query = "SELECT * FROM History h, Users u WHERE u.userid=h.userid AND email='$email' ORDER BY `history_id` DESC, `timestamp` DESC LIMIT 1";
$uv_result = $db->query($uv_query);

$time_query = "SELECT COUNT(*) AS `elapse` FROM History h, Users u WHERE u.userid=h.userid AND email='willzhou@gmail.com' GROUP BY `history_id` ORDER BY `history_id` DESC LIMIT 1";
$time_elapse = $db->query($time_query);

$uv = mysqli_fetch_array($uv_result);
$realTimeUV = $uv["uvindex"];
$time = mysqli_fetch_array($time_elapse);
$timeElapse = $time["elapse"];

$json["uvindex"] = $realTimeUV;
$json["elapse"] = $timeElapse;

$historyJson = json_encode($json);
echo($historyJson);
$db->disconnect();
?>