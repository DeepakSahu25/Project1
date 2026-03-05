import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../services/api';
import { Trash2, Check, X } from 'lucide-react';

export default function AdminMessages() {
  const queryClient = useQueryClient();
  const { data: messages, isLoading } = useQuery({ queryKey: ['messages'], queryFn: async () => (await api.get('/messages')).data });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/messages/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['messages'] })
  });

  const markReadMutation = useMutation({
    mutationFn: async (id: string) => await api.put(`/messages/${id}/read`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['messages'] })
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Incoming Transmissions</h2>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {isLoading ? <p className="p-6 text-gray-400">Loading messages...</p> : (
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-900 text-gray-400 border-b border-gray-700 font-mono text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Sender</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages?.map((msg: any) => (
                <tr key={msg._id} className={`border-b border-gray-700 transition-colors ${!msg.isRead ? 'bg-gray-800 border-l-4 border-l-[var(--color-cyber-blue)]' : 'bg-gray-900/50 opacity-80'}`}>
                  <td className="px-6 py-4">
                    <div className="font-bold text-white">{msg.name}</div>
                    <div className="text-xs text-[var(--color-cyber-purple)] font-mono">{msg.email}</div>
                  </td>
                  <td className="px-6 py-4 w-1/2">
                    <p className="line-clamp-2 leading-relaxed">{msg.message}</p>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {!msg.isRead ? (
                      <span className="px-2 py-1 text-xs font-mono font-bold text-green-400 bg-green-400/10 border border-green-400/30 rounded">UNREAD</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-mono text-gray-400 bg-gray-700 border border-gray-600 rounded">ARCHIVED</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      {!msg.isRead && (
                        <button onClick={() => markReadMutation.mutate(msg._id)} className="text-[var(--color-cyber-blue)] hover:text-[#00d0dd] p-1 glass-panel rounded" title="Mark Read">
                          <Check size={16} />
                        </button>
                      )}
                      <button onClick={() => deleteMutation.mutate(msg._id)} className="text-red-500 hover:text-red-400 p-1 glass-panel rounded border-red-500/30" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {messages?.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500 font-mono">
                    NO_ACTIVE_TRANSMISSIONS_FOUND
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
