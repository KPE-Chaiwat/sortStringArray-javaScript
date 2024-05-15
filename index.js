var character = 'M';
var listdata=['Marcel Proust', 'Miguel de Cervantes', 'James Joyce', 'Herman Melville', 'William Shakespeare']
// if (character == character.toUpperCase()) {
//  console.log ('upper case true');
// }
// if (character == character.toLowerCase()){
//  console.log  ('lower case true');
// }

if(listdata[0].toUpperCase()){
    console.log ('upper case true');
}else{
    console.log ('lower case true');
}

    console.log (listdata);
for(var i = 0; i<listdata.length;i++){
    if(i!=listdata.length-1){
        if(listdata[i][0]=="M"){
            swapItemList(listdata,i,i+1)
        }
    }
}
  console.log ("-------------");
  console.log (listdata);
function swapItemList(listData ,formINdex,toIndex){
     var output =[];
    if(listData[formINdex]!=undefined&&listData[toIndex]!=undefined){
    const temp = listData[formINdex];
    listData[formINdex] = listData[toIndex];
    listData[toIndex] = temp;
     output =listData;
     return output;
    }else{
           return output;
    }
}