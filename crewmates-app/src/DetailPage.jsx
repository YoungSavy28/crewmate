import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single();
      setData(data);
    }
    fetchData();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Category: {data.category}</p>
      <p>
        Attributes:{' '}
        {data.attributes
          ? data.attributes.split(',').filter(Boolean).join(', ')
          : 'None'}
      </p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
    </div>
  );
}