

function showAdvancedMenu(){
    var advancedOps = $('#advanced');
    var advancedBtn = $('.advancedbtn');
    if (advancedOps.hasClass('collapsed')){
        advancedOps.toggleClass('hidden', 'show');
        advancedBtn.toggleClass('fa-angle-down');
        advancedBtn.toggleClass('fa-angle-up');

    }else{
        advancedOps.toggleClass('show', 'hidden');
        advancedBtn.toggleClass('fa-angle-down');
        advancedBtn.toggleClass('fa-angle-up');
    }
}