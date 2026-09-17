import { useState, useEffect } from 'react';
import api from '../../lib/api';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Column {
  key: string;
  label: string;
}

interface AdminTableProps {
  endpoint: string;
  title: string;
  columns: Column[];
}

export default function AdminTable({ endpoint, title, columns }: AdminTableProps) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [endpoint]);

  const fetchItems = async () => {
    try {
      const res = await api.get(endpoint);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await api.delete(`${endpoint}/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-4 py-2 rounded font-medium flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
            <tr>
              {columns.map(col => (
                <th key={col.key} className="px-6 py-3 font-medium">{col.label}</th>
              ))}
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {items.map((item: any) => (
              <tr key={item.id} className="hover:bg-zinc-800/30">
                {columns.map(col => (
                  <td key={col.key} className="px-6 py-4 text-zinc-300">
                    {col.key === 'visibility' ? (
                      <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300">
                        {item[col.key]}
                      </span>
                    ) : item[col.key]}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-1 text-zinc-400 hover:text-cyan-400 transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(item.id)} className="p-1 text-zinc-400 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-zinc-500">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
