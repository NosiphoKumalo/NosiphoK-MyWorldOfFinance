<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['insight-name'];
    $email = $_POST['insight-email'];
    $message = $_POST['insight-message'];

    // Email details
    $to = "kumalonosipho1@gmail.com"; // Replace with your email address
    $subject = "New Insight Submission from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your insight! We'll get back to you soon.";
    } else {
        echo "Sorry, there was an error processing your submission.";
    }
} else {
    echo "Invalid request.";
}
?>
