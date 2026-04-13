import { useState } from "react";
import "./../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "62881024808208"; // ganti dengan nomor WA tujuan
    const text = `Nama: ${form.name}%0AEmail: ${form.email}%0APesan: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="contact">
      <h2>Hubungi Kami</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nama" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Pesan" onChange={handleChange} required />
        <button type="submit" className="btn">Kirim</button>
      </form>
    </div>
  );
}

export default Contact;
