<?php

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

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
    $stmt = $conn->prepare("INSERT INTO registration(name, email, password)
    values(?,?,?)");
    $stmt->bind_param("sss",$name,$email,$password);
    $stmt->execute();
    echo "Berhasil mendaftar";
    $stmt->close();
    $conn->close();

}

?>