<script src="//http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
$(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/5)
        $("#spopup").show("slow");else $("#spopup").hide("slow");
});
function closeSPopup(){
    $('#spopup').hide('slow');
}