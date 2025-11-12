import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState('Testing connection...');
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test connection by fetching tables
        const { data, error: tablesError } = await supabase
          .from('pg_tables')
          .select('tablename')
          .eq('schemaname', 'public');

        if (tablesError) throw tablesError;

        setTables(data.map(t => t.tablename));
        setConnectionStatus('✅ Connection successful!');
      } catch (err) {
        console.error('Connection test failed:', err);
        setError(err.message);
        setConnectionStatus('❌ Connection failed');
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2>Supabase Connection Test</h2>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p><strong>Status:</strong> {connectionStatus}</p>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            <p><strong>Error:</strong> {error}</p>
            <p>Please check:</p>
            <ul>
              <li>Your internet connection</li>
              <li>Supabase project URL and anon key in .env file</li>
              <li>That your Supabase project is running</li>
              <li>That your IP is allowed in Supabase's database settings</li>
            </ul>
          </div>
        )}
      </div>

      {tables.length > 0 && (
        <div>
          <h3>Tables in your database:</h3>
          <ul>
            {tables.map((table, index) => (
              <li key={index}>{table}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
