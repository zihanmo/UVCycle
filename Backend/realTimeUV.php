<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';
$data = json_decode(file_get_contents('php://input'), true);
$db = new MySQLDatabase();
$db->connect();
$email = $data["email"];
$query = "SELECT * FROM History h, Users u WHERE u.userid=h.userid AND email='$email' ORDER BY `history_id` DESC, `timestamp` DESC LIMIT 1";
$result = $db->query($query);

$check = mysqli_fetch_array($result);
$realTimeUV = $check["uvindex"];
$historyJson = json_encode($check);
echo($historyJson);
$db->disconnect();
?>