import "./../styles/Apparel.css";

export default function Apparel() {
  return (
    <div className="apparel">
      <h2>RI Apparel</h2>
      <div className="product">
        <img src="/products/baju1.jpg" alt="Produk Baju" />
        <h3>Baju Hadroh</h3>
        <p>Desain eksklusif dengan bahan nyaman.</p>
        <p>Harga: Rp 150.000</p>
      </div>
      <div className="product">
        <img src="/products/syal.jpg" alt="Produk Syal" />
        <h3>Syal Islami</h3>
        <p>Syal dengan motif islami elegan.</p>
        <p>Harga: Rp 75.000</p>
      </div>
    </div>
  );
}
