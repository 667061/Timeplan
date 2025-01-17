document.addEventListener('DOMContentLoaded',function(){
    const X_CENTER = window.innerWidth / 2;
    const Y_CENTER = window.innerHeight / 2;    
    const distanceFromCenter = 250;


   

    let circles = document.getElementsByTagName('div');
    let elements = circles.length;    
    const angleStep = (2*Math.PI) / elements;
    let today = new Date();
    let startAngleOffset = 0;
    let leftMost = 0;



    function positionCircles(){
        for(let i = 0; i < elements; i++) {
        let angle = i*angleStep - startAngleOffset;
        circles[i].style.left = `${X_CENTER + distanceFromCenter * Math.cos(angle) - (circles[i].offsetWidth / 2)}px`;
        circles[i].style.top = `${Y_CENTER + distanceFromCenter * Math.sin(angle)- (circles[i].offsetHeight / 2)}px`; 
        
        //Operations on the rightmost circle
        if(angle % (Math.PI*2) < 0.2 && angle % (Math.PI*2) > -0.2 ){
            circles[i].style.border = "6px solid black";
            leftMost = circles[i];
            console.log("Leftmost is" + circles[i].innerText )
        } else
            circles[i].style.border = "2px solid black";
        
        }
    }


    document.getElementById('rotate').addEventListener('click',function(){
        startAngleOffset -= angleStep;
        positionCircles();

    });

    document.getElementById('remove').addEventListener('click',function(){
        leftMost.innerText ="";
        positionCircles();
    });


    document.getElementById('insert').addEventListener('click',function(){
        leftMost.innerText = infield.value;
        infield.value ="";
        positionCircles();
    });



   
   positionCircles();
    
    console.log("Secs: " + `${today.getSeconds()}`);
    console.log(`Center x" ${X_CENTER}`);
    console.log(`Center y" ${Y_CENTER}`);


});

function btn(){

}