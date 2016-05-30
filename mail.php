<?php
  $message = '';
  foreach($_POST as $key => $value) {
    $message .= "$key => $value\n";
  }
   
  mail('mat@genuinebuilders.co.uk,john@genuinebuilders.co.uk','****JOB ENQUIRY****',$message);
  header('Location: contact.html');
?>