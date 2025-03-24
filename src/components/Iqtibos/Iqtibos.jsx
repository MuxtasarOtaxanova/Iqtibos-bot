import { useState } from "react";
import "./Iqtibos.css";
const BOT_TOKEN = "7842320404:AAEVItw5tHelpLSLPLfsNrVFG0HTd0NUcVs";

const USER_ID = "7658202655";
const CHAT_ID = "-4757928870";
const Iqtibos = () => {
  const [iqtibos, setIqtibos] = useState();
  const [manzil, setManzil] = useState();
  const handleSumbit = (e) => {
    e.preventDefault();
    let text = "Iqtibos %0A%0A";
    text += `Iqtibos matni: ${iqtibos} %0A`;
    text += `Telegram manzil: ${manzil} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <div className="iqtibos">
      <form onSubmit={handleSumbit}>
        <h2>Assalomu aleykum</h2>
        <p>Iqtiboslaringizni menga jo'nating</p>
        <textarea
          onChange={(e) => setIqtibos(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <label htmlFor="">
            <p>
              Bu yerda telegram manzilingizni qoldirishingiz kerak <br />
              (@ bilan kiriting)
            </p>
          </label>
          <input
            onChange={(e) => setManzil(e.target.value)}
            type="text"
            placeholder="telegram mazilingiz"
          />
        </div>
        <button>Jo'natish</button>
      </form>
    </div>
  );
};

export default Iqtibos;
