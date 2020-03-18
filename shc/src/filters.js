import Vue from 'vue' ;

Vue.filter('formatarCardInfo', function (card){
      var formatado = card.replace(',','');
      return formatado;
    
});