<?php

if (isset($_POST['submit'])) {
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $mailFrom = $_POST['email'];
  $message = $_POST['textMessage'];

  $myEmail = "aqi_786@hotmail.com";
  $header = "From: ".$mailFrom;
  $txt = "E-mail received from ".$firstName.$lastName;

  mail();

}
