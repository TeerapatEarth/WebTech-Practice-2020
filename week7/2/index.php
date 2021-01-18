<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        th{
            border: 2px solid gray;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1 style="text-align: center; margin-top: 20px; margin-bottom: 20px">June 2020</h1>
    <table style="width: 50%; margin-left: auto; margin-right:auto;">
        <tr>
            <th style="width: 100px; height: 80px">So</th>
            <th style="width: 100px; height: 80px">Mo</th>
            <th style="width: 100px; height: 80px">Tu</th>
            <th style="width: 100px; height: 80px">We</th>
            <th style="width: 100px; height: 80px">Th</th>
            <th style="width: 100px; height: 80px">Fr</th>
            <th style="width: 100px; height: 80px">Sa</th>
        </tr>
        <?php
            $num = 0;
            for ($i = 0; $i < 5; $i++){
                echo "<tr>";
                for($j = 0; $j < 7; $j++){
                    if($num > 0 && $num < 31){
                        echo "<th style='width: 100px; height: 80px'>".$num."</th>";
                    }
                    else{
                        echo "<th style='width: 100px; height: 80px'></th>";
                    }
                    $num++;
                }
                echo "</tr>";
            }
        ?>
    </table>
</body>

</html>