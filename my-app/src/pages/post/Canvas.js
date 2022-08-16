import { useRef, useState, useEffect} from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [ ctx, setCtx ] = useState();
    const [isDrawing, setIsDrawing] = useState(false);

    // const [canvasTag, setCanvasTag] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;
        // canvas.

        const context = canvas.getContext('2d');
        context.strokeStyle = 'white';
        context.lineWidth = 2.5;
        contextRef.current = context;

        // setCanvasTag(canvas);
        setCtx(context);
    },[]);
    
    let startX = 0;
    let startY = 0;
    
    const startRecting = ({ nativeEvent }) => {
        startX = nativeEvent.offsetX;
        startY = nativeEvent.offsetY;
        ctx.beginPath();
        
    }
    const startDrawing = () => {
        setIsDrawing(true);
    };
    
    const finishDrawing = () => {
        setIsDrawing(false);
    };

    const drawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;

        if (ctx) {
            const x = nativeEvent.offsetX;
            const y = nativeEvent.offsetY;
            
            if (!isDrawing) {
                const width = x-startX
                const height = y-startY
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.rect(startX,startY,width,height)
            } else {
                ctx.lineTo(offsetX, offsetY);
                ctx.stroke();

            }
        }
    }
    

    return(
        <>
        <canvas id="jsCanvas" className="canvas" ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={startRecting}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
        ></canvas>
        </>
    )
}

export default Canvas