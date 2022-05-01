function bindDateEvent(){
    var checkTypeDates = $("#dwSurveyQuContent .checkType[value='DATE']");
    $.each(checkTypeDates,function(){
        var surveyQuItemBody = $(this).parents(".surveyQuItemBody");
        var paramInt01 = surveyQuItemBody.find(".paramInt01");
        var dateFmt = "yyyy-MM-dd";
        var dateType = "date";
        if(paramInt01[0]){
            var paramInt01Val = paramInt01.val();
            if(paramInt01Val==="1"){
                dateFmt="yyyy";
                dateType="year";
            }else if(paramInt01Val==="2"){
                dateFmt="yyyy-MM";
                dateType="month";
            }else if(paramInt01Val==="3"){
                dateFmt="yyyy-MM-dd";
                dateType="date";
            }else if(paramInt01Val==="4"){
                dateFmt="yyyy-MM-dd HH:mm:ss";
                dateType="datetime";
            }else if(paramInt01Val==="5"){
                dateFmt="HH:mm:ss";
                dateType="time";
            }else if(paramInt01Val==="6"){
                dateFmt="HH:mm";
                dateType="time";
            }
        }
        // console.debug("dateType:"+dateType);
        //  validateCheck($(this).parents(".li_surveyQuItemBody"),true);
        laydate.render({
            elem: surveyQuItemBody.find("input.fillblankInput")[0] //指定元素
            ,type: 'datetime'
            ,format: dateFmt
            ,type: dateType
        });
    });
}
function checkoutData(checkType, value) {
    var validateStatus = true;
    if(value.length<=0){
        validateStatus = false;
    }
    if (checkType == "NO") {
        if(value.length<=0){
            validateStatus = false;
        }
    }else if (checkType == "EMAIL") {
        var __email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!__email.test(value)) {
            validateStatus = false;
        }
    } else if (checkType == "UNSTRCN") {
        var __cn = /^[\u3220-\uFA29]+$/;
        if (__cn.test(value)) {
            validateStatus = false;
        }
    } else if (checkType == "STRCN") {
        var __cn = /^[\u3220-\uFA29]+$/;
        if (!__cn.test(value)) {
            validateStatus = false;
        }
    } else if (checkType == "NUM") {

        // "number[/[+|-][int|integer|float|double|money|{位数正则}.{位数正则}]]"
//					var __regex = /^\d+(\.\d+)?$/;
        var __regex = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
        if (!__regex.test(value)) {
            validateStatus = false;
        }
    } else if (checkType == "DIGITS") {
        var __regex = /^\d+$/;
        if (!__regex.test(value)) {
            validateStatus = false;
        }

    } else if (checkType == "TELENUM") {
        var tel = /^\d{3,4}-{1}\d{7,9}-?\d{1,6}$/;
        var tel400800 = /^(400{1}-?[0-9]{3}-?[0-9]{4})|(800{1}-?[0-9]{3}-?[0-9]{4})$/
        if (!(tel.test(value) || tel400800.test(value))) {
            validateStatus = false;
        }
    } else if (checkType == "PHONENUM") {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!(length == 11 && mobile.test(value))) {
            validateStatus = false;
        }
    } else if (checkType == "TELE_PHONE_NUM") {

        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var tel = /^\d{3,4}-{1}\d{7,9}-?\d{1,6}$/;
        var tel400800 = /^(400{1}-?[0-9]{3}-?[0-9]{4})|(800{1}-?[0-9]{3}-?[0-9]{4})$/
        if (!(tel400800.test(value) || tel.test(value) || mobile.test(value))) {
            validateStatus = false;
        }

    } else if (checkType == "DATE") {

        //日期的正则表达式
        /*
        var reg1 = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;//2014-01-01
                     var regExp1 = new RegExp(reg1);
                     var reg2 = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;//12:00:00
                     var regExp2 = new RegExp(reg2);
                     var reg3 = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;//2014-01-01 12:00:00
                     var regExp3 = new RegExp(reg3);
                     if(!(regExp1.test(value) || regExp2.test(value) || regExp3.test(value) )){
                     //						alert("日期格式不正确，正确格式为：2014-01-01");
                     errorType = "DATE";
                     validateStatus = false;
                     }
         */
        /*if (/Invalid|NaN/.test(new Date(value).toString())) {
            validateStatus = false;
        }*/
        validateStatus = true;


    } else if (checkType == "IDENTCODE") {
        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(value);
        if (!(check && (value.length == 15 || value.length == 18))) {
            validateStatus = false;
        }

    } else if (checkType == "ZIPCODE") {

        var tel = /^[0-9]{6}$/;
        if (!tel.test(value)) {
            validateStatus = false;
        }

    } else if (checkType == "URL"){
        var strRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        if (!strRegex.test(value)) {
            validateStatus = false;
        }
    }
    return validateStatus;
}

function lgcommon(thFormElementObj){
    var quItemBody=thFormElementObj.parents(".li_surveyQuItemBody");
    var quLogicItems=quItemBody.find(".quLogicItem");
    if(quLogicItems[0]){
        var quInputCase=quItemBody.find(".quInputCase");
        var quId=quInputCase.find(".quId").val();
        var quType=quInputCase.find(".quType").val();
        if(quType==="RADIO" || quType==="CHECKBOX" || quType==="SCORE" || quType==="MULTIFILLBLANK" || quType==="CHENRADIO" || quType==="CHENCHECKBOX" || quType==="CHENSCORE" || quType==="CHENFBK" ){
            //遍历每个逻辑设置
            var quOptionItems=null;
            if(quType==="RADIO" || quType==="CHECKBOX"){
                quOptionItems=quItemBody.find(".dwQuOptionItemContent");
            }else if(quType==="SCORE"){
                quOptionItems=quItemBody.find(".quScoreOptionTr");
            }else if(quType==="MULTIFILLBLANK"){
                quOptionItems=quItemBody.find(".mFillblankTableTr");
            }
            $.each(quLogicItems,function(){
                var loginItem=$(this);
                var cgQuItemId=loginItem.find(".cgQuItemId").val();
                var skQuId=loginItem.find(".skQuId").val();
                var logicId=loginItem.find(".logicId").val();
                var logicType=loginItem.find(".logicType").val();

                var geLe=null;
                var scoreNum=null;
                if(quType==="SCORE"){
                    geLe=loginItem.find(".geLe").val();
                    scoreNum=loginItem.find(".scoreNum").val();
                }
                //过滤优先级
                var isbreak=false;
                $.each(quOptionItems,function(){
                    var quCoItem=$(this);
                    var quInput=null;
                    var logicStatus=false;
                    var curQuItemId=null;
                    if(quType==="RADIO"){
                        quInput=quCoItem.find("input[type='radio']");
                        logicStatus=quInput.prop("checked");
                        curQuItemId=quInput.val();
                    }else if(quType==="CHECKBOX"){
                        quInput=quCoItem.find("input[type='checkbox']");
                        logicStatus=quInput.prop("checked");
                        curQuItemId=quInput.val();
                    }else if(quType==="MULTIFILLBLANK"){
                        quInput=quCoItem.find(".dwMFillblankOptionId");
                        logicStatus=quCoItem.find(".dwMFillblankInput").val()!="";
                        curQuItemId=quInput.val();
                    }

                    if(curQuItemId===cgQuItemId){
                        if(logicStatus){
                            var hidQuItemBodys=$(".hidFor"+logicId);
                            $(".hidFor"+logicId).removeClass("hidFor"+logicId);
                            $.each(hidQuItemBodys,function(){
                                var thQuItemBodyClass=$(this).attr("class");
                                if(thQuItemBodyClass.indexOf("hidFor")<0){
                                    $(this).show();
                                    $(this).find(".answerTag").attr("disabled",false);
                                }
                            });

                        }else{
                            var hidQuItemBody=$(".quId[value='"+skQuId+"']").parents(".li_surveyQuItemBody");
                            hidQuItemBody.hide();
                            hidQuItemBody.addClass("hidFor"+logicId);
                            hidQuItemBody.find(".answerTag").attr("disabled",true);
                        }
                        return false;
                    }
                });

                if(isbreak){
                    return false;
                }

            });

        }
    }
}
