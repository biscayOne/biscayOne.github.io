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
if(dayjs().hour()<2){
  key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
}else if(dayjs().hour()<4){
  key = "AIzaSyBDOlCzTCfxtpe9Lk7OT60v0VfRIn_RSrA";
}else if(dayjs().hour()<6){
  key = "AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k";
}else if(dayjs().hour()<8){
  key = "AIzaSyCiqUsLRH44u9UcwZQRL7_dIMljqMIf4JI";
}else if(dayjs().hour()<10){
  key = "AIzaSyDb94UH4XZWe-OlMcWBSLwVcJrCYye8dUU";
}else if(dayjs().hour()<12){
  key = "AIzaSyCd7IonmJLfHH_5V8CrKv3kg6w1VCSPV1Q";
}else if(dayjs().hour()<14){
  key = "AIzaSyAc0ECaEi65tna4h1hb7NMbsnnmavn3K0Q";
}else if(dayjs().hour()<16){
  key = "AIzaSyAk5iMZRi4a0UmcvEc3C9rUno2o2fu9fzQ";
}else if(dayjs().hour()<18){
  key = "AIzaSyAP-A7RSKhcI2n-PpuhiLg9fJgYoJMoH-E";
}else if(dayjs().hour()<20){
  key = "AIzaSyCluyrETb8amHgNVArDqFzeJz07QJ7Vr7c";
}else if(dayjs().hour()<22){
  key = "AIzaSyDYc1BNMUNQwT-cWriHaKb_NTPL7YTI3gc";
}else if(dayjs().hour()<24){
  key = "AIzaSyDoqa0Z7dE2CpGwLi90w-KOV65rx6WdUAU";
}
cron.schedule('0 0,1,2,3,4 0 * * *', () => {
  key = "AIzaSyC5AqocsQC83pRCKcXEa9zoUiHLgMECwj0";
});
cron.schedule('0 0,1,2,3,4 2 * * *', () => {
  key = "AIzaSyBDOlCzTCfxtpe9Lk7OT60v0VfRIn_RSrA";
});
cron.schedule('0 0,1,2,3,4 4 * * *', () => {
  key = "AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k";
});
cron.schedule('0 0,1,2,3,4 6 * * *', () => {
  key = "AIzaSyCiqUsLRH44u9UcwZQRL7_dIMljqMIf4JI";
});
cron.schedule('0 0,1,2,3,4 8 * * *', () => {
  key = "AIzaSyDb94UH4XZWe-OlMcWBSLwVcJrCYye8dUU";
});
cron.schedule('0 0,1,2,3,4 10 * * *', () => {
  key = "AIzaSyCd7IonmJLfHH_5V8CrKv3kg6w1VCSPV1Q";
});
cron.schedule('0 0,1,2,3,4 12 * * *', () => {
  key = "AIzaSyAc0ECaEi65tna4h1hb7NMbsnnmavn3K0Q";
});
cron.schedule('0 0,1,2,3,4 14 * * *', () => {
  key = "AIzaSyAk5iMZRi4a0UmcvEc3C9rUno2o2fu9fzQ";
});
cron.schedule('0 0,1,2,3,4 16 * * *', () => {
  key = "AIzaSyAP-A7RSKhcI2n-PpuhiLg9fJgYoJMoH-E";
});
cron.schedule('0 0,1,2,3,4 18 * * *', () => {
  key = "AIzaSyCluyrETb8amHgNVArDqFzeJz07QJ7Vr7c";
});
cron.schedule('0 0,1,2,3,4 20 * * *', () => {
  key = "AIzaSyDYc1BNMUNQwT-cWriHaKb_NTPL7YTI3gc";
});
cron.schedule('0 0,1,2,3,4 22 * * *', () => {
  key = "AIzaSyDoqa0Z7dE2CpGwLi90w-KOV65rx6WdUAU";
});

const clinetId = "w7c3ie7lvr4c75vegdd9u80e0aicwc";
const clinetSecret = "ns28cq05ja4vfsyv23fm612dzemq3w";

function NGW(listNG){  
  let NGWords = "";
  listNG.forEach((NGWord)=>{
    NGWords += `-${NGWord}- `;
  });
  return NGWords.slice(0, NGWords.length-1);
}

function URLW(listURL){
  if(listURL.length > 0){
    return listURL.reduce(function(URLWords, URLWord){
      return `${URLWords} OR ${URLWord}`;
    });
  }else if(listURL.length === 0){
    return "";
  }
}

function userIdsReturn(listTwitch){
  let userIds = "";
  listTwitch.forEach((userId)=>{
    userIds += `&user_id=${userId}`
  });
  return userIds.slice(1, userIds.length);
}

function divisor50(array){
  const length = Math.ceil(array.length/50);
  return new Array(length).fill().map((_, i)=>{
    return array.slice(i*50, (i+1)*50);
  });
}

function divisor(listAll){
  const listAllNew = listAll.filter((element,index)=>{
                       if(listAll.indexOf(element)===index){
                         return element;
                       }
                     });  
  return divisor50(listAllNew);
}

function replaceAll(string){
  return string
          .replace(/&amp;/g, "&")
          .replace(/&#39;/g, "'")
          .replace(/】(?=[^【])/g, "】<br>")
          .replace(/(?<=[^】》])【/g, "<br>【")
          .replace(/》\s+|》(?=[^！])/, "》<br>")
          .replace(/￤\s+|￤/, "￤<br>");
}

function replaceThumbnailURL(thumbnailURL){
  return thumbnailURL.replace("_live.jpg", ".jpg");
}

function sizeThumbnailURL(thumbnailURL){
  return thumbnailURL.replace(/(%{width}|{width})/, "320").replace(/(%{height}|{height})/, "180");
}

function channelIconReturn(userId){
  switch(userId){
    case "715990491":
      return listIcon[8];
    case "806658817":
      return listIcon[1];
    case "582501849":
      return listIcon[3];
    case "886124634":
      return listIcon[12];
    case "879316180":
      return listIcon[19];
  }
}

function rOLN(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), timeBase:cJson.liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2, platform:"youtube"};
}

function rOLNT(cJson){
  return {videoId:undefined, streamId:cJson.id, loginName:cJson.user_login, videoTitle:replaceAll(cJson.title), videoThumbnail:sizeThumbnailURL(cJson.thumbnail_url), timeBase:standardTime(cJson.started_at), icon:channelIconReturn(cJson.user_id), icon2:collaborationReturn(cJson.title, cJson.user_id), platform:"twitch"};
}

function rOUC(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.liveStreamingDetails.scheduledStartTime, timeBase:"", status:cJson.status.uploadStatus, icon:icon1[0], icon2:icon2};
}

function rOA(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.liveStreamingDetails.actualStartTime, time2:cJson.contentDetails.duration, timeBase:cJson.liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2, platform:"youtube"};
}

function rOAT(cJson){
  return {videoId:undefined, streamId:cJson.stream_id, videoIdT:cJson.id, videoTitle:replaceAll(cJson.title), videoThumbnail:sizeThumbnailURL(cJson.thumbnail_url), time:JST(cJson.published_at), time2:duration(cJson.duration), timeBase:cJson.published_at, icon:channelIconReturn(cJson.user_id), icon2:collaborationReturn(cJson.title, cJson.user_id), platform:"twitch"};
}

function rOP(cJson, icon1, icon2){
  return {videoId:cJson.id, videoTitle:replaceAll(cJson.snippet.title), videoThumbnail:replaceThumbnailURL(cJson.snippet.thumbnails.medium.url), time:cJson.snippet.publishedAt, time2:cJson.contentDetails.duration, timeBase:cJson.snippet.publishedAt, icon:icon1[0], icon2:icon2};
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
  if(first.timeBase>second.timeBase){
    return -1;
  }else if(first.timeBase<second.timeBase){
    return 1;
  }else{
    return 0;
  }
}

function set0(num){
  return ("0" + num).slice(-2);
}

function duration(time){
  let hours ="00";
  let minutes = "00";
  let seconds = "00";
  const hoursArray = time.match(/[0-9]{1,2}(?=[Hh])/);
  const minutesArray = time.match(/[0-9]{1,2}(?=[Mm])/);
  const secondsArray = time.match(/[0-9]{1,2}(?=[Ss])/);
  if(hoursArray!==null){
    hours = set0(hoursArray[0]);
  }
  if(minutesArray!==null){
    minutes = set0(minutesArray[0]);
  }
  if(secondsArray!==null){
    seconds = set0(secondsArray[0]);
  }
  return hours+":"+minutes+":"+seconds;
}

function durationT(time){
  let hours ="00";
  let minutes = "00";
  let seconds = "00";
  const hoursArray = time.match(/[0-9]{1,2}(?=[Hh])/);
  const minutesArray = time.match(/[0-9]{1,2}(?=[Mm])/);
  const secondsArray = time.match(/[0-9]{1,2}(?=[Ss])/);
  if(hoursArray!==null){
    hours = set0(hoursArray[0]);
  }
  if(minutesArray!==null){
    minutes = set0(minutesArray[0]);
  }
  if(secondsArray!==null){
    seconds = set0(secondsArray[0]);
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
    const month = list[0].time.match(/(?<=\s)[A-Z][a-z]{2}(?=\s)/);
    const date = list[0].time.match(/[0-9]{2}/);
    const dw = list[0].time.match(/^[A-Z][a-z]{2}/);
    const sameDate = new Array();
    let indexNumber = list.findIndex((element)=>{
      return element.time.match(/[0-9]+/)[0] !== date[0];
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
    sameDateNew.forEach((element)=>{
      element.sort(function(first, second){
        if(first.icon2.length<second.icon2.length){
          return 1;
        }else if(first.icon2.length>second.icon2.length){
          return -1;
        }else{
          return 0;
        }
      });
    });
    dateList.push([`${returnMonth(month[0])} 月 ${date[0]} 日 (${dW(dw[0])})`, sameDateNew.flat()]);
    list.splice(0, length);
  }
  return dateList;
}

function cPV(list){
  if(list.length>0 && list[0].timeBase>dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
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
                "https://yt3.ggpht.com/gkzCvdPGfZP2BsRS2zhCwR46bKGGxwweXWRtYzgPw2rtE4P9RvKX4QRJ6vbABLijOiOxQksSWbk=s88-c-k-c0x00ffffff-no-rj",  // 3
                "https://yt3.ggpht.com/BBywT_hHFYqk_AvQ7xbd-l1in8838u3kVUqZmZFBuWsN2E2EJ4iS6BCBtFZ89wtJAnmmUZw_qBY=s88-c-k-c0x00ffffff-no-rj",  // 4
                "https://yt3.ggpht.com/8zlUH6WXzKYQfAC-yDr8-Ok8oPYueyOsIL980DUniGMbaN5LgoRN3bwEFmel30BjQkGPf4_EoA=s88-c-k-c0x00ffffff-no-rj",  // 5
                "https://yt3.ggpht.com/nftD5_O_9HQxYdWXZa_TyAFIFEzuwmQzqM6y3eIm6eT7TU7aomDGmjFKYLVDVXeZOi0qqL1p=s88-c-k-c0x00ffffff-no-rj",  // 6
                "https://yt3.ggpht.com/LEaZ41BdwqwGJlFvh0WbnCGC92TFZAZA8LjHH57dwbCcI0F4lMbpKbe0BiS-zdH3ojL6rvVf=s88-c-k-c0x00ffffff-no-rj",  // 7
                "https://yt3.ggpht.com/Ci7w0_WSSRoufmr6XjDuL1gPhurSxf5gNsH12Un47QThvZOSfpYPFKCONSYfoIigjOOG13oJCQ=s88-c-k-c0x00ffffff-no-rj", //dtto.
                "https://yt3.ggpht.com/6KMuVacpS3PI5EActjjbZdF6Hf7inmXWZPy-6RzihoCgjTP3Od9pJFKXMRXgLj0dT5MGFF2S=s88-c-k-c0x00ffffff-no-rj",  // 9
                "https://yt3.ggpht.com/9gzgLqsMb2ae5pX1wSECz2PE-CJkfqyQIBgl1juUx-7PZ-ANcBskninPxtbyMmx2mBdZXFC02w=s88-c-k-c0x00ffffff-no-rj",  // 10
                "https://yt3.ggpht.com/Thx0qvLt-sUaiFwCRF5_YNr-mzfVk4d0XqfJCI-ME0i21_Yl0w0FFl11yaYCDBICYGX3fQD_NA=s88-c-k-c0x00ffffff-no-rj", //あまつかうと
                "https://yt3.ggpht.com/eqK_S6SXxSh--EU_EPMLytHKEvh9J9Hw5oLGbG-CCTAMAgkWRUn2ndT9mdyeehcBcqQeTZZs=s88-c-k-c0x00ffffff-no-rj",  // 12
                "https://yt3.ggpht.com/5NhP3kywPqOLzW587NNkK52wI3gE0FoeUQSxAsjVF6XJaFZ-0_bUDsTqxTUtNCW_ZrThwBtL3K0=s88-c-k-c0x00ffffff-no-rj",  // 13
                "https://yt3.ggpht.com/N1qK9ca7VuCEMeep1XTgpKMKfTVcWUGLwzH8KuDbUjf6OmsW7xj2SpphHDfbP_Kx2mmBHGEwxg=s88-c-k-c0x00ffffff-no-rj",  // 14
                "https://yt3.ggpht.com/gkCaF4FvG0JhBaYnqEPaXXgdxzm6SUbKb3hVR4AhtPvGiGCfxGNqroDS_ShhKnOjVxT1xSeeow=s88-c-k-c0x00ffffff-no-rj",  // 15
                "https://yt3.ggpht.com/1oE4luB-7eOFSQ2Rdn6fVt3FCzmRJyuOMbGVFoddRm9jl6GjJU7InpjxKzV65JUTGjvYIbKBQQ=s88-c-k-c0x00ffffff-no-rj",  // 16
                "https://yt3.ggpht.com/eJumgdOJUO9AYc6HsEwUGiZqjeu3fm3awR1NDUnSfmoM6w_ZWLEE7z4ww3epxEve2aJx5QhozA=s88-c-k-c0x00ffffff-no-rj",  // 17
                "https://yt3.ggpht.com/XcZWuahAYyqFeXXM_VuJvf2ElEzFYz3gwCq1aoUSGwlQ4rJlrO1WI2vavl0rc3VNkI4GLat20u0=s88-c-k-c0x00ffffff-no-rj",  // 18
                "https://yt3.ggpht.com/hEpcefCY9Jp-KzuH2hWrDgyfvNFxMjuK0xbzHaG2UkjWXeFsu8xlMfJcZWrSuBGRMHN9KIArc8Q=s88-c-k-c0x00ffffff-no-rj",  // 19
               ];

function collaboration(element, listIcon, icon1, icon2){
  switch(element.snippet.channelId){
    case "UCXWiGKfAXjHUsxa_GNLgv-A":
      icon1.push(listIcon[0]);
      break;
    case "UCAUicVZlApAIhcdL9df3gWw":
      icon1.push(listIcon[1]);
      break;
    case "UCf57-IJn5mUJDyqd9uNEmrg":
      icon1.push(listIcon[2]);
      break;
    case "UCQLyq7TDKHlmp2Ufd5Z2qMw":
      icon1.push(listIcon[3]);
      break;
    case "UCUdlDvZJGGP78zvta3swIhw":
      icon1.push(listIcon[4]);
      break;
    case "UCJGQPbaqTY91JhVzD8gIZyw":
      icon1.push(listIcon[5]);
      break;
    case "UCFkHpBGMeNSQW-j9-F0nxnQ":
      icon1.push(listIcon[6]);
      break;
    case "UCzv_W7v9ix39tFPDB-TV0Vg":
      icon1.push(listIcon[7]);
      break;
    case "UCnBOUGfsfcD6nUbpdDAwMfw":
      icon1.push(listIcon[9]);
      break;
    case "UC7FUtGR0AsvwzXrEmdUBAFw":
      icon1.push(listIcon[10]);
      break;
    case "UCWhFUlcawiD78qAD7zzS6Bw":
      icon1.push(listIcon[12]);
      break;
    case "UCQfp96ujs7PXiUG6ov29RKg":
      icon1.push(listIcon[13]);
      break;
    case "UCJpsYQtNyVDc023clkqMhTQ":
      icon1.push(listIcon[14]);
      break;
    case "UCOd-qYH_8e-tgxpPIcqwenA":
      icon1.push(listIcon[15]);
      break;
    case "UC02dJeNmcQLqENdHFG1svJw":
      icon1.push(listIcon[16]);
      break;
    case "UC6b4Ta_J0wbylnPu1auaQiA":
      icon1.push(listIcon[17]);
      break;
    case "UCEoAD_2jSLoYQd2MJZxWuxQ":
      icon1.push(listIcon[18]);
      break;
    case "UCngFYCS8p8PX9wf4V8kLVgw":
      icon1.push(listIcon[19]);
      break;
    default:
      icon1.push("/images/shakeHands.jpg");
      break;
  }
  const text = element.snippet.description;
  const title = element.snippet.title;
  if(/Ruki Otokado 音門るき \[VEE\]/.test(text) || (/音門るき|音門\s+るき/.test(text) && (/\/channel\/UCAUicVZlApAIhcdL9df3gWw/.test(text) || /\/c\/OtokadoDeviRuki/i.test(text))) || /@Otokado_Ruki/i.test(text) || /音門るき|音門\s+るき/.test(title)){
    icon2.push(listIcon[1]);
  }
  if(/九条 林檎【Kujo Ringo Official】/.test(text) || (/九条林檎|九条\s+林檎/.test(text) && (/\/channel\/UCf57-IJn5mUJDyqd9uNEmrg/.test(text) || /\/c\/KujoRingo/i.test(text))) || /@KujoRingo/i.test(text) || /九条林檎|九条\s+林檎/.test(title)){
    icon2.push(listIcon[2]);
  }
  if(/Syusetu kohaku\/秋雪こはく/.test(text) || (/秋雪こはく|秋雪\s+こはく/.test(text) && (/\/channel\/UCQLyq7TDKHlmp2Ufd5Z2qMw/.test(text) || /\/c\/Syusetukohaku秋雪こはく/i.test(text))) || /@Syusetu_kohaku/i.test(text) || /秋雪こはく|秋雪\s+こはく/.test(title)){
    icon2.push(listIcon[3]);
  }
  if(/魔王トゥルシー \/ Tulsi-Nightmare Madness IV/.test(text) || (/魔王トゥルシー|魔王\s+トゥルシー/.test(text) && /\/channel\/UCUdlDvZJGGP78zvta3swIhw/.test(text)) || /@Tulsi_Nightmare/i.test(text) || /魔王トゥルシー|魔王\s+トゥルシー/.test(title)){
    icon2.push(listIcon[4]);
  }
  if(/雛星あいる Hinahoshi Airu/.test(text) || (/雛星あいる|雛星\s+あいる/.test(text) && /\/channel\/UCJGQPbaqTY91JhVzD8gIZyw/.test(text)) || /@Hinahoshi_Airu/i.test(text) || /雛星あいる|雛星\s+あいる/.test(title)){
    icon2.push(listIcon[5]);
  }
  if(/桜鳥ミーナ \/ Audrey Mina/.test(text) || (/桜鳥ミーナ|桜鳥\s+ミーナ/.test(text) && /\/channel\/UCFkHpBGMeNSQW-j9-F0nxnQ/.test(text)) || /@MinaAudrey/i.test(text) || /桜鳥ミーナ|桜鳥\s+ミーナ/.test(title)){
    icon2.push(listIcon[6]);
  }
  if(/白粉いと \/ Oshiro Ito/.test(text) || (/白粉いと|白粉\s+いと/.test(text) && (/\/channel\/UCzv_W7v9ix39tFPDB-TV0Vg/.test(text) || /\/c\/OshiroIto/i.test(text))) || /@oshiroito/i.test(text) || /白粉いと|白粉\s+いと/.test(title)){
    icon2.push(listIcon[7]);
  }
  if(/日和ちひよ \/ Hiyori Chihiyo/.test(text) || (/日和ちひよ|日和\s+ちひよ/.test(text) && /\/channel\/UCnBOUGfsfcD6nUbpdDAwMfw/.test(text)) || /@HiyoriChihiyo/i.test(text) || /日和ちひよ|日和\s+ちひよ/.test(title)){
    icon2.push(listIcon[9]);
  }
  if(/Mew Garcia \/ ミュウ・ガルシア/.test(text) || (/ミュウ・ガルシア/.test(text) && /\/channel\/UC7FUtGR0AsvwzXrEmdUBAFw/.test(text)) || /@MewGarcia/i.test(text) || /ミュウ・ガルシア/.test(title)){
    icon2.push(listIcon[10]);
  }
  if(/Aomiya Yozuri Ch\. 蒼宮よづり/.test(text) || (/蒼宮よづり|蒼宮\s+よづり/.test(text) && /\/channel\/UCWhFUlcawiD78qAD7zzS6Bw/.test(text)) || /@AomiyaYozuri/i.test(text) || /蒼宮よづり|蒼宮\s+よづり/.test(title)){
    icon2.push(listIcon[12]);
  }
  if(/亞生うぱる【VEE】/.test(text) || (/亞生うぱる|亞生\s+うぱる/.test(text) && /\/channel\/UCQfp96ujs7PXiUG6ov29RKg/.test(text)) || /@AnewUparu/i.test(text) || /亞生うぱる|亞生\s+うぱる/.test(title)){
    icon2.push(listIcon[13]);
  }
  if(/糶 \/ URIYONE/.test(text) || (/糶/.test(text) && /\/channel\/UCJpsYQtNyVDc023clkqMhTQ/.test(text)) || /@URIYONE/i.test(text) || /糶/.test(title)){
    icon2.push(listIcon[14]);
  }
  if(/言のハ-Cotonoha-/.test(text) || (/言のハ/.test(text) && /\/channel\/UCOd-qYH_8e-tgxpPIcqwenA/.test(text)) || /@Cotonoha/i.test(text) || /言のハ/.test(title)){
    icon2.push(listIcon[15]);
  }
  if(/るみなす・すいーと【LUMINOUS Ch】/.test(text) || (/るみなす・すいーと/.test(text) && /\/channel\/UC02dJeNmcQLqENdHFG1svJw/.test(text)) || /@Luminous_Sweet/i.test(text) || /るみなす・すいーと/.test(title)){
    icon2.push(listIcon[16]);
  }
  if(/偉雷アマエ \/ Erai Amae/.test(text) || (/偉雷アマエ|偉雷\s+アマエ/.test(text) && /\/channel\/UC6b4Ta_J0wbylnPu1auaQiA/.test(text)) || /@EraiAmae/i.test(text) || /偉雷アマエ|偉雷\s+アマエ/.test(title)){
    icon2.push(listIcon[17]);
  }
  if(/北白川かかぽ \/ Kakapo Kitashirakawa/.test(text) || (/北白川かかぽ|北白川\s+かかぽ/.test(text) && (/\/channel\/UCEoAD_2jSLoYQd2MJZxWuxQ/.test(text) || /\/c\/kakaporesearch/i.test(text))) || /@kakapo_research/i.test(text) || /北白川かかぽ|北白川\s+かかぽ/.test(title)){
    icon2.push(listIcon[18]);
  }
  if(/ゆりかわゆん YURIKAWA YUN/.test(text) || (/ゆりかわゆん|ゆりかわ\s+ゆん/.test(text) && /\/channel\/UCngFYCS8p8PX9wf4V8kLVgw/.test(text)) || /@yurikawayun/i.test(text) || /ゆりかわゆん|ゆりかわ\s+ゆん/.test(title)){
    icon2.push(listIcon[19]);
  }
  if(/華灯/.test(text) && /hanavee_pr/.test(text)){
    icon2.push("/images/Hanavee.jpg");
  }

  if(element.id === "Z6ZzCxjGUCg" && icon2.length === 0){
    icon2.push(listIcon[2]);
  }

  if(icon1[0]!=="/images/shakeHands.jpg" && icon2.length>0){
    const indexNumber = icon2.findIndex((element)=>{
      return element === icon1[0];
    });
    if(indexNumber!==-1){
      icon2.splice(indexNumber, 1);
    }
  }  
}

function collaborationReturn(title, userId){
  const listC = new Array();
  if(/音門るき|音門\s+るき/.test(title)){
    listC.push(listIcon[1]);
  }
  if(/九条林檎|九条\s+林檎/.test(title)){
    listC.push(listIcon[2]);
  }
  if(/秋雪こはく|秋雪\s+こはく/.test(title)){
    listC.push(listIcon[3]);
  }
  if(/魔王トゥルシー|魔王\s+トゥルシー/.test(title)){
    listC.push(listIcon[4]);
  }
  if(/雛星あいる|雛星\s+あいる/.test(title)){
    listC.push(listIcon[5]);
  }
  if(/桜鳥ミーナ|桜鳥\s+ミーナ/.test(title)){
    listC.push(listIcon[6]);
  }
  if(/白粉いと|白粉\s+いと/.test(title)){
    listC.push(listIcon[7]);
  }
  if(/日和ちひよ|日和\s+ちひよ/.test(title)){
    listC.push(listIcon[9]);
  }
  if(/ミュウ・ガルシア/.test(title)){
    listC.push(listIcon[10]);
  }
  if(/蒼宮よづり|蒼宮\s+よづり/.test(title)){
    listC.push(listIcon[12]);
  }
  if(/亞生うぱる|亞生\s+うぱる/.test(title)){
    listC.push(listIcon[13]);
  }
  if(/糶/.test(title)){
    listC.push(listIcon[14]);
  }
  if(/言のハ/.test(title)){
    listC.push(listIcon[15]);
  }
  if(/るみなす・すいーと/.test(title)){
    listC.push(listIcon[16]);
  }
  if(/偉雷アマエ|偉雷\s+アマエ/.test(title)){
    listC.push(listIcon[17]);
  }
  if(/北白川かかぽ|北白川\s+かかぽ/.test(title)){
    listC.push(listIcon[18]);
  }
  if(/ゆりかわゆん|ゆりかわ\s+ゆん/.test(title)){
    listC.push(listIcon[19]);
  }
  if(/華灯/.test(title)){
    listC.push("/images/Hanavee.jpg");
  }
  if(/dtto\./.test(title)){
    listC.push(listIcon[8]);
  }
  const indexNumber = listC.findIndex((icon)=>{
    return icon === channelIconReturn(userId);
  });
  if(indexNumber!==-1){
    listC.splice(indexNumber, 1);
  }
  return listC;
}

class VEE{
  constructor(number, name, channelId, twitterId, listURL, listNG, twitchUserId){
    this.number = number;
    this.name = name;
    this.channelId = channelId;
    this.twitterId = twitterId;
    this.listURL = listURL;
    this.listNG = listNG;
    this.twitchUserId = twitchUserId;
  }
  api0Return(daysAgo){
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&type=video&maxResults=10&publishedAfter=${dayjs().utc().subtract(daysAgo, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`;
  }
  
  api1Return(daysAgo){
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.name} OR "${this.channelId}" OR ${URLW(this.listURL)} ${NGW(this.listNG)}&type=video&maxResults=50&publishedAfter=${dayjs().utc().subtract(daysAgo, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`;
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
      console.error(`api2エラー: ${this.name}`, error);
    }
  }

  getTUI(){
    return this.twitchUserId;
  }
}

//Dev-a
const Ruki = new VEE(1, '"Ruki Otokado 音門るき [VEE]"', "UCAUicVZlApAIhcdL9df3gWw", '"Ruki_vita_666"', ['"/c/OtokadoDeviRuki"', '"Otokado_Ruki"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"', '"달땡(Moon 00)"'], '806658817');
const Ringo = new VEE(2, '"九条 林檎【Kujo Ringo Official】"', "UCf57-IJn5mUJDyqd9uNEmrg", '"ringo_0_0_5"', ['"/c/KujoRingo"', '"KujoRingo"'], ['"VEE切り抜きおきば"'], '');
const Kohaku = new VEE(3, '"Syusetu kohaku/秋雪こはく"', "UCQLyq7TDKHlmp2Ufd5Z2qMw", '"Syusetu_kohaku"', ['"/c/Syusetukohaku秋雪こはく"', '"Syusetu_kohaku"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"'], '582501849');
const Tulsi = new VEE(4, '"魔王トゥルシー / Tulsi-Nightmare Madness IV"', "UCUdlDvZJGGP78zvta3swIhw", '"IDmadeMiruna"', ['"Tulsi_Nightmare"'], ['"แมวพิมพ์ [ Vtuber แปลไทย ]"'], '');
const Airu = new VEE(5, '"雛星あいる Hinahoshi Airu"', "UCJGQPbaqTY91JhVzD8gIZyw", '"airu_Lv115"', ['"Hinahoshi_Airu"'], [], '');
function devA2(){
  Ruki.api2(key2);
  Ringo.api2(key2);
  Kohaku.api2(key2);
  Tulsi.api2(key2);
  Airu.api2(key2);
}

//Dev-b
const Mina = new VEE(6, '"桜鳥ミーナ / Audrey Mina"', "UCFkHpBGMeNSQW-j9-F0nxnQ", '"mina0x0audrey"', ['"MinaAudrey"'], ['"달땡(Moon 00)"'], '');
const Ito = new VEE(7, '"白粉いと / Oshiro Ito"', "UCzv_W7v9ix39tFPDB-TV0Vg", '"oshiroito"', ['"/c/OshiroIto"', '"oshiroito"'], ['"woni_clip"', '"시번 sibun"', '"BubblesClip"'], '');
const Chihiyo = new VEE(9, '"日和ちひよ / Hiyori Chihiyo"', "UCnBOUGfsfcD6nUbpdDAwMfw", '"hiyohiyovee"', ['"HiyoriChihiyo"'], ['"달땡(Moon 00)"'], '');
const Mew = new VEE(10, '"Mew Garcia / ミュウ・ガルシア"', "UC7FUtGR0AsvwzXrEmdUBAFw", '"MewGarcia_king"', ['"MewGarcia"'], [], '');
const Official = new VEE(0, '"VEE official channel"', "UCXWiGKfAXjHUsxa_GNLgv-A", '"_vee_official_"', ['"/c/VEE_official_ch"', '"VEE_official"', '"ぷみぷみVEE"'], [], '');
const Dtto = new VEE(8, '"dtto."', "UCWNVjAzZmYUni8YBXYiy01w", '"_dtto"', ['"dttodot"'], [], '715990491');
const Uto = new VEE(11, '"Uto Ch. 天使うと"', "UCdYR5Oyz8Q4g0ZmB4PkTD7g", '"amatsukauto"', ['"utoch.6000"'], [], '');
function devB2(){
  Mina.api2(key2);
  Ito.api2(key2);
  Chihiyo.api2(key2);
  Mew.api2(key2);
  Dtto.api2(key2);
  Uto.api2(key2);
}

//Dev-c
const Yozuri = new VEE(12, '"Aomiya Yozuri Ch. 蒼宮よづり"', "UCWhFUlcawiD78qAD7zzS6Bw", '"aomiyayozuri"', ['"AomiyaYozuri"'], ['"成田という男(切り抜き製作所)"'], '886124634');
const Uparu = new VEE(13, '"亞生うぱる【VEE】"', "UCQfp96ujs7PXiUG6ov29RKg", '"UPARU_JP"', ['"AnewUparu"'], [], '');
const Uriyone = new VEE(14, '"糶 / URIYONE"', "UCJpsYQtNyVDc023clkqMhTQ", '"URIYONEE"', ['"URIYONE"'], [], '');
const Cotonoha = new VEE(15, '"言のハ-Cotonoha-"', "UCOd-qYH_8e-tgxpPIcqwenA", '"TwiCoto"', ['"Cotonoha"'], ['"太田圭亮のViolinトーク"', '"cotonoha sketch"'], '');
const Luminous = new VEE(16, '"るみなす・すいーと【LUMINOUS Ch】"', "UC02dJeNmcQLqENdHFG1svJw", '"luminous_amaama"', ['"Luminous_Sweet"'], [], '');
function devC2(){
  Yozuri.api2(key2);
  Uparu.api2(key2);
  Uriyone.api2(key2);
  Cotonoha.api2(key2);
  Luminous.api2(key2);
}

//Dev-d
const Amae = new VEE(17, '"偉雷アマエ / Erai Amae"', "UC6b4Ta_J0wbylnPu1auaQiA", '"EraiAmae"', ['"EraiAmae"'], ['"元動画はこちら"'], '');
const Kakapo = new VEE(18, '"北白川かかぽ / Kakapo Kitashirakawa"', "UCEoAD_2jSLoYQd2MJZxWuxQ", '"kakapo_research"', ['"/c/kakaporesearch"', '"kakapo_research"'], [], '');
const Yun = new VEE(19, '"ゆりかわゆん YURIKAWA YUN"', "UCngFYCS8p8PX9wf4V8kLVgw", '"yun_yurikawa"', ['"yurikawayun"'], [], '879316180');
function devD2(){
  Amae.api2(key2);
  Kakapo.api2(key2);
  Yun.api2(key2);
}

const listApi = [
  Official.api0Return.bind(Official, 8),

  Ruki.api1Return.bind(Ruki, 6),
  Ringo.api1Return.bind(Ringo, 15),
  Kohaku.api1Return.bind(Kohaku, 6),
  Tulsi.api1Return.bind(Tulsi, 8),
  Airu.api1Return.bind(Airu, 8),

  Mina.api1Return.bind(Mina, 8),
  Ito.api1Return.bind(Ito, 8),
  Chihiyo.api1Return.bind(Chihiyo, 8),
  Mew.api1Return.bind(Mew, 8),

  Yozuri.api1Return.bind(Yozuri, 16),
  Uparu.api1Return.bind(Uparu, 8),
  Uriyone.api1Return.bind(Uriyone, 11),
  Cotonoha.api1Return.bind(Cotonoha, 8),
  Luminous.api1Return.bind(Luminous, 11),

  Amae.api1Return.bind(Amae, 6),
  Kakapo.api1Return.bind(Kakapo, 8),
  Yun.api1Return.bind(Yun, 8),
];

const listTwitch = [
  Dtto.getTUI(),
  Ruki.getTUI(),
  Kohaku.getTUI(),
  Yozuri.getTUI(),
  Yun.getTUI(),
];


const ObjectData = [[], [], [], ["", []], listIcon];
const printTLN = [];
const printTA = [];
function process2(printLN, printUC, printA, printP, ObjectData){
  
  let printUC2 = printUC.filter((element)=>{        
    return element.time < dayjs().utc().add(1, "y").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });
  
  const printOldUC = new Array();

  ObjectData[1].forEach((element)=>{
    printOldUC.push(element[1]);
  })

  const printOldUCF = printOldUC.flat();

  const listOldData = printOldUCF.map((element)=>{
    return element;
  })

  for(let i=0; i<printUC2.length; i++){    
    const pUC2 = printUC2[i];
    if(listOldData.find((element)=>{if(pUC2.videoId===element.videoId){return true}})){
        continue;
    }
    pUC2.timeBase = standardTime(pUC2.time);
    pUC2.time = JST(pUC2.time);
    printOldUCF.push(pUC2);
  }

  printOldUCF.sort(sortDate);
  
  const printNewUC = dateList(printOldUCF);


  const printNewLN = ObjectData[0];

  printNewLN.forEach((element)=>{
    listOldData.push(element);
  })
  for(let i=0; i<printLN.length; i++){    
    const pLN = printLN[i];
    if(listOldData.find((element)=>{if(pLN.videoId===element.videoId){return true}})){
        continue;
    }
    pLN.timeBase = standardTime(pLN.timeBase);
    printNewLN.push(pLN);
  }
  printNewLN.sort(sortDate);


  const printA2 = ObjectData[2];

  printA2.forEach((element)=>{
    listOldData.push(element);
  })
  for(let i=0; i<printA.length; i++){
    const pA = printA[i];
    if(listOldData.find((element)=>{if(pA.videoId===element.videoId){return true}})){
        continue;
    }
    pA.time = JST(pA.time);
    pA.time2 = duration(pA.time2);
    printA2.push(pA);
  }

  const printNewA = printA2.filter((element)=>{        
    return element.timeBase > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });
  console.log(printTLN);
  printNewA.sort(sortDate);


  const printP2 = ObjectData[3][1];

  for(let i=0; i<printP.length; i++){    
    const pP = printP[i];
    if(printP2.find((element)=>{if(pP.videoId===element.videoId){return true}})){
        continue;
    }
    pP.time = JST(pP.time);
    pP.time2 = duration(pP.time2);
    printP2.push(pP);
  }

  const printP3 = printP2.filter((element)=>{        
    return element.timeBase > dayjs().utc().subtract(3, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });

  printP3.sort(sortDateReverse);
  const printNewP = [cPV(printP3), printP3];


  ObjectData.splice(0, 4, printNewLN, printNewUC, printNewA, printNewP);
}

async function apis(){
  const listAll = ["na3B296TI_I"];
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

  const printLN = new Array();
  const printUC = new Array();
  const printA = new Array();
  const printP = new Array();
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
        const icon1 = new Array();
        const icon2 = new Array();
        collaboration(cJson, listIcon, icon1, icon2);
        if(icon1[0]==="/images/shakeHands.jpg" && icon2.length===0){
          continue;
        }
        const checkName = /(音門るき|九条林檎|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん)/;
        if(cJson.snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(cJson.snippet.title) && !checkName.test(cJson.snippet.description)){
          continue;
        }else if(cJson.snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(cJson.snippet.title) && checkName.test(cJson.snippet.description)){
          const indexNumber = icon2.findIndex((element)=>{
            return element === listIcon[3];
          });
          if(indexNumber!==-1){
            icon2.splice(indexNumber, 1);
          }
        }
        if(cJson.snippet.channelId ==="UCLJ7sTH2gc9ElQl2tVJXYUA" && /【Rust】/.test(cJson.snippet.title) && !checkName.test(cJson.snippet.description)){
          continue;
        } 

        // const checkKohaCup = /(UC2hx0xVkMoHGWijwr_lA01w|UCyxtGMdWlURZ30WSnEjDOQw|UCO9rPI15LSo7U40UX4ukUAA|UCrBx2Gy-0PBUWTP_4uGNkZA|UCQz5mRHdiwt7NrS9tc4D1Dg|UCLr0X7ktuRImhXJrkASkSQw|UCjs-5fTyhaRVQVfdEmVyyqw|UC0vzxUUsMHyGnhD9G8k14yg|UCV1xUwfM2v2oBtT3JNvic3w|UCC7rRD6P7RQcx0hKv9RQP4w|UCHjeZylSgXDSnor8wUnwU_g|UCVQROe7sDdROh4x0BpYHP1w|UCdlxcNp-rmCrIfZwORXr0Og|UCFahBR2wixu0xOex84bXFvg|UC01gb86Qdlkh23Nqk3A1OLQ|UCYqTYMZa5rx4S8o1Xlm21YQ|UCAr4bfXugIgm0HicVyvxacg|UCc6hwdN1yu2QT9o4yIHUPnQ|UCnvBsJQ0TztZ4Mq7qDaL_FA|UCpzxZW5kghGnO5TmAFJQAVw|UCwaS8_S7kMiKA3izlTWHbQg|UCKu59gTZ_rdEmerdx5rV4Yg|UCUpysYEAnksyyr1ykN8JBCw|UCP6J6k7n8SgxslDpYVrqwEA|UCdpFSbJeT9_tR5kR75r6DmQ|UCGAtHjeWWgyWboVQ33ZQX6Q|UCWU7kvLd_JBaBqO_ilTYd_A|UCwtyxO7B0xIv3XdtSvdnYgQ|UCyBSz2-Pnec2_HvG09NScIQ|UC1r_ILeKhs2XHyFQ3_oSicA|UCEEar_TJCxAWpQkSlozVBMg|UCH-wVHHDDrpt5W59UUPJvXA|UCjeoRcWBJKGSEoBJ6XH2QPQ|UCytdhnkcqUA1njZqd1U1PUg|UCe33NIg6hC9vNq2NluwFh9g|UCLChoN0emEvVFNU6_kP-YrQ|UCKR_dxrRj5tmyzEPUieFVfA)/;
        // if(checkKohaCup.test(cJson.snippet.channelId)){
          // continue;
        // }

        // UCWNVjAzZmYUni8YBXYiy01w は dtto.のチャンネルID
        // UCXPSFGZZrJ0tQEeP7R2jRqQ は verse_n_projectのチャンネルID
        // UCOg01LJmZF9UnwFbly73CVw は マル・ナナモナのチャンネルID
        // UCYcnLc0n1ryBDZeGWQTVJ_g は カシ・オトハ のチャンネルID
        // UCmKfT7daL3aOt9o-PBJzOug は ダンジョンズ&ドラゴンズのチャンネルID
        const checkID = /(UCWNVjAzZmYUni8YBXYiy01w|UCXPSFGZZrJ0tQEeP7R2jRqQ|UCOg01LJmZF9UnwFbly73CVw|UCYcnLc0n1ryBDZeGWQTVJ_g|UCmKfT7daL3aOt9o-PBJzOug|UCXWiGKfAXjHUsxa_GNLgv-A|UCAUicVZlApAIhcdL9df3gWw|UCf57-IJn5mUJDyqd9uNEmrg|UCQLyq7TDKHlmp2Ufd5Z2qMw|UCUdlDvZJGGP78zvta3swIhw|UCJGQPbaqTY91JhVzD8gIZyw|UCFkHpBGMeNSQW-j9-F0nxnQ|UCzv_W7v9ix39tFPDB-TV0Vg|UCnBOUGfsfcD6nUbpdDAwMfw|UC7FUtGR0AsvwzXrEmdUBAFw|UCWhFUlcawiD78qAD7zzS6Bw|UCQfp96ujs7PXiUG6ov29RKg|UCJpsYQtNyVDc023clkqMhTQ|UCOd-qYH_8e-tgxpPIcqwenA|UC02dJeNmcQLqENdHFG1svJw|UC6b4Ta_J0wbylnPu1auaQiA|UCEoAD_2jSLoYQd2MJZxWuxQ|UCngFYCS8p8PX9wf4V8kLVgw)/;
        if(cJson.snippet.liveBroadcastContent==="live"){
          if(cJson.status.uploadStatus==="processed" && !checkID.test(cJson.snippet.channelId)){
            continue;
          }
          printLN.push(rOLN(cJson, icon1, icon2));
        }else if(cJson.snippet.liveBroadcastContent==="upcoming"){
          if(cJson.status.uploadStatus==="processed" && !checkID.test(cJson.snippet.channelId)){
            continue;
          }
          printUC.push(rOUC(cJson, icon1, icon2));
        }else if(cJson.snippet.liveBroadcastContent==="none"){
          if(cJson.liveStreamingDetails===undefined){
            if(checkID.test(cJson.snippet.channelId)){
              printP.push(rOP(cJson, icon1, icon2));
            }
            continue;              
          }
          if((cJson.contentDetails.duration.match(/[0-9]{1,2}(?=H)/)===null && (cJson.contentDetails.duration.match(/[0-9]{1,2}(?=M)/)===null || cJson.contentDetails.duration.match(/[0-9]{1,2}(?=M)/)[0]<30)) && !checkID.test(cJson.snippet.channelId)){
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


const adjust02 = (listAll3, listIcon, ObjectData)=>{
  const printLN = new Array();
  const printUC = new Array();
  const printA = new Array();
  const printP = new Array();
  for(let i=0; i<listAll3.length; i++){
    const cJson = listAll3[i];
    const icon1 = new Array();
    const icon2 = new Array();
    collaboration(cJson, listIcon, icon1, icon2);
    if(icon1[0]==="/images/shakeHands.jpg" && icon2.length===0){
      continue;
    }
    if(cJson.snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(cJson.snippet.title) && /(音門るき|九条林檎|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん)/.test(cJson.snippet.description)){
      const indexNumber = icon2.findIndex((element)=>{
        return element === listIcon[3];
      });
      if(indexNumber!==-1){
        icon2.splice(indexNumber, 1);
      }
    }
    if(cJson.snippet.liveBroadcastContent==="live"){
      const newObjectLN = rOLN(cJson, icon1, icon2);
      newObjectLN.timeBase = standardTime(newObjectLN.timeBase);
      printLN.push(newObjectLN);
    }else if(cJson.snippet.liveBroadcastContent==="upcoming"){
      const newObjectUC = rOUC(cJson, icon1, icon2);
      newObjectUC.timeBase = standardTime(newObjectUC.time);
      newObjectUC.time = JST(newObjectUC.time);
      printUC.push(newObjectUC);
    }else if(cJson.snippet.liveBroadcastContent==="none"){
      if(cJson.liveStreamingDetails!==undefined){
        const newObjectA = rOA(cJson, icon1, icon2);
        newObjectA.time = JST(newObjectA.time);
        newObjectA.time2 = duration(newObjectA.time2);
        if(newObjectA.timeBase < dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
          continue;
        }          
        printA.push(newObjectA);
      }else{
        const newObjectP = rOP(cJson, icon1, icon2);
        newObjectP.time = JST(newObjectP.time);
        newObjectP.time2 = duration(newObjectP.time2);
        if(newObjectP.timeBase < dayjs().utc().subtract(3, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
          continue;
        }          
        printP.push(newObjectP);
      }
    }
  }
  printTLN.forEach((object)=>{
    printLN.push(object);
  });
  printLN.sort(sortDate);

  printUC.sort(sortDate);
  const printNewUC = dateList(printUC);
      
  printTA.forEach((object)=>{
    printA.push(object);
  });
  printA.sort(sortDate);

  printP.sort(sortDateReverse);
  const printNewP = [cPV(printP), printP];
      
  ObjectData.splice(0, 4, printLN, printNewUC, printA, printNewP);
}

async function adjust01s(){
  const list0 = new Array();
  const listAll2 = new Array();
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
  ObjectData[2].forEach((element)=>{
    if(element.platform==="youtube"){
      listAll2.push(element.videoId);
    }
  });
  ObjectData[3][1].forEach((element)=>{
    listAll2.push(element.videoId);
  });
  const listAll3 = new Array();

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
  adjust02(listAll3, listIcon, ObjectData);
}

async function getTwitchAuthorization() {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;
  try{
    const response = await fetch(url, {method: "POST"});
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json;
  }catch(error){
    console.error("getTwitchAuthorizationエラー:", error);
    return false;
  }    
}

async function getStreams() {
  const minutes = dayjs().utc().minute();
  const endpoint = `https://api.twitch.tv/helix/streams?${userIdsReturn(listTwitch)}&type=live`;

  let authorizationObject = await getTwitchAuthorization();
  if(!authorizationObject){
    return;
  }

  let { access_token, expires_in, token_type } = authorizationObject;

  //token_type first letter must be uppercase    
  token_type =
  token_type.slice(0, 1).toUpperCase() +
  token_type.slice(1, token_type.length);

  const authorization = `${token_type} ${access_token}`;

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
    printTLN.splice(0, printTLN.length);
    json.data.forEach((element)=>{
      printTLN.push(rOLNT(element));
    });
  }catch(error){
    console.error("getTwitchStreamsエラー:", error);
  }
  if(minutes%3 !== 1){
    return;
  }
  getArchives(listTwitch);
}

async function getArchives(listTwitch){
  const listTOD = new Array();
  let flag = false;
  await Promise.all(listTwitch.map(async (userId, index)=>{
    const endpoint = `https://api.twitch.tv/helix/videos?user_id=${userId}&type=archive&first=3`;

    let authorizationObject = await getTwitchAuthorization();
    if(!authorizationObject){
      return;
    }

    let { access_token, expires_in, token_type } = authorizationObject;
   
    token_type =
    token_type.slice(0, 1).toUpperCase() +
    token_type.slice(1, token_type.length);

    const authorization = `${token_type} ${access_token}`;

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
        listTOD.push(rOAT(element));
      });      
    }catch(error){
      flag = true;
      console.error(`getArchivesエラー[${index}]:`, error);
    }    
  }));
  if(flag){
    return;
  }
  const listTOD2 = listTOD.filter((object)=>{
    return object.timeBase > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
  });
  printTA.splice(0, printTA.length);
  for(let i=0; i<listTOD2.length; i++){    
    const tOD = listTOD2[i];
    if(printTLN.find((object)=>{if(tOD.streamId===object.streamId){return true}})){
        continue;
    }
    printTA.push(tOD);
  }
}
  
cron.schedule('0 15,45 * * * *', () => {
  apis();
  console.log(key);
  console.log('30分経過だよ');
  
});

cron.schedule('20 * * * * *', () => {
  adjust01s();
});

cron.schedule('30 * * * * *', () => {
  getStreams();
});

cron.schedule('0 0 * * * *', () => {
  Official.api2(key2);
  devA2();
  devB2();
  devC2();
  devD2();
  console.log("1時間経過");
});

app.get('/', (req, res) => {
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

