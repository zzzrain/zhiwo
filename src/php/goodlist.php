<?php	
	// 前端数据
	$page = $_POST['page'];

    //准备好数据连接对象
    $con = new mysqli('localhost','root','root','zhiwo'); 
  	
    //获取商品信息
    $sql = 'select * from goodslist';
    $txt = $con->query($sql)->fetch_all(MYSQLI_ASSOC);
    // 信息分组
    $res = array_slice($txt,0,$page*9);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    //关闭数据库
    $con->close();
?>