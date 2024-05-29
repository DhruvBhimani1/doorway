<?php

include 'database_conn.php';
require 'vendor/autoload.php';
use JeroenDesloovere\VCard\VCard;
use SimpleSoftwareIO\QrCode\Generator;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    $device_type = $_POST['device_type'];
    $colorcode = $_POST['colorcode'];
    $job_title = $_POST['job_title'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $reference = $_POST['reference'];

    $vcard = new VCard();
    $vcard->addName($first_name, $last_name);
    if (!empty($job_title)) {
        $vcard->addJobtitle($job_title);
    }
    if (!empty($email)) {
        $vcard->addEmail($email);
    }

    $vcardContent = $vcard->getOutput();

    $qrCodeGenerator = new Generator();
    $qrCode = $qrCodeGenerator->size(300)->generate($vcardContent);

    $qrCodePath = 'qrcode/card' . $first_name . '.svg';
    file_put_contents($qrCodePath, $qrCode);

    echo json_encode(array(
        'status' => 'success',
        'qrCodeData' => $qrCodePath
    ));
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid request'));
}
?>