$(".m_menu").hide();
$(".m_btn").click(function(){
  $(".m_menu").slideToggle()
})
$(".list>li>a img:nth-child(2)").hide()
setInterval (imgjs)
function imgjs(){
  $(".list>li>a img").delay(2000)
  $(".list>li>a img:nth-child(2)").fadeIn()
  $(".list>li>a img").delay(2000)
  $(".list>li>a img:nth-child(2)").fadeOut()
}

setInterval (slide)
function slide(){
  $(".slide").delay(5000).animate({marginLeft:"-100%"},1000)
  $(".slide").delay(5000).animate({marginLeft:"0"},1000)
}

