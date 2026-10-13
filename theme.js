/* Light / dark mode: remembers the choice, otherwise follows the device setting */
(function(){
  var KEY="sh-library-theme",root=document.documentElement,saved=null;
  try{saved=localStorage.getItem(KEY)}catch(e){}
  var dark=saved?saved==="dark":window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme",dark?"dark":"light");
  document.addEventListener("DOMContentLoaded",function(){
    var b=document.createElement("button");
    b.className="theme-toggle";b.type="button";
    function paint(){var d=root.getAttribute("data-theme")==="dark";b.textContent=d?"☀️":"🌙";b.setAttribute("aria-label",d?"Switch to light mode":"Switch to dark mode");b.title=b.getAttribute("aria-label")}
    b.onclick=function(){var d=root.getAttribute("data-theme")!=="dark";root.setAttribute("data-theme",d?"dark":"light");try{localStorage.setItem(KEY,d?"dark":"light")}catch(e){}paint()};
    paint();document.body.appendChild(b);
  });
})();
