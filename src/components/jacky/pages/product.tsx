import { useState } from "react";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupLarge, setIsPopupLarge] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsPopupLarge(false);
  };
  function reRoute(event: any, location: string) {
    window.location.href = location;
  }
  const enlargePopup = () => setIsPopupLarge(true);
  return (
    <div>
      <div>This is Jacky's Main Page</div>
      <div className="green-bar">
        <nav>
          <div className="dropdown">
            <button onClick={toggleOpen} className="dropdown-button">
              All categories {isOpen ? "▲" : "▼"}
            </button>
            <input type="search" placeholder="Search..." className="search-bar" />
            <button className="help-button">Help</button>
            <button className="purchase-history-button">Purchase History</button>
            <button className="account-button">Account</button>
            <button className="reward-point-button">Reward</button>
            <button className="shopping-cart-button">Shopping</button>
            <button
              className="trend-button"
              onClick={(event: any) => {
                reRoute(event, "/trend");
              }}
            >
              Trend
            </button>
            {isOpen && (
              <ul>
                <li>Jewelry & Accessories</li>
                <li>Clothing & Shoes</li>
                <li>Home & Living</li>
                <li>Wedding & Party</li>
                <li>Toys & Entertainment</li>
                <li>Art & Collectibles</li>
                <li>Craft Supplies & Tools</li>
                {/* Add more categories as needed */}
              </ul>
            )}
          </div>
          <div className="inventory-under-search-bar">
            <div>Jewelry & Accessories</div>
            <div>Clothing & Shoes</div>
            <div>Home & Living</div>
            <div>Wedding & Party</div>
            <div>Toys & Entertainment</div>
            <div>Art & Collectibles</div>
            <div>Craft Supplies & Tools</div>
          </div>
        </nav>
      </div>

      <div className="item-list">
        <div className="item">
          <div className="item-image">
            <img src="https://www.ikea.com.hk/dairyfarm/hk/images/548/1054846_PE847889_S4.webp" alt="table" />
          </div>
          <div className="item-name">
            <h3>Table</h3>
          </div>
          <div className="item-price">
            <h3>$100</h3>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="https://www.ikea.com.hk/dairyfarm/hk/images/427/1242708_PE920347_S5.webp" alt="table" />
          </div>
          <div className="item-name">
            <h3>Table</h3>
          </div>
          <div className="item-price">
            <h3>$100</h3>
          </div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src="https://www.ikea.com.hk/dairyfarm/hk/images/870/1187096_PE899031_S4.webp" alt="table" />
          </div>
          <div className="item-name">
            <h3>Table</h3>
          </div>
          <div className="item-price">
            <h3>$100</h3>
          </div>
        </div>
        <div>
          <button className="undo-button">Undo</button>
          <button className="redo-button">Redo</button>
        </div>
      </div>
      <button onClick={togglePopup} className="popup-button">
        Messager Bird
      </button>
      {isPopupOpen && (
        <div className={`popup ${isPopupLarge ? "large" : ""}`} onClick={enlargePopup}>
          <p>This is a popup message.</p>
        </div>
      )}
    </div>
  );
}
