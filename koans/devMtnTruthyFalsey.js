describe('About Truthy and Falsy', function(){
  it('should create a variable called theTruth and make it truthy', function(){
    var theTruth;
    
  });

  it('should create a variable called theAntiTruth and make it be falsy', function(){
    var theAntiTruth;
    
  });

  it('should all be falsy', function(){
    //replace all the FILL_ME_IN's with 4 different Falsy values
    var falsyArray = [null, undefined, NaN, 0];

    var flag = true;
    for(var i = 0; i < falsyArray.length; i++){
      if(falsyArray[i]){
        flag = false;
      }
    }
    expect(flag).toBeTruthy();
  });

  it('should fix the array so all indices are Falsy', function(){
    //remove all items in the falsyArray so that every indice is Falsy
    var falsyArray = [,0,null,undefined,NaN,5-5];


    //dont touch this code
    var flag = false;
    for(var i = 0; i < falsyArray.length; i++){
      if(falsyArray[i]){
        flag = true;
      }
    }
    expect(flag === false && falsyArray.length === 6).toBeTruthy();
  });
});

