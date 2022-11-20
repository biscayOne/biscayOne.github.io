const dayjs = require('dayjs');

const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

function set0(num){
  let ret;
  if(num<10){
    ret = "0" + num;
  }else{
    ret = num;
  }
  return ret;
}
let A = "PT2H55S";
let hours = A.match(/[0-9]{1,2}(?=H)/);
console.log(hours);
let minutes = A.match(/[0-9]{1,2}(?=M)/);
let seconds = A.match(/[0-9]{1,2}(?=S)/);
if(hours===null){
  hours = ["00"];
}else{
  hours = set0(hours);
}
if(minutes===null){
  minutes = ["00"];
}else{
  minutes = set0(minutes);
}
if(seconds===null){
  seconds = ["00"];
}else{
  seconds = set0(seconds);
}
console.log(hours+":"+minutes+":"+seconds);






  re = /[0-9]+/g;
console.log(re.exec("abc123"));         // => 123
console.log("abc123".match(re));        // => 123

const time1 = [{time:12,c:"a"},{time:12,c:"b"},{time:13,c:"c"},{time:13,c:"d"},{time:14,c:"e"}];

let n = 0;
let T;
let O;
let L = [];

while(time1.length>n){
  T = time1[n].time;
  O = time1.filter((time2)=>{
    return time2.time === T;
  });
  L.push(O);
  n = n + O.length;
}

console.log(L);

for(let l=0; l<L.length; l++){
  for(let m=0; m<L[l].length; m++){
    console.log(L[l][m].c);
  }
  console.log("---");
}

console.log("2"===2);

function replace(string1,string2){
  string2.push(string1.replace(/&#39;/g, "'"));
  console.log(string2);
}
let S2 = "【Minecraft】深夜にゆったり『夜釣り』しながらおはなしするだけ～We&#39;ll talk while night fishing.～【VTuber/蒼宮よづり】";
let S1=[];
replace(S2,S1);

console.log(S1);

let b = [{a:2},{a:4},{a:6},{a:7}];
let q = [2,3,5,7];


for(let i=0; i<q.length; i++){
  if(b.find((n)=>{if(q[i]===n.a){return true}})){
      continue;
  }
  console.log(q[i]);
  }

const UD3 = (printLN, printUC, printA, ObjectData)=>{
  printLN.splice(0,printLN.length);
  printUC.splice(0,printUC.length);
  let videoIdLNs = [];
  let videoIdUCs = [];
  ObjectData[0].forEach((element)=>{
    videoIdLNs.push(element.videoId);
  });
  ObjectData[1].forEach((element)=>{
    videoIdUCs.push(element.videoId);
  });
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdLNs},${videoIdUCs}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{           
        for(let i=0; i<ObjectData[0].length; i++){    
          if(json.items[i].snippet.liveBroadcastContent==="none"){
            continue;
          }           
          printLN.push(ObjectData[0][i]);
        }
        for(let i=0; i<ObjectData[1].length; i++){
          if(json.items[i].snippet.liveBroadcastContent==="live"){
            printLN.push(ObjectData[1][i]);
            return;
          }           
          printUC.push(ObjectData[1][i]);
        }
        ObjectData.splice(0, ObjectData.length);
        ObjectData.push(printLN);
        ObjectData.push(printUC);
        ObjectData.push(printA);          
      });
}

let AS = [[{a:2},{a:1}],{a:3}];
AS.forEach((element)=>{
  console.log(element.a);
});

let BBC = [5];
BBC = [9];
BBC = 0;
console.log(BBC);

const BD = ["2022/12/31 00:00:00","2021/12/31 00:00:00","2022/12/31 02:00:00","2022/12/31 03:00:00","2022/11/31 00:00:00"];
const sortDate = (first, second)=>{
  if(first>second){
    return 1;
  }else if(first<second){
    return -1;
  }else{
    return 0;
  }
}

console.log(BD.sort(sortDate));

if(AS.b===undefined){
  console.log("OK");
}

function api(){
for(let i=0; i<listLN.length; i++){
  if(json.items[i].liveStreamingDetails.actualEndTime!==undefined){
    printA.push({videoId:listLN[i].videoId, videoTitle:listLN[i].videoTitle, videoThumbnail:listLN[i].videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, time3:json.items[i].liveStreamingDetails.actualStartTime, icon:listLN[i].icon});
    continue;
  }
  printLN.push({videoId:listLN[i].videoId, videoTitle:listLN[i].videoTitle, videoThumbnail:listLN[i].videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, icon:listLN[i].icon});
}
for(let i=0; i<listUC.length; i++){
  if(json.items[listLN.length+i].liveStreamingDetails.actualEndTime!==undefined && listA.find((element)=>{if(json.items[listLN.length+i].id===element.videoId){return false}return true})){
    printA.push({videoId:listUC[i].videoId, videoTitle:listUC[i].videoTitle, videoThumbnail:listUC[i].videoThumbnail, time:json.items[listLN.length+i].liveStreamingDetails.actualStartTime, time2:json.items[listLN.length+i].contentDetails.duration, icon:listUC[i].icon});
    continue;
  }
  if(json.items[listLN.length+i].liveStreamingDetails.actualStartTime!==undefined && listLN.find((element)=>{if(json.items[listLN.length+i].id===element.videoId){return false}return true})){
    printLN.push({videoId:listUC[i].videoId, videoTitle:listUC[i].videoTitle, videoThumbnail:listUC[i].videoThumbnail, time:json.items[listLN.length+i].liveStreamingDetails.actualStartTime, icon:listUC[i].icon});
    continue;
  }
  printUC.push({videoId:listUC[i].videoId, videoTitle:listUC[i].videoTitle, videoThumbnail:listUC[i].videoThumbnail, time:json.items[listLN.length+i].liveStreamingDetails.scheduledStartTime, time2:"time2", status:json.items[listLN.length+i].status.uploadStatus, icon:listUC[i].icon});
}
for(let i=0; i<listA.length; i++){
  if(json.items[listLN.length+listUC.length+i].liveStreamingDetails===undefined){
    continue;
  }
  printA.push({videoId:listA[i].videoId, videoTitle:listA[i].videoTitle, videoThumbnail:listA[i].videoThumbnail, time:json.items[listLN.length+listUC.length+i].liveStreamingDetails.actualStartTime, time2:json.items[listLN.length+listUC.length+i].contentDetails.duration, time3:json.items[listLN.length+listUC.length+i].liveStreamingDetails.actualStartTime, icon:listA[i].icon});
}}

const test = ["a", ["b", "c"]];

console.log(test.flat());
let test2 = [{videoId:2, a:2},{videoId:2, a:3}];
const videoIdLNs = test2.filter((element)=>{
  return element.c;
});
console.log(videoIdLNs);
console.log(test2[0].videoId);

console.log("1224/24/35".match(/(?<=\/)[0-9]{2}(?=\/)/));

console.log("【少し話そ！】配信新体制＆新番組のお知らせ♡【VEE所属_桜鳥ミーナ視点】".match(/(?<=】)./));
console.log("【少し話そ！】配信新体制＆新番組のお知らせ♡【VEE所属_桜鳥ミーナ視点】".replace("】","】<br>"));
console.log("【少し話そ！】配信新体制＆新番組のお知らせ♡【VEE所属_桜鳥ミーナ視点】".replace(/(?<=.)【/,"<br>【"));

console.log("skaoDsHggAqZZZ".match(/[A-Z][a-z]{2}/));

function DW(string){
  switch(string){
    case "Mon":
      return "月";
    case "Tue":
      return "火";
    case "Wed":
      return "水";
    case "Thu":
      return "木";
    case "Fri":
      return "金";
    case "Sat":
      return "土";
    case "Sun":
      return "日";
  }
}

console.log(DW("Mon"));

let videoIdUCs = [1,2,3,2,1,5,6,5,7];

let videoIdUCs2 = videoIdUCs.filter((element,index)=>{
  if(videoIdUCs.indexOf(element)===index){
    return element;
  }
});

console.log(videoIdUCs2);

function 
a(){
  return 5;
}

console.log(a());

let string = "あああ";
console.log(string
  .replace("あああ","いいい")
  .replace("いいい","ううう"));

function return1(){
  return 1;
}

console.log("#プロセカ ￤      ガチャ！カラフェスきちゃ！【白粉いと / VEE】".replace(/￤\s+|￤/, "￤<br>"));

let a5;

function a6(){
  a5=3;
}
a6();
let string1 = "九条      林檎";
console.log(/九条林檎|九条\s+林檎/.test(string1));

if(a5<5){
  a5=6;
}else if(a5<7){
  a5=8;
}

console.log(dayjs().hour());

function api(key, daysAgo){      
  console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=&type=video&maxResults=50&publishedAfter=${dayjs().subtract(daysAgo, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`);
}

api(1,2);

let XN = "12";

function set0(num){
  let ret;
  if(num<10){
    ret = "0" + num;
  }else{
    ret = num;
  }
  return ret;
}

if(!false){
  let hours = "9H".match(/[0-9]{1,2}(?=H)/);
  console.log(set0(hours)+"時");
}

if(XN.match(/^[0-9]/)[0]==="1"){
  console.log(0);
}

console.log(videoIdUCs.splice(-2,1));

let set = ["a", "b", "c", "d"];
function answer(set){
if(set.length > 0){
let answer = `-${set[0]}-`;
for(let i=1; i<set.length; i++){
  answer = `${answer} -${set[i]}-`;
}
return answer;
}else{
  return "";
}
}
console.log(answer(set));

function divisor(listAll){
  const listAllNew = listAll.filter((element,index)=>{
                     if(listAll.indexOf(element)===index){
                       return element;
                     }
                   });
  listAll.splice(0,listAll.length);
  const length = Math.ceil(listAllNew.length/50);
  for(let i=0; i<length; i++){
    listAll.push(listAllNew.slice(i*50, (i+1)*50));
  }
}
let listA = [{videoId:2},{videoId:2}];
divisor(listA);
console.log(listA);
let ObjectData = [{videoId:3},{videoId:2}];
let printLN = [{videoId:3},{videoId:2},{videoId:3},{videoId:5},{videoId:5}]
let printNewLN = ObjectData;
for(let i=0; i<printLN.length; i++){    
  if(printNewLN.find((element)=>{if(printLN[i].videoId===element.videoId){return true}})){
    console.log(printLN[i]);
      continue;
  }
  printNewLN.push(printLN[i]);
}
console.log(!false);

console.log(/(?<=【敬称略】.+)(音門るき|九条林檎|秋雪こはく|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん)(?=.+ED（フリー素材提供者）)/.test("aaゆりかわゆんaaED（フリー素材提供者）"));

const fetch = require("node-fetch");
let list = [];


function Test(list){
  if(list.find((element)=>{
    if(element === "error"){
      return true;
    }
  })){
    return;
  }
  console.log("error OK");
}

Test([{a:2},{a:3},2]);

let list2 = [2, //a
3, //b
5, //c
];

console.log(list2);
const checkID = /(UCXWiGKfAXjHUsxa_GNLgv-A|UCAUicVZlApAIhcdL9df3gWw|UCf57-IJn5mUJDyqd9uNEmrg|UCQLyq7TDKHlmp2Ufd5Z2qMw|UCUdlDvZJGGP78zvta3swIhw|UCJGQPbaqTY91JhVzD8gIZyw|UCFkHpBGMeNSQW-j9-F0nxnQ|UCzv_W7v9ix39tFPDB-TV0Vg|UCnBOUGfsfcD6nUbpdDAwMfw|UC7FUtGR0AsvwzXrEmdUBAFw|UCWhFUlcawiD78qAD7zzS6Bw|UCQfp96ujs7PXiUG6ov29RKg|UCJpsYQtNyVDc023clkqMhTQ|UCOd-qYH_8e-tgxpPIcqwenA|UC02dJeNmcQLqENdHFG1svJw|UC6b4Ta_J0wbylnPu1auaQiA|UCEoAD_2jSLoYQd2MJZxWuxQ|UCngFYCS8p8PX9wf4V8kLVgw)/;
if(("PT4M46S".match(/[0-9]{1,2}(?=H)/)===null && ("PT4M46S".match(/[0-9]{1,2}(?=M)/)===null || "PT4M46S".match(/[0-9]{1,2}(?=M)/)[0]<30)) && !checkID.test("UCtjLGNIyJciysNCJDdXyKew")){
  console.log("PT4M46S".match(/[0-9]{1,2}(?=M)/)[0]);
}else{
  console.log("あー");
}

function ASA(){
  return 5;
}

const list3 = [ASA];
const cd = list3.map((a)=>{
  return a();
});

console.log(!/(音門るき|九条林檎|秋雪こはく|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん|サーバー)(?=.+Syusetu)/m.test("コラボの３人🌼\n@カシ・オトハ / Kashi Otoha \n@Ruki Otokado 音門るき [VEE] \n@雨音るな \n\nサーバー主催：@Syusetu kohaku/秋雪こはく \n✽┈┈┈┈┈┈┈✽┈┈┈┈┈┈┈✽┈┈┈┈┈┈┈✽┈┈┈┈┈┈┈✽\n本日のナナモナTMI「シーズン３は一味違うらし"));

