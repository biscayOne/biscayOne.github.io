$(function() {

  const listIcons = [];
  const listIconString = $("#twitterAccount").attr("optionData");
  listIcons.push(listIconString.match(/^.+?(?=,)/)[0]);
  listIconString.match(/(?<=,).+?(?=,)/g).forEach((channelIcon)=>{
    listIcons.push(channelIcon);
  });
  listIcons.push(listIconString.match(/(?<=,)[^,]+$/)[0]);
  
  function set0(num){
    return ("0" + num).slice(-2);
  }

  class VEE{
    constructor(channelName, channelURL, channelIcon){
      this.channelName = channelName;
      this.channelURL = `https://www.youtube.com/channel/${channelURL}`;
      this.channelIcon = channelIcon;
    }
    rM(videoId, setList){
      return {channelName: this.channelName, channelURL: this.channelURL, channelIcon: this.channelIcon, videoId: videoId, setList: setList};
    }
    rV(videoId){
      return {channelIcon: this.channelIcon, videoId: videoId};
    }
  }

  const Official = new VEE("VEE official channel", "UCXWiGKfAXjHUsxa_GNLgv-A", listIcons[0]);

  const Ruki = new VEE("Ruki Otokado 音門るき [VEE]", "UCAUicVZlApAIhcdL9df3gWw", listIcons[1]);
  const Ringo = new VEE("九条 林檎【Kujo Ringo Official】", "UCf57-IJn5mUJDyqd9uNEmrg", listIcons[2]);
  const Kohaku = new VEE("Syusetu kohaku/秋雪こはく", "UCQLyq7TDKHlmp2Ufd5Z2qMw", listIcons[3]);
  const Tulsi = new VEE("魔王トゥルシー / Tulsi-Nightmare Madness IV", "UCUdlDvZJGGP78zvta3swIhw", listIcons[4]);
  const Airu = new VEE("雛星あいる Hinahoshi Airu", "UCJGQPbaqTY91JhVzD8gIZyw", listIcons[5]);

  const Mina = new VEE("桜鳥ミーナ / Audrey Mina", "UCFkHpBGMeNSQW-j9-F0nxnQ", listIcons[6]);
  const Ito = new VEE("白粉いと / Oshiro Ito", "UCzv_W7v9ix39tFPDB-TV0Vg", listIcons[7]);
  const Chihiyo = new VEE("日和ちひよ / Hiyori Chihiyo", "UCnBOUGfsfcD6nUbpdDAwMfw", listIcons[9]);
  const Mew = new VEE("Mew Garcia / ミュウ・ガルシア", "UC7FUtGR0AsvwzXrEmdUBAFw", listIcons[10]);

  const Yozuri = new VEE("Aomiya Yozuri Ch. 蒼宮よづり", "UCWhFUlcawiD78qAD7zzS6Bw", listIcons[12]);
  const Uparu = new VEE("亞生うぱる【VEE】", "UCQfp96ujs7PXiUG6ov29RKg", listIcons[13]);
  const Uriyone = new VEE("糶 / URIYONE", "UCJpsYQtNyVDc023clkqMhTQ", listIcons[14]);
  const Cotonoha = new VEE("言のハ-Cotonoha-", "UCOd-qYH_8e-tgxpPIcqwenA", listIcons[15]);
  const Luminous = new VEE("るみなす・すいーと【LUMINOUS Ch】", "UC02dJeNmcQLqENdHFG1svJw", listIcons[16]);

  const Amae = new VEE("偉雷アマエ / Erai Amae", "UC6b4Ta_J0wbylnPu1auaQiA", listIcons[17]);
  const Kakapo = new VEE("北白川かかぽ / Kakapo Kitashirakawa", "UCEoAD_2jSLoYQd2MJZxWuxQ", listIcons[18]);
  const Yun = new VEE("ゆりかわゆん YURIKAWA YUN", "UCngFYCS8p8PX9wf4V8kLVgw", listIcons[19]);

  function showClock() {
    const Now = new Date();
    const JST = new Date();
    JST.setHours(Now.getHours()+9);
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const DWs = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const DW = DWs[JST.getUTCDay()];
    const Month = Months[JST.getUTCMonth()];
    const DD = set0(JST.getUTCDate());  
    const hh = set0(JST.getUTCHours() );
    const mm = set0(JST.getUTCMinutes());
    const displayLeft = DW + ' ' + Month + ' ' + DD + ', ' + hh;
    const displayRight = mm;
    $("#hours").text(displayLeft);
    $("#minutes").text(displayRight);
  }

  const $blinking = $("#blinking");
  function blinking(){
    if($blinking.hasClass("light")){
      $blinking.css("color","#333"); 
      $blinking.removeClass("light");
    }else{
      $blinking.css("color","#fff");
      $blinking.addClass("light");
    }
  }

  let flagAko = false;
  let numAko = 0;
  function birthdayMessage(){
    const Now = new Date();
    const JST = new Date();
    JST.setHours(Now.getHours()+9);  
    const Month = JST.getUTCMonth()+1;
    const Day = JST.getUTCDate();  
    const HBD = Month + '月' + Day + '日';

    function birthdayCard(HBD, name, twitterID, twitterIcon, imageColor, birthdayImage, imageCredit, imageCreditId, imageCover){
      $("#birthdayParentFrame").css("display", "block");
      $("#birthdayString").html(`Happy Birthday!<br><br><span style="font-family: serif">本日${HBD}は…</span><br><a id="underLine" href=https://twitter.com/${twitterID} target="_blank" rel="noopener noreferrer">${name}</a> <span style="font-family: serif">の誕生日！</span>`);
      $("#birthdayIconParent").attr("href", `https://twitter.com/${twitterID}`);
      $("#birthdayIcon").attr("src", `/images/${twitterIcon}.jpg`);
      $("#birthdayIcon").css("border-color", `${imageColor}`);
      $("#birthdayImage").attr("src", `/images/${birthdayImage}`);
      $("#birthdayImageCredit").text(`イラストAC / ${imageCredit}`);
      $("#birthdayImageCredit").attr("href", `https://www.ac-illust.com/main/profile.php?id=${imageCreditId}`);
      $("#birthdayImageCover").attr("src", `/images/${imageCover}`)
    }

    const newBirthdayCard = birthdayCard.bind(null, HBD);

    switch(HBD){      
      case "1月10日":
        newBirthdayCard("白粉 いと", "oshiroito", "Ito", "#f0f0f0", "shortCake.png", "こびとイエロー", "23436669", "cuteGhost.jpg");
        break;
      case "1月21日":
        newBirthdayCard("るみなす・すいーと", "luminous_amaama", "Luminous", "#0bf4f3", "sweetsFrame.jpeg", "ノゾミ", "Lq7CAcAX", "cyberSpace.jpg");
        break;
      case "2月7日":
        newBirthdayCard("ミュウ・ガルシア", "MewGarcia_king", "Mew", "#cb8bff", "champagneFrame.png", "Oyu", "rcfTi1QV", "purpleChair.jpeg");
        break;
      case "2月17日":
        //newBirthdayCard("神童児 丫子", "Ako_shindouji", "Ako");
        flagAko = true;
        numAko = -1;
        break;
      case "3月1日":
        newBirthdayCard("日和 ちひよ", "hiyohiyovee", "Chihiyo", "#ffc40c", "hiyokoFrame.png", "kaka", "tpHK7Ug2");
        break;
      case "3月17日":
        newBirthdayCard("桜鳥 ミーナ", "mina0x0audrey", "Mina", "#ff9ee0", "beerFrame.png", "あまど", "4owBPL7y");
        break;
      case "4月7日":
        newBirthdayCard("糶(うりよね)", "URIYONEE", "Uriyone");
        break;
      case "4月20日":
        newBirthdayCard("亞生 うぱる", "UPARU_JP", "Uparu");
        break;
      case "4月26日":
        newBirthdayCard("偉雷 アマエ", "EraiAmae", "Amae");
        break;
      //case "4月27日":
        //newBirthdayCard("漣 とあ", "toatoaman", "Toa");
        //break;
      case "5月1日":
        newBirthdayCard("言のハ", "TwiCoto", "Cotonoha");
        break;
      case "6月15日":
        newBirthdayCard("北白川 かかぽ", "kakapo_research", "Kakapo");
        break;
      case "6月22日":
        newBirthdayCard("ゆりかわ ゆん", "yun_yurikawa", "Yun");
        break;
      case "8月3日":
        newBirthdayCard("音門 るき", "Ruki_vita_666", "Ruki");
        break;
      case "9月16日":
        newBirthdayCard("雛星 あいる", "airu_Lv115", "Airu");
        break;
      case "10月1日":
        newBirthdayCard("秋雪 こはく", "Syusetu_kohaku", "Kohaku");
        break;
      case "11月3日":
        newBirthdayCard("蒼宮 よづり", "aomiyayozuri", "Yozuri", "#414fa3");
        break;
      case "11月24日":
        newBirthdayCard("魔王 トゥルシー", "IDmadeMiruna", "Tulsi", "#d72d6d");
        break;
      case "12月30日":
        newBirthdayCard("九条 林檎", "ringo_0_0_5", "Ringo", "#A50000", "birthdayCake.png", "たののすけ", "2T5D2rg6", "vampireCastle.jpg");
        break;
    }
  }
  const $video = $(".video");
  const $videoLN = $(".videoLN");
  const $videoUC = $(".videoUC");
  
  function brVideoTitle(){
    for(let i=0; i<$video.length; i++){    
      const text = $video.eq(i).find(".videoTitle").text();
      $video.eq(i).find(".videoTitle").html(text);
    } 
  }

  function elapsedTime(){
    for(let i=0; i<$videoLN.length; i++){
      const Now = new Date();
      const actualStartTime = $videoLN.eq(i).find(".time").text();
      const actualStartTimeDate = new Date(actualStartTime);
      let hours = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000/3600);
      let minutes = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000%3600/60);
      let seconds = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000%3600%60);
      hours = set0(hours);
      minutes = set0(minutes);       
      seconds = set0(seconds);
      const elapsedTime = hours+":"+minutes+":"+seconds+" 経過";
      $videoLN.eq(i).find(".time").text(elapsedTime);
    }
  }

  function orangeTime(){
    for(let i=0; i<$videoUC.length; i++){
      const $currentVideoUC = $videoUC.eq(i);
      const Now = new Date();
      const scheduledStartTime = $currentVideoUC.find(".time").attr("optionTime");
      const scheduledStartTimeDate = new Date(scheduledStartTime);
      const waitingTime = (scheduledStartTimeDate.getTime()-(Date.now()+(Now.getTimezoneOffset()*60*1000)))/1000/3600;
      
      if(waitingTime < 1.0){
        $currentVideoUC.find(".faVideo").removeClass("fa-hourglass-start");
        $currentVideoUC.find(".faVideo").addClass("fa-bell faa-wrench animated");
        $currentVideoUC.addClass("orange");
        $currentVideoUC.find(".timeParent").addClass("orange");     
        $currentVideoUC.find(".videoDetail").addClass("orange");
        $currentVideoUC.find(".collaboration").addClass("orange");
      }
      if(waitingTime < -1.0){
        $currentVideoUC.find(".videoThumbnail").css("opacity", "0.62");
        $currentVideoUC.find(".faVideo").removeClass("fa-bell faa-wrench animated");
        $currentVideoUC.find(".faVideo").addClass("fa-triangle-exclamation");
        $currentVideoUC.removeClass("orange");        
        $currentVideoUC.find(".timeParent").removeClass("orange");
        $currentVideoUC.find(".videoDetail").removeClass("orange");
        $currentVideoUC.find(".collaboration").removeClass("orange");
        
      }
      if(waitingTime < -3.0){
        $currentVideoUC.parent(".videoParent").addClass("emergency");
        $currentVideoUC.parent(".videoParent").css("display", "none");
      }                   
    }
  }

  const $htmlBody = $("html, body");
  $("#btnLN").click(function(){
    const distance = $("#headlineLN").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $htmlBody.animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $htmlBody.animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $htmlBody.animate({'scrollTop': distance-96},500);
    }
  });
  $("#btnUC").click(function(){
    const distance = $("#headlineUC").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $htmlBody.animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $htmlBody.animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $htmlBody.animate({'scrollTop': distance-96},500);
    }
  });
  $("#btnA").click(function(){
    const distance = $("#headlineA").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $htmlBody.animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $htmlBody.animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $htmlBody.animate({'scrollTop': distance-96},500);
    }
  });
  $("#btnP").click(function(){
    const distance = $("#headlineP").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $htmlBody.animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $htmlBody.animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $htmlBody.animate({'scrollTop': distance-96},500);
    }
  });

  showClock();
  setInterval(showClock,1000);
  setInterval(blinking,500);

  birthdayMessage();
  const soundEffect = new Audio("/musics/lightning-strike-2.mp3");
  soundEffect.volume = 0.2;
  let flag = true;
  $("#bICP").click(function(e){
    if(flag){
      flag = false;
      //$("#incubation").addClass("incubator").on("animationend", function(){
        //$("#twoHearts").addClass("twoHeartsFadeIn").on("animationend", function(){$("#birthdayImageCoverParent").fadeOut(2200)});
      //});
      soundEffect.play();
      $("#thunderShockParent").fadeIn(1500, function(){
        setTimeout(function(){
          $("#bICP").fadeOut(2000);
        }, 1500);
      });
    }
  });

  $("#btnOpen").click(function(){
    const $this = $(this);
    const listTalent0 = [
      Mina.rM("vH36Ly8-R2A", [507, 1509, 2453, 3218, 3661, 4202, 4532, 5188, 5401, 7090, 7465, 8002]),
      Yozuri.rM("2Hv1HTVQCZ0", [601, 1507, 2588, 3434, 3947]),
      Cotonoha.rM("yiB8kzdO0Po", [195,  730, 1084, 1398, 1781, 2274, 2612, 3190, 3714, 4080, 4435, 4821, 5263, 5776, 6182, 6656, 7121]),
      Kakapo.rM("b3EkW08wRKE", [442, 972, 1467, 2200, 2717]),
      Yun.rM("KFkLtBI3Kp8", [387, 780, 1445, 2222, 3217, 3942, 5399, 5733, 6094]),
    ]
    const listTalent = [
                        Official.rM("DTrfSlMN8Sc", [0]),
                        Ruki.rM("OXJqcRFVjn4", [500,920,1628,2313,2808,3329,3678,4126,4614]),
                        Ringo.rM("Ybn83xsSN4I", [0]),
                        Tulsi.rM("FAfMGAPOK-o", [510,757,1067,1378,1701,1838,2186,2574,2936,3362,3672,3951,3977]),
                        Airu.rM("Jva1xZW5TzY", [407, 800, 1198, 1506, 1712, 2312, 2663, 3136, 3643]),
                        // {channelName:Mina.channelName, videoId:"G153NwRgQcI", setList:["83", "498", "1008"], channelURL:Mina.channelURL, channelIcon:Mina.channelIcon},
                        Mina.rM("ZQPj-CbqfHw", [5080,8702,11865,12565,13027,13542,14464,14971,15051,15160,15250,15331,15492,15626,17156,18522,19053,19890,22040,23222,23985,24460,26201,26766,27314,27753,27888,28075,28263,28574,28660,28759,29017,29098,29201,29479,29605,29696,31082,31681,31906,32431,32692,32843,33470,33602,33746,33862,33971,34180,34342,34473,34526,34701,34815,34925,35310,35276,35567,35709,35862,35994,36238,36563,36732,36890,37081,37200,37357,37487,37664,37807,37920,38181,38296,38618,38741,38895,39956,40405,40544,40902,41118,41289,41405,41860,42249]),
                        Ito.rM("Q25tRiC4fuE", [0]),
                        Chihiyo.rM("mp80jhyD4sI", [559,1030,1255,1491,2165,2609,3643,3958,4153,4584,4956]),
                        Mew.rM("J_9d34xpeR0", [2411,3416,4026,4547,5067,5576,6042,6524,7036,7642]),
                        Yozuri.rM("6erCSelnPi4", [588,1895,2491,3150,3563]),
                        // {channelName:Cotonoha.channelName, videoId:"KhLySKBaoEs", setList:["446", "924", "1607", "2033", "3078"], channelURL:Cotonoha.channelURL, channelIcon:Cotonoha.channelIcon},
                        Cotonoha.rM("sfP79AXjimE", [821,1625,2028,2671,3111,3372,3907,4530,5053,5310,5588,6107,6507]),
                        Luminous.rM("lLM0ZB_CUkk", [190,1008,1282,1858,2757,3088,3661,4051,4432,5477,6359]),
                        Amae.rM("KmYh1T2JImg", [426,916,1309,1659,1940,2246,2512,2929]),
                        Kakapo.rM("Se7Nd_UwMjE", [0]),
                        Yun.rM("XX8a2I9mZEA", [216, 491, 797, 1270]),
                       ];
    const num = Math.floor(Math.random() * (listTalent.length));
    const num2 = Math.floor(Math.random() * (listTalent[num].setList.length));
    if(!$this.hasClass("openT")){
      $("#recommendedVideo").attr("src", `https://www.youtube.com/embed/${listTalent[num].videoId}?start=${String(listTalent[num].setList[num2])}`);      
      $.when($("#recommendedTalent").slideDown(500)).done(function(){$this.text("CLOSE")});
      $(".channelIcon").attr("src", listTalent[num].channelIcon);
      $(".channelName").text(listTalent[num].channelName);
      $(".channelURL").attr("href", listTalent[num].channelURL);
      $(".recommendedVideoParent").addClass("fadeIn");
      $(".channelIcon").addClass("fadeIn");
      $(".channelName").addClass("fadeIn");    
      $this.addClass("openT");      
    }else{
      $("#recommendedVideo").attr("src", "");
      $(".channelIcon").attr("src", "");
      $(".channelName").text("");
      $(".channelURL").attr("href", "");
      $.when($("#recommendedTalent").slideUp(500)).done(function(){$this.text("OPEN")}); 
      $(".recommendedVideoParent").removeClass("fadeIn");
      $(".channelIcon").removeClass("fadeIn");
      $(".channelName").removeClass("fadeIn");
      $this.removeClass("openT");      
    }
  });

  brVideoTitle();
  elapsedTime();
  orangeTime();

  function videoNG(listNG){
    listNG.forEach((videoId)=>{
      const re = new RegExp(videoId);
      for(let i=0; i<$video.length; i++){
        const $currentVideo = $video.eq(i);
        if(re.test($currentVideo.find("a").attr("href"))){
          $currentVideo.parent(".videoParent").css("display", "none");
          if($currentVideo.hasClass("videoUC")){
            $currentVideo.parent(".videoParent").addClass("emergency");
          }
        }
      }
    });
  }
  videoNG([]);
  
  for(let i=0; i<$(".scheduleDateParent").length; i++){
    const currentScheduleDateParent = $(".scheduleDateParent").eq(i);
    const videoParent = currentScheduleDateParent.find(".videoParent").length;
    const emergency = currentScheduleDateParent.find(".emergency").length;    
    if(videoParent === emergency){
      currentScheduleDateParent.css("display", "none");
    }
  }

  
  

  function rVHR(list){
    const channelIcons = [];
    const videoIds = [];
    list.forEach((element)=>{
      channelIcons.push(`<div class="channelIconButtonParent"><button class="channelIconButton"><img src="${element.channelIcon}"></button></div>`);
      videoIds.push(`<a class="slide" href="https://www.youtube.com/watch?v=${element.videoId}" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/${element.videoId}/maxresdefault.jpg"></a>`);
    });
    return {channelIcons:channelIcons, videoIds:videoIds};
  }
  const listRecommendedVideos = [
                                 Ruki.rV("ADOjyfS3xF0"),
                                 Ringo.rV("-b80cpVDdwc"),
                                 Tulsi.rV("T0Bt-T4PR2U"),                                 
                                 Ito.rV("lPQBnGPt-gE"),
                                 Uparu.rV("grgKPAfWmt4"),
                                 Luminous.rV("TqS02zjI4AY"),
                                 Amae.rV("5DPahqUpHMo"),                                 
                                 Yun.rV("1FOg96NLAJY"),
                                ];
  if(true){
    // listRecommendedVideos.push({channelIcon: "images/shakehands.jpg", videoId: "YMELU-8Y5V8"});
    numAko = -1;
  }                              
  const rVH = rVHR(listRecommendedVideos);
  
  $(".slideShow").append(rVH.videoIds);
  const $slide = $(".slide");
  $slide.eq(0).addClass("slideCurrent");

  $(".channelIconButtons").append(rVH.channelIcons);
  const $cIB = $(".channelIconButton");

  const mQL600 = window.matchMedia('(max-width: 599px)');
  function cIBsWCheck(space){
    const cIBsW = Number($(".channelIconButtons").css("width").match(/[\d\.]+/));
    const cIBPW = cIBsW/(listRecommendedVideos.length+1+numAko);
    $(".channelIconButtonParent").css({"width":cIBPW, "height":cIBPW});
    $(".channelIconButtons").css("height", (cIBPW + space));
  }
  function cIBsWAdjust(event){
    if(event.matches){
      cIBsWCheck(6);
    }else{
      cIBsWCheck(9);
    }
  }
  cIBsWAdjust(mQL600);
  mQL600.addEventListener("change", cIBsWAdjust);

  $cIB.eq(0).addClass("channelIconButtonCurrent");

  let index = 0;
  function slideShow(){
    $slide.eq(index).removeClass("slideCurrent");
    $cIB.eq(index).removeClass("channelIconButtonCurrent");
    if(index === ($slide.length - 1)){
      index = 0;
    }else{
      index++;
    }
    $slide.eq(index).addClass("slideCurrent");
    $cIB.eq(index).addClass("channelIconButtonCurrent");
  }

  let slideShowInterval = setInterval(slideShow, 6500);

  $cIB.click(function(){
    const cIBN = $(".channelIconButton").index($(this));
    const slideNumber = $slide.index($(".slideCurrent"));
    if(cIBN === slideNumber){
      return;
    }else{
      clearInterval(slideShowInterval);
      $slide.eq(slideNumber).removeClass("slideCurrent");
      $cIB.eq(slideNumber).removeClass("channelIconButtonCurrent");
      $slide.eq(cIBN).addClass("slideCurrent");
      $cIB.eq(cIBN).addClass("channelIconButtonCurrent");
      index = cIBN;
      slideShowInterval = setInterval(slideShow, 6500);
    }
  });

  $("#topScroll").click(function(){
    $htmlBody.animate({'scrollTop': 0},500);
  });
  
  // for(let i=0; i<$(".videoUC").length; i++){
    // const checkURL = $(".videoUC").eq(i).find(".videoThumbnail").attr("src");
    // if(checkURL === "https://i.ytimg.com/vi/CQskq5RiGrU/mqdefault.jpg"){
      // $(".videoUC").eq(i).find(".videoThumbnail").attr("src", "/images/cancel.jpg");
      // return;
    // }
  // } 

  
  let IMG = $(".kou").prop('naturalWidth');


});

$(window).on('load',function(){
  const $video = $(".video");

  const listHeight = new Array();
  function heightAdjust(){
    listHeight.splice(0, listHeight.length);
    for(let i=0; i<$video.length; i++){
      $video.eq(i).find(".videoDetail").css("height", "auto");
      listHeight.push($video.eq(i).find(".videoDetail").height());
      $video.eq(i).find(".videoDetail").height(0);
    }
  }
  heightAdjust();
  let n = 2;
  $video.hover( 
    function(){
      const $this = $(this);
      $this.css("z-index",String(n));
      n ++;
      const num = $(".video").index($this);
      //未完成
      $this.find(".videoDetail").height(String(listHeight[num]));  
      if(!($this.hasClass("red") || $this.hasClass("orange"))){
        $this.find(".videoDetail").addClass("gray");
      }      
    },function(){  
      const $this = $(this);
      $this.find(".videoDetail").height(0);
      if(!($this.hasClass("red") || $this.hasClass("orange"))){
        $this.find(".videoDetail").removeClass("gray");
      }
    }
  );

  const mQL600 = window.matchMedia('(max-width: 599px)');
  const mQL767 = window.matchMedia('(max-width: 767px)');
  const mQL1023 = window.matchMedia('(max-width: 1023px)');
  const mQL1919 = window.matchMedia('(max-width: 1919px)');
  
  function cIBsWAdjust(event){
    if(event.matches){
      heightAdjust();
    }else{
      heightAdjust();
    }
  }

  mQL600.addEventListener("change", cIBsWAdjust);
  mQL767.addEventListener("change", cIBsWAdjust);
  mQL1023.addEventListener("change", cIBsWAdjust);
  mQL1919.addEventListener("change", cIBsWAdjust);

  $(window).on("scroll", function() {
    if(($(window).scrollTop()+$(window).height())>$("#headlineTS").offset().top){
      $("#topScrollParent").fadeIn(200);
    }else{
      $("#topScrollParent").fadeOut(200);
    }
  });
});
