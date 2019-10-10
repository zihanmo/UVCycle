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
        <style>
            /* code from W3C school */
            .container {
                display: inline-block;
                cursor: pointer;
                padding: 2em;
            }
            
            .bar1, .bar2, .bar3 {
                width: 35px;
                height: 5px;
                background-color: #333;
                margin: 6px 0;
                transition: 0.4s;
            }
            
            .change .bar1 {
                transform: rotate(-45deg) translate(-9px, 6px);
            }
            
            .change .bar2 {opacity: 0;}
            
            .change .bar3 {
                transform: rotate(45deg) translate(-8px, -8px);
            }
        </style>
    </head>
    <body>
    

        <section id="all">

            <section id="title">
          
                <div id="logo">
                    <img src="img/TeamWyzards.png" height="100" width="100">
                </div>
                <p>UV cycle</p>
           
            </section>

            <hr width="100%">


            <section id="main">


            <section id="chart">
                    <div id="Statistics">

                <p>Statistics:</p>

            </div>
            <div id="canvas">
            <canvas id="clicked" width="800" height="400"></canvas>
        </div>
           
            </section>
  
            <hr width="100%">
            
            <section id="usercomments">
                    <div id="commentheader">

                <p>User's comments:</p>

            </div>
                <div id="comments">
                        <div id="comment">
                                <p>User's name :</p>   <p>comment1</p>
                            </div>


                        

                  
                </div>
        
           
            </section>

        </section>



        </section>
        

        
    </body>
</html>