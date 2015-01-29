var t = null;

$(document).ready(function() {
  clear_switchers();
  set_switcher_click();
  activate_switcher($("a.switcher")[0]);
});

function clear_switchers() {
  $("a.switcher").removeClass("active");
}

function set_switcher_click() {
  $("a.switcher").click(function () {
    activate_switcher(this);
    return false;
  });
}

function activate_switcher(clicked_link) {
  if(!clicked_link) return
  if( t ) clearTimeout(t);
  clear_switchers();
  $("#switch-me")[0].src = "/images/" + clicked_link.innerHTML + ".png";
  $(clicked_link).addClass("active");


  var subj = null
  $(".image-switchers a.active + a").each(function () {
    subj = this;
  });

  if( !subj ) {
    $(".image-switchers a:first-child").each(function() {
      subj = this;
    })
  };

  if( subj ) {
    t = setTimeout(function() { $(subj).click() }, 10000);
  }
}

