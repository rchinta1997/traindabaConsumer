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

 function setDateTime  (date, str){
   var sp = str.split(':');
   date.setHours(parseInt(sp[0],10));
   date.setMinutes(parseInt(sp[1],10));
  // date.setSeconds(parseInt(sp[2],10));
  console.log("setdatetime",date);
   return date;
}

function checkDeliveryDateWithOutletData(scheduledDate, outletData)
{
   var msg = "";
   console.log("scheduledDate",scheduledDate);
   let _scheduleDate = new Date(scheduledDate);
   console.log("_scheduleDate",_scheduleDate);

   const istDateTime = moment(new Date).tz('Asia/Kolkata');  
   const istFormatDateTime = istDateTime.format('YYYY-MM-DD HH:mm');
   const diffDays = moment(scheduledDate.split(" ")[0]).diff(moment(istFormatDateTime.split(" ")[0]),'days');
   const diffMins = moment(scheduledDate).diff(moment(istFormatDateTime),'minutes');
   console.log("istTime",istFormatDateTime)  //endDate.diff(startDate, 'days');Order_Timing Opening_Time Closing_Time
   console.log("outletData=",outletData);
   console.log("diffMins=",diffMins);
   
   if(diffMins >= outletData.Order_Timing)
   {
      var current = new Date();
      const _scheduleTime = setDateTime(new Date(current), scheduledDate.split(" ")[1])
      const start = setDateTime(new Date(current),  outletData.Opening_Time)
      const end = setDateTime(new Date(current), outletData.Closing_Time);
      if(_scheduleTime > start.getTime() &&  _scheduleTime < end.getTime())
      {
         console.log("-------_scheduleTime if------------")
      }
      else
      {
         console.log("-------_scheduleTime else------------")
         //msg = "Train arrival time should be between outlet closing time & opening time"
         msg = "Your ordering time is not within Outlet service window.";
      }
   }
   else
   {
      //msg = "Train arrival time should be match with outlet order timing"
      msg = "Your ordering time is not within Outlet service window.";
   }
   return msg;
}

export  {convertDateToIST,convertDateTimeToIST,convertIsoToIst,calculateTotalAmt,convertLocalDate,convertDeliveryDate,checkDeliveryDateWithOutletData}