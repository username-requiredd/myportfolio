<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$mailheader = "From: $name <$email>\r\n";

$recipient = "solomonpaul232@gmail.com";

// Send the email
if (mail($recipient, $subject, $message, $mailheader)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>
