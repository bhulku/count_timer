var CT = CT || {};

CT = (function($, window, document, CountTimer){

  CountTimer.home = {
      initCounter : function(duration){
        CT.timer = setInterval(function(){
          if(duration <= 0){
            clearInterval(CT.timer); 
            CT.home.initCounter(10);
          }
          $('#counter').text(duration--);
            
        },1000);  

      },
      clickCount : function(){
        $("#resetButton").on("click",function(e){
          var tickTime = $("#counter").text();
          // $("#tableTimer").append("<tr><td>"+ tickTime+"</td></tr>");
          CT.home.addCount(tickTime)
          clearInterval(CT.timer); 
          CT.home.initCounter(10);
      
        })
      },
      addCount : function(tickTime){
        var ajaxOptions = {
          url: "/add_counter",
          type:'POST',
          data: {tick_time:tickTime},
          dataType:'json',          
        };
        $.ajax(ajaxOptions).success(function(response){
           $("#tableTimer").append("<tr><td>"+ response.tick_time+"</td></tr>");
        });
      }

    }
  $(document).ready(function(){
    CT.home.clickCount();
    CT.home.initCounter(10);
  })
  return CountTimer;
})(jQuery, this, this.document, CT);


