<?php
require 'database.php';

$db = new MySQLDatabase();
$db->connect();
$query = "SELECT * FROM History";
$result = $db->query($query);
$arr = array();
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        $arr[$row['timestamp']] = $row['uvindex'];
    }
}
echo(json_encode($arr));
?>