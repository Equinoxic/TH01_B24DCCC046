import { useState } from "react";

function Box(props) {
  return (
    <div style={{
      border: "1px solid",
      margin: "10px 0 0 0",
      width: "100px",
      height: "100px",
      backgroundColor: props.color
    }} />
  )
}

export default function Bai2() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h2><b>Bài 2: Color Picker</b></h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("green")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      <Box color={color} />
    </div>
  );
}