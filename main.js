 difference=0;
function setup() 
{

    video = createCapture(VIDEO);
    video.size(450,400);

    canvas = createCanvas(400,400);
    canvas.position(570,150)

    poseNet = ml5.poseNet( video, modelLoaded);
    }

    
    


   

    function modelLoaded() {
    
        console.log (' PoseNet Is on ');
    }
    

    function gotPoses(results)
    {

        if(results.length > 0)
        {
           
            console.log(results);
            
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            
        }    
      
    }
    function draw () {
     
        background('blue');
       textSize(difference);
       fill('black');
       text('Peter',50,400);
       

    }



    
