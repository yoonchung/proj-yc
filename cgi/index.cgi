#!/usr/bin/perl

print "Content-type:text/html\r\n\r\n";
print '<html>';
print '<head>';
print '<title>Hello Word - First CGI Program</title>';
print '</head>';
print '<body>';

my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime;
my @weekday = qw(Sunday Monday Tuesday Wednesday Thursday Friday Saturday);
my @month = qw(January February March April May June July August September October November December);
$year += 1900;

print '<h2>Hello Web World from Language CGI with Perl on $weekday[$wday], $month[$mon] $mday, $year, $hour:$min:$sec</h2>';
print '</body>';
print '</html>';

1;
