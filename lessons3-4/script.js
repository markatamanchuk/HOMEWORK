 var inner = function (){
        var arr1 = [1,2,3];
        
        for (var i = 0; i < arr1.length; i++){
          document.write('<br />');
          document.write( i );
          outer();
          
          document.write('<br />');
          document.write('первый цикл');
          
        }
      };

      var outer = function(){
        
        var arr2 = [4,6,8];
        
        for (var i = 0; i < arr2.length; i++){
          document.write('<br />');
          document.write( i );
          document.write('<br />');
          document.write('Второй цикл');
        }
      };

      inner();

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}


var arr = [8,4,6,7,-12,-34];
   
   function getMax(arg){
    
      var result = 0
        
        for(var i = 0; i < arg.length; i++){
          
          if (result > arg[i]){
            
            result = arg[i]
      
              }
          }
    return result

  }
  
document.write(getMax(arr,2,3,4,5,function(){}));
  // return arguments[arguments.length-1];