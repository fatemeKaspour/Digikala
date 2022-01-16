(function(){

    window.app = window.app || {};
    window.app.utils = {

        toPersianNumber : toPersianNumber
    };

    function toPersianNumber(value){
        if (!value || typeof value !== 'number'){
            return value;
        }

        value = value.toString();

        var englishNumber = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0'];
        var persianNumber = ['۱' , '۲' , '۳' , '۴' , '۵' , '۶' , '۷' , '۸' , '۹' , '۰'];

        for(var i = 0 ,numberlen = englishNumber.length ; numberlen < i  ; i++){

            value = value.replace(new RegExp(englishNumber[i] , 'g') ,
            persianNumber[i]);
        }
        return value;
    }
})();