#!/usr/bin/perl
use CGI::Session;

print "Content-type:text/html";

# look for exist cookie and create a new session if there is none
$session = CGI::Session->new () or die CGI::Session->errstr;

$cookie = $query->cookie( -name   => $session->name, -value  => $session->id );
print $query->header( -cookie=>$cookie );

# read username from session
$name = $session->param("username");

print <<END;
<html>
<head>
	<title>Sesstion Test</title>
</head>
<body>
	<b>sessionpage2</b><p>
END

if ($username) {
	print "Hi $username nice to meet you!";
}
else {
	print "Howdy stranger...tell me your name on page1!";
}




# print rest of HTML file 
print <<END;
	</body>
</html>
END
