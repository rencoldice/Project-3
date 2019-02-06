
//点开的特效
    function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
        var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
        var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
        var openTip = oOpenTip || "";
        var shutTip = oShutTip || "";
        if(targetObj.style.display!="none"){
            if(shutAble) return;
            targetObj.style.display="none";
            if(openTip  &&  shutTip){
                sourceObj.innerHTML = shutTip;
            }
        } else {
            targetObj.style.display="block";
            if(openTip  &&  shutTip){
                sourceObj.innerHTML = openTip;
            }
        }
    }




    // $(function() {
    //     $("#toggle").click(function() {
    //         $(this).text($("#content").is(":hidden") ? "收起" : "展开");
    //         $("#content").slideToggle();
    //     });
    // });

