import { useState, useEffect } from 'react';
import updateParameter from '../api/updateParameter';
import config from '../config.json';

function HomePage() {
  const sessId = 1234
  const streamSrc = `${config.baseUrl}/stream/${sessId}`

  const [excitement, setExcitement] = useState(0.5);
  useEffect(() => {
    updateParameter(sessId, { excitement })
  }, [excitement])

  function handleChange(e) {
    setExcitement(e.target.value / 100)
  }

  return (
    <div>
      <h1>Adaptive Engine by Audio Intelligence Agency</h1>
      <p><audio src={streamSrc} controls></audio></p>

      <h2>Parameters</h2>
      <p>Excitement: {excitement}</p>
      <input type="range" min="1" max="100" value={excitement * 100} onChange={handleChange} />
    </div>
  );
}

export default HomePage