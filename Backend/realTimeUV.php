<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';
$data = json_decode(file_get_contents('php://input'), true);
$db = new MySQLDatabase();
$db->connect();
$email = $data["email"];
$uv_query = "SELECT * FROM History h, Users u WHERE u.sensorid=h.sensorid AND email='$email' ORDER BY `history_id` DESC, `timestamp` DESC LIMIT 1";
$uv_result = $db->query($uv_query);

$time_query = "SELECT TIMESTAMPDIFF(SQL_TSI_MINUTE, mi, ma) AS elapse FROM (SELECT MAX(`timestamp`) as ma, MIN(`timestamp`) as mi, history_id FROM History h, Users u WHERE u.sensorid=h.sensorid AND email='$email' GROUP BY `history_id` ORDER BY `history_id` DESC LIMIT 1) T";
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

