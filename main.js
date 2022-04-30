var mouseEvent = "Empty";

color = "Red";
width_of_Line = "2";

canvas = 
document.getElementById(myCanvas);
ctx= canvas.getContext("2d");

Canvas.addEvent("mousedown", my_mousedown);
function my_mousedown(e){

color = document.getElementById("Color").value;
width_of_Line = document.getElementById("width_of_the_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mousedown";
} 

Canvas.addEvent("mouseup", my_mouseup);
function my_mouseup(e){

color = document.getElementById("Color").value;
width_of_Line = document.getElementById("width_of_the_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseup";                                                      


}


Canvas.addEvent("mousemove", my_mousemove);

function my_mousemove(e){

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown") {

console.log("Current position of x and y coordinates = ");
console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);

ctx.beginPath();
ctx.strokStyle = "color";
ctx.lineWidth = width_of_Line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
ctx.stroke();
}

}












