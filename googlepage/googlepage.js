
var basic="https://www.google.com/search?";

var keyword=$("textarea").val();
var currentpage=1;
var start=(currentpage-1)*10;

var url_string=window.location.href;
var url = new URL(url_string);
start = url.searchParams.get("start");
currentpage=(start/10)+1;

var googlepage = document.createElement("div");

//pre 前三頁
for(i=(currentpage-3);i<currentpage;i++){
  if(i>0){
    var link=document.createElement("a");
    $(link).attr("href",basic+"q="+keyword+"&start="+(i-1)*10);
    $(link).html(i);
    googlepage.append(link);
  }
}

//當前頁
var currentlink=document.createElement("a");
$(currentlink).attr("href",basic+"q="+keyword+"&start="+(currentpage-1)*10);
$(currentlink).attr("style","color:red");
$(currentlink).html(currentpage);
googlepage.append(currentlink);

//next 後三頁

for(i=(currentpage+1);i<=(currentpage+3);i++){
  var link=document.createElement("a");
  $(link).attr("href",basic+"q="+keyword+"&start="+(i-1)*10);
  $(link).html(i);

  googlepage.append(link);
}

var body=$("#center_col");
body.append(googlepage);
