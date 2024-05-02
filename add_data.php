<?php

include 'database_conn.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST["action"] == "add_data") {
        $device_type = $_POST['device_type'];
        $colorcode = $_POST['colorcode'];
        $job_title = $_POST['job_title'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $reference = $_POST['reference'];

    function uploadFile($file, $uploadDir) {
        $fileName = $uploadDir . basename($file["name"]);
            if (move_uploaded_file($file["tmp_name"], $fileName)) {
            return $fileName;
            }
    return '';
    }
    $strip_ImagePath = uploadFile($_FILES["strip_image"], 'cardimage/');
    $icon_ImagePath = uploadFile($_FILES["icon_image"], 'cardimage/');

    try {
        $insertStmt = $connect->prepare("INSERT INTO doorway_tbl (device_type, bg_color, strip_image, icon_image, job_title, first_name, last_name, email, reference) VALUES (:device_type,:colorcode,:strip_ImagePath,:icon_ImagePath,:job_title,:first_name,:last_name,:email,:reference)");
        $insertStmt->bindParam(':device_type', $device_type);
        $insertStmt->bindParam(':colorcode', $colorcode);
        $insertStmt->bindParam(':strip_ImagePath', $strip_ImagePath);
        $insertStmt->bindParam(':icon_ImagePath', $icon_ImagePath);
        $insertStmt->bindParam(':job_title', $job_title);
        $insertStmt->bindParam(':first_name', $first_name);
        $insertStmt->bindParam(':last_name', $last_name);
        $insertStmt->bindParam(':email', $email);
        $insertStmt->bindParam(':reference', $reference);
        $insertStmt->execute();
        
        echo json_encode(array('status' => 'success', 'message' => 'data stored successfully'));
        } catch (PDOException $e) {
        echo json_encode(array('status' => 'error', 'message' => 'Error storing data: ' . $e->getMessage()));
        }
    } else {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid request'));
    }
}
?>