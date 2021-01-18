<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <title>1</title>
</head>

<body>
    <div class="container-fluid">
        <h1>Currency Converter</h1>
        <form acction="" method="POST">
            <div class="row">
                <div>
                    <label>Form :</label>
                </div>
                <div style="margin-left: 20px;">
                    <select style="height: 30px;" name='se1'>
                        <option value="" selected="selected" id="select1">เลือกค่าเงิน</option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="SGD">SGD</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div style="margin-left: 20px;">
                    <input placeholder="จำนวนเงิน" id="num1" name="num1">
                </div>
            </div>
            <div class="row">
                <div>
                    <label style="width: 44px; margin-top: 20px;">To :</label>
                </div>
                <div style="margin-left: 20px; margin-top: 20px;">
                    <select style="height: 30px; float:left;" name='se2'>
                        <option value="" selected="selected" id="select2">เลือกค่าเงิน</option>
                        <option value="THB">THB</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="SGD">SGD</option>
                        <option value="USD">USD</option>
                    </select>
                    <div style="margin-left: 20px; float:left;">
                        <?php
                        if (isset($_POST['submit'])) {
                            if (!empty($_POST['se1'])) {
                                $select1 = $_POST['se1'];
                                $money = $_POST['num1'];
                                $select2 = $_POST['se2'];
                                $url = "http://10.0.15.12/lab8/restapis/currencyrate";
                                $response = file_get_contents($url);
                                $result = json_decode($response);
                                $num1 = 0;
                                $num2 = 0;
                                foreach ($result->rates as $before) {
                                    if (strcmp($select1, "THB") == 0 && $before == 33.524) {
                                        $num1 = $before;
                                    } else if (strcmp($select1, "JPY") == 0 && $before == 120.88) {
                                        $num1 = $before;
                                    } else if (strcmp($select1, "CNY") == 0 && $before == 7.8392) {
                                        $num1 = $before;
                                    } else if (strcmp($select1, "SGD") == 0 && $before == 1.5121) {
                                        $num1 = $before;
                                    } else if (strcmp($select1, "USD") == 0 && $before == 1.1095) {
                                        $num1 = $before;
                                    }
                                }
                                foreach ($result->rates as $after) {
                                    if (strcmp($select2, "THB") == 0 && $after == 33.524) {
                                        $num2 = $after;
                                    } else if (strcmp($select2, "JPY") == 0 && $after == 120.88) {
                                        $num2 = $after;
                                    } else if (strcmp($select2, "CNY") == 0 && $after == 7.8392) {
                                        $num2 = $after;
                                    } else if (strcmp($select2, "SGD") == 0 && $after == 1.5121) {
                                        $num2 = $after;
                                    } else if (strcmp($select2, "USD") == 0 && $after == 1.1095) {
                                        $num2 = $after;
                                    }
                                }
                                $ans = ($money / $num1) * $num2;
                                echo $ans;
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="row">
                <input type="submit" name="submit" style="margin-top: 20px; margin-left: 20px;">
            </div>
        </form>
    </div>
</body>

</html>