<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        .card {
            margin: auto;
            text-align: center;
            width: 450px;
            height: auto;
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            /* number of lines to show */
            -webkit-box-orient: vertical;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="card" style='margin-top: 20px;'>
        <?php
        $url = "https://www.themealdb.com/api/json/v1/1/random.php";
        $response = file_get_contents($url);
        $result = json_decode($response);
        foreach ($result->meals as $item) {
            echo "<img src='$item->strMealThumb' style='width: 100%'>
                <p>$item->strInstructions</p>
                <div class='row' style='margin:auto; margin-bottom: 20px;'>
                    <div class='col-lg-12'>
                <button onClick='window.location.reload();' style='width: 100px;margin:auto;'>Refresh</button>
                <button><a href='$item->strSource' target='_blank'>Learn more</a></button></div></div>";
        }
        ?>
    </div>
</body>

</html>