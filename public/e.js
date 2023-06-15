const fetch = require("node-fetch");

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const fs = require('fs');

function Test(list){
    return list.length * 6;
}

const key2 = "AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw";

const list = [["kz7WZkb9hfY","Mb0pscq44pQ"],["HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM","HoYVdKijbnE","khpYQJ-Apyw","32_URGIUplQ","ACF9OVRDq1Q","m3wghC24SYM"]];
async function myFnc(){
    const listAll3 = [];
    let flag = false;
  await Promise.all(list.map(array=>
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,contentDetails,status&id=${array}&maxResults=50&key=${key2}`)
    .then((response)=>{
      if(!response.ok){
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((json)=>{
      json.items.forEach((element)=>{                                      
        listAll3.push(element);
      });
    })
    .catch((error)=>{
      flag = true;
      console.error("エラー: adjust01", error);
    })
  ));
  if(flag){
    console.log("OK");
    return;
  }
    console.log(Test(listAll3));

    
}

//myFnc();

const dateList = new Array();
dateList.push("a");
dateList.push("d");
dateList.push("c");

//console.log(dateList.splice(1,1));
//console.log(dateList);

function rM(month){
  switch(month){
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
  }
}

//console.log("Wed Feb 01, 12:00 (JST)".match(/^[A-Z][a-z]{2}/)[0]);

function sortCollaboration(first, second){
  if(first.icon2.length>second.icon2.length){
    return 1;
  }else if(first.icon2.length<second.icon2.length){
    return -1;
  }else{
    return 0;
  }
}

const sameDate = [[{icon2:["a","b"]},{icon2:["a","b","c"]}],[{icon2:["a"]},{icon2:["a","b",2,3,5]},{icon2:[]},{icon2:["a","b"]}]];

const list1 = [];
const list2 = ["00:03:15", "00:12:10", "00:18:04", "00:23:18", "00:29:41", "00:37:54", "00:43:32", "00:53:10", "01:01:54", "01:08:00", "01:13:55", "01:20:21", "01:27:43", "01:36:16", "01:43:02", "01:50:56", "01:58:41"];
function SS(list){
  const list0 = new Array();
  list.forEach((element)=>{
    const array1 = element.split(":");
    list0.push(array1);
  });
  return list0.map((element)=>{
    return element.reduce(function(a, b){
      return (Number(a) * 60) + Number(b);
    });
  });
}
SS(list2);
console.log(SS(list2));
const list3 = list1.map((element)=>{
  return element.reduce(function(a, b){
    return (Number(a) * 60) + Number(b);
  });
});

console.log(list3);
[290, 704, 1066, 1436, 1909, 2254, 2642, 3088, 3488, 3841, 4419, 4634, 4979, 5420, 5718, 6112, 6422, 6708, 7018, 7239, 7434, 7736, 8005, 8326, 8545, 8810];

const listURL = [];
function NGW(listNG){
  let NGs = "";
  listNG.forEach((NGWord)=>{
    NGs += `-${NGWord}- `;
  });
  return NGs.slice(0, NGs.length-1);
  if(listNG.length > 0){
    const NGWords = listNG.reduce(function(NGWords, NGWord){
                         return `${NGWords} -${NGWord}-`;
                       });
    return `-${listNG[0]}-${NGWords.slice(listNG[0].length, NGWords.length)}`;              
  }else if(listNG.length === 0){
    return "";
  }
}



fs.readFile('./タイムスタンプ/タイムスタンプ.txt', "utf-8", (err, data) => {
  //dataがファイルの中身、errは読み込み時のエラー
    if(data) {
      console.log("[" + String(SS(data.match(/([0-9]{1,2}:)?[0-9]{1,2}:[0-9]{1,2}/g))).replace(/,43200,/g, "] [") + "]");
      fs.unlink('./タイムスタンプ/タイムスタンプ.txt', function(err) {if(err){console.log(err)}});
      fs.writeFile('./タイムスタンプ/タイムスタンプ.txt', "[" + String(SS(data.match(/([0-9]{1,2}:)?[0-9]{1,2}:[0-9]{1,2}/g))).replace(/,43200,/g, "] [") + "]", function(err) {if(err){console.log(err)}});
    } else {
      console.log(err);
    }
  });

