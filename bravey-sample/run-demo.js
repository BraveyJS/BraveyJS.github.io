function _rundemo() {
	var cb=new ChatterBox(document.getElementById("embed-here"),"Embed",{trackingId:'UA-766294-18',single:true,responsive:"merged",root:"bravey-sample/"});
	cb.addBot("bots/billbot.js","BillBot","avatar/cart.png","en-US","",{language:"EN"});
	cb.ready();
}