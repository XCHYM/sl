$("#xxhd").on("click", function(e){
    $("#menu").show();

    $(document).one("click", function(){
        $("#menu").hide();
    });

    e.stopPropagation();
});
$("#menu").on("click", function(e){
    e.stopPropagation();
});
function $(id) { return document.getElementById(id); }
    window.onload = function () {
        document.onclick = function (e) {
            $("xxhd2").style.display = "none";
        }
        $("xxhdx").onclick = function (e) {
            $("xxhd2").style.display = "block";
            e = e || event; stopFunc(e);
        }
        $("xxhd2").onclick = function (e) {
            e = e || event; stopFunc(e);
        }
    }
    function stopFunc(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    }