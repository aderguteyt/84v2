var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        var block_img_obj = Img;
        block_img_obj.scaleToWidth(473);
        block_img_obj.scaleToHeight(612);
        block_img_obj.set({
            top:0, left:0
        });
        canvas.add(block_img_obj);

    });
	
}

function playsound(){
	x.play();
}
