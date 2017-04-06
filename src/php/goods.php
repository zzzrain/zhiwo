<?php	
	// 前端数据
	$guid = $_POST['guid'];
    //准备好数据连接对象
    $con = new mysqli('localhost','root','root','zhiwo'); 
  	
    //获取商品信息
    $sql = 'select * from goodslist where guid='.$guid;
    $res = $con->query($sql)->fetch_all(MYSQLI_ASSOC);

    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    //关闭数据库
    $con->close();
?>