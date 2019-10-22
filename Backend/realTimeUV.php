<?php 
error_reporting(-1);
ini_set('display_errors', 'On');
require 'database.php';

$db = new MySQLDatabase();
$db->connect();

$query = "SELECT * FROM History WHERE history_id = 1";
$result = $db->query($query);
$check = mysqli_fetch_array($result);
$realTimeUV = $check["uvindex"];
$historyJson = json_encode($check);
echo($historyJson);
$db->disconnect();
?>