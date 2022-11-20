const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const cron = require('node-cron');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const { response } = require("express");
dayjs.extend(utc);

let a = "ああ";

let b = [{a:2},{a:4},{a:6},{a:7}];
let BB = [[1,2],[2,3]];

// 「#change-css」要素に対するclickイベントを作成してください
let o = [];


const base_youtube_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFkHpBGMeNSQW-j9-F0nxnQ&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw';

// 関数1
const promiseFunc = (value,value2) => {
  return new Promise((resolve, reject) => {
    console.log(value + value2);
    $.ajax({
      type: 'GET',
      url: value + value2,
      datatype: 'json',
      success: function(json){
        resolve(json.items);
        
      },
      error: function(){
        reject();
      }
    });
  });
};

// 関数2
const idFunc = (ID)=>{
  return new Promise((resolve, reject) => {
    console.log(ID);
    $.ajax({
      type: 'GET',
      url: "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id="+ID+"&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw",
      datatype: 'json',
      success: function(json){
        resolve(json.items);
        
      },
      error: function(){
        reject();
      }
    });
  });
}

async function asyncFunc() {
  // 並行して処理が実行され、全ての処理が終わるまで待機
  const values = await Promise.all([
    
    promiseFunc(base_youtube_url,'&eventType=upcoming&type=video'),
    
  ]);
  console.log(values);

  const jsonitem = values.flat();

  

  

  let num = jsonitem.length;

  let ids = [];
  let imgs = [];
  
  // ID と IMG をリストに入れる
  for(let i = 0; i < num ; i++){
    let ID = jsonitem[i].id.videoId;
    ids.push(ID);
    let IMG = jsonitem[i].snippet.thumbnails.default.url;
    imgs.push(IMG);
    
    
    
    
    
    
    

    
    
    
    
    
  }
  // IDリストを使いまとめて情報を入手
  let X = await Promise.all([
    
    idFunc(ids),
    
  ]);

  let jsonitemX = X.flat();

  // オブジェクトリストを初期化
  o.length = 0;

  // オブジェクトリストに情報を一括して入れる
  for(let i = 0; i < num ; i++){
  
  o.push({ID:ids[i], IMG:imgs[i], TIME:jsonitemX[i].liveStreamingDetails.scheduledStartTime});
  }

  // オブジェクトリストを日付順に入れ替える
  o.sort(function(first, second){
    if (first.TIME > second.TIME){
      return 1;
    }else if (first.TIME < second.TIME){
      return -1;
    }else{
      return 0;
    }
  });
  
  // HTMLに情報を渡す
  for(let i=0; i<o.length; i++){
    
    $("#youtubeList").append('<iframe src="https://www.youtube.com/embed/' + o[i].ID + '" frameborder="1" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" allowfullscreen></iframe><br><h1>'+o[i].TIME+'</h1>');
    $("#image").append('<img src='+o[i].IMG+'>');
  }
}


for(let i=0; i<o.length; i++){
    
if(b.find((n)=>{if(o[i]===n.a){return true}})){
    continue;
}
console.log(o[i]);
}

console.log(BB[1][1]);
console.log(BB[0].length);


console.log(dayjs().subtract(7, "d").subtract(1, "h"));
let day = dayjs().subtract(7, "d").subtract(1, "h");

console.log(day.hour());
console.log("https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=UCFkHpBGMeNSQW-j9-F0nxnQ&maxResults=20&publishedAfter=" + dayjs().subtract(7, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms") + "Z&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw&type=video");

let q = [1,2];
q = [3,4];
console.log(q);

console.log(dayjs().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss")+".00Z");

let DA = [dayjs().subtract(5, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss")+"005",dayjs().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss")+"0Z",dayjs().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss")+"00"];
DA.sort(function(first, second){
    if (first > second){
      return 1;
    }else if (first < second){
      return -1;
    }else{
      return 0;
    }
  });

  let from0 = dayjs().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
      let from = dayjs(from0);
      let to = dayjs("2022-09-10T09:17:34.95Z");
      let time = from.diff(to, "second");
      let two = (Math.floor(time/3600));
      console.log(Math.floor(time/3600));
      let one = (Math.floor(time%3600/60));
      let three = (Math.floor(time%3600%60));
    
      if(two<10){
        two = "0"+two;
      }
    
      if(one<10){
        one = "0"+one;
      }
    
      if(three<10){
        three = "0"+three;
      }
    
    let Now = new Date();
    let NewNow = Now.setHours(Now.getHours()+1);
    let NewDate = new Date(NewNow);
    console.log(NewDate.getDate());

    console.log(dayjs().utc().format());

    for(let i=0;i<100;i++){
      let a = i;
      console.log(a);
    }


class VEE{
  constructor(name, icon, channelId, listLN, listUC, listA, twitterId, key){
    this.name = name;
    this.icon = icon;
    this.channelId = channelId;
    this.listLN = listLN;
    this.listUC = listUC;
    this.listA = listA;
    this.twitterId = twitterId;
    this.key = key;    
  }
  api(){
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&maxResults=20&publishedAfter=${dayjs().utc().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")}Z&key=${this.key}&type=video`)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{

        let videoIdLN;
        let videoTitleLN;
        let videoThumbnailLN;
        let videoIdUC;
        let videoTitleUC;
        let videoThumbnailUC;
        let videoIdA;
        let videoTitleA;
        let videoThumbnailA;

        for(let i=0; i<json.items.length; i++){
          if(json.items[i].snippet.liveBroadcastContent==="upcoming"){                                        
            videoIdLN = json.items[i].id.videoId;            
            videoTitleLN = json.items[i].snippet.title;
            videoThumbnailLN = json.items[i].snippet.thumbnails.medium.url;
            this.listLN.push({videoId:videoIdLN, videoTitle:videoTitleLN, videoThumbnail:videoThumbnailLN});
          }else if(json.items[i].snippet.liveBroadcastContent==="live"){
            videoIdUC = json.items[i].id.videoId;            
            videoTitleUC = json.items[i].snippet.title;
            videoThumbnailUC = json.items[i].snippet.thumbnails.medium.url;
            this.listUC.push({videoId:videoIdUC, videoTitle:videoTitleUC, videoThumbnail:videoThumbnailUC});
          }else if(json.items[i].snippet.liveBroadcastContent==="none"){
            if(json.items[i].snippet.publishedAt<dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
              continue;
            }
            videoIdA = json.items[i].id.videoId;            
            videoTitleA = json.items[i].snippet.title;
            videoThumbnailA = json.items[i].snippet.thumbnails.medium.url;
            this.listA.push({videoId:videoIdA, videoTitle:videoTitleA, videoThumbnail:videoThumbnailA, name:this.name, icon:this.icon});
          }
        }
      });
  }
}



const apiBoot = ()=>{
  IDs.length = 0;          
  LNIDs.length = 0;
  AIDs.length = 0;
  Promise.all([Ruki.api()]).then(()=>{
    UD();
  });
}

const UD = (listLN, listUC, listA, printLN, printUC, printNewA, ObjectData)=>{
  let videoIdLNs = [];
  let videoIdUCs = [];
  let videoIdAs = [];
  let printA = [];
  for(let i=0; i<listLN.length; i++){
    videoIdLNs.push(listLN[i].videoId);
  }
  for(let i=0; i<listUC.length; i++){
    videoIdUCs.push(listUC[i].videoId);
  }
  for(let i=0; i<listA.length; i++){
    videoIdAs.push(listA[i].videoId);
  }
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoIdLNs},${videoIdUCs},${videoIdAs}&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw`)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        printLN.splice(0,printLN.length);
        printUC.splice(0,printUC.length);
        printA.splice(0,printA.length);
        for(let i=0; i<listLN.length; i++){        
          printLN.push({videoId:listLN[i].videoId, videoTitle:listLN[i].videoTitle, videoThumbnail:listLN[i].videoThumbnail, time:json.items[i].liveStreamingDetails.actualStartTime, name:listLN[i].name, icon:listLN[i].icon});
        }
        for(let i=0; i<listUC.length; i++){
          if(json.items[listLN.length+i].liveStreamingDetails.actualStartTime!==undefined){
            continue;
          }          
          printUC.push({videoId:listUC[i].videoId, videoTitle:listUC[i].videoTitle, videoThumbnai:listUC[i].videoThumbnai, time:json.items[listLN.length+i].liveStreamingDetails.scheduledStartTime, name:listUC[i].name, icon:listUC[i].icon});
        }
        for(let i=0; i<listA.length; i++){
          if(json.items[listLN.length+listUC.length+i].liveStreamingDetails===undefined){
            continue;
          }
          printA.push({videoId:listA[i].videoId, videoTitle:listA[i].videoTitle, videoThumbnai:listA[i].videoThumbnai, time:json.items[listLN.length+listUC.length+i].liveStreamingDetails.actualStartTime, name:listA[i].name, icon:listA[i].icon});
        }
        const sortDate = (first, second)=>{
          if(first.time>second.time){
            return 1;
          }else if(first.time<second.time){
            return -1;
          }else{
            return 0;
          }
        }
        printLN.sort(sortDate);
        let timeNow;
        let newTimeNow;
        let targetTime;
        let differentTime;
        let hours;
        let minutes;
        let seconds;
        for(let i=0; i<printLN.length; i++){          
          timeNow = dayjs().utc().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
          newTimeNow = dayjs(timeNow);
          targetTime = dayjs(printLN[i].time).utc().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
          differentTime = newTimeNow.diff(targetTime, "second");
          hours = (Math.floor(differentTime/3600));          
          minutes = (Math.floor(differentTime%3600/60));
          seconds = (Math.floor(differentTime%3600%60));        
          if(hours<10){
            hours = "0"+hours;
          }
          if(minutes<10){
            minutes = "0"+minutes;
          }        
          if(seconds<10){
            seconds = "0"+seconds;
          }
          printLN[i].time = hours+":"+minutes+":"+seconds;          
        }
        printUC.sort(sortDate);
        printA.sort(sortDate);
        const JST = (print)=>{
          let plusNineHours;
          for(let i=0; i<print.length; i++){           
            plusNineHours = dayjs(print[i].TIME).utc().add(9, "h").format("ddd MMM DD, HH:mm");
            print[i].TIME = plusNineHours;
          }
        }
        JST(printUC);
        printNewA = printA.filter((element)=>{            
          return element.time > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");         
        });
        JST(printNewA);
        ObjectData.splice(0, ObjectData.length);
        ObjectData.push(printLN);
        ObjectData.push(printUC);
        ObjectData.push(printA);
      });
}

const date = new Date('2022/09/15 15:59:59');
console.log(date.getTime());
console.log(((Date.now()-date.getTime())-(9*60*60*1000))/1000/60/60);
console.log(dayjs().utc().format("YYYY/MM/DD"+" "+"HH:mm:ss"));

let timeNow;
          let newTimeNow;
          let targetTime;
          let differentTime;
          let hours;
          let minutes;
          let seconds;
          for(let i=0; i<printLN.length; i++){          
            timeNow = dayjs().utc().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
            newTimeNow = dayjs(timeNow);
            targetTime = dayjs(printLN[i].time).utc().format("YYYY/MM/DD"+" "+"HH:mm:ss");
            differentTime = newTimeNow.diff(targetTime, "second");
            hours = (Math.floor(differentTime/3600));
            console.log(hours);
            minutes = (Math.floor(differentTime%3600/60));
            seconds = (Math.floor(differentTime%3600%60));        
            if(hours<10){
              hours = "0"+hours;
            }
            if(minutes<10){
              minutes = "0"+minutes;
            }        
            if(seconds<10){
              seconds = "0"+seconds;
            }
            printLN[i].time = hours+":"+minutes+":"+seconds;          
          }

if(/Ruki Otokado 音門るき \[VEE\]/.test(text) || /音門るき|音門\s+るき/.test(title)){
  icon2.push(listIcon[1]);
}
if(/九条 林檎【Kujo Ringo Official】/.test(text) || /九条林檎|九条\s+林檎/.test(title)){
  icon2.push(listIcon[2]);
}
if(/Syusetu kohaku\/秋雪こはく/.test(text) || /秋雪こはく|秋雪\s+こはく/.test(title)){
  icon2.push(listIcon[3]);
}
if(/魔王トゥルシー \/ Tulsi-Nightmare Madness IV/.test(text) || /魔王トゥルシー|魔王\s+トゥルシー/.test(title)){
  icon2.push(listIcon[4]);
}
if(/雛星あいる Hinahoshi Airu/.test(text) || /雛星あいる|雛星\s+あいる/.test(title)){
  icon2.push(listIcon[5]);
}
if(/桜鳥ミーナ \/ Audrey Mina/.test(text) || /桜鳥ミーナ|桜鳥\s+ミーナ/.test(title)){
  icon2.push(listIcon[6]);
}
if(/白粉いと \/ Oshiro Ito/.test(text) || /白粉いと|白粉\s+いと/.test(title)){
  icon2.push(listIcon[7]);
}
if(/日和ちひよ \/ Hiyori Chihiyo/.test(text) || /日和ちひよ|日和\s+ちひよ/.test(title)){
  icon2.push(listIcon[9]);
}
if(/Mew Garcia \/ ミュウ・ガルシア/.test(text) || /ミュウ・ガルシア/.test(title)){
  icon2.push(listIcon[10]);
}
if(/Aomiya Yozuri Ch\. 蒼宮よづり/.test(text) || /蒼宮よづり|蒼宮\s+よづり/.test(title)){
  icon2.push(listIcon[12]);
}
if(/亞生うぱる【VEE】/.test(text) || /亞生うぱる|亞生\s+うぱる/.test(title)){
  icon2.push(listIcon[13]);
}
if(/糶 \/ URIYONE/.test(text) || /糶/.test(title)){
  icon2.push(listIcon[14]);
}
if(/言のハ-Cotonoha-/.test(text) || /言のハ/.test(title)){
  icon2.push(listIcon[15]);
}
if(/るみなす・すいーと【LUMINOUS Ch】/.test(text) || /るみなす・すいーと/.test(title)){
  icon2.push(listIcon[16]);
}
if(/偉雷アマエ \/ Erai Amae/.test(text) || /偉雷アマエ|偉雷\s+アマエ/.test(title)){
  icon2.push(listIcon[17]);
}
if(/北白川かかぽ \/ Kakapo Kitashirakawa/.test(text) || /北白川かかぽ|北白川\s+かかぽ/.test(title)){
  icon2.push(listIcon[18]);
}
if(/ゆりかわゆん YURIKAWA YUN/.test(text) || /ゆりかわゆん|ゆりかわ\s+ゆん/.test(title)){
  icon2.push(listIcon[19]);
}
if(/華灯/.test(text) || /華灯/.test(title)){
  icon2.push("/images/Hanavee.jpg");
}