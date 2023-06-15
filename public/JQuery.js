$(function() {

  const listIcon = [];
  const listIconString = $("#twitterAccount").attr("optionData");
  listIcon.push(listIconString.match(/^.+?(?=,)/)[0]);
  listIconString.match(/(?<=,).+?(?=,)/g).forEach((channelIcon)=>{
    listIcon.push(channelIcon);
  });
  listIcon.push(listIconString.match(/(?<=,)[^,]+$/)[0]);
  
  function set0(num){
    return ("0" + String(num)).slice(-2);
  }

  class VEE{
    constructor(talentName, channelName, channelURL, channelIcon){
      this.talentName = talentName;
      this.channelName = channelName;
      this.channelURL = `https://www.youtube.com/channel/${channelURL}`;
      this.channelIcon = channelIcon;
    }
    rM(videoId, setList){
      return {channelName: this.channelName, channelURL: this.channelURL, channelIcon: this.channelIcon, videoId: videoId, setList: setList};
    }
    rV(videoId){
      return {talentName: this.talentName, channelIcon: this.channelIcon, videoId: videoId};
    }
    getTN(){
      return this.talentName;
    }
  }

  const Official = new VEE("VEE", "VEE official channel", "UCXWiGKfAXjHUsxa_GNLgv-A", listIcon[0]);

  const Ruki = new VEE("音門 るき", "Ruki Otokado 音門るき [VEE]", "UCAUicVZlApAIhcdL9df3gWw", listIcon[1]);
  const Ringo = new VEE("九条 林檎", "九条 林檎【Kujo Ringo Official】", "UCf57-IJn5mUJDyqd9uNEmrg", listIcon[2]);
  const Kohaku = new VEE("秋雪 こはく", "Syusetu kohaku/秋雪こはく", "UCQLyq7TDKHlmp2Ufd5Z2qMw", listIcon[3]);
  const Tulsi = new VEE("魔王トゥルシー", "魔王トゥルシー / Tulsi-Nightmare Madness IV", "UCUdlDvZJGGP78zvta3swIhw", listIcon[4]);
  const Airu = new VEE("雛星 あいる", "雛星あいる Hinahoshi Airu", "UCJGQPbaqTY91JhVzD8gIZyw", listIcon[5]);

  const Mina = new VEE("桜鳥 ミーナ", "桜鳥ミーナ / Audrey Mina", "UCFkHpBGMeNSQW-j9-F0nxnQ", listIcon[6]);
  const Ito = new VEE("白粉 いと", "おしろいと", "UCzv_W7v9ix39tFPDB-TV0Vg", listIcon[7]);
  const Chihiyo = new VEE("日和 ちひよ", "日和ちひよ / Hiyori Chihiyo", "UCnBOUGfsfcD6nUbpdDAwMfw", listIcon[9]);
  const Mew = new VEE("ミュウ・ガルシア", "Mew Garcia / ミュウ・ガルシア", "UC7FUtGR0AsvwzXrEmdUBAFw", listIcon[10]);

  const Yozuri = new VEE("蒼宮 よづり", "Aomiya Yozuri Ch. 蒼宮よづり", "UCWhFUlcawiD78qAD7zzS6Bw", listIcon[12]);
  const Uparu = new VEE("亞生 うぱる", "亞生うぱる【VEE】", "UCQfp96ujs7PXiUG6ov29RKg", listIcon[13]);
  const Uriyone = new VEE("糶(うりよね)", "糶 / URIYONE", "UCJpsYQtNyVDc023clkqMhTQ", listIcon[14]);
  const Cotonoha = new VEE("言のハ", "言のハ-Cotonoha-", "UCOd-qYH_8e-tgxpPIcqwenA", listIcon[15]);
  const Luminous = new VEE("るみなす・すいーと", "るみなす・すいーと【LUMINOUS Ch】", "UC02dJeNmcQLqENdHFG1svJw", listIcon[16]);

  const Amae = new VEE("偉雷 アマエ", "偉雷アマエ / Erai Amae", "UC6b4Ta_J0wbylnPu1auaQiA", listIcon[17]);
  const Kakapo = new VEE("北白川 かかぽ", "北白川かかぽ / Kakapo Kitashirakawa", "UCEoAD_2jSLoYQd2MJZxWuxQ", listIcon[18]);
  const Yun = new VEE("ゆりかわ ゆん", "ゆりかわゆん YURIKAWA YUN", "UCngFYCS8p8PX9wf4V8kLVgw", listIcon[19]);

  const Yae = new VEE("雨庭 やえ", "雨庭やえ / AMENIWA YAE", "UCMPKmFrLWgZyCGOw0QAEiIQ", listIcon[20]);
  const Lui = new VEE("月白 累", "月白 累 / Geppaku Lui", "UCpFAeyYSv4-7R1rC91c6DuA", listIcon[21]);
  const Lira = new VEE("黒燿 リラ", "黒燿リラ / KOKUYOU LIRA", "UC_mc5xvNyQ-2W0UHgTA1mMg", listIcon[22]);

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

  function returnMonth(month){
    switch(month){
      case "Jan":
        return "1";
      case "Feb":
        return "2";
      case "Mar":
        return "3";
      case "Apr":
        return "4";
      case "May":
        return "5";
      case "Jun":
        return "6";
      case "Jul":
        return "7";
      case "Aug":
        return "8";
      case "Sep":
        return "9";
      case "Oct":
        return "10";
      case "Nov":
        return "11";
      case "Dec":
        return "12";
    }
  }

  const nicoMonth = returnMonth($(".nicoSchedule span").text().match(/(?<=\s)[A-Z][a-z]{2}(?=\s)/)[0]);
  const nicoDate =  $(".nicoSchedule span").text().match(/(?<=\s)\d{2}(?=,)/)[0];

  const nicoCollaborationList = [Mew.rV(""),
                                 Kohaku.rV(""),
                                 Yozuri.rV(""),
                                ];

  function nicoCollaboration(nCL){
    const elementList = new Array();
    nCL.forEach((object)=>{
      elementList.push(`<img class="nicoIcon" src="${object.channelIcon}" title="${object.talentName}" alt="アイコン画像">`);
    });
    $(".nicoCollaboration").append(elementList);
  }

  let flagAko = false;
  let numAko = 0;
  const $lS = $(".littleStar");
  const minSizeStar = 1; // 星の最小サイズを指定
  const maxSizeStar = 2; // 星の最大サイズを指定
  const maxSizeStarNew = 3;
  const listStarSize = [];

  function starrySky(){
    for(let i=0; i<50; i++){
      const size = Math.random() * (maxSizeStar - minSizeStar) + minSizeStar;
      const sizeN = Math.random() * (maxSizeStarNew - minSizeStar) + minSizeStar;
      $lS.eq(i).css({"width":`${size}px`, "height":`${size}px`, "top":`${Math.random() * 100}%`, "left":`${Math.random() * 100}%`, "animation-delay":`${(Math.random() * 5) + 0.5}s`});
      listStarSize.push(sizeN);
    }
  }

  function birthdayMessage(){
    const Now = new Date();
    const JST = new Date();
    JST.setHours(Now.getHours()+9);  
    const Month = JST.getUTCMonth()+1;
    const Day = JST.getUTCDate();  
    const HBD = Month + '月' + Day + '日';

    switch(HBD){      
      case `${nicoMonth}月${nicoDate}日`:
        $("#containerNico").css("display", "block");
        break;
    }

    function birthdayCard(name, twitterID, twitterIcon, imageColor, birthdayImage, imageCredit, imageCreditId, imageCover){
      $("#birthdayParentFrame").css("display", "block");
      $("#birthdayString").html(`Happy Birthday!<br><br><span style="font-family: serif">本日${HBD}は…</span><br><a id="underLine" href=https://twitter.com/${twitterID} target="_blank" rel="noopener noreferrer">${name}</a><span style="font-family: serif"> の誕生日！</span>`);
      $("#birthdayIconParent").attr("href", `https://twitter.com/${twitterID}`);
      $("#birthdayIcon").attr("src", `/images/${twitterIcon}.jpg`).css("border-color", `${imageColor}`);
      $("#birthdayImage").attr("src", `/images/${birthdayImage}`);
      $("#birthdayImageCredit").text(`イラストAC / ${imageCredit}`).attr("href", `https://www.ac-illust.com/main/profile.php?id=${imageCreditId}`);
      $("#birthdayImageCover").attr("src", `/images/${imageCover}`);
    }

    switch(HBD){      
      case "1月10日":
        birthdayCard(Ito.getTN(), "oshiroito", "Ito", "#f0f0f0", "shortCake.png", "こびとイエロー", "23436669", "cuteGhost.jpg");
        break;
      case "1月18日":
        birthdayCard(Yae.getTN(), "AMENIWA_YAE", "Yae");
        break;
      case "1月21日":
        birthdayCard(Luminous.getTN(), "luminous_amaama", "Luminous", "#0bf4f3", "sweetsFrame.jpeg", "ノゾミ", "Lq7CAcAX", "cyberSpace.jpg");
        break;
      case "2月7日":
        birthdayCard(Mew.getTN(), "MewGarcia_king", "Mew", "#cb8bff", "champagneFrame.png", "Oyu", "rcfTi1QV", "purpleChair.jpeg");
        break;
      case "2月17日":
        //birthdayCard("神童児 丫子", "Ako_shindouji", "Ako");
        flagAko = true;
        numAko = -1;
        break;
      case "3月1日":
        birthdayCard(Chihiyo.getTN(), "hiyohiyovee", "Chihiyo", "#ffc40c", "hiyokoFrame.png", "kaka", "tpHK7Ug2");
        break;
      case "3月17日":
        birthdayCard(Mina.getTN(), "mina0x0audrey", "Mina", "#ff9ee0", "beerFrame.png", "あまど", "4owBPL7y");
        break;
      case "4月7日":
        birthdayCard(Uriyone.getTN(), "URIYONEE", "Uriyone", "#ff8c00", "orangeParfait.jpg", "miyukiii", "Wa9SYnhs");
        break;
      case "4月20日":
        birthdayCard(Uparu.getTN(), "UPARU_JP", "Uparu", "#fffef6", "youTubeFrame.jpg", "お絵かきオニ", "rFWFLAaV");
        break;
      case "4月26日":
        birthdayCard(Amae.getTN(), "EraiAmae", "Amae", "#f18d00", "thunderFrame.png", "ろる", "meRujaLy");
        break;
      //case "4月27日":
        //birthdayCard("漣 とあ", "toatoaman", "Toa");
        //break;
      case "5月1日":
        birthdayCard(Cotonoha.getTN(), "TwiCoto", "Cotonoha", "#82a9da", "lilyOfTheValley.jpg", "ami", "T6HJmUe3");
        starrySky();
        break;
      case "5月23日":
      case "6月27日":
        $("#containerFirework").css("display", "block");
        break;
      case "6月15日":
        birthdayCard(Kakapo.getTN(), "kakapo_research", "Kakapo", "#86b81b", "researchFrame.png", "よねぼー", "jtdGQmIO");
        break;
      case "6月22日":
        birthdayCard(Yun.getTN(), "yun_yurikawa", "Yun");
        break;
      case "8月3日":
        birthdayCard(Ruki.getTN(), "Ruki_vita_666", "Ruki");
        break;
      case "9月16日":
        birthdayCard(Airu.getTN(), "airu_Lv115", "Airu");
        break;
      case "10月1日":
        birthdayCard(Kohaku.getTN(), "Syusetu_kohaku", "Kohaku");
        break;
      case "11月3日":
        birthdayCard(Yozuri.getTN(), "aomiyayozuri", "Yozuri", "#414fa3");
        break;
      case "11月7日":
        birthdayCard(Lira.getTN(), "KOKUYOU_LIRA", "Lira");
        break;
      case "11月24日":
        birthdayCard(Tulsi.getTN(), "IDmadeMiruna", "Tulsi", "#d72d6d");
        break;
      case "12月10日":
        birthdayCard(Lui.getTN(), "Geppaku_Lui", "Lui");
        break;
      case "12月30日":
        birthdayCard(Ringo.getTN(), "ringo_0_0_5", "Ringo", "#A50000", "birthdayCake.png", "たののすけ", "2T5D2rg6", "vampireCastle.jpg");
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
      let days = "";
      if(hours > 72){
        days = `${String(Math.floor(hours/24))}日 + `;
        hours = hours%24;
      }
      hours = set0(hours);
      minutes = set0(minutes);       
      seconds = set0(seconds);
      const elapsedTime = days+hours+":"+minutes+":"+seconds+" 経過";
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
      
      if(waitingTime < 1.0 && waitingTime >= -1.0){
        $currentVideoUC.find(".faVideo").removeClass("fa-hourglass-start").addClass("fa-bell faa-wrench animated");
        $currentVideoUC.addClass("orange");
        $currentVideoUC.find(".timeParent").addClass("orange");     
        $currentVideoUC.find(".videoDetail").addClass("orange");
        $currentVideoUC.find(".collaboration").addClass("orange");
      }else if(waitingTime < -1.0 && waitingTime >= -3.0){
        $currentVideoUC.find(".videoThumbnail").css("opacity", "0.62");
        $currentVideoUC.find(".faVideo").removeClass("fa-hourglass-start").addClass("fa-triangle-exclamation");
      }else if(waitingTime < -3.0){
        $currentVideoUC.parent(".videoParent").addClass("emergency").css("display", "none");
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
  $("#btnMP").click(function(){
    const distance = $("#headlineMP").offset().top;
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

  nicoCollaboration(nicoCollaborationList);

  birthdayMessage();
  //const soundEffect = new Audio("/musics/lightning-strike-2.mp3");
  //soundEffect.volume = 0.2;
  let flag = true;
  $("#bICP").click(function(e){
    if(flag){
      flag = false;
      $("#touchHere").css("color", "transparent");
      $("#kiwiResearch").css("display","block").on("animationend", function(){
        setTimeout(function(){
          $("#researchData").css("display", "inline");
          $("#nZ").css("display", "inline");
          $("#nZF").css("display", "inline");
          $("#kiwiImage").addClass("kiwiImageResearching");
          $("#kiwiCover").addClass("researching").on("animationend", function(){
            $.when($("#kiwiResearch").fadeOut(1200)).done(function(){
              $("#researchCompletedParent").css("display", "block").on("animationend", function(){
                $("#researchCompleted").addClass("completedNotice").on("animationend", function(){
                  setTimeout(function(){
                    $("#bICP").addClass("bICPSlide");
                  }, 800);
                });
              });
            });
          });
        }, 800);
      });  
    }
  });

  $("#btnOpen").click(function(){
    const $this = $(this);
    const listTalent0 = [
      Tulsi.rM("1Qb1WszxuRw", [506,934,1244,1560]),
      Mina.rM("7Q8qQTQNnlA", [233,680,1180,1676]),
      Chihiyo.rM("fzrwbfi-zFg", [59,494,975]),
      Yozuri.rM("XI2uYf3emso", [456,1434,2533,3410]),
      Cotonoha.rM("rBcB5-GR4F0", [593,947,1373,1795]),
      Luminous.rM("vd4Wx_bLn0U", [404,855,1253,1714,2191,2671,3405,4263,4892,5482,5726,6797,7236,7931,9531,9910,10424]),
      Amae.rM("veol9vDzv14", [288,743,1227,1530]),
      Kakapo.rM("GoIgxHx6-Z8", [467,1145,1670]),
      Yae.rM("56_69b1gVeI", [725,1244,1724,2219,2704,3051,3322]),
      Lui.rM("IkcKyPIrfAQ", [80,393,648,1091,1490]),
    ]
    const listTalent = [
                        Official.rM("DTrfSlMN8Sc", [0]),
                        Official.rM("tFKkfeLcqx0", [0]),
                        Ruki.rM("xKUcwNgQ7u8", [94,933,1354,1779,2399,2818,3328,3776,4279] ),
                        //Ruki.rM("OXJqcRFVjn4", [500,920,1628,2313,2808,3329,3678,4126,4614]),
                        Ringo.rM("RnVG5yE4aUM", [0]),
                        Tulsi.rM("ZeWpeownlF8", [654,1202,1713,2211,2820,3476,4060]),
                        //Tulsi.rM("r8i4yLILtLg", [2655,3330,3611,4293,4523,4730,7332,7762,8286,9539,9810,10459,10749,11142,11521,11784,12100]),
                        //Tulsi.rM("381MzILfQBc", [329,562,889,1314,1715,2036,2210]),
                        Airu.rM("DLfPNU4TdJ0", [0]),
                        //Airu.rM("Jva1xZW5TzY", [407, 800, 1198, 1506, 1712, 2312, 2663, 3136, 3643]),
                        // {channelName:Mina.channelName, videoId:"G153NwRgQcI", setList:["83", "498", "1008"], channelURL:Mina.channelURL, channelIcon:Mina.channelIcon},
                        Mina.rM("a8IBgxIyQWI", [1424,1506,1705,2194,2400,2675,2981,3294]),
                        //Mina.rM("9xZtONzq9b0", [383,1042,2412,2743,2986,3382,3728]),
                        //Mina.rM("ZQPj-CbqfHw", [5080,8702,11865,12565,13027,13542,14464,14971,15051,15160,15250,15331,15492,15626,17156,18522,19053,19890,22040,23222,23985,24460,26201,26766,27314,27753,27888,28075,28263,28574,28660,28759,29017,29098,29201,29479,29605,29696,31082,31681,31906,32431,32692,32843,33470,33602,33746,33862,33971,34180,34342,34473,34526,34701,34815,34925,35310,35276,35567,35709,35862,35994,36238,36563,36732,36890,37081,37200,37357,37487,37664,37807,37920,38181,38296,38618,38741,38895,39956,40405,40544,40902,41118,41289,41405,41860,42249]),
                        Ito.rM("Q25tRiC4fuE", [0]),
                        Chihiyo.rM("6iNBueUOvg8", [99,673,944,1640,2114,2319,2730,3000,3446,3884]),
                        //Chihiyo.rM("UePKwZvYVI4", [68,556,817,1405,1964,2308,2679,3259]),
                        //Mew.rM("Q-fOq_rjI2U", [0]),
                        //Mew.rM("NJdwrHS3HA4", [1358, 1777, 2683, 3345, 3934, 5108, 5665, 6318, 6778]),
                        Mew.rM("60VQWKcqWSQ", [904, 1444, 1974, 2661, 3323, 3881, 4300, 4768, 5161]),
                        //Mew.rM("J_9d34xpeR0", [2411,3416,4026,4547,5067,5576,6042,6524,7036,7642]),
                        Yozuri.rM("xI4u98QYO7Q", [621,1441,2248,3173,3992,4776,5207]),
                        //Yozuri.rM("URLXA_tV78s", [677,1356,2326,3186,3964]),
                        // {channelName:Cotonoha.channelName, videoId:"KhLySKBaoEs", setList:["446", "924", "1607", "2033", "3078"], channelURL:Cotonoha.channelURL, channelIcon:Cotonoha.channelIcon},
                        Uparu.rM("ZV3IRccjik0", [150,590,1229,1947,2232,3030,3833,4412,5155]),
                        Uriyone.rM("FtkLnvyscds", [0]),
                        Cotonoha.rM("lwmSmcYoNYM", [379,809,1142,1515,2221,2831,3105,3407,3834,4469,4872,5374,5627,5974,6611,7025,7388]),
                        //Cotonoha.rM("wiDOarSl_z8", [477,1437,1896,2616,3034,3369,4243,4709,5131,5543,5963,6446,6565]),
                        Luminous.rM("Btf6qUEkzEk", [697,1163,1710,2506,2978,3444,3846,4705,5926,6280,6663]),
                        //Luminous.rM("mwdAeZ337Fs", [290,704,1066,1436,1909,2254,2642,3088,3488,3841,4419,4634,4979,5420,5718,6112,6422,6708,7018,7239,7434,7736,8005,8326,8545,8810]),
                        //Luminous.rM("heIZdB-8hCs", [1017,1498,2009,2520,2877,3337,4085,4603,5468,6232,7045,7605,7955,8688,9151,9704,10614,10995,11845,12356,12934,13406,14337,14693,15254,15636,16430,17071,17387,17995]),
                        Amae.rM("E09pGpjuDIA", [276,891,1055,1399,1862,2700,3300,3652,4153]),
                        //Amae.rM("5KsrdXXR64U", [365,901,1180,1537,2220,2553,2852]),
                        //Amae.rM("YyrR7wX1k5I", [242, 1123, 1481, 2111, 2495, 2820, 3070, 3769, 4222]),
                        //Amae.rM("KmYh1T2JImg", [426,916,1309,1659,1940,2246,2512,2929]),
                        Kakapo.rM("Se7Nd_UwMjE", [0]),
                        Yun.rM("XX8a2I9mZEA", [216, 491, 797, 1270]),
                        Yae.rM("bVyVcTnDI5E", [1833,2426,3189,3577,4121,4462]),
                        //Yae.rM("W8PwaXY5r1M", [898,1364,1833,2228,2634,3092,3574,3886,4200]),
                        Lui.rM("EfXUvZm-z-0", [126,723,1320,1890,2440,3010,3505]),
                       ];
    const num = Math.floor(Math.random() * (listTalent.length));
    const num2 = Math.floor(Math.random() * (listTalent[num].setList.length));
    if(!$this.hasClass("openT")){
      $("#recommendedVideo").attr("src", `https://www.youtube.com/embed/${listTalent[num].videoId}?start=${String(listTalent[num].setList[num2])}`);      
      $.when($("#recommendedTalent").slideDown(500)).done(function(){$this.text("CLOSE")});
      $(".channelIcon").addClass("fadeIn").attr("src", listTalent[num].channelIcon);
      $(".channelName").addClass("fadeIn").text(listTalent[num].channelName);
      $(".channelURL").attr("href", listTalent[num].channelURL);
      $(".recommendedVideoParent").addClass("fadeIn");
      $this.addClass("openT");      
    }else{
      $("#recommendedVideo").attr("src", "");
      $(".channelIcon").removeClass("fadeIn").attr("src", "");
      $(".channelName").removeClass("fadeIn").text("");
      $(".channelURL").attr("href", "");
      $.when($("#recommendedTalent").slideUp(500)).done(function(){$this.text("OPEN")}); 
      $(".recommendedVideoParent").removeClass("fadeIn");
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
  
  function emergencyMode(){
    for(let i=0; i<$(".scheduleDateParent").length; i++){
      const currentScheduleDateParent = $(".scheduleDateParent").eq(i);
      const videoParent = currentScheduleDateParent.find(".videoParent").length;
      const emergency = currentScheduleDateParent.find(".emergency").length;    
      if(videoParent === emergency){
        currentScheduleDateParent.css("display", "none");
      }
    }
  }
  emergencyMode();


  function rVHR(list){
    const channelIcons = [];
    const videoIds = [];
    list.forEach((element)=>{
      channelIcons.push(`<div class="channelIconButtonParent"><button class="channelIconButton"><img src="${element.channelIcon}" alt="チャンネルアイコン" title="${element.talentName}"></button></div>`);
      if(element.videoId==="uBVrXgo6Sog"){
        videoIds.push(`<a class="slide" href="https://www.youtube.com/watch?v=${element.videoId}&t=844s" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/${element.videoId}/maxresdefault.jpg" alt="シアター用サムネイル画像"></a>`);
      }else{
        videoIds.push(`<a class="slide" href="https://www.youtube.com/watch?v=${element.videoId}" target="_blank" rel="noopener noreferrer"><img src="https://i.ytimg.com/vi/${element.videoId}/maxresdefault.jpg" alt="シアター用サムネイル画像"></a>`);
      }
    });
    return {channelIcons:channelIcons, videoIds:videoIds};
  }
  const listRecommendedVideos = [
                                 Ruki.rV("EZegy2e1eBo"),
                                 Airu.rV("acVJ7JS5F1k"),
                                 Chihiyo.rV("KBliERREfpk"),
                                 Luminous.rV("DPeeR6gbWKE"),
                                 Yae.rV("a96XCjXQjys"),                                                               
                                 Lui.rV("ShcUKzHQf-4"),
                                 Official.rV("wi1VCBEmfjM"),
                                 {talentName:"コラボ", channelIcon: "images/shakeHands.jpg", videoId: "ku2vGtr1mYg"},
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

  const $sHD = $("#shakeHandsDisplay");
  function emergencyMode2(displayProperty){
    let length = 0;
    for(let i=0; i<$(".scheduleDateParent").length; i++){
      const currentScheduleDateParent = $(".scheduleDateParent").eq(i);
      const videoParent = currentScheduleDateParent.find(".videoParent").length;
      const emergency = currentScheduleDateParent.find(".emergency").length;
      const emergency2 = currentScheduleDateParent.find(".flagDisplay").length;
      let num = 0;
      for(let i=length; i<(length+emergency); i++){
        if($(".emergency").eq(i).hasClass("flagDisplay")){
          num++;
        }
      }
      length += emergency;
      if(videoParent === emergency + emergency2 - num && emergency2 !== 0){
        currentScheduleDateParent.css("display", displayProperty);
      }
    }
  }
  let cookieShakeHands = "display";
  if(document.cookie.match(/(?<=biscayzeroShakeHands=)[^;]+/) !== null){
    cookieShakeHands = document.cookie.match(/(?<=biscayzeroShakeHands=)[^;]+/)[0];
  }
  if(cookieShakeHands === "none"){
    $(".flagDisplay").css("display", "none");
    emergencyMode2("none");
    $("#shakeHandsIcon").css("opacity", "0.8");
    $sHD.addClass("displayNone");
  }
  $sHD.click(function(){
    if($sHD.hasClass("displayNone")){
      $(".flagDisplay").fadeIn(500);
      emergencyMode2("flex");
      $("#shakeHandsIcon").css("opacity", "1.0");
      $sHD.removeClass("displayNone");
      document.cookie = "biscayzeroShakeHands=display; SameSite=lax";
    }else{
      $(".flagDisplay").fadeOut(500);
      emergencyMode2("none");
      $("#shakeHandsIcon").css("opacity", "0.8");
      $sHD.addClass("displayNone");
      document.cookie = "biscayzeroShakeHands=none; SameSite=lax";
    }
  });
  
  //for(let i=0; i<$(".videoLN").length; i++){
    //const checkURL = $(".videoLN").eq(i).find(".videoThumbnail").attr("src");
    //if(checkURL === "https://static-cdn.jtvnw.net/previews-ttv/live_user_kohanalam_game-320x180.jpg"){
      //$(".videoLN").eq(i).parent(".videoParent").css("display", "none");
      //return;
    //}
  //} 

  
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

  mQL600.addEventListener("change", heightAdjust);
  mQL767.addEventListener("change", heightAdjust);
  mQL1023.addEventListener("change", heightAdjust);
  mQL1919.addEventListener("change", heightAdjust);

  $(window).on("scroll", function() {
    if(($(window).scrollTop()+$(window).height())>$("#headlineTS").offset().top){
      $("#topScrollParent").fadeIn(200);
      $("#shakeHandsDisplayParent").fadeOut(200);
    }else{
      $("#topScrollParent").fadeOut(200);
      $("#shakeHandsDisplayParent").fadeIn(200);
    }
  });
});
