<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Show</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        body{
            margin-left: 25%;
        }
    </style>
</head>

<body>
   <div class="container">
       <div class="row">
           <div class="col-lg-4 col-md-4 col-sm-4" style="border-bottom: 1px solid black; padding: 10px; margin-bottom: 30px;">
                <h3>รายการ</h3>
           </div>
           <div class="col-lg-4 col-md-4 col-sm-4" style="border-bottom: 1px solid black; padding: 10px; margin-bottom: 30px;">
                <h3>ข้อมูล</h3>
           </div>
       </div>
      <?php
      $pos = 1;
      $data = array(
          "id" => @$_POST["id"], 
          "name" => @$_POST["name"], 
          "lastname" => @$_POST["lastname"], 
          "address" => @$_POST["address"], 
          "district" => @$_POST["district"], 
          "province" => @$_POST["province"], 
          "post" => @$_POST["post"], 
          "tel" => @$_POST["tel"]);
      foreach ($data as $info => $val) {
         $num = strlen($val);
         if ($num < 5) {
            echo "<div class='row'>
                    <div class='col-lg-4 col-md-4 col-sm-4'>
                        <p>".$pos .".    ".$info."</p>
                    </div>
                    <div class='col-lg-4 col-md-4 col-sm-4'>
                        <p style='color: red;'>".$val . "</p>
                    </div>
                </div>";
            $pos++;
         } else {
            echo "<div class='row'>
                    <div class='col-lg-4 col-md-4 col-sm-4'>
                        <p>".$pos .".    ".$info."</p>
                    </div>
                    <div class='col-lg-4 col-md-4 col-sm-4'>
                        <p style='color: black;'>". $val . "</p>
                    </div>
                </div>";
            $pos++;
         }
      }
      ?>
   </div>
</body>

</html>