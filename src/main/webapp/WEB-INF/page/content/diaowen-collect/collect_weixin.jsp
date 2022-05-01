<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@include file="/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx }/js/plugs/zeroclipboard-master/dist/ZeroClipboard.js"></script>
<script type="text/javascript" src="${ctx }/js/dw/collect.js"></script>
<title>数据收集</title>
</head>
<body>
	<input type="hidden" id="id" name="id" value="${surveyId }">
	<input type="hidden" id="surveyState" name="surveyState" value="${survey.surveyState }">

	<jsp:include page="menu.jsp"></jsp:include>

	<div style="clear: both;"></div>
	<div id="dwBody" >
		<div id="dwBodyContent" class="bodyCenter" style="border:1px solid #C1DAEC;">
		<div id="dwBodyUser">
			<div class="surveyCollectMiddle">
				
				<div class="surveyCollectTop">
					<div class="surveyCollectTitleDiv">
						<span class="surveyCollectTitle">${survey.surveyName }</span>
						<div class="scmTabRight" >
							<c:choose>
								<c:when test="${survey.surveyState eq 0 }">
									<a href="" class="surveyStateBtn sbtn25 sbtn25_2" style="color: #599fd1;">开始收集</a>
								</c:when>
								<c:when test="${survey.surveyState eq 1 }">
									<a href="" class="surveyStateBtn sbtn25 sbtn25_2">停止收集</a>
								</c:when>
								<c:when test="${survey.surveyState eq 2 }">
									<a href="" class="surveyStateBtn sbtn25 sbtn25_2">重新打开收集</a>
								</c:when>
							</c:choose>
							
						</div>
					</div>
					<div class="surveyCollectInfoDiv">
						<span class="surveyCollectInfoLeft">
						状态：<span class="collectInfoSpan surveyStateText">${survey.surveyState eq 0 ? '设计中':survey.surveyState eq 1?'收集中':survey.surveyState eq 2?'收集完成':'' }</span>&nbsp;&nbsp;&nbsp;&nbsp;
						参加人数：<span class="collectInfoSpan">${survey.answerNum }</span>
						</span>
						<span class="surveyCollectInfoRight">
						发布时间：<span class="collectInfoSpan"><fmt:formatDate value="${survey.createDate }" pattern="yyyy年MM月dd日 HH时mm分" /> </span>
						</span>
					</div>
				</div>
				
				<div class="surveyCollectMiddleContent">
					
					<div class="collect_1_content">
					<div class="collect_weixin_content">
						
						<div style="clear: both;"></div>
						
						<div style="margin: 0px auto; width: 930px;padding-top: 10px;">
							<div class="scmcRightTop" >
								<div class="scmcRightTopLeft">
									<div class="scmcRightTopLeftTitle">通过二维码发送或分享给好友</div>
								</div>
								<div style="padding-top: 15px;overflow: auto;clear: both;">
								<div class="scmcSurveyTdCode"><img alt="" src="${ctx }/survey/answerTD.do?surveyId=${survey.id}" height="130" ></div>
								<div class="scmcRightTopRight" style="float: left ;padding-left: 30px;">
									<a href="${ctx }/survey/answerTD.do?surveyId=${survey.id}&down" class="sbtn25 sbtn25_1">下载二维码</a>
									<div class="scmcRightTopLeftNote" style="padding-top: 25px;">复制下面的问卷链接到QQ，Email等工具中直接发给被用户</div>
								</div>
								</div>
							</div>
						</div>
						
						<div style="">
							<div class="weixinSteps">
								<div class="wxinTitle">发送或分享给好友</div>
								<div class="wxinContent"><ul>
									<li><span>1、使用微信扫一扫功能。</span><img src="${ctx }/images/img1/weixin_collect1.jpg" width="260" ></li>
									<li><span>2、打开问卷后，点击右上角的“分享”按钮。</span><img src="${ctx }/images/img1/weixin_collect2.jpg" width="260" ></li>
									<li><span>3、选择“发送给朋友”或“分享到朋友圈”。</span><img src="${ctx }/images/img1/weixin_collect3.jpg" width="260" ></li>
								</ul></div>
							</div>
						</div>
						
						
						<div style="margin: 0px auto; width: 930px;margin-top: 30px;" >
							<div>
							<div class="scmcRightTop" >
								<div class="scmcRightTopLeft">
									<div class="scmcRightTopLeftTitle">通过微信公众账号
										<span style="font-size:14px;color: #9B9A9A;margin-left: 15px;">复制下面的问卷链接到QQ，Email等工具中直接发给被用户</span>
									</div>
									<!-- <div class="scmcRightTopLeftNote">复制下面的问卷链接到QQ，Email等工具中直接发给被用户</div> -->
								</div>
							</div>
							<div style="clear: both;">
								<div>
									<div class="scmcSurveyLink">
										<span class="scmcSurveyLinkLeft">&nbsp;</span>
										<span class="scmcSurveyLinkCenter"  id="linkTextarea" >http://www.diaowen.net/wenjuan/${survey.sid }.html</span>
										<span class="scmcSurveyLinkRight"><span id="clipLinkSpan" style="display: none;">复制成功</span></span>
										<a href="#" style="display: block;" class="clipLink" id="clipLink" data-clipboard-text="http://www.diaowen.net/wenjuan/${survey.sid }.html">复制链接</a>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div style="clear: both;"></div>
						
						<div style="margin-top: 15px;">
							<div class="weixinSteps">
								<div class="wxinTitle">通过微信公众账号</div>
								<div class="wxinContent"><ul>
									<li><span>1、打开公众账号</span><img src="${ctx }/images/img1/weixin_b_s3.png" width="260"></li>
									<li><span>2、打开问卷后，点击右上角的“分享”按钮。</span><img src="${ctx }/images/img1/weixin_b_s4.jpeg" width="260" ></li>
								</ul></div>
							</div>
						</div>
						
						
					</div>
				</div>
				</div>
			</div>
			
		</div>
		</div>
	</div>
<script type="text/javascript">

var client = new ZeroClipboard( document.getElementById("clipLink") );
client.on( "ready", function( readyEvent ) {
  	// alert( "ZeroClipboard SWF is ready!" );
	  client.on( "aftercopy", function( event ) {
	    // `this` === `client`
	    // `event.target` === the element that was clicked
	    // event.target.style.display = "none";
		  $("#clipLinkSpan").show().delay(5000).fadeOut("slow");
		  return false;
	  });
});
$("#clipLink").click(function(){
	return false;
});
</script>
</body>
</html>