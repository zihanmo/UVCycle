<?php
require 'database.php';
session_start();

$userEmail = json_decode(file_get_contents('php://input'), true);
$email = $userEmail["email"];
$db = new MySQLDatabase();
$db->connect();

// get userid
$query = "SELECT userid FROM Users WHERE email = '$email'";
$result = $db->query($query);
$userid = mysqli_fetch_array($result)['userid'];

// fetch all recorded date according to userid
$query = "SELECT DISTINCT date FROM HistoryDemo WHERE userid = $userid"; // alter to $userid
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        array_push($arr, $row['date']);
    }
}
$db->disconnect();
echo(json_encode($arr));
?>