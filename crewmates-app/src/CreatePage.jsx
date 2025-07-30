import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { Link } from 'react-router-dom';

const ATTRIBUTE_LIST = ['Strong', 'Smart', 'Fast'];

export default function CreatePage() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Pirate');
  const [attributes, setAttributes] = useState([]);
  const [crewmates, setCrewmates] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch crewmates from the database
  const fetchCrewmates = async () => {
    setLoading(true);
    setErrorMsg('');
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) setErrorMsg('Fetch error: ' + error.message);
    if (data) setCrewmates(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCrewmates();
    // eslint-disable-next-line
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    // Join attributes array into a comma-separated string
    const attributesString = attributes.join(',');

    const { error } = await supabase.from('crewmates').insert([
      {
        name,
        category,
        attributes: attributesString
      }
    ]);

    if (error) {
      setErrorMsg('Create error: ' + error.message);
    } else {
      setName('');
      setCategory('Pirate');
      setAttributes([]);
      await fetchCrewmates();
    }
    setLoading(false);
  };

  // Handle checkbox changes
  const handleCheckbox = (attr) => {
    setAttributes(prev =>
      prev.includes(attr)
        ? prev.filter(a => a !== attr)
        : [...prev, attr]
    );
  };

  return (
    <div className="crewmates-container">
      <h1>Create a Crewmate</h1>
      {errorMsg && <div style={{ color: 'red', marginBottom: '1rem' }}>{errorMsg}</div>}
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
          disabled={loading}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          disabled={loading}
        >
          <option>Pirate</option>
          <option>Warrior</option>
          <option>Medic</option>
        </select>
        {ATTRIBUTE_LIST.map(attr => (
          <label key={attr} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              checked={attributes.includes(attr)}
              onChange={() => handleCheckbox(attr)}
              disabled={loading}
            />
            {attr}
          </label>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Create'}
        </button>
      </form>

      <h2>Crew Summary</h2>
      {crewmates.length === 0 && !loading && <div>No crewmates yet.</div>}
      {loading && <div>Loading...</div>}
      {crewmates.map(crewmate => (
        <div key={crewmate.id || crewmate.name}>
          <Link to={`/detail/${crewmate.id}`}>{crewmate.name}</Link>
        </div>
      ))}
    </div>
  );
}