<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $subject = $_POST["subject"] ?? "";
    $message = $_POST["message"] ?? "";

    // Output received data for testing
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Subject: $subject<br>";
    echo "Message: $message<br>";

    // Include PHPMailer library
    require "vendor/autoload.php";

    // Use PHPMailer classes
    use vendor\phpmailer\phpmailer\PHPMailer;
    use vendor\phpmailer\phpmailer\Exception;

    use vendor/php

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Username = "apham94488@gmail.com";
        $mail->Password = "tfiv ofjh afyz ejod";

        // Set sender and recipient
        $mail->setFrom($email, $name);
        $mail->addAddress("solomonpaul232@gmail.com", "Paul");

        // Set email subject and body
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send the email
        $mail->send();

        // Redirect to a success page
        header("Location: sent.html");
        exit();
    } catch (Exception $e) {
        // If an error occurs, display error message
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
