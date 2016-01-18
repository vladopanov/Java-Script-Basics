var html = '<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>';

var firstReplace = html.replace('<a', '[URL');
var secReplace = firstReplace.replace('</a>', '[/URL]');
var index = secReplace.search(/>\S/);
var thirdReplace = secReplace.replace(secReplace[index], ']');

console.log(thirdReplace);