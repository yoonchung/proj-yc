#!/usr/bin/perl
use CGI::Session;

# look for exist cookie and create a new session if there is none
$session = CGI::Session->new () or die CGI::Session->errstr;

$cookie = $query->cookie( -name   => $session->name, -value  => $session->id );
print $query->header( -cookie=>$cookie );

# store user name
my $name = $cgi->param('username');
$session->param('username', $name);