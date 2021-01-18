<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>6</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        body{
            background-color: hsl(200, 50%, 80%);
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 style="text-align: center; margin-bottom: 20px; padding: 10px;">View Gallery</h1>
        <?php
        $num = 0;
        $pic = array("<img src='https://pix10.agoda.net/hotelImages/361/3612581/3612581_18010316150060733791.jpg?s=1024x768' style='width: 100%; margin-bottom: 10px; height: 250px;'>",
        "<img src='https://cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://www.sripanwa.com/wp-content/uploads/view-2/7-View-Gallery-Sri-Panwa-Luxury-Hotel-Phuket-Resort-1920x1080.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://blog.amari.com/wp-content/uploads/2016/08/P7264689-2.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://www.hakodate.travel/th/wp-content/themes/thakodate/img/photo_library/The_view_from_Mt_Hakodate-2-1MB.jpg' style='width: 100%; margin-bottom: 10px; height: 250px;'>",
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd2fUIqUxfKOXp6okUw2mLq2vifE7mtSQQ8g&usqp=CAU' style='width: 100%; margin-bottom: 10px; '>",
        "<img src='https://img.lovepik.com/photo/50118/4976.jpg_wh860.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://lebua.com/wp-content/uploads/2019/07/02.-LST_-Suites-City-View.jpg' style='width: 100%; margin-bottom: 10px; height: 300px;'>",
        "<img src='https://downloadwallpapers-net.s3.amazonaws.com/beautiful-view-sea.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://f.ptcdn.info/196/049/000/ol7y34byuVD3cE5LJMs-o.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg' style='width: 100%; margin-bottom: 10px; '>",
        "<img src='https://cmxpv89733.i.lithium.com/t5/image/serverpage/image-id/680515iCFB0231487184A1E/image-size/large?v=1.0&px=999' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://www.jnto.or.th/summer2018/images/paragliding/paragliding-head.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://www.jnto.or.th/summer2018/images/paragliding/paragliding-02.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://cf.bstatic.com/images/hotel/max1024x768/198/198762538.jpg' style='width: 100%; margin-bottom: 10px; height: 250px;'>",
        "<img src='https://cf.bstatic.com/images/hotel/max500/198/198768375.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://cdn.hswstatic.com/gif/10-breathtaking-views-1-orig.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://pix10.agoda.net/hotelImages/257/2570668/2570668_17072419310054645006.jpg?s=1024x768' style='width: 100%; margin-bottom: 10px; height: 250px;'>",
        "<img src='https://janjirapron.files.wordpress.com/2016/02/e0b884e0b8b6e0b895e0b895.jpg' style='width: 100%; margin-bottom: 10px;'>",
        "<img src='https://www.myjewishlearning.com/wp-content/uploads/2015/04/nature-themes.jpg' style='width: 100%; margin-bottom: 10px;'>");
        echo "<div class='row'>";
        for ($i = 0; $i < 4; $i++) {
            echo "<div class='col-lg-3'>";
            for($j = 0; $j < 5; $j++){
                echo $pic[$num];
                $num++;
            }
            echo "</div>";
        }
        echo "</div></div>";
        ?>
    </div>
</body>

</html>