import { useQuery } from '@tanstack/react-query';
import api from '../../services/api';

export default function AdminDashboard() {
  const { data: projects } = useQuery({ queryKey: ['projects'], queryFn: async () => (await api.get('/projects')).data });
  const { data: skills } = useQuery({ queryKey: ['skills'], queryFn: async () => (await api.get('/skills')).data });
  const { data: messages } = useQuery({ queryKey: ['messages'], queryFn: async () => (await api.get('/messages')).data });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-8">System Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Total Projects</h3>
          <p className="text-4xl font-bold text-[var(--color-cyber-blue)]">{projects?.length || 0}</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Skills Registered</h3>
          <p className="text-4xl font-bold text-[var(--color-cyber-purple)]">{skills?.length || 0}</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Unread Messages</h3>
          <p className="text-4xl font-bold text-green-400">
            {messages?.filter((m: any) => !m.isRead).length || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
