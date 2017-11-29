#!/usr/bin/perl

print "Content-type:text/html\r\n\r\n";
print '<html>';
print '<head>';
print '<title>Hello Word from CGI with Perl</title>';
print '</head>';

# css for background
$randomColor .= sprintf("%x", rand 16) for 1..8;
print "<style>";
print "body {";
print "    background-color: #$randomColor;";
print "}";
print "</style>";

print '<body>';

# print hello world with date and time
$datestring = localtime();
print "<h1>Hello Web World from Language CGI with Perl on $datestring</h1>";
print "RGB number used for background color is " . $randomColor ."<br>";
print '</body>';

# print environment variables 
print "<pre>\n";
foreach $key (sort keys(%ENV)) {
  print "$key = $ENV{$key}<p>";
}
print "</pre>\n";

print '</html>';