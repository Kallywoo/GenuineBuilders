<?php
  $message = '';
  foreach($_POST as $key => $value) {
    $message .= "$key => $value\n";
  }
  $headers = "From: me@example.com";
  mail('mat@genuinebuilders.co.uk,elaine@genuinebuilders.co.uk','****JOB ENQUIRY****',$message,$headers);
  header('Location: contact.html');
?>