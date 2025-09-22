import { useState } from "react";

export default function Bai1() {
  const [text, setText] = useState("");
  const [cvs, setCvs] = useState([]);

  return (
    <div>
      <h2><b>Bài 1: To-do List</b></h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (text !== "") {
          setCvs((prev) => [...prev, text]);
          setText("");
        }
      }}>
        <input type="text" placeholder="Nhập công việc" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {cvs.map((cv, index) => (
          <li>
            <p>{cv}</p>
            <button onClick={() => setCvs((prev) => prev.filter((x, i) => i !== index))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  )
}