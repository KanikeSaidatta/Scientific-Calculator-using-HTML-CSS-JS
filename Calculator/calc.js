function fact(val){
    const display=document.getElementsByClassName('display')[1];
    var res=1;
    if(val==0 || val==1){
        display.value=1;
    }
    else if(val>1){
        for(var i=1;i<=val;i++){
            res=res*i;
        }
        display.value=res;
    }
    else{
        display.value='Enter positive number';
    }
}
