<?php
	
	error_reporting(E_ALL);
	ini_set('display_errors','On');
	
	// init
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require('./src/Exception.php');
	require('./src/PHPMailer.php');
	require('./src/SMTP.php');
    
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
	try{
		$mail->IsSMTP();
		$mail->Host = "smtp.gmail.com";
		$mail->SMTPDebug  = 2;
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
		$output = json_encode(array(
			"response" => (($result) ? "success" : "failure"),
			"result" => $result,
			"version" => "008"
		));
		header('content-type: application/json; charset=utf-8');
		echo($output);
	} catch (Exception $e) {
		$output = json_encode(array(
			"response" => "failure",
			"result" => 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo,
			"version" => "008"
		));
		header('content-type: application/json; charset=utf-8');
		echo($output);
	}
?>