const express = require('express');
const app = express();
app.use(express.static("public"));

const fetch = require("node-fetch");

const cron = require('node-cron');

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

// AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k
let key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
cron.schedule('0 0 0 * * *', () => {
  key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
});
cron.schedule('0 0 3 * * *', () => {
  key = "AIzaSyBDOlCzTCfxtpe9Lk7OT60v0VfRIn_RSrA";
});
cron.schedule('0 0 6 * * *', () => {
  key = "AIzaSyCiqUsLRH44u9UcwZQRL7_dIMljqMIf4JI";
});
cron.schedule('0 0 9 * * *', () => {
  key = "AIzaSyDb94UH4XZWe-OlMcWBSLwVcJrCYye8dUU";
});
cron.schedule('0 0 12 * * *', () => {
  key = "AIzaSyAc0ECaEi65tna4h1hb7NMbsnnmavn3K0Q";
});
cron.schedule('0 0 15 * * *', () => {
  key = "AIzaSyAk5iMZRi4a0UmcvEc3C9rUno2o2fu9fzQ";
});
cron.schedule('0 0 18 * * *', () => {
  key = "AIzaSyCluyrETb8amHgNVArDqFzeJz07QJ7Vr7c";
});
cron.schedule('0 0 21 * * *', () => {
  key = "AIzaSyDYc1BNMUNQwT-cWriHaKb_NTPL7YTI3gc";
});

function replaceAnd(string){
  return string.replace(/&amp;/g, "&");          
}
function replaceApos(string){
  return string.replace(/&#39;/g, "'");
}
function replaceBr1(string){
  return string.replace("】","】<br>");
}
function replaceBr2(string){
  return string.replace(/(?<=.)【/,"<br>【");
}
function replaceBr3(string){
  return string.replace("》 ","》<br>");
}
function replaceBr4(string){
  return string.replace("￤ ","￤<br>");
}
function replaceAll(string){
  string = replaceAnd(string);
  string = replaceApos(string);
  string = replaceBr1(string);
  string = replaceBr2(string);
  string = replaceBr3(string);
  string = replaceBr4(string);
  return string;
}

function sortDate(first, second){
  if(first.time>second.time){
    return 1;
  }else if(first.time<second.time){
    return -1;
  }else{
    return 0;
  }
}

function sortDate2(first, second){
  if(first.time2>second.time2){
    return 1;
  }else if(first.time2<second.time2){
    return -1;
  }else{
    return 0;
  }
}

function sortDate3(first, second){
  if(first.time3>second.time3){
    return 1;
  }else if(first.time3<second.time3){
    return -1;
  }else{
    return 0;
  }
}

function set0(num){
  let ret;
  if(num<10){
    ret = "0" + num;
  }else{
    ret = num;
  }
  return ret;
}

function duration(element){
  let hours;
  let minutes;
  let seconds;
  hours = element.time2.match(/[0-9]{1,2}(?=H)/);
  minutes = element.time2.match(/[0-9]{1,2}(?=M)/);
  seconds = element.time2.match(/[0-9]{1,2}(?=S)/);
  if(hours===null){
    hours = "00";
  }else{
    hours = set0(hours);
  }
  if(minutes===null){
    minutes = "00";
  }else{
    minutes = set0(minutes);
  }
  if(seconds===null){
    seconds = "00";
  }else{
    seconds = set0(seconds);
  }
  return hours+":"+minutes+":"+seconds;
}

function dW(string){
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

function dateList(list, dateList){
  let number = 0;
  let month;
  let date;
  let dw;
  let sameDate;
  while(list.length>number){
    month = list[number].time2.match(/(?<=\/)[0-9]{2}(?=\/)/);
    date = list[number].time.match(/[0-9]+/);
    dw = list[number].time.match(/[A-Z][a-z]{2}/);
    sameDate = list.filter((element)=>{
      return element.time.match(/[0-9]+/)[0] === date[0];
    });
    dateList.push([`${month[0]} 月 ${date[0]} 日（${dW(dw[0])}）`, sameDate]);
    number += sameDate.length;
  }
}

function standardTime(time){
  return dayjs(time).utc().format("YYYY/MM/DD"+" "+"HH:mm:ss");
}

class VEE{
  constructor(name, icon, channelId, listLN, listUC, listA, twitterId){
    this.name = name;
    this.icon = icon;
    this.channelId = channelId;
    this.listLN = listLN;
    this.listUC = listUC;
    this.listA = listA;
    this.twitterId = twitterId; 
  }
  api(key){      
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&type=video&maxResults=20&publishedAfter=${dayjs().utc().subtract(8, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{  
        let videoTitleLN;
        let videoTitleUC;
        let videoThumbnailUC;
        let videoTitleA;
                
        json.items.forEach((element)=>{
          if(element.snippet.liveBroadcastContent==="live"){                                        
            videoTitleLN = element.snippet.title;
            videoTitleLN = replaceAll(videoTitleLN);
            this.listLN.push({videoId:element.id.videoId, videoTitle:videoTitleLN, videoThumbnail:element.snippet.thumbnails.medium.url, icon:this.icon});              
          }else if(element.snippet.liveBroadcastContent==="upcoming"){
            videoTitleUC = element.snippet.title;
            videoTitleUC = replaceAll(videoTitleUC);
            videoThumbnailUC = element.snippet.thumbnails.medium.url;
            videoThumbnailUC = videoThumbnailUC.replace("_live.jpg", ".jpg");
            this.listUC.push({videoId:element.id.videoId, videoTitle:videoTitleUC, videoThumbnail:videoThumbnailUC, icon:this.icon});
          }else if(element.snippet.liveBroadcastContent==="none"){
            videoTitleA = element.snippet.title;
            videoTitleA = replaceAll(videoTitleA);
            this.listA.push({videoId:element.id.videoId, videoTitle:videoTitleA, videoThumbnail:element.snippet.thumbnails.medium.url, icon:this.icon});              
          }
        });
      });      
  }
  api2(){
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.channelId}&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        this.icon = json.items[0].snippet.thumbnails.medium.url;
      });
  }
}
  
let listLNA = [];
let listUCA = [];
let listAA = [];
const Ruki = new VEE("音門るき / Otokado Ruki", "https://yt3.ggpht.com/7q9hOlgVOLGGMGNDnAokhFo7vECpLIyKCOj3xLKwBqPvQuu2-kkLS9E3kkNd-rrfdK0GKepd4w=s176-c-k-c0x00ffffff-no-rj", "UCAUicVZlApAIhcdL9df3gWw", listLNA, listUCA, listAA, "Ruki_vita_666");
const Ringo = new VEE("九条 林檎 / Kujo Ringo", "https://yt3.ggpht.com/Rln7rmZcpjY0mIPPfF0BXCA4SLtEPo04b1QJuldTkrOMx03pwEv54f97SXd3cazOqGuylwQN=s176-c-k-c0x00ffffff-no-rj", "UCf57-IJn5mUJDyqd9uNEmrg", listLNA, listUCA, listAA, "ringo_0_0_5");
const Kohaku = new VEE("秋雪こはく / Syusetu Kohaku", "https://yt3.ggpht.com/gkzCvdPGfZP2BsRS2zhCwR46bKGGxwweXWRtYzgPw2rtE4P9RvKX4QRJ6vbABLijOiOxQksSWbk=s176-c-k-c0x00ffffff-no-rj", "UCQLyq7TDKHlmp2Ufd5Z2qMw", listLNA, listUCA, listAA, "Syusetu_kohaku");
const Tulsi = new VEE("魔王トゥルシー / Tulsi-Nightmare Madness IV", "https://yt3.ggpht.com/BBywT_hHFYqk_AvQ7xbd-l1in8838u3kVUqZmZFBuWsN2E2EJ4iS6BCBtFZ89wtJAnmmUZw_qBY=s176-c-k-c0x00ffffff-no-rj", "UCUdlDvZJGGP78zvta3swIhw", listLNA, listUCA, listAA, "IDmadeMiruna");
const Airu = new VEE("雛星あいる / Hinahoshi Airu", "https://yt3.ggpht.com/8zlUH6WXzKYQfAC-yDr8-Ok8oPYueyOsIL980DUniGMbaN5LgoRN3bwEFmel30BjQkGPf4_EoA=s176-c-k-c0x00ffffff-no-rj", "UCJGQPbaqTY91JhVzD8gIZyw", listLNA, listUCA, listAA, "airu_Lv115");
function devA(){
  listLNA.splice(0,listLNA.length);
  listUCA.splice(0,listUCA.length);
  listAA.splice(0,listAA.length);
  Ruki.api(key);
  Ringo.api(key);
  Kohaku.api(key);
  Tulsi.api(key);
  Airu.api(key);
}
function devA2(){
  Ruki.api2();
  Ringo.api2();
  Kohaku.api2();
  Tulsi.api2();
  Airu.api2();
}
  
let listLNB = [];
let listUCB = [];
let listAB = [];
const Mina = new VEE("桜鳥ミーナ / Audrey Mina", "https://yt3.ggpht.com/nftD5_O_9HQxYdWXZa_TyAFIFEzuwmQzqM6y3eIm6eT7TU7aomDGmjFKYLVDVXeZOi0qqL1p=s176-c-k-c0x00ffffff-no-rj", "UCFkHpBGMeNSQW-j9-F0nxnQ", listLNB, listUCB, listAB, "mina0x0audrey");
const Ito = new VEE("白粉いと / Oshiro Ito", "https://yt3.ggpht.com/LEaZ41BdwqwGJlFvh0WbnCGC92TFZAZA8LjHH57dwbCcI0F4lMbpKbe0BiS-zdH3ojL6rvVf=s176-c-k-c0x00ffffff-no-rj", "UCzv_W7v9ix39tFPDB-TV0Vg", listLNB, listUCB, listAB, "oshiroito");
const Chihiyo = new VEE("日和ちひよ / Hiyori Chihiyo", "https://yt3.ggpht.com/7P3MYe928q3hA5eosHfOfRW0gjTFU9BVRjo1J5kyl92PORQs1W0w_NJUNqOkenqXljBeQkIX7fs=s176-c-k-c0x00ffffff-no-rj", "UCnBOUGfsfcD6nUbpdDAwMfw", listLNB, listUCB, listAB, "hiyohiyovee");
const Mew = new VEE("ミュウ・ガルシア / Mew Garcia", "https://yt3.ggpht.com/qM-PWb43IfrKqCnU4n8nB4YVhHl340yjJIkIaukRex2_9j_EsfplB5YE80i4TKPFgZbr8cJFcg=s176-c-k-c0x00ffffff-no-rj", "UC7FUtGR0AsvwzXrEmdUBAFw", listLNB, listUCB, listAB, "MewGarcia_king");
const Official = new VEE("VEE公式チャンネル / VEE official channel", "https://yt3.ggpht.com/vhgGxT2ROGSByTxS-lfULhoNWtC_A7ubuMTdchPHAFYx15Ov2FE0sBf94Oo91lNpPxeqKyAf=s176-c-k-c0x00ffffff-no-rj", "UCXWiGKfAXjHUsxa_GNLgv-A", listLNB, listUCB, listAB, "_vee_official_");
function devB(){
  listLNB.splice(0,listLNB.length);
  listUCB.splice(0,listUCB.length);
  listAB.splice(0,listAB.length);
  Mina.api(key);
  Ito.api(key);
  Chihiyo.api(key);
  Mew.api(key);
  Official.api(key);
}
function devB2(){
  Mina.api2();
  Ito.api2();
  Chihiyo.api2();
  Mew.api2();
  Official.api2();
}

let listLNC = [];
let listUCC = [];
let listAC = [];  
const Yozuri = new VEE("蒼宮よづり / Aomiya Yozuri", "https://yt3.ggpht.com/eqK_S6SXxSh--EU_EPMLytHKEvh9J9Hw5oLGbG-CCTAMAgkWRUn2ndT9mdyeehcBcqQeTZZs=s176-c-k-c0x00ffffff-no-rj", "UCWhFUlcawiD78qAD7zzS6Bw", listLNC, listUCC, listAC, "aomiyayozuri");
const Uparu = new VEE("亞生うぱる / Anew Uparu", "https://yt3.ggpht.com/5NhP3kywPqOLzW587NNkK52wI3gE0FoeUQSxAsjVF6XJaFZ-0_bUDsTqxTUtNCW_ZrThwBtL3K0=s176-c-k-c0x00ffffff-no-rj", "UCQfp96ujs7PXiUG6ov29RKg", listLNC, listUCC, listAC, "UPARU_JP");
const Uriyone = new VEE("糶 / Uriyone", "https://yt3.ggpht.com/N1qK9ca7VuCEMeep1XTgpKMKfTVcWUGLwzH8KuDbUjf6OmsW7xj2SpphHDfbP_Kx2mmBHGEwxg=s176-c-k-c0x00ffffff-no-rj", "UCJpsYQtNyVDc023clkqMhTQ", listLNC, listUCC, listAC, "URIYONEE");
const Cotonoha = new VEE("言のハ / Cotonoha", "https://yt3.ggpht.com/gkCaF4FvG0JhBaYnqEPaXXgdxzm6SUbKb3hVR4AhtPvGiGCfxGNqroDS_ShhKnOjVxT1xSeeow=s176-c-k-c0x00ffffff-no-rj", "UCOd-qYH_8e-tgxpPIcqwenA", listLNC, listUCC, listAC, "TwiCoto");
const Luminous = new VEE("るみなす・すいーと / Luminous Sweet", "https://yt3.ggpht.com/1oE4luB-7eOFSQ2Rdn6fVt3FCzmRJyuOMbGVFoddRm9jl6GjJU7InpjxKzV65JUTGjvYIbKBQQ=s176-c-k-c0x00ffffff-no-rj", "UC02dJeNmcQLqENdHFG1svJw", listLNC, listUCC, listAC, "luminous_amaama");
function devC(){
  listLNC.splice(0,listLNC.length);
  listUCC.splice(0,listUCC.length);
  listAC.splice(0,listAC.length);
  Yozuri.api(key);
  Uparu.api(key);
  Uriyone.api(key);
  Cotonoha.api(key);
  Luminous.api(key);
}
function devC2(){
  Yozuri.api2();
  Uparu.api2();
  Uriyone.api2();
  Cotonoha.api2();
  Luminous.api2();
}

let printLN = [];
let printUC = [];
let printA = [];
const process1 = (listLN, listUC, listA, printLN, printUC, printA)=>{
  let videoIdLNs = [];
  let videoIdUCs = [];
  let videoIdAs = [];
  listLN.forEach((element)=>{
    videoIdLNs.push(element.videoId);
  });
  listUC.forEach((element)=>{
    videoIdUCs.push(element.videoId);
  });
  listA.forEach((element)=>{
    videoIdAs.push(element.videoId);
  });
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,status,contentDetails&id=${videoIdLNs},${videoIdUCs},${videoIdAs}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
      .then((response)=>{
        console.log(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,status,contentDetails&id=${videoIdLNs},${videoIdUCs},${videoIdAs}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`);
        return response.json();
      })
      .then((json)=>{           
        for(let i=0; i<json.items.length; i++){
          if(listLN.find((element)=>{if(element.videoId===json.items[i].id){return true}})){
            let object = listLN.find((element)=>{
              return element.videoId===json.items[i].id;
             });
            if(json.items[i].liveStreamingDetails.actualEndTime!==undefined){
              printA.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, time3:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon});
              continue;
            }
            printLN.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon});
          }
          if(listUC.find((element)=>{if(element.videoId===json.items[i].id){return true}})){
            let object = listUC.find((element)=>{
              return element.videoId===json.items[i].id;
             });
             if(json.items[i].liveStreamingDetails.actualEndTime!==undefined && listA.find((element)=>{if(json.items[i].id===element.videoId){return false}return true})){
              printA.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, icon:object.icon});
              continue;
            }
            if(json.items[i].liveStreamingDetails.actualStartTime!==undefined && listLN.find((element)=>{if(json.items[i].id===element.videoId){return false}return true})){
              printLN.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon});
              continue;
            }
            printUC.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.scheduledStartTime, time2:"time2", status:json.items[i].status.uploadStatus, icon:object.icon});
          }
          if(listA.find((element)=>{if(element.videoId===json.items[i].id){return true}})){
            let object = listA.find((element)=>{
              return element.videoId===json.items[i].id;
             });
             if(json.items[i].liveStreamingDetails===undefined){
              continue;
            }
            printA.push({videoId:object.videoId, videoTitle:object.videoTitle, videoThumbnail:object.videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, time3:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon});
          }
        }     
      });
}
  
function process1s(){
  process1(listLNA, listUCA, listAA, printLN, printUC, printA);
  process1(listLNB, listUCB, listAB, printLN, printUC, printA);
  process1(listLNC, listUCC, listAC, printLN, printUC, printA);
}

let ObjectData = [[], [], []];
function process2(printLN, printUC, printA, ObjectData){  
  printLN.forEach((element)=>{         
    element.time = standardTime(element.time);
  });
  let printNewLN = ObjectData[0];
  for(let i=0; i<printLN.length; i++){    
    if(ObjectData[0].find((element)=>{if(printLN[i].videoId===element.videoId){return true}})){
        continue;
    }
    printNewLN.push(printLN[i]);
  }
  printNewLN.sort(sortDate);

  let printUC2 = printUC.filter((element)=>{        
    return element.time < dayjs().utc().add(1, "y").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });

  printUC2.sort(sortDate);
  printUC2.forEach((element)=>{
    element.time2 = standardTime(element.time);
  });
  
  const JST = (print)=>{
    print.forEach((element)=>{       
      element.time = dayjs(element.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
    });
  }

  JST(printUC2);
  
  let printNewUC = [];
  dateList(printUC2,printNewUC);

  printA.forEach((element)=>{ 
    element.time2 = duration(element);
  });

  JST(printA);

  let printA2 = ObjectData[2];
  for(let i=0; i<printA.length; i++){    
    if(ObjectData[2].find((element)=>{if(printA[i].videoId===element.videoId){return true}})){
        continue;
    }
    printA2.push(printA[i]);
  }

  let printNewA = printA2.filter((element)=>{        
    return element.time3 > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });
    
  printNewA.sort(sortDate3);
  console.log(printNewA);
  ObjectData.splice(0, ObjectData.length, printNewLN, printNewUC, printNewA);
}

const UD3 = (ObjectData)=>{
  let videoIdLNs = [];
  let videoIdUCs = [];
  let videoIdUCs2 = [];
  let printA = ObjectData[2];

  ObjectData[0].forEach((element)=>{
    videoIdLNs.push(element.videoId);
  });
  ObjectData[1].forEach((element)=>{
    videoIdUCs.push(element[1]);
  });
  videoIdUCs.flat().forEach((element)=>{
    videoIdUCs2.push(element.videoId);
  });
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,contentDetails,status&id=${videoIdLNs},${videoIdUCs2}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{     
      let printLN = [];
      let printUC = [];
      for(let i=0; i<json.items.length; i++){
        if(ObjectData[0].find((element)=>{if(element.videoId===json.items[i].id){return true}})){
          if(printA.find((element)=>{if(json.items[i].id===element.videoId){return true}})){
            continue;
          }
          let object = ObjectData[0].find((element)=>{
                         return element.videoId===json.items[i].id;
                       });
          if(json.items[i].snippet.liveBroadcastContent==="none"){            
            let newObject = {videoId:object.videoId, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, time3:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon};
            newObject.time =dayjs(newObject.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
            newObject.time2 = duration(newObject);
            printA.push(newObject);
            continue;
          }
          let newObject = {videoId:object.videoId, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon};
          newObject.time = standardTime(newObject.time);
          printLN.push(newObject);
        }
        
        let listUC = [];
        ObjectData[1].forEach((element)=>{
          listUC.push(element[1]);
        });
        let listUC2 = listUC.flat();
        if(listUC2.find((element)=>{if(element.videoId===json.items[i].id){return true}})){
          let object = listUC2.find((element)=>{
                         return element.videoId===json.items[i].id;
                       });
          if(json.items[i].snippet.liveBroadcastContent==="live"){
            let newObject = {videoId:object.videoId, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.actualStartTime, icon:object.icon};
            newObject.time = standardTime(newObject.time);
            printLN.push(newObject);
            continue;
          }
          let newObject = {videoId:object.videoId, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.scheduledStartTime, time2:"time2", status:json.items[i].status.uploadStatus, icon:object.icon};
          newObject.time2 = standardTime(newObject.time);
          newObject.time = dayjs(newObject.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
          printUC.push(newObject);        
        }
      }

      printUC.sort(sortDate2);
      let printNewUC = [];
      dateList(printUC, printNewUC);
      
      printA.sort(sortDate3);
      printLN.sort(sortDate);
      ObjectData.splice(0, ObjectData.length, printLN, printNewUC, printA);        
    });
}

const UD4 = (ObjectData)=>{
  let videoIdAs = [];
  let printA = ObjectData[2];
  printA.forEach((element)=>{
    videoIdAs.push(element.videoId);
  });
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,contentDetails,status&id=${videoIdAs}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      let printNewA = [];
      for(let i=0; i<printA.length; i++){
        if(json.items.find((element)=>{if(element.id===printA[i].videoId){return true}})){
          let object = json.items.find((element)=>{
                        return element.id===printA[i].videoId;
                       });
          let newObject = {videoId:printA[i].videoId, videoTitle:replaceAll(object.snippet.title), videoThumbnail:object.snippet.thumbnails.medium.url, time:object.liveStreamingDetails.actualStartTime, time2:object.contentDetails.duration, time3:object.liveStreamingDetails.actualStartTime, icon:printA[i].icon};
          newObject.time =dayjs(newObject.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
          newObject.time2 = duration(newObject);
          if(newObject.time3 < dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
            continue;
          }          
          printNewA.push(newObject);
        }
        continue;
      }
      
      ObjectData.splice(2, 1, printNewA);
    });
}

function apiBoot(){
  console.log(key);
  devA();
  devB();
  devC();
  printLN.splice(0,printLN.length);
  printUC.splice(0,printUC.length);
  printA.splice(0,printA.length);
  setTimeout(function(){process1s()},5000); 
  setTimeout(function(){process2(printLN, printUC, printA, ObjectData)},10000);    
}
  
cron.schedule('0 5,35 * * * *', () => {
  apiBoot();
  
  console.log('30分経過だよ');
  
});

cron.schedule('30 * * * * *', () => {
  UD3(ObjectData);
});

cron.schedule('20 * * * * *', () => {
  UD4(ObjectData);
});

cron.schedule('0 59 23 * * *', () => {
  devA2();
  devB2();
  devC2();
  console.log("今日も一日お疲れさまでした");
});

const q = [1,2];

app.get('/', (req, res) => {
  res.render('hello.ejs', {ObjectData:ObjectData});
});

app.listen(3000);

console.log("HELLOW WORLD");

const hellow = (n)=>{
    let h1 = "Hellow";
    for(i=1;i<=n-1;i++){
        h1 = h1 +" "+"Hellow";
    }
    console.log(h1);
}

hellow(2);
