const express = require('express');
const app = express();
app.use(express.static("public"));

const fetch = require("node-fetch");

const cron = require('node-cron');

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

let key = "AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw";
const key2 = "AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw";
const nowHour = dayjs().utc().add(9, "h").hour();
if(nowHour<2){
  key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
}else if(nowHour<4){
  key = "AIzaSyBDOlCzTCfxtpe9Lk7OT60v0VfRIn_RSrA";
}else if(nowHour<6){
  key = "AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k";
}else if(nowHour<8){
  key = "AIzaSyCiqUsLRH44u9UcwZQRL7_dIMljqMIf4JI";
}else if(nowHour<10){
  key = "AIzaSyDb94UH4XZWe-OlMcWBSLwVcJrCYye8dUU";
}else if(nowHour<12){
  key = "AIzaSyCd7IonmJLfHH_5V8CrKv3kg6w1VCSPV1Q";
}else if(nowHour<14){
  key = "AIzaSyAc0ECaEi65tna4h1hb7NMbsnnmavn3K0Q";
}else if(nowHour<16){
  key = "AIzaSyAk5iMZRi4a0UmcvEc3C9rUno2o2fu9fzQ";
}else if(nowHour<18){
  key = "AIzaSyAP-A7RSKhcI2n-PpuhiLg9fJgYoJMoH-E";
}else if(nowHour<20){
  key = "AIzaSyCluyrETb8amHgNVArDqFzeJz07QJ7Vr7c";
}else if(nowHour<22){
  key = "AIzaSyDYc1BNMUNQwT-cWriHaKb_NTPL7YTI3gc";
}else if(nowHour<24){
  key = "AIzaSyDoqa0Z7dE2CpGwLi90w-KOV65rx6WdUAU";
}
cron.schedule('0 0,1,2,3,4 0 * * *', ()=>{
  key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
});
cron.schedule('0 0,1,2,3,4 2 * * *', ()=>{
  key = "AIzaSyBDOlCzTCfxtpe9Lk7OT60v0VfRIn_RSrA";
});
cron.schedule('0 0,1,2,3,4 4 * * *', ()=>{
  key = "AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k";
});
cron.schedule('0 0,1,2,3,4 6 * * *', ()=>{
  key = "AIzaSyCiqUsLRH44u9UcwZQRL7_dIMljqMIf4JI";
});
cron.schedule('0 0,1,2,3,4 8 * * *', ()=>{
  key = "AIzaSyDb94UH4XZWe-OlMcWBSLwVcJrCYye8dUU";
});
cron.schedule('0 0,1,2,3,4 10 * * *', ()=>{
  key = "AIzaSyCd7IonmJLfHH_5V8CrKv3kg6w1VCSPV1Q";
});
cron.schedule('0 0,1,2,3,4 12 * * *', ()=>{
  key = "AIzaSyAc0ECaEi65tna4h1hb7NMbsnnmavn3K0Q";
});
cron.schedule('0 0,1,2,3,4 14 * * *', ()=>{
  key = "AIzaSyAk5iMZRi4a0UmcvEc3C9rUno2o2fu9fzQ";
});
cron.schedule('0 0,1,2,3,4 16 * * *', ()=>{
  key = "AIzaSyAP-A7RSKhcI2n-PpuhiLg9fJgYoJMoH-E";
});
cron.schedule('0 0,1,2,3,4 18 * * *', ()=>{
  key = "AIzaSyCluyrETb8amHgNVArDqFzeJz07QJ7Vr7c";
});
cron.schedule('0 0,1,2,3,4 20 * * *', ()=>{
  key = "AIzaSyDYc1BNMUNQwT-cWriHaKb_NTPL7YTI3gc";
});
cron.schedule('0 0,1,2,3,4 22 * * *', ()=>{
  key = "AIzaSyDoqa0Z7dE2CpGwLi90w-KOV65rx6WdUAU";
});

const clinetId = "w7c3ie7lvr4c75vegdd9u80e0aicwc";
const clinetSecret = "ns28cq05ja4vfsyv23fm612dzemq3w";

const shakeHands = "/images/shakeHands.jpg";

function daysUTCAdjust(adjust, number, timeFrame){
  return dayjs().utc()[adjust](number, timeFrame).format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
}

function NGW(listNG){  
  let NGWords = "";
  listNG.forEach((NGWord)=>{
    NGWords += `-${NGWord} `;
  });
  return NGWords.slice(0, NGWords.length-1);
}

function URLW(listURL){
  if(listURL.length > 0){
    return listURL.join(" OR ");
  }else if(listURL.length === 0){
    return "";
  }
}

function userIdsReturn(listTwitch){
  return `user_id=${listTwitch.join("&user_id=")}`;
}

function loginNamesReturn(listLN){
  return listLN.map((loginName)=>{
    return `&user_login=${loginName}`;
  }).join("");
}

function reTUI(listTwitch){
  if(listTwitch.length > 0){
    return listTwitch.join("|");
  }else{
    return "";
  }
}

function divisor50(array){
  const length = Math.ceil(array.length/50);
  return new Array(length).fill().map((_, i)=>{
    return array.slice(i*50, (i+1)*50);
  });
}

function deDuplication(list){
  return list.filter((element,index)=>{
      return list.indexOf(element)===index;
  });
}

function divisor(listAll){
  const listAllNew = deDuplication(listAll); 
  return divisor50(listAllNew);
}

function replaceAll(string){
  return string
          .replace(/&amp;/g, "&")
          .replace(/&#39;/g, "'")
          .replace(/】(?=[^【])/g, "】<br>")
          .replace(/(?<=[^】》])【/g, "<br>【")
          .replace(/》\s+|》(?=[^！])/, "》<br>")
          .replace(/￤\s*/, "￤<br>")
          .replace(/(?<=\])(\s\-\s|\s)(?=[^\s])/, "<br>")
          .replace(/(?<=\s)］(?=#)/, "］<br>");
}

function millionProgress(number){
  const progress = String(Number(number) / 10000);
  if(!/\./.test(progress)){
    return progress + ".00";
  }else{
    if(/(?<=\.)\d{2}/.test(progress)){
      const progressSplit = progress.split(".");
      return progressSplit[0] + "." + progressSplit[1].slice(0, 2);
    }else{
      return progress + "0";
    }
  }
}

function titleAdjustLN(title, cJson){
  let titleAdjust = title;
  if(!/^【/.test(titleAdjust)){
    titleAdjust = `【${cJson.game_name}】<br>${titleAdjust}`;
  }
  return titleAdjustA(titleAdjust, cJson);
}

function titleAdjustA(title, cJson){
  let titleAdjust = title;
  if(!/】$/.test(titleAdjust)){
    switch(cJson.user_name){
      case "syusetu_kohaku":
        cJson.user_name = "Syusetu kohaku/秋雪こはく";
        break;
      case "Aomiyayozuri_ch":
        cJson.user_name = "蒼宮よづり(Aomiya Yozuri)";
        break;
      case "ctnh_jp":
        cJson.user_name = "言のハ-Cotonoha-";
        break;
      case "dttodot":
        cJson.user_name = "dtto. (でぃっと)";
        break;
    }
    titleAdjust = `${titleAdjust}<br>【${cJson.user_name}】`
  }
  return titleAdjust;
}

function replaceThumbnailURL(thumbnailURL){
  return thumbnailURL.replace("_live.jpg", ".jpg");
}

function sizeThumbnailURL(thumbnailURL){
  return thumbnailURL.replace(/%?{width}/, "320").replace(/%?{height}/, "180");
}

function channelIconReturn(userId){
  switch(userId){
    case Dtto.getTUI():
      return listIcon[8];
    case Ruki.getTUI():
      return listIcon[1];
    case Kohaku.getTUI():
      return listIcon[3];
    case Airu.getTUI():
      return listIcon[5];
    case Mina.getTUI():
      return listIcon[6];
    case Yozuri.getTUI():
      return listIcon[12];
    case Cotonoha.getTUI():
      return listIcon[15];
    case Yun.getTUI():
      return listIcon[19];
    case Yae.getTUI():
      return listIcon[20];
    default:
      return shakeHands;
  }
}

function rOLN(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), timeBase:standardTime(cJson.liveStreamingDetails.actualStartTime), icon:icon1, icon2:icon2, platform:"youtube"};
}

function rOLNT(cJson){
  return {videoId:undefined, streamId:cJson.id, loginName:cJson.user_login, videoTitle:titleAdjustLN(replaceAll(cJson.title), cJson), videoThumbnail:sizeThumbnailURL(cJson.thumbnail_url), timeBase:standardTime(cJson.started_at), icon:channelIconReturn(cJson.user_id), icon2:collaborationReturn(cJson.title, cJson.user_id), platform:"twitch"};
}

function rOLNSR(json){
  return {videoId:undefined, roomURLKey:json.room_url_key, videoTitle:`《SR配信》<br>${json.room_name}`, videoThumbnail:json.image_s, timeBase:standardTime(json.started_at * 1000), icon:listIcon[2], icon2:[], platform:"showRoom"};
}

function rOUC(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.liveStreamingDetails.scheduledStartTime, timeBase:"", status:cJson.status.uploadStatus, icon:icon1, icon2:icon2};
}

function rOA(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.liveStreamingDetails.actualStartTime, time2:cJson.contentDetails.duration, timeBase:cJson.liveStreamingDetails.actualStartTime, icon:icon1, icon2:icon2, platform:"youtube"};
}

function rOAT(cJson){
  return {videoId:undefined, streamId:cJson.stream_id, videoIdT:cJson.id, videoTitle:titleAdjustA(replaceAll(cJson.title), cJson), videoThumbnail:sizeThumbnailURL(cJson.thumbnail_url), time:JST(cJson.published_at), time2:duration(cJson.duration), timeBase:cJson.published_at, icon:channelIconReturn(cJson.user_id), icon2:collaborationReturn(cJson.title, cJson.user_id), platform:"twitch"};
}

function rOP(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.snippet.publishedAt, time2:cJson.contentDetails.duration, timeBase:cJson.snippet.publishedAt, icon:icon1, icon2:icon2, platform:"youtube"};
}

const millionProgressTalent = {Mina:"13900"};
const millionEnduranceVideoId = "oOKeXnYFVgA";
function rOMP(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), timeBase:standardTime(cJson.liveStreamingDetails.actualStartTime), progress:millionProgress(millionProgressTalent.Mina), live:true, icon:icon1, icon2:icon2};
}

function videoIdCheck(list, object, key){
  let boolean = false;
  for(let i=0; i<list.length; i++){
    if(list[i][key] === object[key]){
      boolean = true;
      break;
    }
  }
  return boolean;
}

function videoIdCheckA(list, videoId){
  let boolean = false;
  for(let i=0; i<list.length; i++){
    if(list[i] === videoId){
      boolean = true;
      break;
    }
  }
  return boolean;
}

function sortDate(first, second){
  if(first.timeBase>second.timeBase){
    return 1;
  }else if(first.timeBase<second.timeBase){
    return -1;
  }else{
    return 0;
  }
}

function sortDateReverse(first, second){
  return sortDate(second, first);
}

function set0(num){
  return ("0" + num).slice(-2);
}

function duration(time){
  const hoursArray = time.match(/\d{1,2}(?=[Hh])/);
  const minutesArray = time.match(/\d{1,2}(?=[Mm])/);
  const secondsArray = time.match(/\d{1,2}(?=[Ss])/);

  const hours = hoursArray!==null ? set0(hoursArray[0]) : "00";
  const minutes = minutesArray!==null ? set0(minutesArray[0]) : "00";
  const seconds = secondsArray!==null ? set0(secondsArray[0]) : "00";

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

function returnMonth(month){
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

function dateList(list){
  const dateList = new Array();
  while(list.length>0){
    const [allMatch, dw, month, date] = list[0].time.match(/([A-Z][a-z]{2})\s([A-Z][a-z]{2})\s(\d{2})/);
    const sameDate = new Array();
    let indexNumber = list.findIndex((element)=>{
      return element.time.match(/\d{2}/)[0] !== date;
    });
    if(indexNumber === (-1)){
      indexNumber = list.length;
    }
    for(let i=0; i<indexNumber; i++){
      sameDate.push(list[i]);
    }
    const length = sameDate.length;
    const sameDateNew = new Array();
    while(sameDate.length>0){
      const sameTime = new Array();
      let indexNumber = sameDate.findIndex((element)=>{
        return element.time !== sameDate[0].time;
      });
      if(indexNumber === (-1)){
        indexNumber = sameDate.length;
      }
      for(let i=0; i<indexNumber; i++){
        sameTime.push(sameDate[i]);
      }
      sameDateNew.push(sameTime);
      sameDate.splice(0, sameTime.length);
    }
    sameDateNew.forEach((sameTime)=>{
      sameTime.sort(function(first, second){
        if(first.icon2.length<second.icon2.length){
          return 1;
        }else if(first.icon2.length>second.icon2.length){
          return -1;
        }else{
          return 0;
        }
      });
    });
    dateList.push([`${returnMonth(month)} 月 ${date} 日 (${dW(dw)})`, sameDateNew.flat()]);
    list.splice(0, length);
  }
  return dateList;
}

function returnFromToAdjust(maxTime, videoStartHours, videoStartMinutes){
  if(videoStartHours===maxTime && 54<videoStartMinutes){
    return false;
  }
  return true;
}

function fromToCheck(capturedHours, capturedMinutes, from, to, adjust){
  return (from<=capturedHours && capturedHours<=to && returnFromToAdjust(to, capturedHours, capturedMinutes)) || (capturedHours===adjust && 54<capturedMinutes);
}

function returnFromTo(capturedHours, capturedMinutes){
  if(fromToCheck(capturedHours, capturedMinutes, 0, 5, 23)){
    return {from:0, to:5, adjust:23};
  }else if(fromToCheck(capturedHours, capturedMinutes, 6, 11, 5)){
    return {from:6, to:11, adjust:5};
  }else if(fromToCheck(capturedHours, capturedMinutes, 12, 17, 11)){
    return {from:12, to:17, adjust:11};
  }else if(fromToCheck(capturedHours, capturedMinutes, 18, 23, 17)){
    return {from:18, to:23, adjust:17};
  }
}

function timeFrame(listVideo){
  const listTimeFrame = new Array();
  while(listVideo.length>0){
    const [capturedAll, capturedHours0, capturedMinutes0] = listVideo[0].time.match(/(\d{2}):(\d{2})/);
    const [capturedHours, capturedMinutes] = [Number(capturedHours0), Number(capturedMinutes0)];
    const {from, to, adjust} = returnFromTo(capturedHours, capturedMinutes);
    let indexNumber = listVideo.findIndex((video)=>{
      const [videoStartAll, videoStartHours0, videoStartMinutes0] = video.time.match(/(\d{2}):(\d{2})/);
      const [videoStartHours, videoStartMinutes] = [Number(videoStartHours0), Number(videoStartMinutes0)]
      return !(fromToCheck(videoStartHours, videoStartMinutes, from, to, adjust));
    });
    
    if(indexNumber === (-1)){
      indexNumber = listVideo.length;
    }
    if(from===18){
      const dateCheck = listVideo[0].time.match(/\d{2}/)[0];
      const dateCheckIN = listVideo.findIndex((video)=>{
        return video.time.match(/\d{2}/)[0] !== dateCheck;
      });
      if(dateCheckIN!==(-1) && dateCheck<indexNumber){
        indexNumber = dateCheckIN;
      }
    }
    listTimeFrame.push(listVideo.slice(0, indexNumber));
    listVideo = listVideo.slice(indexNumber, listVideo.length);
  }
  return listTimeFrame;
}

function cPV(list){
  if(list.length>0 && list[0].timeBase>daysUTCAdjust("subtract", 1, "d")){
    return true;
  }
  return false;
}

function JST(time){      
  return dayjs(time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
}

function standardTime(time){
  return dayjs(time).utc().format("YYYY/MM/DD"+" "+"HH:mm:ss");
}

const listIcon = [
                "https://yt3.ggpht.com/vhgGxT2ROGSByTxS-lfULhoNWtC_A7ubuMTdchPHAFYx15Ov2FE0sBf94Oo91lNpPxeqKyAf=s88-c-k-c0x00ffffff-no-rj",  // 0
                "https://yt3.ggpht.com/7q9hOlgVOLGGMGNDnAokhFo7vECpLIyKCOj3xLKwBqPvQuu2-kkLS9E3kkNd-rrfdK0GKepd4w=s88-c-k-c0x00ffffff-no-rj",  // 1
                "https://yt3.ggpht.com/Rln7rmZcpjY0mIPPfF0BXCA4SLtEPo04b1QJuldTkrOMx03pwEv54f97SXd3cazOqGuylwQN=s88-c-k-c0x00ffffff-no-rj",  // 2
                "https://yt3.ggpht.com/TzUlifrsuAA0gTLWJ6plT3976Ufa2Zz0oekFcs-bQQazV9FBoNnzO8kgXs8TXOCvywdLUQ3kWg=s88-c-k-c0x00ffffff-no-rj",  // 3
                "https://yt3.ggpht.com/BBywT_hHFYqk_AvQ7xbd-l1in8838u3kVUqZmZFBuWsN2E2EJ4iS6BCBtFZ89wtJAnmmUZw_qBY=s88-c-k-c0x00ffffff-no-rj",  // 4
                "https://yt3.ggpht.com/8zlUH6WXzKYQfAC-yDr8-Ok8oPYueyOsIL980DUniGMbaN5LgoRN3bwEFmel30BjQkGPf4_EoA=s88-c-k-c0x00ffffff-no-rj",  // 5
                "https://yt3.ggpht.com/rDPUButr-meqQs4Xg19o4HNJzh-87OeCBAabQtxQeKJhAOcscfHTJQOetW5iCzYJdZjwnJY8=s88-c-k-c0x00ffffff-no-rj",  // 6
                "https://yt3.ggpht.com/LEaZ41BdwqwGJlFvh0WbnCGC92TFZAZA8LjHH57dwbCcI0F4lMbpKbe0BiS-zdH3ojL6rvVf=s88-c-k-c0x00ffffff-no-rj",  // 7
                "https://yt3.ggpht.com/Ci7w0_WSSRoufmr6XjDuL1gPhurSxf5gNsH12Un47QThvZOSfpYPFKCONSYfoIigjOOG13oJCQ=s88-c-k-c0x00ffffff-no-rj", //dtto.
                "https://yt3.ggpht.com/6KMuVacpS3PI5EActjjbZdF6Hf7inmXWZPy-6RzihoCgjTP3Od9pJFKXMRXgLj0dT5MGFF2S=s88-c-k-c0x00ffffff-no-rj",  // 9
                "https://yt3.ggpht.com/9gzgLqsMb2ae5pX1wSECz2PE-CJkfqyQIBgl1juUx-7PZ-ANcBskninPxtbyMmx2mBdZXFC02w=s88-c-k-c0x00ffffff-no-rj",  // 10
                "https://yt3.ggpht.com/hMt_AOTFLBsLqkB4NdCUyyf41vW0PvIehlXpGY3ylR7yOSREBGDPcgpDtx5cgxzrb2K5gq_hUTk=s88-c-k-c0x00ffffff-no-rj", //UzuMe
                "https://yt3.ggpht.com/eqK_S6SXxSh--EU_EPMLytHKEvh9J9Hw5oLGbG-CCTAMAgkWRUn2ndT9mdyeehcBcqQeTZZs=s88-c-k-c0x00ffffff-no-rj",  // 12
                "https://yt3.ggpht.com/5NhP3kywPqOLzW587NNkK52wI3gE0FoeUQSxAsjVF6XJaFZ-0_bUDsTqxTUtNCW_ZrThwBtL3K0=s88-c-k-c0x00ffffff-no-rj",  // 13
                "https://yt3.ggpht.com/N1qK9ca7VuCEMeep1XTgpKMKfTVcWUGLwzH8KuDbUjf6OmsW7xj2SpphHDfbP_Kx2mmBHGEwxg=s88-c-k-c0x00ffffff-no-rj",  // 14
                "https://yt3.ggpht.com/DH0xmYuaBYmlketm5X347i842HdiGhRfXpS1CoYxq746DiI6trD0_BSy0VCPeztDNa5WvA4nu4Q=s88-c-k-c0x00ffffff-no-rj",  // 15
                "https://yt3.ggpht.com/1oE4luB-7eOFSQ2Rdn6fVt3FCzmRJyuOMbGVFoddRm9jl6GjJU7InpjxKzV65JUTGjvYIbKBQQ=s88-c-k-c0x00ffffff-no-rj",  // 16
                "https://yt3.ggpht.com/npsCS9U31MozM97qRX_jt2s7bEogLudOjuMUtAoGAPF6T6ykQcC_JqwmeAagMnUwU6ZSYjP8yA=s88-c-k-c0x00ffffff-no-rj",  // 17
                "https://yt3.ggpht.com/XcZWuahAYyqFeXXM_VuJvf2ElEzFYz3gwCq1aoUSGwlQ4rJlrO1WI2vavl0rc3VNkI4GLat20u0=s88-c-k-c0x00ffffff-no-rj",  // 18
                "https://yt3.ggpht.com/ITG3xSmoZdnJK1oL7g9examb8HJERnL4Fh__g0oFVAYdfo-zCslkv1cynHRlElYQSuaikPqFKQ=s88-c-k-c0x00ffffff-no-rj",  // 19
                "https://yt3.ggpht.com/an4gKWBF0a4Ej8-t_zLGWSl2RRh7yxp_VzaYnBEiVpMXXXADX0f4I7myww_T6iI0jxmRYKMJQH8=s88-c-k-c0x00ffffff-no-rj",  //20
                "https://yt3.ggpht.com/TaO37-7yms0nX1RngZdq2MzE6yDvF1PrHZg73SZVF8fY9knycYQEIcDnmz9kSj3WJwuxDILG=s88-c-k-c0x00ffffff-no-rj",  //21
                "https://yt3.ggpht.com/84FGz7WPqMUcEVP9vpxThoFT1KZW8ZhHxUlpXa723uACP-zsBEB7vYOZSWw6so8wo_3gdjJV-g=s88-c-k-c0x00ffffff-no-rj",  //22
               ];
const listIconV = [ 
                    "https://yt3.ggpht.com/6ayZYf-Kmu0aHBh_YZW2uWrYoKRUczpejSYt5Z-sCLfouDaB1QuK21UCCwX4NAsCl-uNSvzL5Q=s88-c-k-c0x00ffffff-no-rj", // 0
                    "https://yt3.ggpht.com/XNONLe0k_EPGtP51xAOJoxG836MaIf3l8i81vyLVzxXpPTFhCcz5YPpOukHWOZvaGtX0bEmmnA=s88-c-k-c0x00ffffff-no-rj", // 1
                    "https://yt3.ggpht.com/LP_ZcxLFk5jP1Kpw7VU44YpUohl4DxYZTB644Ch3E_9Uow98RJwfAVoedDDgOZL624syN5D2-Q=s88-c-k-c0x00ffffff-no-rj", // 2
                    "https://yt3.ggpht.com/QosaSc_PBOCF20CH5I0QPVZIFiSS8IGmVEyHrP-WUKS1YcmQXGgqosJQg2Q2LO-7r0xUeiTc-A=s88-c-k-c0x00ffffff-no-rj", // 3
                    "https://yt3.ggpht.com/Tyqa0ohmBAkSoTvt4JZU8-QJVYCFvy15hZ1kS13gJ7ISRzfhyDLKMpsazfrqlYW883fX5Pmkqx0=s88-c-k-c0x00ffffff-no-nd-rj", // 4
                    "https://yt3.ggpht.com/qOXB_PweIVd_HqugqgNrCxRSjoV3wHpKtYHUjnVkUtxP3qAbcT0msj178SetksB8bB94TNId=s88-c-k-c0x00ffffff-no-nd-rj", // 5
                  ];

function collaborationCheck(classVEE, text, title, channelId, twitterId=""){
  if(channelId === classVEE.getCI()){
    return false;
  }
  return new RegExp(`${classVEE.getCN()}|${classVEE.getHN()}`, "i").test(text) || (new RegExp(classVEE.getTN()).test(text) && new RegExp(`/channel/${classVEE.getCI()}${classVEE.getCustomName()}${twitterId}`, "i").test(text)) || new RegExp(`${classVEE.getTN()}|${classVEE.getHN()}`, "i").test(title);
}

function collaborationCheckT(classVEE, title, userId){
  if(userId === classVEE.getTUI()){
    return false;
  }
  if(classVEE.getTLN()!==""){
    return new RegExp(`${classVEE.getTN()}|@${classVEE.getTLN()}`, "i").test(title);
  }else{
    return new RegExp(classVEE.getTN()).test(title);
  }
}

function collaboration(cJson){
  let icon1 = "";
  const icon2 = new Array();
  switch(cJson.snippet.channelId){
    case Official.getCI():
      icon1 = listIcon[0];
      break;
    case Ruki.getCI():
      icon1 = listIcon[1];
      break;
    case Ringo.getCI():
      icon1 = listIcon[2];
      break;
    case Kohaku.getCI():
      icon1 = listIcon[3];
      break;
    case Tulsi.getCI():
      icon1 = listIcon[4];
      break;
    case Airu.getCI():
      icon1 = listIcon[5];
      break;
    case Mina.getCI():
      icon1 = listIcon[6];
      break;
    case Ito.getCI():
      icon1 = listIcon[7];
      break;
    case Chihiyo.getCI():
      icon1 = listIcon[9];
      break;
    case Mew.getCI():
      icon1 = listIcon[10];
      break;
    case Yozuri.getCI():
      icon1 = listIcon[12];
      break;
    case Uparu.getCI():
      icon1 = listIcon[13];
      break;
    case Uriyone.getCI():
      icon1 = listIcon[14];
      break;
    case Cotonoha.getCI():
      icon1 = listIcon[15];
      break;
    case Luminous.getCI():
      icon1 = listIcon[16];
      break;
    case Amae.getCI():
      icon1 = listIcon[17];
      break;
    case Kakapo.getCI():
      icon1 = listIcon[18];
      break;
    case Yun.getCI():
      icon1 = listIcon[19];
      break;
    case Yae.getCI():
      icon1 = listIcon[20];
      break;
    case Lui.getCI():
      icon1 = listIcon[21];
      break;
    case Lira.getCI():
      icon1 = listIcon[22];
      break;
    default:
      icon1 = shakeHands;
      break;
  }
  const text = cJson.snippet.description;
  const title = cJson.snippet.title;
  const channelId = cJson.snippet.channelId;
  if(collaborationCheck(Ruki, text, title, channelId)){
    icon2.push(listIcon[1]);
  }
  const rTI = Ringo.getTwitterId();
  if(collaborationCheck(Ringo, text, title, channelId, `|${rTI}`)){
    icon2.push(listIcon[2]);
  }
  if(collaborationCheck(Kohaku, text, title, channelId)){
    icon2.push(listIcon[3]);
  }
  if(collaborationCheck(Tulsi, text, title, channelId)){
    icon2.push(listIcon[4]);
  }
  if(collaborationCheck(Airu, text, title, channelId)){
    icon2.push(listIcon[5]);
  }
  if(collaborationCheck(Mina, text, title, channelId)){
    icon2.push(listIcon[6]);
  }
  if(collaborationCheck(Ito, text, title, channelId)){
    icon2.push(listIcon[7]);
  }
  if(collaborationCheck(Chihiyo, text, title, channelId)){
    icon2.push(listIcon[9]);
  }
  if(collaborationCheck(Mew, text, title, channelId)){
    icon2.push(listIcon[10]);
  }
  if(collaborationCheck(Yozuri, text, title, channelId)){
    icon2.push(listIcon[12]);
  }
  if(collaborationCheck(Uparu, text, title, channelId)){
    icon2.push(listIcon[13]);
  }
  if(collaborationCheck(Uriyone, text, title, channelId)){
    icon2.push(listIcon[14]);
  }
  if(collaborationCheck(Cotonoha, text, title, channelId)){
    icon2.push(listIcon[15]);
  }
  if(collaborationCheck(Luminous, text, title, channelId)){
    icon2.push(listIcon[16]);
  }
  if(collaborationCheck(Amae, text, title, channelId)){
    icon2.push(listIcon[17]);
  }
  if(collaborationCheck(Kakapo, text, title, channelId)){
    icon2.push(listIcon[18]);
  }
  if(collaborationCheck(Yun, text, title, channelId)){
    icon2.push(listIcon[19]);
  }
  if(collaborationCheck(Yae, text, title, channelId)){
    icon2.push(listIcon[20]);
  }
  if(collaborationCheck(Lui, text, title, channelId)){
    icon2.push(listIcon[21]);
  }
  if(collaborationCheck(Lira, text, title, channelId)){
    icon2.push(listIcon[22]);
  }
  if(/華灯/.test(text) && /hanavee_pr/.test(text)){
    icon2.push("/images/Hanavee.jpg");
  }
  if(collaborationCheck(Dtto, text, title, channelId)){
    icon2.push(listIcon[8]);
  }

  if(cJson.id === "Z6ZzCxjGUCg" && icon2.length === 0){
    icon2.push(listIcon[2]);
  }

  return {icon1:icon1, icon2:icon2};
}

function collaborationReturn(title, userId){
  const listC = new Array();
  if(collaborationCheckT(Ruki, title, userId)){
    listC.push(listIcon[1]);
  }
  if(collaborationCheckT(Ringo, title, userId)){
    listC.push(listIcon[2]);
  }
  if(collaborationCheckT(Kohaku, title, userId)){
    listC.push(listIcon[3]);
  }
  if(collaborationCheckT(Tulsi, title, userId)){
    listC.push(listIcon[4]);
  }
  if(collaborationCheckT(Airu, title, userId)){
    listC.push(listIcon[5]);
  }
  if(collaborationCheckT(Mina, title, userId)){
    listC.push(listIcon[6]);
  }
  if(collaborationCheckT(Ito, title, userId)){
    listC.push(listIcon[7]);
  }
  if(collaborationCheckT(Chihiyo, title, userId)){
    listC.push(listIcon[9]);
  }
  if(collaborationCheckT(Mew, title, userId)){
    listC.push(listIcon[10]);
  }
  if(collaborationCheckT(Yozuri, title, userId)){
    listC.push(listIcon[12]);
  }
  if(collaborationCheckT(Uparu, title, userId)){
    listC.push(listIcon[13]);
  }
  if(collaborationCheckT(Uriyone, title, userId)){
    listC.push(listIcon[14]);
  }
  if(collaborationCheckT(Cotonoha, title, userId)){
    listC.push(listIcon[15]);
  }
  if(collaborationCheckT(Luminous, title, userId)){
    listC.push(listIcon[16]);
  }
  if(collaborationCheckT(Amae, title, userId)){
    listC.push(listIcon[17]);
  }
  if(collaborationCheckT(Kakapo, title, userId)){
    listC.push(listIcon[18]);
  }
  if(collaborationCheckT(Yun, title, userId)){
    listC.push(listIcon[19]);
  }
  if(collaborationCheckT(Yae, title, userId)){
    listC.push(listIcon[20]);
  }
  if(collaborationCheckT(Lui, title, userId)){
    listC.push(listIcon[21]);
  }
  if(collaborationCheckT(Lira, title, userId)){
    listC.push(listIcon[22]);
  }
  if(/華灯/.test(title)){
    listC.push("/images/Hanavee.jpg");
  }
  if(collaborationCheckT(Dtto, title, userId)){
    listC.push(listIcon[8]);
  }

  return listC;
}

class VEE{
  constructor(number, talentName, channelName, channelId, twitterId, listURL, listNG, twitchUserId='', twitchLoginName=""){
    this.number = number;
    this.talentName = talentName;
    this.channelName = channelName;
    this.channelId = channelId;
    this.twitterId = twitterId;
    this.listURL = listURL;
    this.listNG = listNG;
    this.twitchUserId = twitchUserId;
    this.twitchLoginName = twitchLoginName;
  }
  
  async api2(key2){
    try{
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.channelId}&key=${key2}`);
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      listIcon.splice(this.number, 1, json.items[0].snippet.thumbnails.default.url);
    }catch(error){
      console.error(`api2エラー: ${this.channelName}`, error);
    }
  }

  async api3(key2){
    try{
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this.channelId}&key=${key2}`);
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      millionProgressTalent.Mina = json.items[0].statistics.subscriberCount;
    }catch(error){
      console.error(`api3エラー: ${this.channelName}`, error);
    }
  }

  getTN(){
    return this.talentName;
  }

  getCN0(){
    return this.channelName;
  }

  getCN(){
    return this.channelName.slice(1, this.channelName.length-1);
  }

  getCI(){
    return this.channelId;
  }

  getHN(){
    return `@${this.listURL[0].slice(1, this.listURL[0].length-1)}`;
  }

  getCustomName(){
    if(this.listURL[1] === undefined){
      return "";
    }else{
      return `|${this.listURL[1].slice(1, this.listURL[1].length-1)}`;
    }
  }

  getTUI(){
    return this.twitchUserId;
  }

  getTLN(){
    return this.twitchLoginName;
  }
}

function api0Return(daysAgo = 8){
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&type=video&maxResults=10&publishedAfter=${daysUTCAdjust("subtract", daysAgo, "d")}Z&key=${key}`;
}

function api1Return(daysAgo = 8){
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.channelName} OR "${this.channelId}" OR ${URLW(this.listURL)} ${NGW(this.listNG)}&type=video&maxResults=50&publishedAfter=${daysUTCAdjust("subtract", daysAgo, "d")}Z&key=${key}`;
}

function api1ReturnRingo(daysAgo){
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.channelName} OR "${this.channelId}" OR ${URLW(this.listURL)} OR "${this.twitterId}" ${NGW(this.listNG)}&type=video&maxResults=50&publishedAfter=${daysUTCAdjust("subtract", daysAgo, "d")}Z&key=${key}`;
}

const liveAdjustList = [];
async function liveAdjust(){
  try{
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${URLW(listChannelName)}&eventType=live&type=video&maxResults=50&key=${key}`);
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();
    liveAdjustList.splice(0, liveAdjustList.length);
    json.items.forEach((element)=>{                                      
      liveAdjustList.push(element.id.videoId);
    });
  }catch(error){
    console.error("liveAdjustListエラー:", error);
  }
}

const upcomingAdjustList = [];
async function upcomingAdjust(){
  try{
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${URLW(listChannelName)}&eventType=upcoming&type=video&maxResults=50&key=${key}`);
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();
    upcomingAdjustList.splice(0, upcomingAdjustList.length);
    json.items.forEach((element)=>{                                      
      upcomingAdjustList.push(element.id.videoId);
    });
  }catch(error){
    console.error("upcomingAdjustListエラー:", error);
  }
}

class VEER extends VEE{
  getTwitterId(){
    return this.twitterId;
  }
}

class VERSEN extends VEE{
  async api2(key2){
    try{
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.channelId}&key=${key2}`);
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      listIconV.splice(this.number, 1, json.items[0].snippet.thumbnails.default.url);
    }catch(error){
      console.error(`api2エラー: ${this.channelName}`, error);
    }
  }
}

//Dev-a
const Ruki = new VEE(1, "音門\\s*るき", '"Ruki Otokado 音門るき [VEE]"', "UCAUicVZlApAIhcdL9df3gWw", "Ruki_vita_666", ['"Otokado_Ruki"', '"/c/OtokadoDeviRuki"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"', '"달땡(Moon 00)"'], '806658817', "ruki_otokado_666");
const Ringo = new VEER(2, "九条\\s*林檎", '"九条 林檎【Kujo Ringo Official】"', "UCf57-IJn5mUJDyqd9uNEmrg", "ringo_0_0_5", ['"KujoRingo"', '"/c/KujoRingo"'], ['"VEE切り抜きおきば"']);
const Kohaku = new VEE(3, "秋雪\\s*こはく", '"Syusetu kohaku/秋雪こはく"', "UCQLyq7TDKHlmp2Ufd5Z2qMw", "Syusetu_kohaku", ['"Syusetu_kohaku"', '"/c/Syusetukohaku秋雪こはく"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"'], '582501849', "syusetu_kohaku");
const Tulsi = new VEE(4, "魔王\\s*トゥルシー", '"魔王トゥルシー / Tulsi-Nightmare Madness IV"', "UCUdlDvZJGGP78zvta3swIhw", "IDmadeMiruna", ['"Tulsi_Nightmare"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"']);
const Airu = new VEE(5, "雛星\\s*あいる", '"雛星あいる Hinahoshi Airu"', "UCJGQPbaqTY91JhVzD8gIZyw", "airu_Lv115", ['"Hinahoshi_Airu"'], [], '838127333', "hinahoshi_airu");
function devA2(){
  Ruki.api2(key2);
  Ringo.api2(key2);
  Kohaku.api2(key2);
  Tulsi.api2(key2);
  Airu.api2(key2);
}

//Dev-b
const Mina = new VEE(6, "桜鳥\\s*ミーナ", '"桜鳥ミーナ / Audrey Mina"', "UCFkHpBGMeNSQW-j9-F0nxnQ", "mina0x0audrey", ['"MinaAudrey"'], ['"달땡(Moon 00)"'], '891899629', "minaaudrey_vee");
const Ito = new VEE(7, "白粉\\s*いと", '"おしろいと"', "UCzv_W7v9ix39tFPDB-TV0Vg", "oshiroito", ['"oshiroito"', '"/c/OshiroIto"'], ['"woni_clip"', '"시번 sibun"', '"노아ノア"', '"鈴木店長の美容チャンネル"']);
const Chihiyo = new VEE(9, "日和\\s*ちひよ", '"日和ちひよ / Hiyori Chihiyo"', "UCnBOUGfsfcD6nUbpdDAwMfw", "hiyohiyovee", ['"HiyoriChihiyo"'], ['"달땡(Moon 00)"']);
const Mew = new VEE(10, "ミュウ・ガルシア", '"Mew Garcia / ミュウ・ガルシア"', "UC7FUtGR0AsvwzXrEmdUBAFw", "MewGarcia_king", ['"MewGarcia"'], []);
const Official = new VEE(0, "VEE\\s*official\\s*channel", '"VEE official channel"', "UCXWiGKfAXjHUsxa_GNLgv-A", "_vee_official_", ['"VEE_official"', '"/c/VEE_official_ch"', '"ぷみぷみVEE"'], []);
const Dtto = new VEE(8, "dtto(\\.)?", '"dtto."', "UCWNVjAzZmYUni8YBXYiy01w", "_dtto", ['"dttodot"'], [], '715990491', "dttodot");
const Uzume = new VEE(11, "UzuMe", '"UzuMe"', "UCAsgKcP47dPWFBhiio_M7yg", "UzuMe_Vtuber", ['"UzuMe"', '"/c/UzuMe"'], []);
function devB2(){
  Mina.api2(key2);
  Ito.api2(key2);
  Chihiyo.api2(key2);
  Mew.api2(key2);
  Dtto.api2(key2);
  //Uzume.api2(key2);
}

//Dev-c
const Yozuri = new VEE(12, "蒼宮\\s*よづり", '"Aomiya Yozuri Ch. 蒼宮よづり"', "UCWhFUlcawiD78qAD7zzS6Bw", "aomiyayozuri", ['"AomiyaYozuri"'], ['"成田という男(切り抜き製作所)"'], '886124634', "aomiyayozuri_ch");
const Uparu = new VEE(13, "亞生\\s*うぱる", '"亞生うぱる【VEE】"', "UCQfp96ujs7PXiUG6ov29RKg", "UPARU_JP", ['"AnewUparu"'], []);
const Uriyone = new VEE(14, "糶", '"糶 / URIYONE"', "UCJpsYQtNyVDc023clkqMhTQ", "URIYONEE", ['"URIYONE"'], []);
const Cotonoha = new VEE(15, "言のハ", '"言のハ-Cotonoha-"', "UCOd-qYH_8e-tgxpPIcqwenA", "TwiCoto", ['"Cotonoha"'], ['"太田圭亮"', '"cotonoha sketch"'], '895225764', "ctnh_jp");
const Luminous = new VEE(16, "るみなす・すいーと", '"るみなす・すいーと【LUMINOUS Ch】"', "UC02dJeNmcQLqENdHFG1svJw", "luminous_amaama", ['"Luminous_Sweet"'], []);
function devC2(){
  Yozuri.api2(key2);
  Uparu.api2(key2);
  Uriyone.api2(key2);
  Cotonoha.api2(key2);
  Luminous.api2(key2);
}

//Dev-d
const Amae = new VEE(17, "偉雷\\s*アマエ", '"偉雷アマエ / Erai Amae"', "UC6b4Ta_J0wbylnPu1auaQiA", "EraiAmae", ['"EraiAmae"'], ['"元動画はこちら"']);
const Kakapo = new VEE(18, "北白川\\s*かかぽ", '"北白川かかぽ / Kakapo Kitashirakawa"', "UCEoAD_2jSLoYQd2MJZxWuxQ", "kakapo_research", ['"kakapo_research"', '"/c/kakaporesearch"'], []);
const Yun = new VEE(19, "ゆりかわ\\s*ゆん", '"ゆりかわゆん YURIKAWA YUN"', "UCngFYCS8p8PX9wf4V8kLVgw", "yun_yurikawa", ['"yurikawayun"'], [], '879316180', "yun_yurikawa");
function devD2(){
  Amae.api2(key2);
  Kakapo.api2(key2);
  Yun.api2(key2);
}

//Dev-e
const Yae = new VEE(20, "雨庭\\s*やえ", '"雨庭やえ / AMENIWA YAE"', "UCMPKmFrLWgZyCGOw0QAEiIQ", "AMENIWA_YAE", ['"AMENIWA_YAE"'], [], '901350011', "ameniwa_yae");
const Lui = new VEE(21, "月白\\s*累", '"月白 累 / Geppaku Lui"', "UCpFAeyYSv4-7R1rC91c6DuA", "Geppaku_Lui", ['"Geppaku_Lui"'], []);
const Lira = new VEE(22, "黒燿\\s*リラ", '"黒燿リラ / KOKUYOU LIRA"', "UC_mc5xvNyQ-2W0UHgTA1mMg", "KOKUYOU_LIRA", ['"KOKUYOU_LIRA"'], []);
function devE2(){
  Yae.api2(key2);
  Lui.api2(key2);
  Lira.api2(key2);
}

const listApi = [
  api0Return.bind(Official, 11),

  api1Return.bind(Ruki),
  api1ReturnRingo.bind(Ringo, 15),
  api1Return.bind(Kohaku, 6),
  api1Return.bind(Tulsi),
  api1Return.bind(Airu),

  api1Return.bind(Mina, 11),
  api1Return.bind(Ito),
  api1Return.bind(Chihiyo),
  api1Return.bind(Mew),

  api1Return.bind(Yozuri, 16),
  api1Return.bind(Uparu),
  api1Return.bind(Uriyone, 11),
  api1Return.bind(Cotonoha),
  api1Return.bind(Luminous, 11),

  api1Return.bind(Amae, 6),
  api1Return.bind(Kakapo, 11),
  api1Return.bind(Yun),

  api1Return.bind(Yae),
  api1Return.bind(Lui),
  api1Return.bind(Lira),
];

const listChannelName = [
  //Ruki.getCN0(),
  //Ringo.getCN0(),
  Kohaku.getCN0(),
  //Tulsi.getCN0(),
  //Airu.getCN0(),

  //Mina.getCN0(),
  //Ito.getCN0(),
  //Chihiyo.getCN0(),
  //Mew.getCN0(),

  //Yozuri.getCN0(),
  //Uparu.getCN0(),
  //Uriyone.getCN0(),
  //Cotonoha.getCN0(),
  //Luminous.getCN0(),

  Amae.getCN0(),
  //Kakapo.getCN0(),
  //Yun.getCN0(),

  //Yae.getCN0(),
  //Lui.getCN0(),
  //Lira.getCN0(),
];

const listTwitch = [
  Dtto.getTUI(),

  Ruki.getTUI(),
  Kohaku.getTUI(),
  Airu.getTUI(),
  Mina.getTUI(),
  Yozuri.getTUI(),
  Cotonoha.getTUI(),
  Yun.getTUI(),
  Yae.getTUI(),
];

const listTwitchLoginName = [
  Dtto.getTLN(),

  Ruki.getTLN(),
  Kohaku.getTLN(),
  Airu.getTLN(),
  Mina.getTLN(),
  Yozuri.getTLN(),
  Cotonoha.getTLN(),
  Yun.getTLN(),
  Yae.getTLN(),
];

const channelIds = [Dtto.getCI(), Official.getCI(), Ruki.getCI(), Ringo.getCI(), Kohaku.getCI(), Tulsi.getCI(), Airu.getCI(), Mina.getCI(), Ito.getCI(), Chihiyo.getCI(), Mew.getCI(), Yozuri.getCI(), Uparu.getCI(), Uriyone.getCI(), Cotonoha.getCI(), Luminous.getCI(), Amae.getCI(), Kakapo.getCI(), Yun.getCI(), Yae.getCI(), Lui.getCI(), Lira.getCI()];
const channelIdCheck = new RegExp(reTUI(channelIds));
const loginNameCheck = new RegExp(reTUI(listTwitchLoginName));
const twitchUserIdCheck = new RegExp(reTUI(listTwitch));

const postedVideosCheckSongs = "歌ってみた|cover(ed)?|歌ってみました。|オリジナルソング|original\\s*song|^202\\d{5}$";
const postedVideosCheckEtc = "料理対決|完全動画版|現地観戦";

const ObjectData = [[], [], [], [false, []], {videoId:millionEnduranceVideoId, live:false}, listIcon];
const printTLN =[], listTLNC=[], printTA=[], printTP=[], printSRLN=[];
function process2(printLN, printUC, printA, printP, ObjectData){
  
  const printUC2 = printUC.filter((element)=>{        
    return element.time < daysUTCAdjust("add", 6, "M");         
  });
  
  const printOldUC = new Array();

  ObjectData[1].forEach((element)=>{
    printOldUC.push(element[1]);
  });

  const printOldUCF = printOldUC.flat();

  const listOldData = printOldUCF.concat();

  for(let i=0; i<printUC2.length; i++){    
    const pUC2 = printUC2[i];
    if(videoIdCheck(listOldData, pUC2, "videoId")){
        continue;
    }
    pUC2.timeBase = standardTime(pUC2.time);
    pUC2.time = JST(pUC2.time);
    printOldUCF.push(pUC2);
  }

  printOldUCF.sort(sortDate);
  
  const printNewUC = dateList(printOldUCF);


  const printNewLN = ObjectData[0].concat();

  printNewLN.forEach((element)=>{
    listOldData.push(element);
  });
  for(let i=0; i<printLN.length; i++){    
    const pLN = printLN[i];
    if(videoIdCheck(listOldData, pLN, "videoId")){
        continue;
    }
    printNewLN.push(pLN);
  }
  printNewLN.sort(sortDate);


  const printA2 = ObjectData[2].concat();

  printA2.forEach((element)=>{
    listOldData.push(element);
  });
  for(let i=0; i<printA.length; i++){
    const pA = printA[i];
    if(videoIdCheck(listOldData, pA, "videoId")){
        continue;
    }
    pA.time = JST(pA.time);
    pA.time2 = duration(pA.time2);
    printA2.push(pA);
  }

  const printA3 = printA2.filter((element)=>{        
    return element.timeBase > daysUTCAdjust("subtract", 1, "d");         
  });
  console.log(printTLN);
  printA3.sort(sortDate);
  const printNewA = timeFrame(printA3);


  const printP2 = ObjectData[3][1].concat();

  for(let i=0; i<printP.length; i++){    
    const pP = printP[i];
    if(videoIdCheck(printP2, pP, "videoId")){
        continue;
    }
    pP.time = JST(pP.time);
    pP.time2 = duration(pP.time2);
    printP2.push(pP);
  }

  const printP3 = printP2.filter((element)=>{        
    return element.timeBase > daysUTCAdjust("subtract", 3, "d");         
  });

  printP3.sort(sortDateReverse);
  const printNewP = [cPV(printP3), printP3];


  ObjectData.splice(0, 4, printNewLN, printNewUC, printNewA, printNewP);
}

async function apis(){
  // _6WOX7G7pKE 糶マシュマロ
  // ygS0o0lXjSQ ミュウ・ガルシア同時視聴
  //DIvEr7QsVfA,y5-xY1Q8iPI,JVTxo4jdrjU よづりC+Rust
  //6d5k3e1-g_M ミーナ朝活
  //DBL1-5Pjuaw よづりOnliUp!ショトカ練習
  //2Yf_CqnvaP8 ミュウ・ガルシアのモラード放送局
  //kGxpBjOXW5g るみなす雑談
  //030fdEmGgWc よづりスマブラ参加型
  //WlS8WFdWC5Y リラあつ森
  //W9xZaqGNavs よづりAPEX
  const listAll = ["iDJw_aXZaoc", "_6WOX7G7pKE", "ygS0o0lXjSQ", "DIvEr7QsVfA", "6d5k3e1-g_M", "y5-xY1Q8iPI", "JVTxo4jdrjU", "DBL1-5Pjuaw", "2Yf_CqnvaP8", "kGxpBjOXW5g", "030fdEmGgWc", "WlS8WFdWC5Y", "W9xZaqGNavs"];
  await Promise.all(listApi.map(async (URL, index)=>{
    try{
      const response = await fetch(URL());
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      json.items.forEach((element)=>{                                      
        listAll.push(element.id.videoId);
      });
    }catch(error){
      console.error(`apiエラー[${index}]:`, error);
    }    
  }));

  const printLN=[], printUC=[], printA=[], printP=[];
  await Promise.all(divisor(listAll).map(async (array)=>{
    try{
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,status,contentDetails&id=${array}&maxResults=50&key=${key2}`);
      if(!response.ok){
        throw new Error(response.statusText);
      }
      console.log(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,status,contentDetails&id=${array}&maxResults=50&key=${key2}`);
      const json = await response.json();
      for(let i=0; i<json.items.length; i++){
        const cJson = json.items[i];
        const {icon1, icon2} = collaboration(cJson);
        if(icon1===shakeHands && icon2.length===0){
          continue;
        }

        // const checkKohaCup = /(UC2hx0xVkMoHGWijwr_lA01w|UCyxtGMdWlURZ30WSnEjDOQw|UCO9rPI15LSo7U40UX4ukUAA|UCrBx2Gy-0PBUWTP_4uGNkZA|UCQz5mRHdiwt7NrS9tc4D1Dg|UCLr0X7ktuRImhXJrkASkSQw|UCjs-5fTyhaRVQVfdEmVyyqw|UC0vzxUUsMHyGnhD9G8k14yg|UCV1xUwfM2v2oBtT3JNvic3w|UCC7rRD6P7RQcx0hKv9RQP4w|UCHjeZylSgXDSnor8wUnwU_g|UCVQROe7sDdROh4x0BpYHP1w|UCdlxcNp-rmCrIfZwORXr0Og|UCFahBR2wixu0xOex84bXFvg|UC01gb86Qdlkh23Nqk3A1OLQ|UCYqTYMZa5rx4S8o1Xlm21YQ|UCAr4bfXugIgm0HicVyvxacg|UCc6hwdN1yu2QT9o4yIHUPnQ|UCnvBsJQ0TztZ4Mq7qDaL_FA|UCpzxZW5kghGnO5TmAFJQAVw|UCwaS8_S7kMiKA3izlTWHbQg|UCKu59gTZ_rdEmerdx5rV4Yg|UCUpysYEAnksyyr1ykN8JBCw|UCP6J6k7n8SgxslDpYVrqwEA|UCdpFSbJeT9_tR5kR75r6DmQ|UCGAtHjeWWgyWboVQ33ZQX6Q|UCWU7kvLd_JBaBqO_ilTYd_A|UCwtyxO7B0xIv3XdtSvdnYgQ|UCyBSz2-Pnec2_HvG09NScIQ|UC1r_ILeKhs2XHyFQ3_oSicA|UCEEar_TJCxAWpQkSlozVBMg|UCH-wVHHDDrpt5W59UUPJvXA|UCjeoRcWBJKGSEoBJ6XH2QPQ|UCytdhnkcqUA1njZqd1U1PUg|UCe33NIg6hC9vNq2NluwFh9g|UCLChoN0emEvVFNU6_kP-YrQ|UCKR_dxrRj5tmyzEPUieFVfA)/;
        // if(checkKohaCup.test(cJson.snippet.channelId)){
          // continue;
        // }

        // UCXPSFGZZrJ0tQEeP7R2jRqQ は verse_n_projectのチャンネルID
        // UCOg01LJmZF9UnwFbly73CVw は マル・ナナモナのチャンネルID
        // UCYcnLc0n1ryBDZeGWQTVJ_g は カシ・オトハ のチャンネルID
        // UCmKfT7daL3aOt9o-PBJzOug は ダンジョンズ&ドラゴンズのチャンネルID
        // UCg_xsJxJNVmAdMwXIvPNmTA は 甜瓜あんのチャンネルID
        const checkID = new RegExp(`UCXPSFGZZrJ0tQEeP7R2jRqQ|UCOg01LJmZF9UnwFbly73CVw|UCYcnLc0n1ryBDZeGWQTVJ_g|UCmKfT7daL3aOt9o-PBJzOug|UCg_xsJxJNVmAdMwXIvPNmTA|${reTUI(channelIds)}`);
        if((cJson.snippet.liveBroadcastContent==="live" || cJson.snippet.liveBroadcastContent==="upcoming") && cJson.liveStreamingDetails.actualStartTime!==undefined && cJson.liveStreamingDetails.actualEndTime===undefined){
          if(cJson.status.uploadStatus==="processed" && !checkID.test(cJson.snippet.channelId)){
            continue;
          }
          if(cJson.id === millionEnduranceVideoId){
            continue;
          }
          printLN.push(rOLN(cJson, icon1, icon2));
        }else if(cJson.snippet.liveBroadcastContent==="upcoming"){
          if(cJson.status.uploadStatus==="processed" && !checkID.test(cJson.snippet.channelId)){
            continue;
          }
          printUC.push(rOUC(cJson, icon1, icon2));
        }else if(cJson.snippet.liveBroadcastContent==="none" || cJson.snippet.liveBroadcastContent==="live"){
          if(cJson.liveStreamingDetails===undefined){
            if(checkID.test(cJson.snippet.channelId)){
              printP.push(rOP(cJson, icon1, icon2));
            }
            continue;              
          }
          const checkH = /\d{1,2}(?=H)/;
          const checkM = /\d{1,2}(?=M)/;
          if((cJson.contentDetails.duration.match(checkH)===null && (cJson.contentDetails.duration.match(checkM)===null || Number(cJson.contentDetails.duration.match(checkM)[0]) < 30)) && !checkID.test(cJson.snippet.channelId)){
            continue;
          }
          if(cJson.contentDetails.duration.match(checkH)===null && 
              (((cJson.contentDetails.duration.match(checkM)===null || Number(cJson.contentDetails.duration.match(checkM)[0]) < 10) && (new RegExp(postedVideosCheckSongs, "i").test(cJson.snippet.title) || cJson.id==="lYJxRGfXV6I")) || 
               ((cJson.contentDetails.duration.match(checkM)===null || Number(cJson.contentDetails.duration.match(checkM)[0]) < 20) && new RegExp(postedVideosCheckEtc, "i").test(cJson.snippet.title)))){
            printP.push(rOA(cJson, icon1, icon2));
            continue;
          }
          printA.push(rOA(cJson, icon1, icon2));
        }             
      }
    }catch(error){
      console.error("エラー: process1", error);
    }
  }));

  process2(printLN, printUC, printA, printP, ObjectData);
}


const adjust02 = (listAll3, ObjectData)=>{
  const printLN=[], printUC=[], printA=[], printP=[], listT=[];
  for(let i=0; i<listAll3.length; i++){
    const cJson = listAll3[i];
    const {icon1, icon2} = collaboration(cJson);
    if(icon1===shakeHands && icon2.length===0){
      continue;
    }
    if((cJson.snippet.liveBroadcastContent==="live" || cJson.snippet.liveBroadcastContent==="upcoming") && cJson.liveStreamingDetails.actualStartTime!==undefined && cJson.liveStreamingDetails.actualEndTime===undefined){
      if(cJson.id === millionEnduranceVideoId){
        cJson.liveStreamingDetails.actualStartTime = "2023-04-14T14:02:07Z";
        ObjectData.splice(4, 1, rOMP(cJson, icon1, icon2));
        continue;
      }
      const newObjectLN = rOLN(cJson, icon1, icon2);
      printLN.push(newObjectLN);
      const listLoginNames = cJson.snippet.description.match(/(?<=twitch\.tv\/)\w+/g);
      if(listLoginNames!==null && channelIdCheck.test(cJson.snippet.channelId)){
        listLoginNames.forEach((loginName)=>{
          if(!loginNameCheck.test(loginName)){
            listT.push(loginName);
          }
        });
      }
    }else if(cJson.snippet.liveBroadcastContent==="upcoming"){
      const newObjectUC = rOUC(cJson, icon1, icon2);
      if(newObjectUC.time > daysUTCAdjust("add", 6, "M")){
        continue;
      }
      newObjectUC.timeBase = standardTime(newObjectUC.time);
      newObjectUC.time = JST(newObjectUC.time);
      printUC.push(newObjectUC);
    }else if(cJson.snippet.liveBroadcastContent==="none" || cJson.snippet.liveBroadcastContent==="live"){
      if(cJson.liveStreamingDetails!==undefined){
        if(cJson.id === millionEnduranceVideoId){
          ObjectData.splice(4, 1, {videoId:millionEnduranceVideoId, live:false});
          continue;
        }
        const newObjectA = rOA(cJson, icon1, icon2);
        newObjectA.time = JST(newObjectA.time);
        newObjectA.time2 = duration(newObjectA.time2);
        const minutes = newObjectA.time2.match(/(?<=:)\d{2}(?=:)/)[0];
        if(newObjectA.time2.match(/^\d{2}/)[0]==="00" && 
           ((Number(minutes) < 10 && (new RegExp(postedVideosCheckSongs, "i").test(newObjectA.videoTitle) || newObjectA.videoId==="lYJxRGfXV6I")) || 
            (Number(minutes) < 20 && new RegExp(postedVideosCheckEtc, "i").test(newObjectA.videoTitle)))){
          if(newObjectA.timeBase < daysUTCAdjust("subtract", 3, "d")){
            continue;
          } 
          printP.push(newObjectA);
          continue;
        }
        if(newObjectA.timeBase < daysUTCAdjust("subtract", 1, "d")){
          continue;
        }          
        printA.push(newObjectA);
      }else{
        const newObjectP = rOP(cJson, icon1, icon2);
        newObjectP.time = JST(newObjectP.time);
        newObjectP.time2 = duration(newObjectP.time2);
        if(newObjectP.timeBase < daysUTCAdjust("subtract", 3, "d")){
          continue;
        }          
        printP.push(newObjectP);
      }
    }
  }
  printTLN.forEach((object)=>{
    printLN.push(object);
  });
  printSRLN.forEach((object)=>{
    printLN.push(object);
  });
  printLN.sort(sortDate);

  printUC.sort(sortDate);
  const printNewUC = dateList(printUC);
      
  printTA.forEach((object)=>{
    printA.push(object);
  });
  printA.sort(sortDate);
  const printNewA = timeFrame(printA);

  printTP.forEach((object)=>{
    printP.push(object);
  });
  printP.sort(sortDateReverse);
  const printNewP = [cPV(printP), printP];
      
  ObjectData.splice(0, 4, printLN, printNewUC, printNewA, printNewP);

  const listNewT = deDuplication(listT);
  for(let i=0; i<listNewT.length; i++){
    if(listTLNC.includes(listNewT[i])){
      continue;
    }
    listTLNC.push(listNewT[i]);
  }
}

async function adjust01s(){
  const list0=[], listAll2=[], listAll3=[];
  ObjectData[0].forEach((element)=>{
    if(element.platform==="youtube"){
      listAll2.push(element.videoId);
    }
  });
  ObjectData[1].forEach((element)=>{
    list0.push(element[1]);
  });
  list0.flat().forEach((element)=>{
    listAll2.push(element.videoId);
  });
  ObjectData[2].flat().forEach((element)=>{
    if(element.platform==="youtube"){
      listAll2.push(element.videoId);
    }
  });
  ObjectData[3][1].forEach((element)=>{
    listAll2.push(element.videoId);
  });
  listAll2.push(ObjectData[4].videoId);
  
  for(let i=0; i<liveAdjustList.length; i++){
    const videoId = liveAdjustList[i];
    if(listAll2.includes(videoId)){
      continue;
    }
    listAll2.push(videoId);
  }
  for(let i=0; i<upcomingAdjustList.length; i++){
    const videoId = upcomingAdjustList[i];
    if(listAll2.includes(videoId)){
      continue;
    }
    listAll2.push(videoId);
  }

  let flag = false;
  await Promise.all(divisor50(listAll2).map(async (array)=>{
    try{
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,contentDetails,status&id=${array}&maxResults=50&key=${key2}`);
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      json.items.forEach((element)=>{                                      
        listAll3.push(element);
      });
    }catch(error){
      flag = true;
      console.error("エラー: adjust01", error);
    }
  }));

  if(flag){
    return;
  }
  adjust02(listAll3, ObjectData);
}

async function getTwitchAuthorization() {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;
  try{
    const response = await fetch(url, {method: "POST"});
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();
    const accessToken = json.access_token;
    //token_type first letter must be uppercase
    const tokenType = json.token_type.slice(0, 1).toUpperCase() + json.token_type.slice(1, json.token_type.length);
    return `${tokenType} ${accessToken}`;
  }catch(error){
    console.error("getTwitchAuthorizationエラー:", error);
    return false;
  }    
}

async function getStreams() {
  const minutes = dayjs().utc().minute();
  const endpoint = `https://api.twitch.tv/helix/streams?${userIdsReturn(listTwitch)}${loginNamesReturn(listTLNC)}&type=live`;

  const authorization = await getTwitchAuthorization();
  if(!authorization){
    return;
  }

  const headers = {
  authorization,
  "Client-Id": clinetId,
  };

  try{
    const response = await fetch(endpoint, {headers});
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();

    const listC = new Array();
    printTLN.splice(0, printTLN.length);
    json.data.forEach((element)=>{
      printTLN.push(rOLNT(element));
      const listLoginNames = element.title.match(/(?<=@)\w+/g);
      if(listLoginNames!==null && twitchUserIdCheck.test(element.user_id)){
        listLoginNames.forEach((loginName)=>{
          if(!loginNameCheck.test(loginName)){
            listC.push(loginName);
          }
        });
      }
    });
    const listT = printTLN.filter((object)=>{
        return !loginNameCheck.test(object.loginName);
    });
    listTLNC.splice(0, listTLNC.length);
    listT.forEach((object)=>{
      listTLNC.push(object.loginName);
    });
    const listNewC = deDuplication(listC);
    for(let i=0; i<listNewC.length; i++){
      if(listTLNC.includes(listNewC[i])){
        continue;
      }
      listTLNC.push(listNewC[i]);
    }
  }catch(error){
    console.error("getTwitchStreamsエラー:", error);
  }
  if(minutes%3 !== 1){
    return;
  }
  getArchives(listTwitch);
}

async function getArchives(listTwitch){
  const listTODA=[], listTODADD=[], listTODADD2=[], listTODP=[];
  let flag = false;
  await Promise.all(listTwitch.map(async (userId, index)=>{
    const endpoint = `https://api.twitch.tv/helix/videos?user_id=${userId}&type=all&first=5`;

    const authorization = await getTwitchAuthorization();
    if(!authorization){
      return;
    }

    const headers = {
    authorization,
    "Client-Id": clinetId,
    };

    try{
      const response = await fetch(endpoint, {headers});
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const json = await response.json();
      json.data.forEach((element)=>{
        if(element.type==="archive"){
          listTODA.push(rOAT(element));
        }else{
          listTODP.push(rOAT(element));
        }  
      });      
    }catch(error){
      flag = true;
      console.error(`getArchivesエラー[${index}]:`, error);
    }    
  }));
  if(flag){
    return;
  }
  for(let i=0; i<listTODA.length; i++){    
    const tOD = listTODA[i];
    if(videoIdCheck(printTLN, tOD, "streamId")){
        continue;
    }
    listTODADD.push(tOD);
  }
  for(let i=0; i<printTA.length; i++){
    const tOD = printTA[i];
    if(videoIdCheck(listTODADD, tOD, "videoIdT")){
      continue;
    }
    listTODADD2.push(tOD);
  }
  const listTODA2 = listTODADD.concat(listTODADD2);
  
  printTA.splice(0, printTA.length);
  listTODA2.forEach((object)=>{
    if(object.timeBase > daysUTCAdjust("subtract", 1, "d")){
      printTA.push(object);
    }
  });

  printTP.splice(0, printTP.length);
  listTODP.forEach((object)=>{
    if(object.timeBase > daysUTCAdjust("subtract", 3, "d")){
      printTP.push(object);
    }
  });
}

async function getShowRoom(){
  try{
    const response = await fetch("https://www.showroom-live.com/api/room/status?room_url_key=ringo-005");
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();
    printSRLN.splice(0, printSRLN.length);
    if(json.is_live){
      printSRLN.push(rOLNSR(json));
    }
  }catch(error){
    console.error("getShowRoomエラー:", error);
  } 
}

  
cron.schedule('0 5,35 * * * *', ()=>{
  apis();
  console.log(key);
  console.log('30分経過だよ');
});

cron.schedule('0 20,50 * * * *', ()=>{
  liveAdjust();
});

cron.schedule('10 20,50 * * * *', ()=>{
  upcomingAdjust();
});

cron.schedule('20 * * * * *', ()=>{
  adjust01s();
});

cron.schedule('30 * * * * *', ()=>{
  getStreams();
});

cron.schedule('40 * * * * *', ()=>{
  getShowRoom();
});

cron.schedule('0 0 * * * *', ()=>{
  Official.api2(key2);
  devA2();
  devB2();
  devC2();
  devD2();
  devE2();
  console.log("1時間経過");
});
Official.api2(key2);
devA2();
devB2();
devC2();
devD2();
devE2();

cron.schedule('0 59 * * * *', ()=>{
  Mina.api3(key2);
});
Mina.api3(key2);

app.get('/', (req, res)=>{
  res.render('hello.ejs', {ObjectData:ObjectData});
});

app.listen(8080);

console.log("HELLOW WORLD");

const hellow = (n)=>{
    let h1 = "Hellow";
    for(i=1;i<=n-1;i++){
        h1 = h1 +" "+"Hellow";
    }
    console.log(h1);
}

hellow(2);

