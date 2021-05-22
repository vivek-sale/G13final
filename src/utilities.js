// Define our labelmap
const labelMap = {
    1:{name:'A', color:'red'},
    2:{name:'B', color:'orange'},
    3:{name:'E', color:'yellow'},
    4:{name:'I', color:'green'},
    5:{name:'K', color:'blue'},
    6:{name:'L', color:'violet'},
    7:{name:'S', color:'blue'},
    8:{name:'V', color:'white'},
    9:{name:'Hello', color:'red'},
    10:{name:'Thank You', color:'green'},
    11:{name:'My Name', color:'blue'},
    12:{name:'Good Morning', color:'yellow'},
    13:{name:'Good Night', color:'black'},
    14:{name:'Bye Bye', color:'red'}
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}