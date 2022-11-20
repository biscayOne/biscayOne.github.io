const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
const xhr3 = new XMLHttpRequest();

const cron = require('node-cron');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const express = require('express');

const app = express();

app.use(express.static("public"));

const Sort = function(first, second){
  if (first.TIME > second.TIME){
    return 1;
  }else if (first.TIME < second.TIME){
    return -1;
  }else{
    return 0;
  }
}

let o = [];
let IDs = [];


let l = [];
let LNIDs = [];


let a = [];
let AIDs = [];


let w;
let total = [[],[],[]];

function BAC(){
  let IDS = [];
  let LNIDS = [];
  let AIDS = [];
  for(let i=0;i<IDs.length;i++){
    IDS.push(IDs[i].ID);
  }
  for(let i=0;i<LNIDs.length;i++){
    LNIDS.push(LNIDs[i].ID);
  }
  for(let i=0;i<AIDs.length;i++){
    LNIDS.push(AIDs[i].ID);
  }
  xhr.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id="+IDS+","+LNIDS+","+AIDS+"&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw");
    console.log("https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id="+IDS+","+LNIDS+","+AIDS+"&maxResults=50&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw");
    //リクエスト送信
    xhr.send();
  
    // 自動的に呼ばれる関数
    xhr.onreadystatechange = function () {
      
      if (xhr.readyState == 4 && xhr.status == 200) {
        // jsonをオブジェクトに変更
        const jsonObi = JSON.parse(xhr.responseText);
        o.length = 0;
        l.length = 0;
        a.length = 0;
        let COU;
        
        for(let i = 0; i < IDs.length ; i++){
          if(jsonObi.items[i].liveStreamingDetails.actualStartTime!==undefined){
            continue;
          }
          
          o.push({ID:IDs[i].ID, IMG:IDs[i].IMG,TITLE:IDs[i].TITLE, TIME:jsonObi.items[i].liveStreamingDetails.scheduledStartTime});
          }
          
        for(let i = 0; i < LNIDs.length ; i++){
          
        
          l.push({ID:LNIDs[i].ID, IMG:LNIDs[i].IMG,TITLE:LNIDs[i].TITLE, TIME:jsonObi.items[IDs.length+i].liveStreamingDetails.actualStartTime});
          }
          
          
        for(let i = 0; i < AIDs.length ; i++){
          
          
          if(jsonObi.items[IDs.length+LNIDs.length+i].liveStreamingDetails===undefined){
            continue;
          }
          a.push({ID:AIDs[i].ID, IMG:AIDs[i].IMG, TITLE:AIDs[i].TITLE, TIME:jsonObi.items[IDs.length+LNIDs.length+i].liveStreamingDetails.actualStartTime});
          }

          o.sort(Sort);
          l.sort(Sort);
          for(let i=0; i<l.length; i++){
            let from0;
            from0 = dayjs().utc().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
            console.log(from0);
            let from;
            from = dayjs(from0);
            let to;
            to = dayjs(l[i].TIME).utc().format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
            console.log(l[i].TIME);
            let time;
            time = from.diff(to, "second");
            console.log(time);
            let two;
            two = (Math.floor(time/3600));
            console.log(two);
            let one;
            one = (Math.floor(time%3600/60));
            let three;
            three = (Math.floor(time%3600%60));
          
            if(two<10){
              two = "0"+two;
            }
            console.log(two);
            if(one<10){
              one = "0"+one;
            }
          
            if(three<10){
              three = "0"+three;
            }
            console.log(two+":"+one+":"+three);
            l[i].TIME = two+":"+one+":"+three;
            
          }
          a.sort(Sort);
          let nd;
          for(let i = 0; i < o.length ; i++){
            
            nd = dayjs(o[i].TIME).utc().add(9, "h").format("ddd MMM DD, HH:mm");
            o[i].TIME = nd;
          }
          
          console.log(a[0].TITLE);
          w = a.filter((TIME)=>{
            
            console.log(TIME.TIME > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms"));
            return TIME.TIME > dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms");
            
          });
      
          
          console.log(w);
          
          for(let i = 0; i < w.length ; i++){
            let nd;
            nd = dayjs(w[i].TIME).utc().add(9, "h").format("ddd MMM DD, HH:mm");
            w[i].TIME = nd;
          }
          total.length = 0; 
          total.push(o);
          total.push(l);
          total.push(w);
        }
        
    }
    
}

function BAA(){
  
  
  xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWhFUlcawiD78qAD7zzS6Bw&maxResults=20&publishedAfter=" + dayjs().utc().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms") + "Z&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw&type=video");
  console.log("https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=UCWhFUlcawiD78qAD7zzS6Bw&maxResults=20&publishedAfter=" + dayjs().utc().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms") + "Z&key=AIzaSyBo5TPmmERm3zYP0Ngau6PlkaFu9XIBgiw&type=video");
  //リクエスト送信
  xhr.send();
  
  // 自動的に呼ばれる関数
  xhr.onreadystatechange = function () {
      // readyState XMLHttpRequest の状態 4: リクエストが終了して準備が完了
      // status httpステータス
      if (xhr.readyState == 4 && xhr.status == 200) {
          // jsonをオブジェクトに変更
          const jsonObj = JSON.parse(xhr.responseText);
          
          
          
          for(let i=0; i<jsonObj.items.length; i++){
            let IMG;
            let ID;
            let TITLE;
            let LNIMG;
            let LNID;
            let LNTITLE;
            let AIMG;
            let AID;
            let ATITLE;
            if(jsonObj.items[i].snippet.liveBroadcastContent==="upcoming"){
              
              
              IMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              console.log(jsonObj.items[i].snippet.thumbnails.medium.url);
              
              ID = jsonObj.items[i].id.videoId;
              
              TITLE = jsonObj.items[i].snippet.title;
              IDs.push({ID:ID,IMG:IMG,TITLE:TITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="live"){
              
              
              LNIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              LNID = jsonObj.items[i].id.videoId;
              
              LNTITLE = jsonObj.items[i].snippet.title;
              LNIDs.push({ID:LNID,IMG:LNIMG,TITLE:LNTITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="none"){
              
              if(jsonObj.items[i].snippet.publishedAt<dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
                continue;
              }
              
              AIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              AID = jsonObj.items[i].id.videoId;
              
              ATITLE = jsonObj.items[i].snippet.title;
              AIDs.push({ID:AID,IMG:AIMG,TITLE:ATITLE});
              console.log(jsonObj.items[i].snippet.title);
            }
          }
          
      }
  }
}

function BAE(){
  const date = dayjs().subtract(7, "d").$d;
  
  xhr2.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFkHpBGMeNSQW-j9-F0nxnQ&maxResults=20&publishedAfter=" + dayjs().utc().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms") + "Z&key=AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k&type=video");
  
  //リクエスト送信
  xhr2.send();
  
  // 自動的に呼ばれる関数
  xhr2.onreadystatechange = function () {
      // readyState XMLHttpRequest の状態 4: リクエストが終了して準備が完了
      // status httpステータス
      if (xhr2.readyState == 4 && xhr2.status == 200) {
          // jsonをオブジェクトに変更
          const jsonObj = JSON.parse(xhr2.responseText);
          
          
          
          for(let i=0; i<jsonObj.items.length; i++){
              
            if(jsonObj.items[i].snippet.liveBroadcastContent==="upcoming"){
              let IMG;
              let ID;
              let TITLE;
              
              IMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              
              ID = jsonObj.items[i].id.videoId;
              
              TITLE = jsonObj.items[i].snippet.title;
              IDs.push({ID:ID,IMG:IMG,TITLE:TITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="live"){
              let LNIMG;
              let LNID;
              let LNTITLE;
              
              LNIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              LNID = jsonObj.items[i].id.videoId;
              
              LNTITLE = jsonObj.items[i].snippet.title;
              LNIDs.push({ID:LNID,IMG:LNIMG,TITLE:LNTITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="none"){
              let AIMG;
              let AID;
              let ATITLE;

              if(jsonObj.items[i].snippet.publishedAt<dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
                continue;
              }
              
              AIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              AID = jsonObj.items[i].id.videoId;
              
              ATITLE = jsonObj.items[i].snippet.title;
              AIDs.push({ID:AID,IMG:AIMG,TITLE:ATITLE});
            }
          }
          
      }
  }
}

function BAF(){
  const date = dayjs().subtract(7, "d").$d;
  
  xhr3.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJGQPbaqTY91JhVzD8gIZyw&maxResults=20&publishedAfter=" + dayjs().utc().subtract(10, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms") + "Z&key=AIzaSyARAMAEiJna6Tr5yf8SAulL7TZ1w0w7R5k&type=video");
  
  //リクエスト送信
  xhr3.send();
  
  // 自動的に呼ばれる関数
  xhr3.onreadystatechange = function () {
      // readyState XMLHttpRequest の状態 4: リクエストが終了して準備が完了
      // status httpステータス
      if (xhr3.readyState == 4 && xhr3.status == 200) {
          // jsonをオブジェクトに変更
          const jsonObj = JSON.parse(xhr3.responseText);
          
          
          
          for(let i=0; i<jsonObj.items.length; i++){
              
            if(jsonObj.items[i].snippet.liveBroadcastContent==="upcoming"){
              let IMG;
              let ID;
              let TITLE;
              
              IMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              
              ID = jsonObj.items[i].id.videoId;
              
              TITLE = jsonObj.items[i].snippet.title;
              IDs.push({ID:ID,IMG:IMG,TITLE:TITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="live"){
              let LNIMG;
              let LNID;
              let LNTITLE;
              
              LNIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              LNID = jsonObj.items[i].id.videoId;
              
              LNTITLE = jsonObj.items[i].snippet.title;
              LNIDs.push({ID:LNID,IMG:LNIMG,TITLE:LNTITLE});
            }else if(jsonObj.items[i].snippet.liveBroadcastContent==="none" && jsonObj.items[i].snippet.publishedAt>dayjs().utc().subtract(1, "d").format("YYYY-MM-DD"+"T"+"HH:mm:ss.ms")){
              let AIMG;
              let AID;
              let ATITLE;

              
              
              AIMG = jsonObj.items[i].snippet.thumbnails.medium.url;
              
              AID = jsonObj.items[i].id.videoId;
              
              ATITLE = jsonObj.items[i].snippet.title;
              AIDs.push({ID:AID,IMG:AIMG,TITLE:ATITLE});
            }
          }
          
      }
  }
}

function BAB(){
    IDs.length = 0;          
    LNIDs.length = 0;
    AIDs.length = 0;
    BAA();
    BAE();
    BAF();
    setTimeout(BAC, 7000);
  }


cron.schedule('0 */30 * * * *', () => {
  BAB();
  console.log('30分経過だよ');
  
});

const q = [1,2];

app.get('/', (req, res) => {
  console.log(o);
  res.render('hello.ejs', {total:total});
  
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



const aa = () => {cron.schedule('0 */10 * * * *', () => {
  console.log('10分経過だよ');
});
};
