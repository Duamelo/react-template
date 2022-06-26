import React, { useEffect, useState } from "react";


export default function Hello(){

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });
  return (
    <>
    <div>

    <p>Vous avez cliqué {count} fois</p>
    <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>

    </div>

    </>
  )
}