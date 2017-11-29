<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso- 8859-1" />
		<title>Hello World from php</title> 
	</head>
	<body>
	<?php
		$randomColor = sprintf('#%06X', mt_rand(0, 0xFFFFFF));
		date_default_timezone_set("America/Los_Angeles");
		print "<h1>Hello World from Language PHP on ".date("Y/m/d").", ".date("h:i:sa")."!</h1><br>";
		print "RGB number used for background color is" . $randomColor ."<br>";
		$styleBlock = sprintf('<style type="text/css">
       		body {
         		background-color:%s
       		}
    		</style>
  			', $randomColor);
		echo $styleBlock;
		echo "Environmental variables: ";
		print_r(getenv());
	?>
    </body>
</html>