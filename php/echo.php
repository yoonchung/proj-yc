<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso- 8859-1" />
		<title>Hello World from php</title> 
	</head>
	<body>
<?php
	date_default_timezone_set("America/Los_Angeles");
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		print "<h2>Hello ".$_POST["first"]." from a Web app written in php on ".date("Y/m/d").", ".date("h:i:sa")."</h2>";
		print "<style> body { background: $_POST[color]; } </style>";
	}
	else {
		print "<h2>Hello ".$_GET["first"]." from a Web app written in php on ".date("Y/m/d").", ".date("h:i:sa")."</h2>";
		print "<style> body { background: $_GET[color]; } </style>";
	}
?>