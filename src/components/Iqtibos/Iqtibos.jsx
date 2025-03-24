import { useState } from "react";
import "./Iqtibos.css";

const BOT_TOKEN = "7842320404:AAEVItw5tHelpLSLPLfsNrVFG0HTd0NUcVs";
const CHAT_ID = "-4687805830";

const Iqtibos = () => {
  const [iqtibos, setIqtibos] = useState(""); // Boshlang'ich qiymat ""
  const [manzil, setManzil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yuboriladigan matnni yaratamiz
    const text = `Iqtibos %0A%0A
    📜 Iqtibos matni: ${iqtibos} %0A
    📌 Telegram manzil: ${manzil} %0A`;

    // Telegram API uchun URL
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    // fetch yordamida so‘rov yuboramiz
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Iqtibos muvaffaqiyatli jo‘natildi! ✅");
        setIqtibos(""); // Formani tozalash
        setManzil("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Xatolik yuz berdi! ❌");
      });
  };

  return (
    <div className="iqtibos">
      <form onSubmit={handleSubmit}>
        <h2>Assalomu alaykum</h2>
        <p>Iqtiboslaringizni menga jo‘nating</p>

        <textarea
          value={iqtibos}
          onChange={(e) => setIqtibos(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Iqtibosingizni shu yerga yozing..."
          required
        ></textarea>

        <div>
          <label>
            <p>
              Bu yerda telegram manzilingizni qoldiring
              <br /> (@ bilan yozing)
            </p>
          </label>
          <input
            value={manzil}
            onChange={(e) => setManzil(e.target.value)}
            type="text"
            placeholder="Telegram manzilingiz (@username)"
            required
          />
        </div>

        <button type="submit">Jo‘natish</button>
      </form>
    </div>
  );
};

export default Iqtibos;
