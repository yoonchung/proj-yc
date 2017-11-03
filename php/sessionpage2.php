<?php
// Start the session
session_start();
if ($_POST["username"]) {
	$_SESSION["username"] = $_POST["username"];
}
?>
<html>
<head>
	<title>Sesstion Test</title>
</head>
<body>
	<b>sessionpage2</b><p>
<?php
if ($_SESSION["username"]) {
	print "Hi ".$_SESSION['username']." nice to meet you!<br>";
}
else {
	print "Howdy stranger...tell me your name on page1!<br>";
}
?>
	<form type="button" name="clear" action="clearsession.php" method="post" value="true">
		<input type="submit" value="Clear session"/></form>
	</body>
</html>