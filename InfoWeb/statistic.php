<?php
error_reporting(-1);
ini_set('display_errors', 'On');
require_once "uq/auth.php";
auth_require();
require 'connectDB.php';
$db = new MySQLDatabase();
$db->connect();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>UV Cycle Informative Product Website</title>
    <link rel="stylesheet" href="css/stylestatistic.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/scrollClass.min.js"></script>
    <script src="js/javascript.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="js/plot.js"></script>
</head>

<body>
    <section id="all">
        <section id="title">

            <div id="logo">
                <img src="img/TeamWyzards.png" height="100" width="100">
            </div>
            <p>UV cycle</p>

        </section>

        <div id="stattitle">
            <p>Statistics:</p>
        </div>
        <section id="main">
            <section id="chart">

                <div id="canvas">
                    <canvas id="clicked" width="800" height="400"></canvas>
                </div>
            </section>
            <div id="stattitle1">
                <p>User's comments:</p>
            </div>
            <?php
            $query = "SELECT * FROM Users";
            $user = $db->query($query);
            ?>
            <section id="usercomments">

                <?php foreach ($user as $u) : ?>
                    <div id="comments">
                        <div id="comment">
                            <p><?php echo ($u["username"]) ?></p>
                            <p><?php echo ($u["comment"]) ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </section>
        </section>
    </section>
</body>

</html>