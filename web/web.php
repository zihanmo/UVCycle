<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "utf-8"/>
    <link rel = "stylesheet" href = "css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Saira' rel = 'stylesheet'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="js/indexplot.js"></script>
    <title>DECO3801_PROJECT</title>
</head>

<body>
    <div class = "logo">
        <img src = "images/logo.png" id = "img">
    </div>

    <canvas id="clicked" width="800" height="400" style="background-image: url('images/indexback.png'); background-repeat: no-repeat; background-size: 90% 55%; background-position: 90% 40%;"></canvas>

    <div class = "tab">
        <table>
            <tr id = "tablename">
                <th>Highest UV index</th>
                <th>At</th>
                <th>Risk</th>
                <th>Workout duration (hours)</th>
                <th>Average UV index</th>
            </tr>
            <tr>
                <th>12</th>
                <th>12:00</th>
                <th>Very High</th>
                <th>6</th>
                <th>8</th>
            </tr>
        </table>
    </div>

    <footer class = "foot">
        <p> By Team Wyzards With Andrew Demack @ <a href = "https://bq.org.au/">Bicycle Queensland Inc.</a></p>
    </footer>

</body>