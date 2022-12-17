$(function() {
  
  function set0(num){
    let ret;
    if( num < 10 ){
      ret = "0" + num;
    }else{
      ret = num;
    }
    return ret;
  }

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

  function blinking(){
    if($("#blinking").hasClass("light")){
      $("#blinking").css("color","#333"); 
      $("#blinking").removeClass("light");
    }else{
      $("#blinking").css("color","#fff");
      $("#blinking").addClass("light");
    }
  }

  function birthdayMessage(){
    const Now = new Date();
    const JST = new Date();
    JST.setHours(Now.getHours()+9);  
    const Month = JST.getUTCMonth()+1;
    const Day = JST.getUTCDate();  
    const HBD = Month + '月' + Day + '日';

    function birthdayCard(HBD, name, twitterID, twitterIcon, imageColor, birthdayImage, imageCredit, imageCreditId){
      $("#birthdayParentFrame").css("display", "block");
      $("#birthdayString").html(`Happy Birthday!<br><br><span style="font-family: serif">本日${HBD}は…</span><br><a id="underLine" href=https://twitter.com/${twitterID} target="_blank" rel="noopener noreferrer">${name}</a> <span style="font-family: serif">の誕生日！</span>`);
      $("#birthdayIconParent").attr("href", `https://twitter.com/${twitterID}`);
      $("#birthdayIcon").attr("src", `/images/${twitterIcon}.jpg`);
      $("#birthdayIcon").css("border-color", `${imageColor}`);
      $("#birthdayImage").attr("src", `/images/${birthdayImage}`);
      $("#birthdayImageCredit").text(`イラストAC / ${imageCredit}`);
      $("#birthdayImageCredit").attr("href", `https://www.ac-illust.com/main/profile.php?id=${imageCreditId}`);
    }

    const newBirthdayCard = birthdayCard.bind(null, HBD);

    switch(HBD){      
      case "1月10日":
        newBirthdayCard("白粉 いと", "oshiroito", "Ito");
        break;
      case "1月21日":
        newBirthdayCard("るみなす・すいーと", "luminous_amaama", "Luminous");
        break;
      case "2月7日":
        newBirthdayCard("ミュウ・ガルシア", "MewGarcia_king", "Mew");
        break;
      //case "2月17日":
        //newBirthdayCard("神童児 丫子", "Ako_shindouji", "Ako");
        //break;
      case "3月1日":
        newBirthdayCard("日和 ちひよ", "hiyohiyovee", "Chihiyo");
        break;
      case "3月17日":
        newBirthdayCard("桜鳥 ミーナ", "mina0x0audrey", "Mina");
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
        newBirthdayCard("九条 林檎", "ringo_0_0_5", "Ringo", "#A50000", "birthdayCake.png", "たののすけ", "2T5D2rg6");
        break;
    }
  }

  function noneVideoLN(){
    if($(".videoLN").length === 0){
      $("#subtitleLN").css("text-decoration", "line-through");
      $("#noneParentFrame").css("display", "block");        
    }
  }

  function iconBorder(){
    for(let i=0; i<$(".icon").length; i++){
      if($(".icon").eq(i).attr("src")===""){
        $(".icon").eq(i).css("border", "none");
      }
    }
  }
  
  function brVideoTitle(){
    for(let i=0; i<$(".video").length; i++){    
      const text = $(".video").eq(i).find(".videoTitle").text();
      $(".video").eq(i).find(".videoTitle").html(text);
    } 
  }

  function elapsedTime(){
    for(let i=0; i<$(".videoLN").length; i++){
      const Now = new Date();
      const actualStartTime = $(".videoLN").eq(i).find(".time").text();
      const actualStartTimeDate = new Date(actualStartTime);
      let hours = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000/3600);
      let minutes = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000%3600/60);
      let seconds = Math.floor(((Date.now()-actualStartTimeDate.getTime())+(Now.getTimezoneOffset()*60*1000))/1000%3600%60);
      hours = set0(hours);
      minutes = set0(minutes);       
      seconds = set0(seconds);
      const elapsedTime = hours+":"+minutes+":"+seconds+" 経過";
      $(".videoLN").eq(i).find(".time").text(elapsedTime);
    }
  }

  function orangeTime(){
    for(let i=0; i<$(".videoUC").length; i++){
      const Now = new Date();
      const scheduledStartTime = $(".videoUC").eq(i).find(".time").attr("optionTime");
      const scheduledStartTimeDate = new Date(scheduledStartTime);
      const waitingTime = (scheduledStartTimeDate.getTime()-(Date.now()+(Now.getTimezoneOffset()*60*1000)))/1000/3600;
      if(waitingTime < 1.0){
        $(".videoUC").eq(i).find(".faVideo").removeClass("fa-hourglass-start");
        $(".videoUC").eq(i).find(".faVideo").addClass("fa-bell faa-wrench animated");
        $(".videoUC").eq(i).addClass("orange");        
        $(".videoUC").eq(i).find(".videoDetail").addClass("orange");
        $(".videoUC").eq(i).find(".collaboration").addClass("orange");
      }
      if(waitingTime < -1.0){
        $(".videoUC").eq(i).find(".videoThumbnail").css("opacity", "0.62");
        $(".videoUC").eq(i).find(".faVideo").removeClass("fa-bell faa-wrench animated");
        $(".videoUC").eq(i).find(".faVideo").addClass("fa-triangle-exclamation");
        $(".videoUC").eq(i).removeClass("orange");        
        $(".videoUC").eq(i).find(".videoDetail").removeClass("orange");
        $(".videoUC").eq(i).find(".collaboration").removeClass("orange");
        
      }
      if(waitingTime < -3.0){
        $(".videoUC").eq(i).parent(".videoParent").addClass("emergency");
        $(".videoUC").eq(i).parent(".videoParent").css("display", "none");
      }                   
    }
  }

  function collaboration(){
    for(let i=0; i<$(".collaborationIcon").length; i++){
      if($(".collaborationIcon").eq(i).parent(".collaboration").length!==0){
        $(".collaborationIcon").eq(i).parent(".collaboration").css("display", "block");
      }
    }
  }

  $("#btnUC").click(function(){
    const distance = $("#headlineUC").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $("html, body").animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $("html, body").animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $("html, body").animate({'scrollTop': distance-96},500);
    }
  });

  $("#btnLN").click(function(){
    const distance = $("#headlineLN").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $("html, body").animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $("html, body").animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $("html, body").animate({'scrollTop': distance-96},500);
    }
  });

  $("#btnA").click(function(){
    const distance = $("#headlineA").offset().top;
    if(window.matchMedia('(max-width: 599px)').matches){
      $("html, body").animate({'scrollTop': distance-50},500);
    }else if(window.matchMedia('(max-width: 1919px)').matches){
      $("html, body").animate({'scrollTop': distance-80},500);
    }else if(window.matchMedia('(min-width: 1920px)').matches){
      $("html, body").animate({'scrollTop': distance-96},500);
    }
  });

  showClock();
  setInterval(showClock,1000);
  setInterval(blinking,500);

  birthdayMessage();
  $("#birthdayImageCover").click(function(){
    $(this).fadeOut(2000);
  })
    
  noneVideoLN();

  $("#btnOpen").click(function(){
    const listTalent = [
                        {channelName:"VEE official channel", videoId:"DTrfSlMN8Sc", setList:["0"], channelURL:"UCXWiGKfAXjHUsxa_GNLgv-A", channelIcon:"vhgGxT2ROGSByTxS-lfULhoNWtC_A7ubuMTdchPHAFYx15Ov2FE0sBf94Oo91lNpPxeqKyAf=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"Ruki Otokado 音門るき [VEE]", videoId:"vsOBbXUgVS4", setList:["420", "1027", "1491"], channelURL:"UCAUicVZlApAIhcdL9df3gWw", channelIcon:"7q9hOlgVOLGGMGNDnAokhFo7vECpLIyKCOj3xLKwBqPvQuu2-kkLS9E3kkNd-rrfdK0GKepd4w=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"九条 林檎【Kujo Ringo Official】", videoId:"N_Sj1QjHlvA", setList:["203", "1079", "1725"], channelURL:"UCf57-IJn5mUJDyqd9uNEmrg", channelIcon:"Rln7rmZcpjY0mIPPfF0BXCA4SLtEPo04b1QJuldTkrOMx03pwEv54f97SXd3cazOqGuylwQN=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"魔王トゥルシー / Tulsi-Nightmare Madness IV", videoId:"aBvTY27-0Z4", setList:["267", "710", "1258", "1526"], channelURL:"UCUdlDvZJGGP78zvta3swIhw", channelIcon:"BBywT_hHFYqk_AvQ7xbd-l1in8838u3kVUqZmZFBuWsN2E2EJ4iS6BCBtFZ89wtJAnmmUZw_qBY=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"雛星あいる Hinahoshi Airu", videoId:"D8IAro9f7eA", setList:["0"], channelURL:"UCJGQPbaqTY91JhVzD8gIZyw", channelIcon:"8zlUH6WXzKYQfAC-yDr8-Ok8oPYueyOsIL980DUniGMbaN5LgoRN3bwEFmel30BjQkGPf4_EoA=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"桜鳥ミーナ / Audrey Mina", videoId:"6ghA1MleHpg", setList:["439", "982", "1424"], channelURL:"UCFkHpBGMeNSQW-j9-F0nxnQ", channelIcon:"nftD5_O_9HQxYdWXZa_TyAFIFEzuwmQzqM6y3eIm6eT7TU7aomDGmjFKYLVDVXeZOi0qqL1p=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"日和ちひよ / Hiyori Chihiyo", videoId:"g1JKFfYzp1M", setList:["149", "747", "1270"], channelURL:"UCnBOUGfsfcD6nUbpdDAwMfw", channelIcon:"7P3MYe928q3hA5eosHfOfRW0gjTFU9BVRjo1J5kyl92PORQs1W0w_NJUNqOkenqXljBeQkIX7fs=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"Mew Garcia / ミュウ・ガルシア", videoId:"6eIAmiexSXo", setList:["1850", "2788", "3786", "4718", "4963"], channelURL:"UC7FUtGR0AsvwzXrEmdUBAFw", channelIcon:"qM-PWb43IfrKqCnU4n8nB4YVhHl340yjJIkIaukRex2_9j_EsfplB5YE80i4TKPFgZbr8cJFcg=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"Aomiya Yozuri Ch. 蒼宮よづり", videoId:"Q0fSqO3aVfQ", setList:["0"], channelURL:"UCWhFUlcawiD78qAD7zzS6Bw", channelIcon:"eqK_S6SXxSh--EU_EPMLytHKEvh9J9Hw5oLGbG-CCTAMAgkWRUn2ndT9mdyeehcBcqQeTZZs=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"言のハ-Cotonoha-", videoId:"N32qBOf2iqc", setList:["196", "722", "1122", "1325"], channelURL:"UCOd-qYH_8e-tgxpPIcqwenA", channelIcon:"gkCaF4FvG0JhBaYnqEPaXXgdxzm6SUbKb3hVR4AhtPvGiGCfxGNqroDS_ShhKnOjVxT1xSeeow=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"偉雷アマエ / Erai Amae", videoId:"BDNFo6LVy68", setList:["292", "1290", "1938", "2583"], channelURL:"UC6b4Ta_J0wbylnPu1auaQiA", channelIcon:"eJumgdOJUO9AYc6HsEwUGiZqjeu3fm3awR1NDUnSfmoM6w_ZWLEE7z4ww3epxEve2aJx5QhozA=s176-c-k-c0x00ffffff-no-rj"},
                        {channelName:"北白川かかぽ / Kakapo Kitashirakawa", videoId:"P9ELefUBdRU", setList:["76", "677", "1123", "1626", "2458", "2974"], channelURL:"UCEoAD_2jSLoYQd2MJZxWuxQ", channelIcon:"XcZWuahAYyqFeXXM_VuJvf2ElEzFYz3gwCq1aoUSGwlQ4rJlrO1WI2vavl0rc3VNkI4GLat20u0=s176-c-k-c0x00ffffff-no-rj"},
                       ];
    const num = Math.floor(Math.random() * (listTalent.length));
    const num2 = Math.floor(Math.random() * (listTalent[num].setList.length));
    if(!$("#btnOpen").hasClass("openT")){
      $("#recommendedVideo").attr("src", `https://www.youtube.com/embed/${listTalent[num].videoId}?start=${listTalent[num].setList[num2]}`);      
      $("#recommendedTalent").slideDown(500);
      $(".channelIcon").attr("src", `https://yt3.ggpht.com/${listTalent[num].channelIcon}`);
      $(".channelName").text(listTalent[num].channelName);
      $(".channelURL").attr("href", `https://www.youtube.com/channel/${listTalent[num].channelURL}`);
      $(".recommendedVideoParent").addClass("fadeIn");
      $(".channelIcon").addClass("fadeIn");
      $(".channelName").addClass("fadeIn");
      $(this).text("CLOSE");
      $(this).addClass("openT");      
    }else{
      $("#recommendedVideo").attr("src", "");
      $(".channelIcon").attr("src", "");
      $(".channelName").text("");
      $(".channelURL").attr("href", "");
      $("#recommendedTalent").slideUp(500); 
      $(".recommendedVideoParent").removeClass("fadeIn");
      $(".channelIcon").removeClass("fadeIn");
      $(".channelName").removeClass("fadeIn");
      $(this).text("OPEN");
      $(this).removeClass("openT");      
    }
  });

  iconBorder();
  brVideoTitle();
  elapsedTime();
  orangeTime();
  for(let i=0; i<$(".scheduleDateParent").length; i++){
    const videoParent = $(".scheduleDateParent").eq(i).find(".videoParent").length;
    const emergency = $(".scheduleDateParent").eq(i).find(".emergency").length;    
    if(videoParent === emergency){
      $(".scheduleDateParent").eq(i).css("display", "none");
    }
  }
  collaboration();

  let n = 0;
  $(".video").hover(
    function(){
      $(this).css("z-index",n+1);
      n += 1;
      $(this).find(".videoDetail").slideDown();
      $(this).css("transform","scale(1.10)");      
      $(this).find(".icon").animate({"opacity": "0.38"});
      $(this).find(".option").animate({"opacity": "0.5"});
      if(!($(this).hasClass("red") || $(this).hasClass("orange"))){
        $(this).find(".videoDetail").addClass("gray");
      }
    },function(){      
      $(this).find(".videoDetail").slideUp();      
      $(this).css("transform","scale(1.00)");
      $(this).find(".icon").animate({"opacity": "1.00"});
      $(this).find(".option").animate({"opacity": "1.00"});
      if(!($(this).hasClass("red") || $(this).hasClass("orange"))){
        $(this).find(".videoDetail").removeClass("gray");
      }
    }
  );

  $("#topScroll").click(function(){
    $("html, body").animate({'scrollTop': 0},500);
  });

  
  let IMG = $(".kou").prop('naturalWidth');
     
});

$(window).on('load',function(){
  $(window).on("scroll", function() {
    if(($(window).scrollTop()+$(window).height())>$("#headlineTS").offset().top){
      $("#topScrollParent").fadeIn(200);
    }else{
      $("#topScrollParent").fadeOut(200);
    }
  });
});
