import React, { useState, useRef } from "react";
// import "../../layouts/checkbox1.css"
import "../../layouts/range.css";

export function Productrating() {
  let [isOpen, setIsOpen] = useState(true);
  let [value, setValue] = useState(0);
  let divref = useRef(null);
  const handleOptions = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      divref.current.style.display = "block";
    }
    if (!isOpen) {
      divref.current.style.display = "none";
    }
  };

  return (
    <div>
      <div className="parent3">
        <div className="child1">
          <p
            className="text2"
            style={{
              fontSize: "16px",
              whiteSpace: "nowrap",
              paddingTop: "12px",
              fontWeight: "600",
            }}
          >
            Product Rating
          </p>
          <i
            style={{ marginLeft: "90px" }}
            onClick={handleOptions}
            className={`bi bi-arrow-bar-${isOpen ? "down" : "up"} arrow`}
          ></i>
        </div>
        {isOpen && (
          <div ref={divref} className={`child3 ${isOpen ? "open" : "closed"}`}>
            <p className="text3">1 Star or more</p>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              className="range"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="paragrapgh">
              <p className="text4">1 Star </p>
              <span>5 Star</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
