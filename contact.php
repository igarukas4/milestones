<?php

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

// Database Connection
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "kaltara_water";
$conn = "";

// Database connection here
$conn = new mysqli($db_server,$db_user,$db_pass,$db_name);
if($conn->connect_error) {
  die("Failed to connect: ".$conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO contact(name, email, phone, message)
    values(?,?,?)");
    $stmt->bind_param("ssis",$name,$email,$phone,$message);
    $stmt->execute();
    
    $stmt->close();
    header('Location: index.html');
    exit();

}

?>