
function showText(number) {
    var photoNum = "";
    switch(number) {
        case 1: 
            photoNum = '#desc1'; break;
        case 2:
            photoNum = '#desc2'; break;
        case 3:
            photoNum = '#desc3'; break;
        case 4:
            photoNum = '#desc4'; break;
    }
    document.querySelector(photoNum).classList.remove('hideText');
    document.querySelector(photoNum).classList.add('showText');
}

function hideText() {
    var photoNum = "";
    switch(number) {
        case 1: 
            photoNum = '#desc1'; break;
        case 2:
            photoNum = '#desc2'; break;
        case 3:
            photoNum = '#desc3'; break;
        case 4:
            photoNum = '#desc4'; break;
    }
    document.querySelector(photoNum).classList.remove('showText');
    document.querySelector(photoNum).classList.add('hideText');
}

function alertText(number) {
    alert(number+'번째 추억이에요.');
}


