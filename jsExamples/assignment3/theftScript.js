const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = [];
var isHeader = true;
var indexOfPtype, indexOfDescription, indexOfYear;
var yearOver500 = [];
var yearBelow500 = [];
for (var i = 0; i < 16; i++) {
  yearOver500[i] = 0;
  yearBelow500[i] = 0;
}
const rl = readline.createInterface({
  input: fs.createReadStream('Crimes_-_2001_to_present.csv')
});
rl.on('line', function(line) {
  var lineRecords = line.trim().split(',');
  indexOfPtype = header.indexOf("Primary Type");
  indexOfDescription = header.indexOf("Description");
  indexOfYear = header.indexOf("Year");
  for (var i = 0; i < lineRecords.length; i++) {
    if (isHeader) {
      header[i] = lineRecords[i];
    } else if ((lineRecords[indexOfYear] >= 2001 || lineRecords[indexOfYear] <= 2016) && (lineRecords[indexOfPtype] == "THEFT")) {
      if (lineRecords[indexOfDescription] == "OVER $500") {
        yearOver500[lineRecords[indexOfYear] - 2001] = yearOver500[lineRecords[indexOfYear] - 2001] + 1;
      } else if (lineRecords[indexOfDescription] == "$500 AND UNDER") {
        yearBelow500[lineRecords[indexOfYear] - 2001] = yearBelow500[lineRecords[indexOfYear] - 2001] + 1;
      }
    }
  }
  isHeader = false;
});

rl.on('close', function() {
  var temp = {};
  for (var i = 0; i < 16; i++) {
    temp["Year"] = 2001 + i;
    temp["OVER 500"] = yearOver500[i];
    temp["500 AND UNDER"] = yearBelow500[i];
    jsonData.push(temp);
    temp = {};
    fs.writeFileSync("theft.json", JSON.stringify(jsonData));
  }
  console.log(JSON.stringify(jsonData));
});