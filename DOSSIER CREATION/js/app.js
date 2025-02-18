const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    console.log(menu);
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons-outlined").innerHTML ="close"
    }
    else{
        document.querySelector("header .material-icons-outlined").innerHTML ="menu"
    }
}

const innerCursor = document.querySelector('.inner-cursor');
/*let outerCursor =document.querySelector('.outer-cursor');*/
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchpoints > 0;

if (!isTouchDevice) {
    document.addEventListener('mousemouve', moveCursor);
    document.addEventListener('mouseover', () => {
        innerCursor.style.display = 'block';
    });
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null || !document.contains(e.relatedTarget)){
            innerCursor.style.display = 'none';
        }
    });
}

document.addEventListener('mousemove', moveCursor)
document.addEventListener('mouseover', () => {
    innerCursor.style.display = 'block';
}); 

document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null || !document.contains(e.relatedTarget)){
        innerCursor.style.display = 'none';
    }
});

/*window.addEventListener('mouseover', () => {
    innerCursor.style.display = 'block';
})

pas besoin de la ligne de code ci-dessus qui permettait juste de s'assurer que la souris réapparaisse bien lorsque on quitte puis revient sur la page
*/

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    /*outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;*/

}