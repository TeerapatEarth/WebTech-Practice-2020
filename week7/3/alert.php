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
   </style>
</head>

<body>
   <div class="container text-center">
      <?php
      $arr = array(@$_POST["id"], @$_POST["name"], @$_POST["lastname"], @$_POST["address"], @$_POST["district"], @$_POST["province"], @$_POST["post"], @$_POST["tel"]);
      for ($i = 0; $i < 8; $i++) {
         $num = strlen($arr[$i]);
         if ($num < 5) {
            echo "<p style='color: red;'>" . $arr[$i] . "</p>";
         } else {
            echo $arr[$i];
         }
      }
      ?>
   </div>
</body>

</html>