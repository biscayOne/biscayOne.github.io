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

    function birthdayCard(HBD, name, twitterID, twitterIcon, imageColor){
      $("#birthdayParentFrame").css("display", "block");
      $("#birthdayString").html(`Happy Birthday!<br><br>本日${HBD}は…<br><a id="underLine" href=https://twitter.com/${twitterID} target="_blank" rel="noopener noreferrer">${name}</a> の誕生日！`);
      $("#birthdayIconParent").attr("href", `https://twitter.com/${twitterID}`);
      $("#birthdayIcon").attr("src", `/images/${twitterIcon}.jpg`);
      $("#birthdayIcon").css("border-color", `${imageColor}`);
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
        newBirthdayCard("九条 林檎", "ringo_0_0_5", "Ringo");
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
        $(".videoUC").eq(i).removeClass("gray");
        $(".videoUC").eq(i).addClass("orange");        
        $(".videoUC").eq(i).find(".videoDetail").addClass("orange");
        $(".videoUC").eq(i).find(".collaboration").addClass("orange");
      }
      if(waitingTime < -3.0){
        $(".videoUC").eq(i).find(".videoThumbnail").css("opacity", "0.62");
        $(".videoUC").eq(i).find(".faVideo").removeClass("fa-bell faa-wrench animated");
        $(".videoUC").eq(i).find(".faVideo").addClass("fa-triangle-exclamation");
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
    
  noneVideoLN();

  iconBorder();
  brVideoTitle();
  elapsedTime();
  orangeTime();
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
