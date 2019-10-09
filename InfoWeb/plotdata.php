<?php
require 'connectDB.php';

$db = new MySQLDatabase();
$db->connect();
$query = "SELECT purchase_date, COUNT(*) FROM Users GROUP BY purchase_date";
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        $arr[$row['purchase_date']] = $row['clicks'];
    }
}
echo(json_encode($arr));
?>