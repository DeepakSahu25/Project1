import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../services/api';
import { Trash2 } from 'lucide-react';

export default function AdminSkills() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ name: '', level: 50, color: '#00f0ff', category: 'Frontend' });
  
  const { data: skills, isLoading } = useQuery({ queryKey: ['skills'], queryFn: async () => (await api.get('/skills')).data });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => await api.post('/skills', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
      setFormData({ name: '', level: 50, color: '#00f0ff', category: 'Frontend' });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/skills/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['skills'] })
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Manage Skills</h2>
      
      {/* Add Skill Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700 shadow-lg">
        <h3 className="text-lg font-semibold text-[var(--color-cyber-blue)] mb-4">Add New Skill</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Skill Name" required className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="number" placeholder="Level (0-100)" min="0" max="100" required className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.level} onChange={e => setFormData({...formData, level: Number(e.target.value)})} />
            <input type="text" placeholder="Category" required className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
            <div className="flex items-center gap-2">
               <input type="color" className="w-12 h-10 bg-gray-900 border border-gray-700 rounded p-1 cursor-pointer" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} />
               <button type="submit" disabled={createMutation.isPending} className="flex-1 px-4 py-2 bg-[var(--color-cyber-purple)] text-white font-bold rounded hover:bg-[#c252ff] transition disabled:opacity-50">
                {createMutation.isPending ? '...' : 'Add'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Skills List */}
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
        {isLoading ? <p className="p-6 text-gray-400">Loading skills...</p> : (
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-900 text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Level</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Color</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills?.map((skill: any) => (
                <tr key={skill._id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="px-6 py-4 font-medium text-white">{skill.name}</td>
                  <td className="px-6 py-4 font-mono">{skill.level}%</td>
                  <td className="px-6 py-4">{skill.category}</td>
                  <td className="px-6 py-4">
                    <div className="w-6 h-6 rounded-full border border-gray-500" style={{ backgroundColor: skill.color }}></div>
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    <button onClick={() => deleteMutation.mutate(skill._id)} className="text-red-500 hover:text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
