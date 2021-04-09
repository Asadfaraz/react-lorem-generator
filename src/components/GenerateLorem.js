import React, { useState } from "react";
import paragraphData from "./data";

const GenerateLorem = () => {
  // 2 hooks 1 for data and one for input
  const [amountInput, setAmountInput] = useState(0);
  const [data, setData] = useState([]);

  //   Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    let amountGenerate = parseInt(amountInput);
    if (amountInput > paragraphData.length) {
      amountGenerate = paragraphData.length - 1;
    }
    if (amountInput <= 0) {
      amountGenerate = 1;
    }

    console.log("current: ", amountGenerate);
    setData(paragraphData.slice(0, amountGenerate));
    console.log("form submitted");
  };

  return (
    <section>
      <header>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
      </header>

      <form>
        <label htmlFor="amountInput">Paragraphs: </label>
        <input
          type="number"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Generate
        </button>
      </form>

      <article>
        {data.map((paragraph, index) => {
          return (
            <div key={index}>
              <p>{paragraph}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default GenerateLorem;
