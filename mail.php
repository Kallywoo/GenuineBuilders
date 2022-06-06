<?php
  $name = $_POST['your_name'];
  $email = $_POST['your_email'];
  $number = $_POST['your_number'];
  $message = $_POST['message'];

  $to = "mat@genuinebuilders.co.uk,elaine@genuinebuilders.co.uk";
  $subject = "****JOB ENQUIRY****";
  $body = "Name: $name \nEmail: $email \nNumber: $number \n\n$message";
  $headers = "From: ". $name . " <" . $mail . ">\r\n";
  
  mail($to,$subject,$body,$headers);
  header('Location: contact.html');
?>
