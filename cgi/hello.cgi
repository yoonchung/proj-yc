#!/usr/bin/perl
use CGI qw(:standard);
use CGI::Carp qw(warningsToBrowser fatalsToBrowser);
use strict;

print "Content-type:text/html\r\n\r\n";
print '<html>';
print '<head>';
print '<title>Hello Word - First CGI Program</title>';
print '</head>';

print '<body>';

# print hello world with date and time
my $datestring = localtime();

my %form;
foreach my $p (param()) {
    $form{$p} = param($p);
}
my @color = ("red", "blue", "white");
my $rn .= sprintf("%d", rand 3);

# css for background
print "<style>";
print "body {";
print "    background-color: @color[$rn];";
print "}";
print "</style>";

print "<h1>Hello $form{first} $form{last} from a Web app written in CGI with Perl on $datestring</h1>";
print '</body>';

print '</html>';