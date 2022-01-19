var slideImg = document.getElementById('slideImg');

var images = new Array(
  "https://storage.googleapis.com/adm-portal.appspot.com/noticias/_imgHighlight/noticia_127919.jpg?mtime=20190325112319&focal=none",
  "https://rtcountdigital.com.br/wp-content/uploads/elementor/thumbs/contabilidade-digital-f2933412-1920w-ot23ur9qzx3sjbgdhwafwsdo1xkulw0umgkuyodg1i.jpg",
  "https://contabnet.com.br/wp-content/uploads/2020/08/contabilidade-digital.jpg"
);

var len = images.length;
var i = 0;

function slider(){
  if(i >len-1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()',5000);
}