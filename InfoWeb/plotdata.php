<?php
require 'connectDB.php';

$db = new MySQLDatabase();
$db->connect();
$query = "SELECT * FROM Clicks";
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        $arr[$row['calendar']] = $row['clicks'];
    }
}
echo(json_encode($arr));
?>