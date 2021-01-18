<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        body{
            background-color: blanchedalmond;
        }
    </style>
</head>

<body>
    <div class="container">
        <?php
        $url = "http://10.0.15.12/lab8/restapis/10countries";
        $response = file_get_contents($url);
        $result = json_decode($response);
        $c = count($result);
        for ($i = 0; $i < $c; $i++) {
            $result = json_decode($response)[$i];
            echo "<div class='row'><div style='width: 350px;'>";
            echo "Name : $result->name <br>
                  Cappital : $result->capital <br>
                  Population : $result->population <br>
                  Region : $result->region <br>
                  Location :";
            foreach($result->latlng as $location){
                echo "$location ";
            }
            echo "<br> Borders : ";
            foreach($result->borders as $bor){
                echo "$bor ";
            }
            echo "</div>
                <div>
                    <img src='$result->flag' style='width: 200px;'>
                </div>
                </div><br><br>";
        }
        ?>
    </div>
</body>

</html>
