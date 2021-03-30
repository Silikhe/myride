<?php include './config.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);



$username = $obj['username'];
$email = $obj['email'];
$phonenumber = $obj['phonenumber'];
$password = $obj['password'];


$query = "SELECT * FROM user where email = '{$email}'";
$query_output = mysqli_query($conn, $query);
$count = mysqli_num_rows($query_output);

if ($count == 1) {
    $arr = array("result" => "email_already_present");
    echo json_encode($arr);
} elseif ($count == 0) {
    $query1 = "INSERT INTO `user`(`email`, `password`, `username`, `phonenumber`) VALUES ('{$email}', '{$password}', '{$username}', '{$phoneNumber}')";
    $query_output1 = mysqli_query($conn, $query1);
    $arr = array("result" => "ok");
    echo json_encode($arr);
} else {
    $arr = array("result" => "fail");
    echo json_encode($arr);
}
