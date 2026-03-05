import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const AdminLayout = () => {
  const { user, token } = useAuthStore();
  const logout = useAuthStore((state) => state.logout);

  if (!token || !user || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-[var(--color-cyber-blue)]">Admin Panel</h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 transition">Dashboard</a>
          <a href="/admin/projects" className="block py-2 px-4 rounded hover:bg-gray-700 transition">Projects</a>
          <a href="/admin/skills" className="block py-2 px-4 rounded hover:bg-gray-700 transition">Skills</a>
          <a href="/admin/messages" className="block py-2 px-4 rounded hover:bg-gray-700 transition">Messages</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>{user.name}</span>
            <button 
              onClick={() => {
                logout();
                window.location.href = '/admin/login';
              }} 
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
