$(document).ready(function(){
  $("form#grocery-list").submit(function(event){
    var items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()]

    var upperItems = items.map(function(item){
      return item.toUpperCase();
    })

    var sorted = upperItems.sort();

    sorted.map(function(item){
    $(".final-list").text("<li>" + sorted + "</li>");
  });

  $("#grocery-list").hide();
  (event).preventDefault();
  });
});
