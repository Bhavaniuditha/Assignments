const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = [];
var isHeader = true;
var indexOfPtype, indexOfArrest, indexOfYear;
var arrestCase = new Array();
var nonArrestCase = new Array();
for (var i = 0; i < 16; i++) {
  arrestCase[i] = 0;
  nonArrestCase[i] = 0;
}
const rl = readline.createInterface({
  input: fs.createReadStream('Crimes_-_2001_to_present.csv')
});
rl.on('line', function(line) {
  var lineRecords = line.trim().split(',');
  indexOfPtype = header.indexOf("Primary Type");
  indexOfArrest = header.indexOf("Arrest");
  indexOfYear = header.indexOf("Year");
  for (var i = 0; i < lineRecords.length; i++) {
    if (isHeader) {
      header[i] = lineRecords[i];
    } else if ((lineRecords[indexOfYear] >= 2001 || lineRecords[indexOfYear] <= 2016) && (lineRecords[indexOfPtype] == "ASSAULT")) {
      if (lineRecords[indexOfArrest] == "true") {
        arrestCase[lineRecords[indexOfYear] - 2001] = arrestCase[lineRecords[indexOfYear] - 2001] + 1;
      } else if (lineRecords[indexOfArrest] == "false") {
        nonArrestCase[lineRecords[indexOfYear] - 2001] = nonArrestCase[lineRecords[indexOfYear] - 2001] + 1;
      }
    }
  }
  isHeader = false;
});

rl.on('close', function() {
  var temp = {};
  for (var i = 0; i < 16; i++) {
    temp[header[indexOfPtype]] = "ASSAULT";
    temp[header[indexOfArrest]] = "true";
    temp[header[indexOfYear]] = 2001 + i;
    temp["Value"] = arrestCase[i];
    jsonData.push(temp);
    temp = {};
    temp[header[indexOfPtype]] = "ASSAULT";
    temp[header[indexOfArrest]] = "false";
    temp[header[indexOfYear]] = 2001 + i;
    temp["Value"] = nonArrestCase[i];
    jsonData.push(temp);
    temp = {};
    fs.writeFileSync("assault.json", JSON.stringify(jsonData));
  }
  console.log(JSON.stringify(jsonData));
});