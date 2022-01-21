var mouseEvent ="empty";
var lastX,lastY;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
color = 'black';
width_of_line = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y coordinates = ");
        console.log('x = ' + lastX + 'y = ' + lastY);
        ctx.moveTo(lastX, lastY);

        console.log('current position of x and y coordinates = ');
        console.log('x = ' + currentX + 'y = ' + currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e) 
{
  mouseEvent = 'mouseup';
}
canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e) 
{
  mouseEvent = 'mouseleave';
}