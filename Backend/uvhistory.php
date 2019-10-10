<?php
require 'database.php';

$db = new MySQLDatabase();
$db->connect();
$query = "SELECT * FROM History";
$result = $db->query($query);
$timestamps = "";
$indexes = "";
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
        // echo json_encode(array(
        //     'timestamp' => $row['timestamp'],
        //     'index' => $row['uvindex']
        // ));
	if ($row['uvindex'] >= 0 && $row['uvindex'] <= 12) {
		$timestamps = $timestamps.("+".$row['timestamp']);
        	$indexes = $indexes.("+".$row['uvindex']);
	}
        
    }
}

$json = json_encode(array(
    'time' => $timestamps,
    'index' => $indexes
));
echo $json;
$db->disconnect();
?>