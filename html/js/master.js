var Body = {
    setColor: function(color){
      $('body').css('color', color);
    },
    setBackgroundColor: function(color){
      $('body').css('background-color', color);
    }
  }
  
  var Links = {
    setColor: function(color){
      $('a').css('color', color);
    }
  }
  
  function changeColorHandler(self){
    if(self.value == 'black'){
      Body.setBackgroundColor('lightcyan');
      Body.setColor('black');   
      Links.setColor('black')   
      self.value = 'lightcyan';
    } else {
      Body.setBackgroundColor('black')
      Body.setColor('lightcyan');   
      Links.setColor('lightcyan');
      self.value = 'black';  
    } 
  }