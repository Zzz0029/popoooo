import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Shield, Folder, FileBadge, Code } from 'lucide-react';
import axios from 'axios';

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <div className="font-mono text-cyan-500 font-bold tracking-widest text-lg">RP.ADMIN</div>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link to="/admin/achievements" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded transition-colors">
            <Shield className="w-4 h-4" /> Achievements
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded transition-colors">
            <Folder className="w-4 h-4" /> Projects
          </Link>
          <Link to="/admin/certifications" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded transition-colors">
            <FileBadge className="w-4 h-4" /> Certifications
          </Link>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 w-full text-left text-zinc-400 hover:text-red-400 hover:bg-zinc-900 rounded transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
