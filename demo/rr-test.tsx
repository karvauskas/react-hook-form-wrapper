import React, { useState, memo, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

// --- helper hook blink efektui ---
function useBlink() {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    setBlink(true);
    const t = setTimeout(() => setBlink(false), 150); // pablyksta 150ms
    return () => clearTimeout(t);
  }, []);
  return blink;
}

// --- Smulkūs komponentai su memo ir blink ---
const Label = memo(({ htmlFor, children }) => {
  const blink = useBlink();
  // heavy calculation
  const sum = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
  return (
    <label
      htmlFor={htmlFor}
      style={{ backgroundColor: blink ? "yellow" : "transparent" }}
    >
      {children} ({sum})
    </label>
  );
});

const Error = memo(({ message }) => {
  const blink = useBlink();
  const arr = Array.from({ length: 1000 }, (_, i) => i * 2);
  const total = arr.reduce((a, b) => a + b, 0);
  return (
    <div style={{ backgroundColor: blink ? "red" : "transparent" }} className="error">
      {message} ({total})
    </div>
  );
});

// --- Didelis komponentas inline su blink ---
const BigField = ({ id, label, error }) => {
  const blink = useBlink();
  const sum = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
  const arr = Array.from({ length: 1000 }, (_, i) => i * 2);
  const total = arr.reduce((a, b) => a + b, 0);

  return (
    <div style={{ marginBottom: "2px", backgroundColor: blink ? "lightgreen" : "transparent" }}>
      <label htmlFor={id}>
        {label} ({sum})
      </label>
      <input id={id} />
      {error && <div className="error">{error} ({total})</div>}
    </div>
  );
};

// --- Smulkus komponentas su Label ir Error ---
const SmallField = ({ id, label, error }) => {
  return (
    <div style={{ marginBottom: "2px" }}>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} />
      {error && <Error message={error} />}
    </div>
  );
};

const NUM_FIELDS = 200;

const App = () => {
  const [error, setError] = useState("Initial error");

  const bigFields = Array.from({ length: NUM_FIELDS }, (_, i) => (
    <BigField key={i} id={`big-${i}`} label={`Big Field ${i}`} error={error} />
  ));

  const smallFields = Array.from({ length: NUM_FIELDS }, (_, i) => (
    <SmallField key={i} id={`small-${i}`} label={`Small Field ${i}`} error={error} />
  ));

  return (
    <div>
      <h2>BigFields (inline, heavy calc)</h2>
      <div style={{ maxHeight: "300px", overflowY: "scroll", border: "1px solid black" }}>
        {bigFields}
      </div>

      <h2>SmallFields (memo, heavy calc)</h2>
      <div style={{ maxHeight: "300px", overflowY: "scroll", border: "1px solid black" }}>
        {smallFields}
      </div>

      <button
        style={{ marginTop: "20px", padding: "8px" }}
        onClick={() => setError(`Updated at ${new Date().toLocaleTimeString()}`)}
      >
        Update Error
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
