import React, { useRef, useEffect } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  isClicked: boolean;
}

export default function Bubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getRandomColor = () => {
    const colors = [
      'rgba(72, 61, 139, 0.6)', // dark slate blue
      'rgba(75, 0, 130, 0.6)', // indigo
      'rgba(138, 43, 226, 0.6)', // blue violet
      'rgba(147, 112, 219, 0.6)', // medium purple
      'rgba(148, 0, 211, 0.6)', // dark violet
      'rgba(106, 90, 205, 0.6)', // slate blue
      'rgba(123, 104, 238, 0.6)', // medium slate blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const bubbles: Bubble[] = [];
    const bubbleCount = 25;

    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        const initBubbles = () => {
          for (let i = 0; i < bubbleCount; i++) {
            const radius = Math.random() * 40 + 20;
            bubbles.push({
              x: Math.random() * (canvas.width - radius * 2) + radius,
              y: Math.random() * (canvas.height - radius * 2) + radius,
              radius,
              dx: (Math.random() - 0.5) * 2,
              dy: (Math.random() - 0.5) * 2,
              color: getRandomColor(),
              isClicked: false,
            });
          }
        };

        const drawBubble = (bubble: Bubble) => {
          const gradient = context.createRadialGradient(
            bubble.x - bubble.radius / 3,
            bubble.y - bubble.radius / 3,
            bubble.radius / 5,
            bubble.x,
            bubble.y,
            bubble.radius
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          gradient.addColorStop(0.7, bubble.color);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.15)');

          context.beginPath();
          context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
          context.fillStyle = gradient;
          context.fill();
          context.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          context.stroke();

          if (bubble.isClicked) {
            const largerRadius = bubble.radius * 1.2;
            const largerGradient = context.createRadialGradient(
              bubble.x - largerRadius / 3,
              bubble.y - largerRadius / 3,
              largerRadius / 5,
              bubble.x,
              bubble.y,
              largerRadius
            );
            largerGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            largerGradient.addColorStop(0.7, bubble.color);
            largerGradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');

            context.beginPath();
            context.arc(bubble.x, bubble.y, largerRadius, 0, Math.PI * 2, false);
            context.fillStyle = largerGradient;
            context.fill();
            context.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            context.stroke();
          }
        };

        const animate = () => {
          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#020229';
            context.fillRect(0, 0, canvas.width, canvas.height);

            bubbles.forEach((bubble) => {
              drawBubble(bubble);
              bubble.x += bubble.dx;
              bubble.y += bubble.dy;

              // Bounce off the walls
              if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
                bubble.dx = -bubble.dx;
              }

              if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
                bubble.dy = -bubble.dy;
              }
            });

            requestAnimationFrame(animate);
          }
        };

        resizeCanvas();
        initBubbles();
        animate();

        window.addEventListener('resize', resizeCanvas);

        canvas.addEventListener('click', (event) => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          bubbles.forEach((bubble) => {
            const distX = mouseX - bubble.x;
            const distY = mouseY - bubble.y;
            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance < bubble.radius) {
              bubble.isClicked = true;

              setTimeout(() => {
                bubble.isClicked = false;
                drawBubble(bubble);
              }, 1000); 

              drawBubble(bubble); 
            }
          });
        });

        return () => {
          window.removeEventListener('resize', resizeCanvas);
          canvas.removeEventListener('click', () => {});
        };
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
};



