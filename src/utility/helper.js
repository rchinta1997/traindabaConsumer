import React from 'react';
import moment from 'moment-timezone';
function convertMillisecondsToDateTime(milliseconds) 
{
   return new Date(milliseconds).toLocaleString("en-US", { timeZone: 'Asia/Calcutta' });
}

function convertDateTimeToIST(date) 
{
   console.log("date",date);
   let localDate = date.toLocaleString("fr-CA", { timeZone: 'Asia/Calcutta' });
   console.log("localDate",localDate);
   let _date = localDate.split(",")[0];
   let localTime = date.toLocaleTimeString("en-GB", { timeZone: 'Asia/Calcutta' });
   let splitTime = localTime.split(":");
   let result = _date + " " + splitTime[0] + ":" + splitTime[1] + ' IST';
   return result;
   
}

const convertDateToIST = (date) =>
{
   console.log("=======convertDateToIST==========")
   let localDate = date.toLocaleString("en-IN", { timeZone: 'Asia/Calcutta' });
   console.log("=======localDate==========",localDate)
   let _date =  localDate.split(",")[0];   
   let result = _date;
   console.log("result=",result)
   return result;
   
}

function convertIsoToIst (date) {
   if(date)
   {
      //console.log("convertIsoToIst",date)
      const isoTime = moment(date).tz('Asia/Kolkata'); // 'Asia/Kolkata' is the time zone identifier for IST
      //console.log("isoTime",isoTime)
      // Format the time in AM/PM format
      const istTime = isoTime.format('DD/MM/YYYY h:mm A');
      //console.log("istTime",istTime)
      return istTime;
   }
   return date;
   
 };

 function convertDeliveryDate(date){
   if(date)
   {
      let splitArr = date.split(" ");
      let splitDate = splitArr[0].split("-");
      let localDate = splitDate[2] +"/"+ splitDate[1]+"/"+splitDate[0]+"  "+formatTime(splitArr[1]);
      return localDate;
   }
   return date;
}

 function convertLocalDate (date) {   
   if(date)
   {   
      var dateFormat = 'DD/MM/YYYY h:mm A';
      var testDateUtc = moment.utc(date);
      var localDate = testDateUtc.local();
      console.log("localDate=",localDate.format(dateFormat)); 
      return localDate.format(dateFormat);
   }
   return date;
   
 };


function calculateItemTax(sellingPrice)
{  
   let part = parseFloat((parseFloat(process.env.GST).toFixed(2))*parseFloat(sellingPrice).toFixed(2)).toFixed(2);
   return parseFloat(part/100).toFixed(2);
}

function roundValue(value)
{
   return Math.round(value);
}

function percentage(partialValue, totalValue) {
   return  (partialValue * totalValue)/100;
} 

function formatTime(timeString) {
   const [hourString, minute] = timeString.split(":");
   const hour = +hourString % 24;
   return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}

function calculateTotalAmt(cart)
{
   const gst = 5;
   let priceObj = {
      itemvalue : 0,
      itemTax: 0,
      itemValueWithouGST: 0
   }
   let itemvalue=cart.reduce((acc, item) => acc + item.quantity * item.Selling_Price, 0).toFixed(2);
        let itemValueWithouGST= 0;
    
        cart.forEach((item) =>{
            console.log("item.gst",item);
            if(!item.isGST)
            {
                console.log("item.gst2",item.isGST);
                itemValueWithouGST = parseFloat(itemValueWithouGST + (item.quantity * item.Selling_Price)).toFixed(2);
            }
        }); 
        console.log("itemValueWithouGST",itemValueWithouGST);
        console.log("gst value",(itemvalue-itemValueWithouGST));
        //const itemTax= context.cart.reduce((acc, item) => acc + ((item.quantity * item.Selling_Price) * item.Tax)/100, 0).toFixed(2);
        const itemTax = percentage(gst,(itemvalue-itemValueWithouGST));
        priceObj.itemTax = itemTax;
        priceObj.itemvalue = itemvalue;
        priceObj.itemValueWithouGST = itemValueWithouGST;
        return priceObj;
}

export  {convertDateToIST,convertDateTimeToIST,convertIsoToIst,calculateTotalAmt,convertLocalDate,convertDeliveryDate}