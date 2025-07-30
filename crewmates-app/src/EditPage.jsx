import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

const ATTRIBUTE_LIST = ['Strong', 'Smart', 'Fast'];

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (data) {
        setName(data.name || '');
        setCategory(data.category || '');
        setAttributes(data.attributes ? data.attributes.split(',').filter(Boolean) : []);
      }
    }
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase
      .from('crewmates')
      .update({
        name,
        category,
        attributes: attributes.join(',')
      })
      .eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/');
  };

  const toggleAttribute = (attr) => {
    setAttributes(prev =>
      prev.includes(attr)
        ? prev.filter(a => a !== attr)
        : [...prev, attr]
    );
  };

  return (
    <div>
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input value={category} onChange={(e) => setCategory(e.target.value)} /><br />
        {ATTRIBUTE_LIST.map(attr => (
          <label key={attr}>
            <input
              type="checkbox"
              checked={attributes.includes(attr)}
              onChange={() => toggleAttribute(attr)}
            /> {attr}
          </label>
        ))}
        <br />
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}