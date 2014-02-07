/**
*
*/
function random(_arr) 
{			
    _arr.sort(randOrder);
}

function randOrder(a, b) 
{    
    return Math.random() > 0.5 ? 1 : -1;
}