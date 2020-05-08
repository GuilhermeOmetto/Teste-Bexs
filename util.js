const domDinamicCard = document.getElementById('dinamicCard');
const domFrontCard = document.getElementById('frontCard');
const domBackCard = document.getElementById('backCard');

const domImgOperatorFake = document.getElementById('imgOperatorFake');
const domInputNumberCardFake = document.getElementById('numberCardFake');
const domInputNameCardFake = document.getElementById('nameCardFake');
const domInputValidityCardFake = document.getElementById('expirationDateFake');
const domInputCCVCardFake = document.getElementById('CCVFake');

const domInputNumberCard = document.getElementById('numberCard');
const domInputNameCard = document.getElementById('nameCard');
const domInputValidityCard = document.getElementById('expirationDate');
const domInputCCVCard = document.getElementById('CCV');
const domInputInstallments = document.getElementById('installments');

const domBtnNext = document.getElementById('btnNext');

let compare = true;
let width = screen.width;



function initDOM() {

    domInputNumberCardFake.value = "**** **** **** ****";
    domInputNameCardFake.value = "nome do titular";
    domInputValidityCardFake.value = "00/00";
    domInputCCVCardFake.value = "***"


    try {
        if (!(domInputNumberCard == null)) {
            domInputNumberCard.addEventListener('keyup', formatNumberCard)
            domInputNumberCard.addEventListener('focusout', validateFildNull);
            domInputNumberCard.addEventListener('focusin', cardFlip);
        };

        if (!(domInputNameCard == null)) {
            domInputNameCard.addEventListener('keyup', formatNameCard);
            domInputNameCard.addEventListener('focusout', validateFildNull);
            domInputNameCard.addEventListener('focusin', cardFlip);
        };

        if (!(domInputValidityCard == null)) {
            domInputValidityCard.addEventListener('keyup', formatValidityCard);
            domInputValidityCard.addEventListener('focusout', validateFildNull);
            domInputValidityCard.addEventListener('focusin', cardFlip);            
        };

        if (!(domInputCCVCard == null)) {
            domInputCCVCard.addEventListener('keyup', formatCCVCard);
            domInputCCVCard.addEventListener('focusout', validateFildNull);
            domInputCCVCard.addEventListener('focusin', cardFlip);
        };
        if (!(domInputInstallments == null)) {
            domInputInstallments.addEventListener('focusout', validateFildNull);
        };


        domBtnNext.addEventListener('click', btnNextAction);
    }
    catch (e) {
        console.log(e);
    }
}



function cardFlip(event){
    if (event.target.id == 'CCV') {
        compare = false;
        domFrontCard.style = 'transform: rotateY(-180deg)'
        domBackCard.style = 'transform: rotateY(0deg)';
        domFrontCard.display = 'none';
        
        return;
    } 
    else if (compare == false) {
        domBackCard.style = 'transform: rotateY(180deg)';
        domFrontCard.style = 'transform: rotateY(0deg)';

        return;
    };
}


function formatNumberCard () {
    $(domInputNumberCard).mask('9999 9999 9999 9999');
    domInputNumberCardFake.value = domInputNumberCard.value;

    if(!(domInputNumberCard.value == '')) {
        domImgOperatorFake.style = "opacity: 1";
        $(this).parent().find('label').css({"opacity": "1"});

        if(width <= 768) {
            domFrontCard.style = "background: url(imgs/bkg-Fcard-Mobile.svg) center no-repeat";

        }
        else {
            domFrontCard.style = "background: url(imgs/bkg-Fcard.svg) center no-repeat";
        };

        return;
    }
    else {
        $(this).parent().find('label').css({"opacity": "0"});
    };

    if(width <= 768) {
        if(domInputNumberCard.value == '') {
            domInputNumberCardFake.value = "**** **** **** ****";
            domFrontCard.style = "background: url(imgs/bkg-Fcard-Mobile-disabled.svg) center no-repeat";
            domImgOperatorFake.style = "opacity: 0";
            return;
        };
    }
    else {
        if(domInputNumberCard.value == '') {
            domInputNumberCardFake.value = "**** **** **** ****";
            domFrontCard.style = "background: url(imgs/bkg-Fcard-disabled.svg) center no-repeat";
            domImgOperatorFake.style = "opacity: 0";
            return;
        };
    };
}


function formatNameCard () {
    domInputNameCardFake.value = domInputNameCard.value;

    if(!(domInputNameCard.value == '')) {
        $(this).parent().find('label').css({"opacity": "1"});
    }
    else {
        $(this).parent().find('label').css({"opacity": "0"});
    };

    if(domInputNameCard.value == '') {
        domInputNameCardFake.value = "nome do titular";
        return;
    };
}


function formatValidityCard () {
    $(domInputValidityCard).mask('99/99');
    domInputValidityCardFake.value = domInputValidityCard.value;

    if(!(domInputValidityCard.value == '')) {
        $(this).parent().find('label').css({"opacity": "1"});
    }
    else {
        $(this).parent().find('label').css({"opacity": "0"});
    };

    if(domInputValidityCard.value == '') {
        domInputValidityCardFake.value = "00/00";
        return;
    };
}


function formatCCVCard () {
    domInputCCVCardFake.value = domInputCCVCard.value;

    if(!(domInputCCVCard.value == '')) {
        $(this).parent().find('label').css({"opacity": "1"});

        if(width <= 768) {
            domBackCard.style = "background: url(imgs/bkg-Bcard-Mobile.svg) center no-repeat";
        }
        else {
            domBackCard.style = "background: url(imgs/bkg-Bcard.svg) center no-repeat";
        };

        return;
    } 
    else {
        $(this).parent().find('label').css({"opacity": "0"});
    };

    if(width <= 768) {
        if(domInputCCVCard.value == '') {
            domInputCCVCardFake.value = "***";
            domBackCard.style = "background: url(imgs/bkg-Bcard-Mobile-disabled.svg) center no-repeat";
            return;
        };
    }
    else {
        if(domInputCCVCard.value == '') {
            domInputCCVCardFake.value = "***";
            domBackCard.style = "background: url(imgs/bkg-Bcard-disabled.svg) center no-repeat";
            return;
        };
    };
}


function backPage() {
    window.history.back();
}


function validateFildNull(event) {
    if(event.target.value == '') {
        this.style = "border-bottom: 2px solid var(--second-color)";

        console.log($(this).parent().find('small'));
        $(this).parent().find('small').css("display", "block");
    }
    else {
        this.style = "border-bottom: 1px solid var(--sixth-color)";
        $(this).parent().find('small').css("display", "none");
    };

    if (domInputInstallments[0].selected) {
        this.style = "border-bottom: 2px solid var(--second-color)";
        $(this).parent().find('small').css("display", "block");
    }
    else {
        this.style = "border-bottom: 1px solid var(--sixth-color)";
        $(this).parent().find('small').css("display", "none");
    };
}


function btnNextAction() {
    let retfieldCompar = true;

    for (var i = 0; i < 5; i++) {
        switch (i) {
            case 0:
                if (domInputNumberCard.value == '' || domInputNumberCard.value.length < 19) {
                    domInputNumberCard.style = "border-bottom: 2px solid var(--second-color)";
                    document.getElementById("numberInvalid").style = "display: block";
                    retfieldCompar = false;
                }
                else {
                    domInputNumberCard.style = "border-bottom: 1px solid var(--sixth-color)";
                    document.getElementById("numberInvalid").style = "display: none";
                }

                break;
            case 1:
                if (domInputNameCard.value == '') {
                    domInputNameCard.style = "border-bottom: 2px solid var(--second-color)";
                    document.getElementById("nameInvalid").style = "display: block";
                    retfieldCompar = false;
                }
                else {
                    domInputNameCard.style = "border-bottom: 1px solid var(--sixth-color)";
                    document.getElementById("nameInvalid").style = "display: none";
                }

                break;
            case 2:
                if (domInputValidityCard.value == '' || domInputValidityCard.value.length < 5) {
                    domInputValidityCard.style = "border-bottom: 2px solid var(--second-color)";
                    document.getElementById("expirationDateInvalid").style = "display: block";
                    retfieldCompar = false;
                }
                else {
                    domInputValidityCard.style = "border-bottom: 1px solid var(--sixth-color)";
                    document.getElementById("expirationDateInvalid").style = "display: none";
                }

                break;
            case 3:
                if (domInputCCVCard.value == '' || domInputCCVCard.value.length < 3) {
                    domInputCCVCard.style = "border-bottom: 2px solid var(--second-color)";
                    document.getElementById("ccvInvalid").style = "display: block";
                    retfieldCompar = false;
                }
                else {
                    domInputCCVCard.style = "border-bottom: 1px solid var(--sixth-color)";
                    document.getElementById("ccvInvalid").style = "display: none";
                }
                
                break;
            case 4:
                if (domInputInstallments[0].selected) {
                    domInputInstallments.style = "border-bottom: 2px solid var(--second-color)";
                    document.getElementById("installmentsInvalid").style = "display: block";
                    retfieldCompar = false;
                }
                else {
                    domInputInstallments.style = "border-bottom: 1px solid var(--sixth-color)";
                    document.getElementById("installmentsInvalid").style = "display: none";
                }

                break;
        }
    }
    

    if (retfieldCompar) {
        return;
    }
    else {
        document.getElementById("btnNext").click();
    }
}

initDOM();