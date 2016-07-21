const readline = require('readline');
const fs = require('fs');
var header = [];
var jsonData = [];
var isHeader = true;
var indexOfPtype, indexOfArrest, indexOfYear;
var prop = 0;
var vio = 0;
var non = 0;
var index = 0;


const rl = readline.createInterface({
    input: fs.createReadStream('../Crimes_-_2001_to_present.csv')
});
rl.on('line', function(line) {
    var lineRecords = line.trim().split(',');
    indexOfPtype = header.indexOf("Primary Type");
    indexOfDescription = header.indexOf("Description");
    indexOfYear = header.indexOf("Year");
    for (var i = 0; i < lineRecords.length; i++) {
        if (isHeader) {
            header[i] = lineRecords[i];
        } else if (lineRecords[indexOfYear] == 2005) {
            if (lineRecords[indexOfPtype] == "BURGLARY") {
                if (lineRecords[indexOfDescription] == "HOME INVASION" || lineRecords[indexOfDescription] == "UNLAWFUL ENTRY" || lineRecords[indexOfDescription] == "FORCIBLE ENTRY" || lineRecords[indexOfDescription] == "ATTEMPT FORCIBLE ENTRY") {
                    prop++;
                    //console.log(over);
                }
            }
            if (lineRecords[indexOfPtype] == "THEFT") {
                if (lineRecords[indexOfDescription] == "ATTEMPT THEFT" || lineRecords[indexOfDescription] == "RETAIL THEFT" || lineRecords[indexOfDescription] == "POCKET-PICKING" || lineRecords[indexOfDescription] == "PURSE-SNATCHING" || lineRecords[indexOfDescription] == "FROM BUILDING" || lineRecords[indexOfDescription] == "FROM COIN-OP MACHINE/DEVICE" || lineRecords[indexOfDescription] == "DELIVERY CONTAINER THEFT" || lineRecords[indexOfDescription] == "FINANCIAL ID THEFT:$300 AND UNDER" || lineRecords[indexOfDescription] == "FINANCIAL ID THEFT:OVER $300") {
                    prop++;
                    //console.log(over1);
                }
            }
            if (lineRecords[indexOfPtype] == "ARSON") {
                if (lineRecords[indexOfDescription] == "BY EXPLOSIVE" || lineRecords[indexOfDescription] == "BY FIRE" || lineRecords[indexOfDescription] == "ATTEMPT ARSON") {
                    prop++;
                    //console.log(over2);


                }
            }
            if (lineRecords[indexOfPtype] == "MOTOR VEHICLE THEFT") {
                if (lineRecords[indexOfDescription] == "AUTOMOBILE" || lineRecords[indexOfDescription] == "TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "CYCLE,BUS,SCOOTER,BIKE NO VIN" || lineRecords[indexOfDescription] == "ATTEMPT:AUTOMOBILE" || lineRecords[indexOfDescription] == "ATTEMPT:TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "ATTEMPT:CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "ATTEMPT:CYCLE,BUS,SCOOTER,NO VIN" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:AUTOMOBILE" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:CYCLE,BUS,SCOOTER,NO VIN") {
                    prop++;


                    // console.log(prop);
                }

            }
            //violentcrime://
            if (lineRecords[indexOfPtype] == "HOMICIDE") {
                if (lineRecords[indexOfDescription] == "FIRST DEGREE MURDER" || lineRecords[indexOfDescription] == "SECOND DEGREE MURDER") {
                    vio++;
                    //console.log(over4);
                }
            }
            if (lineRecords[indexOfPtype] == "CRIM SEXUAL ASSAULT") {
                if (lineRecords[indexOfDescription] == "AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] == "AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "PREDATORY" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "NON-AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT NON-AGGRAVATED") {
                    vio++;
                    //console.log(in6);
                }
            }
            if (lineRecords[indexOfPtype] == "ROBBERY") {
                if (lineRecords[indexOfDescription] == "ARMED KNIFE/CUTITNG INSTRUMENT" || lineRecords[indexOfDescription] == "ARMED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ARMED:HANDGUN" || lineRecords[indexOfDescription] == "ARMED:OTHER FIREARM" || lineRecords[indexOfDescription] == "STRONGARM-NO WEAPON" || lineRecords[indexOfDescription] == "VEHICULAR HIJACKING" || lineRecords[indexOfDescription] == "AGGRAVATED VEHICULAR HIJACKING" || lineRecords[indexOfDescription] == "AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-KNIFE/CUTITNG INSTRUMENT" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-HANDGUN" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-OTHER FIREARM" || lineRecords[indexOfDescription] == "ATTEMPT:STRONGARM-NO WEAPON") {
                    vio++;
                    //console.log(over6);
                }
            }
            if (lineRecords[indexOfPtype] == "ASSAULT") {

                vio++;
            }


            if (lineRecords[indexOfPtype] == "BATTERY") {
                vio++;

            }
            //end of violent crime//

            if (lineRecords[indexOfPtype] == "GAMBLING") {
                // if(lineRecords[indexOfDescription] == "FIRST DEGREE MURDER" || lineRecords[indexOfDescription] =="SECOND DEGREE MURDER"){
                non++;
                //console.log(over4);
            }

            if (lineRecords[indexOfPtype] == "OFFENSE AGAINST FAMILY") {
                // if(lineRecords[indexOfDescription] == "AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] =="AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] =="AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "PREDATORY" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] =="ATTEMPT AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] =="ATTEMPT AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER DANGEROUS WEAPON"|| lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "NON-AGGRAVATED"|| lineRecords[indexOfDescription] == "ATTEMPT NON-AGGRAVATED"){
                non++;
                //console.log(in6);
            }

            if (lineRecords[indexOfPtype] == "PROSTITUTION") {

                non++;
            }
            //console.log(over6);

            // //      }
            // //      }
            if (lineRecords[indexOfPtype] == "ASSAULT") {

                non++;
            }


            if (lineRecords[indexOfPtype] == "BATTERY") {
                non++;
            }
            if (lineRecords[indexOfPtype] == "BURGLARY") {
                if (lineRecords[indexOfDescription] == "HOME INVASION" || lineRecords[indexOfDescription] == "UNLAWFUL ENTRY" || lineRecords[indexOfDescription] == "FORCIBLE ENTRY" || lineRecords[indexOfDescription] == "ATTEMPT FORCIBLE ENTRY") {
                    index++;
                }
            }
            if (lineRecords[indexOfPtype] == "THEFT") {
                if (lineRecords[indexOfDescription] == "ATTEMPT THEFT" || lineRecords[indexOfDescription] == "RETAIL THEFT" || lineRecords[indexOfDescription] == "POCKET-PICKING" || lineRecords[indexOfDescription] == "PURSE-SNATCHING" || lineRecords[indexOfDescription] == "FROM BUILDING" || lineRecords[indexOfDescription] == "FROM COIN-OP MACHINE/DEVICE" || lineRecords[indexOfDescription] == "DELIVERY CONTAINER THEFT" || lineRecords[indexOfDescription] == "FINANCIAL ID THEFT:$300 AND UNDER" || lineRecords[indexOfDescription] == "FINANCIAL ID THEFT:OVER $300") {
                    index++;
                }
            }
            if (lineRecords[indexOfPtype] == "ARSON") {
                if (lineRecords[indexOfDescription] == "BY EXPLOSIVE" || lineRecords[indexOfDescription] == "BY FIRE" || lineRecords[indexOfDescription] == "ATTEMPT ARSON") {
                    index++;


                }
            }
            if (lineRecords[indexOfPtype] == "MOTOR VEHICLE THEFT") {
                if (lineRecords[indexOfDescription] == "AUTOMOBILE" || lineRecords[indexOfDescription] == "TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "CYCLE,BUS,SCOOTER,BIKE NO VIN" || lineRecords[indexOfDescription] == "ATTEMPT:AUTOMOBILE" || lineRecords[indexOfDescription] == "ATTEMPT:TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "ATTEMPT:CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "ATTEMPT:CYCLE,BUS,SCOOTER,NO VIN" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:AUTOMOBILE" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:TRUCK,BUS,MOTOR HOME" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:CYCLE,SCOOTER,BIKE W-VIN" || lineRecords[indexOfDescription] == "THEFT/RECOVERY:CYCLE,BUS,SCOOTER,NO VIN") {
                    index++;
                }
            }

            if (lineRecords[indexOfPtype] == "HOMICIDE") {
                if (lineRecords[indexOfDescription] == "FIRST DEGREE MURDER" || lineRecords[indexOfDescription] == "SECOND DEGREE MURDER") {
                    index++;
                }
            }
            if (lineRecords[indexOfPtype] == "CRIM SEXUAL ASSAULT") {
                if (lineRecords[indexOfDescription] == "AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] == "AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "PREDATORY" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:HANDGUN" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER FIREARM" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:KNIFE/CUT INSTRUMENT" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED:OTHER" || lineRecords[indexOfDescription] == "NON-AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT NON-AGGRAVATED") {
                    index++;
                    //console.log(in6);
                }
            }
            if (lineRecords[indexOfPtype] == "ROBBERY") {
                if (lineRecords[indexOfDescription] == "ARMED KNIFE/CUTITNG INSTRUMENT" || lineRecords[indexOfDescription] == "ARMED:OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ARMED:HANDGUN" || lineRecords[indexOfDescription] == "ARMED:OTHER FIREARM" || lineRecords[indexOfDescription] == "STRONGARM-NO WEAPON" || lineRecords[indexOfDescription] == "VEHICULAR HIJACKING" || lineRecords[indexOfDescription] == "AGGRAVATED VEHICULAR HIJACKING" || lineRecords[indexOfDescription] == "AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT AGGRAVATED" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-KNIFE/CUTITNG INSTRUMENT" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-OTHER DANGEROUS WEAPON" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-HANDGUN" || lineRecords[indexOfDescription] == "ATTEMPT:ARMED-OTHER FIREARM" || lineRecords[indexOfDescription] == "ATTEMPT:STRONGARM-NO WEAPON") {
                    index++;

                }
            }



            if (lineRecords[indexOfPtype] == "ASSAULT") {

                index++;

            }


            if (lineRecords[indexOfPtype] == "BATTERY") {
                index++;

            }
        }
    }
    isHeader = false;
});

rl.on('close', function() {
        var temp = {};

        temp["key"] = "property crime";

        temp["Value"] = prop;
        jsonData.push(temp);
        temp = {};

        temp["key"] = "violent crime";

        temp["Value"] = vio;
        jsonData.push(temp);
        temp = {};

        temp["key"] = "index crime";

        temp["Value"] = index;
        jsonData.push(temp);
        temp = {};


        temp["key"] = "nonindex crime";

        temp["Value"] = non;
        jsonData.push(temp);
        temp = {};


        fs.writeFileSync("allcrime.json", JSON.stringify(jsonData));
    }

);
