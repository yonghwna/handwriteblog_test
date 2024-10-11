import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HandwritingAnimation = () => {
  const [inputText, setInputText] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const animate = (text, index = 0) => {
    if (index <= text.length) {
      setAnimatedText(text.slice(0, index));
      animationRef.current = setTimeout(() => animate(text, index + 1), 100);
    }
  };

  const drawText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px "Nanum Pen Script", cursive';
    ctx.fillStyle = "black";
    ctx.fillText(animatedText, 10, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    setAnimatedText("");
    animate(inputText);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  React.useLayoutEffect(drawText, [animatedText]);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="텍스트를 입력하세요"
            className="mb-4"
          />
          <Button type="submit">제출</Button>
        </form>
      </div>
      <div className="w-1/2 p-4">
        <canvas ref={canvasRef} width={400} height={200} className="border" />
      </div>
    </div>
  );
};

export default HandwritingAnimation;
