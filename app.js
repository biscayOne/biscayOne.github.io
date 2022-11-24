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

function NGW(listNG){
  if(listNG.length > 0){
    let NGWords = `-${listNG[0]}-`;
    for(let i=1; i<listNG.length; i++){
      NGWords = `${NGWords} -${listNG[i]}-`;
    }
    return NGWords;
  }else if(listNG.length === 0){
    return "";
  }
}

function URLW(listURL){
  if(listURL.length > 0){
    let URLWords = `${listURL[0]}`;
    for(let i=1; i<listURL.length; i++){
      URLWords = `${URLWords} OR ${listURL[i]}`;
    }
    return URLWords;
  }else if(listURL.length === 0){
    return "";
  }
}

let listAll = [];
let listAll2 = [];
let listAll3 = [];
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

function replaceAll(string){
  return string
          .replace(/&amp;/g, "&")
          .replace(/&#39;/g, "'")
          .replace("】","】<br>")
          .replace(/(?<=.)【/,"<br>【")
          .replace(/》\s+|》/, "》<br>")
          .replace(/￤\s+|￤/, "￤<br>");
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
  const hoursArray = element.time2.match(/[0-9]{1,2}(?=H)/);
  const minutesArray = element.time2.match(/[0-9]{1,2}(?=M)/);
  const secondsArray = element.time2.match(/[0-9]{1,2}(?=S)/);
  if(hoursArray===null){
    hours = "00";
  }else{
    hours = set0(hoursArray[0]);
  }
  if(minutesArray===null){
    minutes = "00";
  }else{
    minutes = set0(minutesArray[0]);
  }
  if(secondsArray===null){
    seconds = "00";
  }else{
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

function dateList(list, dateList){
  let number = 0;
  while(list.length>number){
    const month = list[number].time2.match(/(?<=\/)[0-9]{2}(?=\/)/);
    const date = list[number].time.match(/[0-9]+/);
    const dw = list[number].time.match(/[A-Z][a-z]{2}/);
    const sameDate = list.filter((element)=>{
      return element.time.match(/[0-9]+/)[0] === date[0];
    });
    dateList.push([`${month[0]} 月 ${date[0]} 日 (${dW(dw[0])})`, sameDate]);
    number += sameDate.length;
  }
}

function standardTime(time){
  return dayjs(time).utc().format("YYYY/MM/DD"+" "+"HH:mm:ss");
}

let listIcon = [
                "https://yt3.ggpht.com/vhgGxT2ROGSByTxS-lfULhoNWtC_A7ubuMTdchPHAFYx15Ov2FE0sBf94Oo91lNpPxeqKyAf=s176-c-k-c0x00ffffff-no-rj",  // 0
                "https://yt3.ggpht.com/7q9hOlgVOLGGMGNDnAokhFo7vECpLIyKCOj3xLKwBqPvQuu2-kkLS9E3kkNd-rrfdK0GKepd4w=s176-c-k-c0x00ffffff-no-rj",  // 1
                "https://yt3.ggpht.com/Rln7rmZcpjY0mIPPfF0BXCA4SLtEPo04b1QJuldTkrOMx03pwEv54f97SXd3cazOqGuylwQN=s176-c-k-c0x00ffffff-no-rj",  // 2
                "https://yt3.ggpht.com/gkzCvdPGfZP2BsRS2zhCwR46bKGGxwweXWRtYzgPw2rtE4P9RvKX4QRJ6vbABLijOiOxQksSWbk=s176-c-k-c0x00ffffff-no-rj",  // 3
                "https://yt3.ggpht.com/BBywT_hHFYqk_AvQ7xbd-l1in8838u3kVUqZmZFBuWsN2E2EJ4iS6BCBtFZ89wtJAnmmUZw_qBY=s176-c-k-c0x00ffffff-no-rj",  // 4
                "https://yt3.ggpht.com/8zlUH6WXzKYQfAC-yDr8-Ok8oPYueyOsIL980DUniGMbaN5LgoRN3bwEFmel30BjQkGPf4_EoA=s176-c-k-c0x00ffffff-no-rj",  // 5
                "https://yt3.ggpht.com/nftD5_O_9HQxYdWXZa_TyAFIFEzuwmQzqM6y3eIm6eT7TU7aomDGmjFKYLVDVXeZOi0qqL1p=s176-c-k-c0x00ffffff-no-rj",  // 6
                "https://yt3.ggpht.com/LEaZ41BdwqwGJlFvh0WbnCGC92TFZAZA8LjHH57dwbCcI0F4lMbpKbe0BiS-zdH3ojL6rvVf=s176-c-k-c0x00ffffff-no-rj",  // 7
                "8",
                "https://yt3.ggpht.com/7P3MYe928q3hA5eosHfOfRW0gjTFU9BVRjo1J5kyl92PORQs1W0w_NJUNqOkenqXljBeQkIX7fs=s176-c-k-c0x00ffffff-no-rj",  // 9
                "https://yt3.ggpht.com/qM-PWb43IfrKqCnU4n8nB4YVhHl340yjJIkIaukRex2_9j_EsfplB5YE80i4TKPFgZbr8cJFcg=s176-c-k-c0x00ffffff-no-rj",  // 10
                "11",
                "https://yt3.ggpht.com/eqK_S6SXxSh--EU_EPMLytHKEvh9J9Hw5oLGbG-CCTAMAgkWRUn2ndT9mdyeehcBcqQeTZZs=s176-c-k-c0x00ffffff-no-rj",  // 12
                "https://yt3.ggpht.com/5NhP3kywPqOLzW587NNkK52wI3gE0FoeUQSxAsjVF6XJaFZ-0_bUDsTqxTUtNCW_ZrThwBtL3K0=s176-c-k-c0x00ffffff-no-rj",  // 13
                "https://yt3.ggpht.com/N1qK9ca7VuCEMeep1XTgpKMKfTVcWUGLwzH8KuDbUjf6OmsW7xj2SpphHDfbP_Kx2mmBHGEwxg=s176-c-k-c0x00ffffff-no-rj",  // 14
                "https://yt3.ggpht.com/gkCaF4FvG0JhBaYnqEPaXXgdxzm6SUbKb3hVR4AhtPvGiGCfxGNqroDS_ShhKnOjVxT1xSeeow=s176-c-k-c0x00ffffff-no-rj",  // 15
                "https://yt3.ggpht.com/1oE4luB-7eOFSQ2Rdn6fVt3FCzmRJyuOMbGVFoddRm9jl6GjJU7InpjxKzV65JUTGjvYIbKBQQ=s176-c-k-c0x00ffffff-no-rj",  // 16
                "https://yt3.ggpht.com/eJumgdOJUO9AYc6HsEwUGiZqjeu3fm3awR1NDUnSfmoM6w_ZWLEE7z4ww3epxEve2aJx5QhozA=s176-c-k-c0x00ffffff-no-rj",  // 17
                "https://yt3.ggpht.com/XcZWuahAYyqFeXXM_VuJvf2ElEzFYz3gwCq1aoUSGwlQ4rJlrO1WI2vavl0rc3VNkI4GLat20u0=s176-c-k-c0x00ffffff-no-rj",  // 18
                "https://yt3.ggpht.com/hEpcefCY9Jp-KzuH2hWrDgyfvNFxMjuK0xbzHaG2UkjWXeFsu8xlMfJcZWrSuBGRMHN9KIArc8Q=s176-c-k-c0x00ffffff-no-rj"  // 19
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
  if(/Ruki Otokado 音門るき \[VEE\]/.test(text) || (/音門るき|音門\s+るき/.test(text) && (/\/channel\/UCAUicVZlApAIhcdL9df3gWw/.test(text) || /\/c\/OtokadoDeviRuki/i.test(text) || /@Otokado_Ruki/i.test(text)))){
    icon2.push(listIcon[1]);
  }
  if(/九条 林檎【Kujo Ringo Official】/.test(text) || (/九条林檎|九条\s+林檎/.test(text) && (/\/channel\/UCf57-IJn5mUJDyqd9uNEmrg/.test(text) || /\/c\/KujoRingo/i.test(text) || /@KujoRingo/i.test(text)))){
    icon2.push(listIcon[2]);
  }
  if(/Syusetu kohaku\/秋雪こはく/.test(text) || (/秋雪こはく|秋雪\s+こはく/.test(text) && (/\/channel\/UCQLyq7TDKHlmp2Ufd5Z2qMw/.test(text) || /\/c\/Syusetukohaku秋雪こはく/i.test(text) || /@Syusetu_kohaku/i.test(text)))){
    icon2.push(listIcon[3]);
  }
  if(/魔王トゥルシー \/ Tulsi-Nightmare Madness IV/.test(text) || (/魔王トゥルシー|魔王\s+トゥルシー/.test(text) && (/\/channel\/UCUdlDvZJGGP78zvta3swIhw/.test(text) || /@Tulsi_Nightmare/i.test(text)))){
    icon2.push(listIcon[4]);
  }
  if(/雛星あいる Hinahoshi Airu/.test(text) || (/雛星あいる|雛星\s+あいる/.test(text) && (/\/channel\/UCJGQPbaqTY91JhVzD8gIZyw/.test(text) || /@Hinahoshi_Airu/i.test(text)))){
    icon2.push(listIcon[5]);
  }
  if(/桜鳥ミーナ \/ Audrey Mina/.test(text) || (/桜鳥ミーナ|桜鳥\s+ミーナ/.test(text) && (/\/channel\/UCFkHpBGMeNSQW-j9-F0nxnQ/.test(text) || /@MinaAudrey/i.test(text)))){
    icon2.push(listIcon[6]);
  }
  if(/白粉いと \/ Oshiro Ito/.test(text) || (/白粉いと|白粉\s+いと/.test(text) && (/\/channel\/UCzv_W7v9ix39tFPDB-TV0Vg/.test(text) || /\/c\/OshiroIto/i.test(text) || /@oshiroito/i.test(text)))){
    icon2.push(listIcon[7]);
  }
  if(/日和ちひよ \/ Hiyori Chihiyo/.test(text) || (/日和ちひよ|日和\s+ちひよ/.test(text) && (/\/channel\/UCnBOUGfsfcD6nUbpdDAwMfw/.test(text) || /@HiyoriChihiyo/i.test(text)))){
    icon2.push(listIcon[9]);
  }
  if(/Mew Garcia \/ ミュウ・ガルシア/.test(text) || (/ミュウ・ガルシア/.test(text) && (/\/channel\/UC7FUtGR0AsvwzXrEmdUBAFw/.test(text) || /@MewGarcia/i.test(text)))){
    icon2.push(listIcon[10]);
  }
  if(/Aomiya Yozuri Ch\. 蒼宮よづり/.test(text) || (/蒼宮よづり|蒼宮\s+よづり/.test(text) && (/\/channel\/UCWhFUlcawiD78qAD7zzS6Bw/.test(text) || /@AomiyaYozuri/i.test(text)))){
    icon2.push(listIcon[12]);
  }
  if(/亞生うぱる【VEE】/.test(text) || (/亞生うぱる|亞生\s+うぱる/.test(text) && (/\/channel\/UCQfp96ujs7PXiUG6ov29RKg/.test(text) || /@AnewUparu/i.test(text)))){
    icon2.push(listIcon[13]);
  }
  if(/糶 \/ URIYONE/.test(text) || (/糶/.test(text) && (/\/channel\/UCJpsYQtNyVDc023clkqMhTQ/.test(text) || /@URIYONE/i.test(text)))){
    icon2.push(listIcon[14]);
  }
  if(/言のハ-Cotonoha-/.test(text) || (/言のハ/.test(text) && (/\/channel\/UCOd-qYH_8e-tgxpPIcqwenA/.test(text) || /@Cotonoha/i.test(text)))){
    icon2.push(listIcon[15]);
  }
  if(/るみなす・すいーと【LUMINOUS Ch】/.test(text) || (/るみなす・すいーと/.test(text) && (/\/channel\/UC02dJeNmcQLqENdHFG1svJw/.test(text) || /@Luminous_Sweet/i.test(text)))){
    icon2.push(listIcon[16]);
  }
  if(/偉雷アマエ \/ Erai Amae/.test(text) || (/偉雷アマエ|偉雷\s+アマエ/.test(text) && (/\/channel\/UC6b4Ta_J0wbylnPu1auaQiA/.test(text) || /@EraiAmae/i.test(text)))){
    icon2.push(listIcon[17]);
  }
  if(/北白川かかぽ \/ Kakapo Kitashirakawa/.test(text) || (/北白川かかぽ|北白川\s+かかぽ/.test(text) && (/\/channel\/UCEoAD_2jSLoYQd2MJZxWuxQ/.test(text) || /\/c\/kakaporesearch/i.test(text) || /@kakapo_research/i.test(text)))){
    icon2.push(listIcon[18]);
  }
  if(/ゆりかわゆん YURIKAWA YUN/.test(text) || (/ゆりかわゆん|ゆりかわ\s+ゆん/.test(text) && (/\/channel\/UCngFYCS8p8PX9wf4V8kLVgw/.test(text) || /@yurikawayun6056/i.test(text)))){
    icon2.push(listIcon[19]);
  }
  if(/華灯/.test(text)){
    icon2.push("/images/Hanavee.jpg");
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

class VEE{
  constructor(number, name, channelId, list, listIcon, twitterId, listURL, listNG){
    this.number = number;
    this.name = name;
    this.channelId = channelId;
    this.list = list;
    this.listIcon = listIcon;
    this.twitterId = twitterId;
    this.listURL = listURL;
    this.listNG = listNG;
  }
  api0(key){      
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&type=video&maxResults=10&publishedAfter=${dayjs().utc().subtract(8, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`)
      .then((response)=>{
        if(!response.ok){
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json)=>{  

        json.items.forEach((element)=>{                                      
            this.list.push(element.id.videoId);
        });
      })
      .catch((error)=>{
        console.error(`api0エラー: ${this.name}`, error);
      });    
  }
  api(key, daysAgo){      
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.name} OR "${this.channelId}" OR ${URLW(this.listURL)} ${NGW(this.listNG)}&type=video&maxResults=50&publishedAfter=${dayjs().utc().subtract(daysAgo, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${key}`)
      .then((response)=>{
        if(!response.ok){
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json)=>{  

        json.items.forEach((element)=>{                                      
          this.list.push(element.id.videoId);
        });
      })
      .catch((error)=>{
        console.error(`apiエラー: ${this.name}`, error);
      });     
  }
  api2(key2){
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.channelId}&key=${key2}`)
      .then((response)=>{
        if(!response.ok){
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json)=>{
        listIcon.splice(this.number, 1, json.items[0].snippet.thumbnails.medium.url);
      })
      .catch((error)=>{
        console.error(`api2エラー: ${this.name}`, error);
      }); 
  }
}

//Dev-a
const Ruki = new VEE(1, '"Ruki Otokado 音門るき [VEE]"', "UCAUicVZlApAIhcdL9df3gWw", listAll, listIcon, '"Ruki_vita_666"', ['"/c/OtokadoDeviRuki"', '"Otokado_Ruki"'], []);
const Ringo = new VEE(2, '"九条 林檎【Kujo Ringo Official】"', "UCf57-IJn5mUJDyqd9uNEmrg", listAll, listIcon, '"ringo_0_0_5"', ['"/c/KujoRingo"', '"KujoRingo"'], []);
const Kohaku = new VEE(3, '"Syusetu kohaku/秋雪こはく"', "UCQLyq7TDKHlmp2Ufd5Z2qMw", listAll, listIcon, '"Syusetu_kohaku"', ['"/c/Syusetukohaku秋雪こはく"', '"Syusetu_kohaku"'], []);
const Tulsi = new VEE(4, '"魔王トゥルシー / Tulsi-Nightmare Madness IV"', "UCUdlDvZJGGP78zvta3swIhw", listAll, listIcon, '"IDmadeMiruna"', ['"Tulsi_Nightmare"'], []);
const Airu = new VEE(5, '"雛星あいる Hinahoshi Airu"', "UCJGQPbaqTY91JhVzD8gIZyw", listAll, listIcon, '"airu_Lv115"', ['"Hinahoshi_Airu"'], []);
function devA(){
  Ruki.api(key, 6);
  Ringo.api(key, 11);
  Kohaku.api(key, 6);
  Tulsi.api(key, 8);
  Airu.api(key, 8);
}
function devA2(){
  Ruki.api2(key2);
  Ringo.api2(key2);
  Kohaku.api2(key2);
  Tulsi.api2(key2);
  Airu.api2(key2);
}

//Dev-b
const Mina = new VEE(6, '"桜鳥ミーナ / Audrey Mina"', "UCFkHpBGMeNSQW-j9-F0nxnQ", listAll, listIcon, '"mina0x0audrey"', ['"MinaAudrey"'], []);
const Ito = new VEE(7, '"白粉いと / Oshiro Ito"', "UCzv_W7v9ix39tFPDB-TV0Vg", listAll, listIcon, '"oshiroito"', ['"/c/OshiroIto"', '"oshiroito"'], []);
const Chihiyo = new VEE(9, '"日和ちひよ / Hiyori Chihiyo"', "UCnBOUGfsfcD6nUbpdDAwMfw", listAll, listIcon, '"hiyohiyovee"', ['"HiyoriChihiyo"'], []);
const Mew = new VEE(10, '"Mew Garcia / ミュウ・ガルシア"', "UC7FUtGR0AsvwzXrEmdUBAFw", listAll, listIcon, '"MewGarcia_king"', ['"MewGarcia"'], []);
const Official = new VEE(0, '"VEE official channel"', "UCXWiGKfAXjHUsxa_GNLgv-A", listAll, listIcon, '"_vee_official_"', [], []);
function devB(){
  Mina.api(key, 8);
  Ito.api(key, 8);
  Chihiyo.api(key, 8);
  Mew.api(key, 8);
}
function devB2(){
  Mina.api2(key2);
  Ito.api2(key2);
  Chihiyo.api2(key2);
  Mew.api2(key2);
}

//Dev-c
const Yozuri = new VEE(12, '"Aomiya Yozuri Ch. 蒼宮よづり"', "UCWhFUlcawiD78qAD7zzS6Bw", listAll, listIcon, '"aomiyayozuri"', ['"AomiyaYozuri"'], ['"蒼宮よづり 切り抜きCh."', '"成田という男(切り抜き製作所)"']);
const Uparu = new VEE(13, '"亞生うぱる【VEE】"', "UCQfp96ujs7PXiUG6ov29RKg", listAll, listIcon, '"UPARU_JP"', ['"AnewUparu"'], []);
const Uriyone = new VEE(14, '"糶 / URIYONE"', "UCJpsYQtNyVDc023clkqMhTQ", listAll, listIcon, '"URIYONEE"', ['"URIYONE"'], []);
const Cotonoha = new VEE(15, '"言のハ-Cotonoha-"', "UCOd-qYH_8e-tgxpPIcqwenA", listAll, listIcon, '"TwiCoto"', ['"Cotonoha"'], []);
const Luminous = new VEE(16, '"るみなす・すいーと【LUMINOUS Ch】"', "UC02dJeNmcQLqENdHFG1svJw", listAll, listIcon, '"luminous_amaama"', ['"Luminous_Sweet"'], []);
function devC(){
  Yozuri.api(key, 11);
  Uparu.api(key, 8);
  Uriyone.api(key, 11);
  Cotonoha.api(key, 8);
  Luminous.api(key, 11);
}
function devC2(){
  Yozuri.api2(key2);
  Uparu.api2(key2);
  Uriyone.api2(key2);
  Cotonoha.api2(key2);
  Luminous.api2(key2);
}

//Dev-d
const Amae = new VEE(17, '"偉雷アマエ / Erai Amae"', "UC6b4Ta_J0wbylnPu1auaQiA", listAll, listIcon, '"EraiAmae"', ['"EraiAmae"'], ['"元動画はこちら"']);
const Kakapo = new VEE(18, '"北白川かかぽ / Kakapo Kitashirakawa"', "UCEoAD_2jSLoYQd2MJZxWuxQ", listAll, listIcon, '"kakapo_research"', ['"/c/kakaporesearch"', '"kakapo_research"'], []);
const Yun = new VEE(19, '"ゆりかわゆん YURIKAWA YUN"', "UCngFYCS8p8PX9wf4V8kLVgw", listAll, listIcon, '"yun_yurikawa"', ['"yurikawayun6056"'], []);
function devD(){
  Amae.api(key, 4);
  Kakapo.api(key, 8);
  Yun.api(key, 8);
}
function devD2(){
  Amae.api2(key2);
  Kakapo.api2(key2);
  Yun.api2(key2);
}

let printLN = [];
let printUC = [];
let printA = [];
const process1 = (list, listIcon, printLN, printUC, printA, key2)=>{
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,status,contentDetails&id=${list}&maxResults=50&key=${key2}`)
      .then((response)=>{
        if(!response.ok){
          throw new Error(response.statusText);
        }
        console.log(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,status,contentDetails&id=${list}&maxResults=50&key=${key2}`);
        return response.json();
      })
      .then((json)=>{           
        for(let i=0; i<json.items.length; i++){
          let icon1 = [];
          let icon2 = [];
          collaboration(json.items[i], listIcon, icon1, icon2);
          if(icon1[0]==="/images/shakeHands.jpg" && icon2.length===0){
            continue;
          }
          const checkName = /(音門るき|九条林檎|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん)/;
          if(json.items[i].snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(json.items[i].snippet.title) && !checkName.test(json.items[i].snippet.description)){
            continue;
          }else if(json.items[i].snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(json.items[i].snippet.title) && checkName.test(json.items[i].snippet.description)){
            const indexNumber = icon2.findIndex((element)=>{
              return element === listIcon[3];
            });
            if(indexNumber!==-1){
              icon2.splice(indexNumber, 1);
            }
          }
          if(json.items[i].snippet.channelId ==="UCLJ7sTH2gc9ElQl2tVJXYUA" && /【Rust】/.test(json.items[i].snippet.title) && !checkName.test(json.items[i].snippet.description)){
            continue;
          } 
          // UCYcnLc0n1ryBDZeGWQTVJ_g は カシ・オトハ のチャンネルID
          const checkID = /(UCYcnLc0n1ryBDZeGWQTVJ_g|UCXWiGKfAXjHUsxa_GNLgv-A|UCAUicVZlApAIhcdL9df3gWw|UCf57-IJn5mUJDyqd9uNEmrg|UCQLyq7TDKHlmp2Ufd5Z2qMw|UCUdlDvZJGGP78zvta3swIhw|UCJGQPbaqTY91JhVzD8gIZyw|UCFkHpBGMeNSQW-j9-F0nxnQ|UCzv_W7v9ix39tFPDB-TV0Vg|UCnBOUGfsfcD6nUbpdDAwMfw|UC7FUtGR0AsvwzXrEmdUBAFw|UCWhFUlcawiD78qAD7zzS6Bw|UCQfp96ujs7PXiUG6ov29RKg|UCJpsYQtNyVDc023clkqMhTQ|UCOd-qYH_8e-tgxpPIcqwenA|UC02dJeNmcQLqENdHFG1svJw|UC6b4Ta_J0wbylnPu1auaQiA|UCEoAD_2jSLoYQd2MJZxWuxQ|UCngFYCS8p8PX9wf4V8kLVgw)/;
          if(json.items[i].snippet.liveBroadcastContent==="live"){
            if(json.items[i].status.uploadStatus==="processed" && !checkID.test(json.items[i].snippet.channelId)){
              continue;
            }
            printLN.push({videoId:json.items[i].id, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2});
          }else if(json.items[i].snippet.liveBroadcastContent==="upcoming"){
            if(json.items[i].status.uploadStatus==="processed" && !checkID.test(json.items[i].snippet.channelId)){
              continue;
            }
            printUC.push({videoId:json.items[i].id, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.scheduledStartTime, time2:"time2", status:json.items[i].status.uploadStatus, icon:icon1[0], icon2:icon2});
          }else if(json.items[i].snippet.liveBroadcastContent==="none"){
            if(json.items[i].liveStreamingDetails===undefined){
              continue;
            }
            if((json.items[i].contentDetails.duration.match(/[0-9]{1,2}(?=H)/)===null && (json.items[i].contentDetails.duration.match(/[0-9]{1,2}(?=M)/)===null || json.items[i].contentDetails.duration.match(/[0-9]{1,2}(?=M)/)[0]<30)) && !checkID.test(json.items[i].snippet.channelId)){
              continue;
            }
            printA.push({videoId:json.items[i].id, videoTitle:replaceAll(json.items[i].snippet.title), videoThumbnail:json.items[i].snippet.thumbnails.medium.url, time:json.items[i].liveStreamingDetails.actualStartTime, time2:json.items[i].contentDetails.duration, time3:json.items[i].liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2});
          }             
        }
      })
      .catch((error)=>{
        console.error("エラー: process1", error);
      });
}
  
function process1s(){
  listAll.forEach((array)=>{
    process1(array, listIcon, printLN, printUC, printA, key2);
  });
}

let ObjectData = [[], [], []];
function process2(printLN, printUC, printA, ObjectData){
  let printNewLN = ObjectData[0];
  for(let i=0; i<printLN.length; i++){    
    if(printNewLN.find((element)=>{if(printLN[i].videoId===element.videoId){return true}})){
        continue;
    }
    printLN[i].time = standardTime(printLN[i].time);
    printNewLN.push(printLN[i]);
  }
  printNewLN.sort(sortDate);


  const JST = (time)=>{      
      return dayjs(time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
  }
  
  let printUC2 = printUC.filter((element)=>{        
    return element.time < dayjs().utc().add(1, "y").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });
  
  let printOldUC = [];

  ObjectData[1].forEach((element)=>{
    printOldUC.push(element[1]);
  })

  printOldUC = printOldUC.flat();

  for(let i=0; i<printUC2.length; i++){    
    if(printOldUC.find((element)=>{if(printUC2[i].videoId===element.videoId){return true}})){
        continue;
    }
    printUC2[i].time2 = standardTime(printUC2[i].time);
    printUC2[i].time = JST(printUC2[i].time);
    printOldUC.push(printUC2[i]);
  }

  printOldUC.sort(sortDate2);
  
  let printNewUC = [];
  dateList(printOldUC,printNewUC);


  let printA2 = ObjectData[2];
  for(let i=0; i<printA.length; i++){    
    if(printA2.find((element)=>{if(printA[i].videoId===element.videoId){return true}})){
        continue;
    }
    printA[i].time = JST(printA[i].time);
    printA[i].time2 = duration(printA[i]);
    printA2.push(printA[i]);
  }

  let printNewA = printA2.filter((element)=>{        
    return element.time3 > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
  });
  console.log(printNewLN);
  printNewA.sort(sortDate3);
  ObjectData.splice(0, ObjectData.length, printNewLN, printNewUC, printNewA);
}

const adjust01 = (list, listAll3, key2)=>{
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,contentDetails,status&id=${list}&maxResults=50&key=${key2}`)
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
      listAll3.push("error");
      console.error("エラー: adjust01", error);
    });
}

function adjust01s(){
  let list0 = [];
  listAll2.splice(0,listAll2.length);
  ObjectData[0].forEach((element)=>{
    listAll2.push(element.videoId);
  });
  ObjectData[1].forEach((element)=>{
    list0.push(element[1]);
  });
  list0.flat().forEach((element)=>{
    listAll2.push(element.videoId);
  });
  ObjectData[2].forEach((element)=>{
    listAll2.push(element.videoId);
  });
  divisor(listAll2);
  listAll3.splice(0,listAll3.length);
  listAll2.forEach((array)=>{
    adjust01(array, listAll3, key2);
  });
}

const adjust02 = (listAll3, listIcon, ObjectData)=>{
  if(listAll3.find((element)=>{if(element==="error"){return true}})){
    return;
  }
  if(listAll3.length===0){
    return;
  }
  let printLN = [];
  let printUC = [];
  let printA = [];
  for(let i=0; i<listAll3.length; i++){
    let icon1 = [];
    let icon2 = [];
    collaboration(listAll3[i], listIcon, icon1, icon2);
    if(icon1[0]==="/images/shakeHands.jpg" && icon2.length===0){
      continue;
    }
    if(listAll3[i].snippet.channelId ==="UCOg01LJmZF9UnwFbly73CVw" && /【RUST】/.test(listAll3[i].snippet.title) && /(音門るき|九条林檎|魔王トゥルシー|雛星あいる|桜鳥ミーナ|白粉いと|日和ちひよ|ミュウ・ガルシア|蒼宮よづり|亞生うぱる|糶|言のハ|るみなす・すいーと|偉雷アマエ|北白川かかぽ|ゆりかわゆん)/.test(listAll3[i].snippet.description)){
      const indexNumber = icon2.findIndex((element)=>{
        return element === listIcon[3];
      });
      if(indexNumber!==-1){
        icon2.splice(indexNumber, 1);
      }
    }
    if(listAll3[i].snippet.liveBroadcastContent==="live"){
      let newObject = {videoId:listAll3[i].id, videoTitle:replaceAll(listAll3[i].snippet.title), videoThumbnail:listAll3[i].snippet.thumbnails.medium.url, time:listAll3[i].liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2};
      newObject.time = standardTime(newObject.time);
      printLN.push(newObject);
    }else if(listAll3[i].snippet.liveBroadcastContent==="upcoming"){
      let newObject = {videoId:listAll3[i].id, videoTitle:replaceAll(listAll3[i].snippet.title), videoThumbnail:listAll3[i].snippet.thumbnails.medium.url, time:listAll3[i].liveStreamingDetails.scheduledStartTime, time2:"time2", status:listAll3[i].status.uploadStatus, icon:icon1[0], icon2:icon2};
      newObject.time2 = standardTime(newObject.time);
      newObject.time = dayjs(newObject.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
      printUC.push(newObject);
    }else if(listAll3[i].snippet.liveBroadcastContent==="none"){
      let newObject = {videoId:listAll3[i].id, videoTitle:replaceAll(listAll3[i].snippet.title), videoThumbnail:listAll3[i].snippet.thumbnails.medium.url, time:listAll3[i].liveStreamingDetails.actualStartTime, time2:listAll3[i].contentDetails.duration, time3:listAll3[i].liveStreamingDetails.actualStartTime, icon:icon1[0], icon2:icon2};
      newObject.time =dayjs(newObject.time).utc().add(9, "h").format("ddd MMM DD, HH:mm");
      newObject.time2 = duration(newObject);
      if(newObject.time3 < dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
        continue;
      }          
      printA.push(newObject);
    }
  }
  printLN.sort(sortDate);

  printUC.sort(sortDate2);
  let printNewUC = [];
  dateList(printUC, printNewUC);
      
  printA.sort(sortDate3);
      
  ObjectData.splice(0, ObjectData.length, printLN, printNewUC, printA);
}

function apiBoot(){
  console.log(key);
  listAll.splice(0,listAll.length);
  Official.api0(key);
  devA();
  devB();
  devC();
  devD();
  setTimeout(function(){divisor(listAll)},10000);
  printLN.splice(0,printLN.length);
  printUC.splice(0,printUC.length);
  printA.splice(0,printA.length);
  setTimeout(function(){process1s()},15000); 
  setTimeout(function(){process2(printLN, printUC, printA, ObjectData)},25000);    
}
  
cron.schedule('0 12,42 * * * *', () => {
  apiBoot();
  
  console.log('30分経過だよ');
  
});

cron.schedule('35 * * * * *', () => {
  adjust01s();
});

cron.schedule('50 * * * * *', () => {
  adjust02(listAll3, listIcon, ObjectData);
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

