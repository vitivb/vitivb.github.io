<?php 

$name = $_POST['first-name'];
$email = $_POST['email'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vitivb741@gmail.com';                 // Наш логин
$mail->Password = 'LMTEPA6Jun36JM3';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('vitivb741@gmail.com', 'Personal');   // От кого письмо 
$mail->addAddress('252759468@etlgr.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
	Пользователь оставил данные <br><br> 
	<b>Имя:</b> ' . $name . ' <br>
	<b>E-mail:</b> ' . $email . ' <br> 
	<b>Сообщение</b> : '.$message. ''; 


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>