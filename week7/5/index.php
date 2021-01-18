<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>5</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        th{
            border: 1px solid black;
            text-align: center;
        }
    </style>
</head>

<body>
    <table style="margin-left: auto; margin-right:auto; margin-top: 20px;">
        <tr>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px; height: 50px;">x</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">1</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">2</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">3</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">4</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">5</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">6</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">7</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">8</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">9</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">10</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">11</th>
            <th style="background-color: hsl(200, 0%, 80%); width: 50px;">12</th>
        </tr>
        <?php
            for ($i = 1; $i <= 12; $i++){
                echo "<tr>";
                for($j = 0; $j <= 12; $j++){
                    if($j == 0){
                        echo "<th style='background-color: hsl(200, 0%, 80%); width: 50px; height: 50px;'>".$i."</th>";
                    }
                    else{
                        echo "<th style='width: 50px;'>".$j*$i."</th>";
                    }
                }
            }
        ?>
    </table>
</body>

</html>