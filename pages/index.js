import { useState, useEffect } from 'react'
import initialize from '../api/initialize'
import updateParameter from '../api/updateParameter'
import config from '../config.json'

const baseUrl = process.env.NEXT_PUBLIC_ENV == "development" ? config.devBaseUrl : config.baseUrl


function HomePage() {
  const [sessID, setSessID] = useState('')
  const [excitement, setExcitement] = useState(0.5);

  useEffect(() => {
    const getSessID = async () => {
      const newID = await initialize()
      setSessID(newID)
    }
    getSessID()
  }, [])

  useEffect(() => {
    if (!sessID) return
    updateParameter(sessID, { excitement })
  }, [excitement])

  function handleChange(e) {
    setExcitement(e.target.value / 100)
  }

  return (
    <div>
      <h1>Adapt Engine</h1>
      <p><audio src={sessID ? `${baseUrl}/stream/${sessID}` : ''} controls></audio></p>

      <h2>Parameters</h2>
      <p>Excitement: {excitement}</p>
      <input type="range" min="1" max="100" value={excitement * 100} onChange={handleChange} />
    </div>
  );
}

export default HomePage