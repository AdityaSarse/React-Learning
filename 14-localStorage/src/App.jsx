import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const [storageItems, setStorageItems] = useState({});

  // Function to refresh the displayed storage items
  const refreshStorage = () => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      items[k] = localStorage.getItem(k);
    }
    setStorageItems(items);
  };

  useEffect(() => {
    refreshStorage();
  }, []);

  // 1. Set Item in Local Storage
  const handleSetItem = () => {
    if (!key) {
      setOutput("Please provide a key.");
      return;
    }
    localStorage.setItem(key, value);
    setOutput(`Set item: "${key}" = "${value}"`);
    refreshStorage();
    setKey('');
    setValue('');
  };

  // 2. Get Item from Local Storage
  const handleGetItem = () => {
    if (!key) {
      setOutput("Please provide a key to get.");
      return;
    }
    const retrievedValue = localStorage.getItem(key);
    if (retrievedValue !== null) {
      setOutput(`Got item: "${key}" = "${retrievedValue}"`);
    } else {
      setOutput(`Item with key "${key}" not found.`);
    }
  };

  // 3. Remove Item from Local Storage
  const handleRemoveItem = () => {
    if (!key) {
      setOutput("Please provide a key to remove.");
      return;
    }
    localStorage.removeItem(key);
    setOutput(`Removed item with key: "${key}"`);
    refreshStorage();
    setKey('');
  };

  // 4. Clear all Local Storage
  const handleClearStorage = () => {
    localStorage.clear();
    setOutput("Cleared all local storage.");
    refreshStorage();
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Local Storage Methods</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Key" 
          value={key} 
          onChange={(e) => setKey(e.target.value)} 
          style={{ padding: '8px', flex: 1 }}
        />
        <input 
          type="text" 
          placeholder="Value" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          style={{ padding: '8px', flex: 1 }}
        />
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={handleSetItem} style={{ padding: '8px 16px', cursor: 'pointer' }}>Set Item</button>
        <button onClick={handleGetItem} style={{ padding: '8px 16px', cursor: 'pointer' }}>Get Item</button>
        <button onClick={handleRemoveItem} style={{ padding: '8px 16px', cursor: 'pointer' }}>Remove Item</button>
        <button onClick={handleClearStorage} style={{ padding: '8px 16px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>Clear All</button>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#333', borderRadius: '5px', marginBottom: '20px', color: '#fff' }}>
        <strong>Output: </strong> {output || "No activity yet"}
      </div>

      <div style={{ textAlign: 'left', backgroundColor: '#222', padding: '15px', rounded: '5px' }}>
        <h3>Current Local Storage Contents:</h3>
        {Object.keys(storageItems).length === 0 ? (
           <p style={{ color: '#aaa' }}>Local storage is currently empty.</p>
        ) : (
          <ul>
            {Object.entries(storageItems).map(([k, v]) => (
              <li key={k} style={{ marginBottom: '5px' }}>
                <strong style={{ color: '#61dafb' }}>{k}</strong>: {v}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
