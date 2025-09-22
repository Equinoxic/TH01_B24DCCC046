import { useState } from "react";

export default function Bai3() {
  const [tong, setTong] = useState(0);
  const [gio, setGio] = useState([]);

  const listsp = [
    { ten: "Sách", gia: 10000 },
    { ten: "Bút", gia: 5000 },
    { ten: "Vở", gia: 7000 },
  ];

  return (
    <div>
      <h2><b>Bài 3: Giỏ hàng</b></h2>
      <div>
        <h4>Sản phẩm</h4>
        {listsp.map((sp) => (
          <div>
          {`${sp.ten} - ${sp.gia}₫`}
          <button onClick={() => {
            setGio((prev) => [...prev, sp]);
            setTong(tong + sp.gia);
          }}>
            Thêm vào giỏ
          </button>
          </div>
        ))}
      </div>

      <div>
        <h4>Giỏ hàng</h4>
        <ul>
          {gio.map((sp) => <li>{`${sp.ten} - ${sp.gia}₫`}</li>)}
        </ul>
      </div>

      <p>{`Tổng tiền: ${tong}₫`}</p>
    </div>
  )
}
