import { useState, useEffect } from 'react';
import api from '../../lib/api';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function Achievements() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await api.get('/achievements');
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
      await api.delete(`/achievements/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-4 py-2 rounded font-medium flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
            <tr>
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Organization</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {items.map((item: any) => (
              <tr key={item.id} className="hover:bg-zinc-800/30">
                <td className="px-6 py-4 font-medium text-zinc-100">{item.title}</td>
                <td className="px-6 py-4 text-zinc-400">{item.category}</td>
                <td className="px-6 py-4 text-zinc-400">{item.organization}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300">
                    {item.visibility}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-1 text-zinc-400 hover:text-cyan-400"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(item.id)} className="p-1 text-zinc-400 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">No achievements found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
