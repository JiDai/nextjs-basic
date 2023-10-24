import {useEffect, useRef} from "react";

export default function SimpleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        var mortyImage = new Image();
        mortyImage.src = 'https://static.posters.cz/image/hp/66133.jpg'; // Remplacez par le lien de votre image de Morty

        mortyImage.onload = function () {
            context.drawImage(mortyImage, 0, 0, canvas.width, canvas.height);
        };
    }, [])

    return <canvas ref={canvasRef} width={720} height={260}/>
}
