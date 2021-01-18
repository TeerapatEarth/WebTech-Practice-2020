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
        body{
            background-color: hsl(200, 70%, 80%);
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>BMX49 DANCER CONTEST</h1>
        <div class="row">
            <div class="col-lg-5">
                <h5 style="text-align:center;">Voting score</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <form action="" method="POST">
                    <select style="width: 75%; height: 40px; margin-top: 10px; margin-bottom: 20px;" name="numpic">
                        <option value="" selected="selected" id="num">Select Number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <input type="submit" name="submit" style="background-color: hsl(200, 70%, 50%); border-radius: 10px; height: 40px; width: 23%;">
                </form>
            </div>
        </div>
        <?php
        if (isset($_POST['submit'])) {
            if (!empty($_POST['numpic'])) {
                $selected = $_POST['numpic'] - 1;
                $url = "http://10.0.15.12/lab8/restapis/candidates";
                $response = file_get_contents($url);
                $result = json_decode($response)[$selected];
                echo "<div class='row'>
                    <div class='col-lg-5'>
                        <div class='card'>
                            <img src='$result->img' style='width: 100%;'>
                            <div style='margin-left: 20px; margin-top: 5px;'>$result->name </div>
                            <div style='color: red; margin-left: 20px; margin-top: 5px;'>อันดับ $result->no</div>
                            <div style='margin-left: 20px; margin-top: 5px;margin-bottom: 5px;'>$result->score คะแนน</div>
                        </div>
                    </div>
                  </div>";
            }
        }
        ?>
    </div>
</body>

</html>