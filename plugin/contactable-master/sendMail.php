<?php
	
	error_reporting(E_ALL);
	ini_set('display_errors','On');
	
	// init
	require('includes/Exception.php');
	require('includes/PHPMailer.php');
    include('includes/SMTP.php');
    $mail = new PHPMailer(); 
    
	// Assign contact info
	$address = 'fotosniper.tw@gmail.com';
	$name = stripcslashes($_POST['name']);
	$email = stripcslashes($_POST['email']);
	$issue = stripcslashes($_POST['issue']);
	$comment = stripcslashes($_POST['message']);
	$subject = stripcslashes($_POST['subject']);

	// Set headers
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Format message
	$message =
	"<div>
	<p><strong>Name:</strong> $name <br />
	<strong>E-mail:</strong> $email <br />
	<strong>Issue:</strong> $issue </p>

	<p><strong>Message:</strong> $comment </p>

	<p><strong>Sending IP:</strong> $_SERVER[REMOTE_ADDR]<br />
	<strong>Sent via:</strong> $_SERVER[HTTP_HOST]</p>
	</div>";

	// Send and check the message status
	$mail->IsSMTP();
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPDebug  = 1;
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = "ssl";
	$mail->Username = $address;
	$mail->Password = "fstwmailer";
	$mail->Port = "465";
	$mail->SetFrom($address, 'Fotosniper.tw Offical Website');
	$mail->AddReplyTo($address, "Fotosniper.tw Offical Emailer");
	$mail->Subject = $subject;
	$mail->MsgHTML($message);
	
	$result = $mail->Send();
	$output = json_encode(array("response" => (($result) ? "success" : "failure"), "result" => $mail));

	header('content-type: application/json; charset=utf-8');
	echo($output);
?>