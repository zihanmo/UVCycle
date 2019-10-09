<?php
    error_reporting(-1);
    ini_set('display_errors', 'On');
    require 'connectDB.php';
    session_start();
    $db = new MySQLDatabase();
    $db->connect();
    
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone = (int)$_POST["phone"];
    $date = date("Y-m-d", time());
    echo($date);
    // check username is unique
    $check_un_unique = "SELECT * FROM Users WHERE username = '$username'";
    $un_unique_result = $db->query($check_un_unique);
    $is_un_unique = 1;
    foreach ($un_unique_result as $row) { // username exists
        $is_un_unique = 0;
        echo "<script>alert('The username is already existing.');</script>";
        echo "<script>location='collect.php'</script>";
    }
    if ($is_un_unique) { // username and email are unique
        $query = "INSERT INTO Users (`username`, `email`, `phone`, `comment`, `purchase_date`) 
            VALUES ('$username', '$email', $phone, 'good', '$date')";
        $db->query($query);
        echo "<script>location='statistic.php'</script>";
    }
    $db->disconnect();
?>