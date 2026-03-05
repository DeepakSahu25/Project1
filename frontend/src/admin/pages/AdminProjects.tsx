import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../services/api';
import { Trash2, Edit } from 'lucide-react';

export default function AdminProjects() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ title: '', description: '', tech: '', githubLink: '', liveLink: '', color: '#00f0ff', image: null as File | null });
  
  const { data: projects, isLoading } = useQuery({ queryKey: ['projects'], queryFn: async () => (await api.get('/projects')).data });

  const createMutation = useMutation({
    mutationFn: async (data: FormData) => await api.post('/projects', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setFormData({ title: '', description: '', tech: '', githubLink: '', liveLink: '', color: '#00f0ff', image: null });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/projects/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['projects'] })
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    createMutation.mutate(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Manage Projects</h2>
      
      {/* Add Project Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700 shadow-lg">
        <h3 className="text-lg font-semibold text-[var(--color-cyber-blue)] mb-4">Add New Project</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Title" required className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            <input type="text" placeholder="Tech Stack (comma separated)" required className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} />
          </div>
          <textarea placeholder="Description" required rows={3} className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="url" placeholder="GitHub Link" className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.githubLink} onChange={e => setFormData({...formData, githubLink: e.target.value})} />
            <input type="url" placeholder="Live Link" className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white" value={formData.liveLink} onChange={e => setFormData({...formData, liveLink: e.target.value})} />
            <input type="color" className="w-full h-[42px] bg-gray-900 border border-gray-700 rounded p-1" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Project Image</label>
            <input type="file" accept="image/*" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[var(--color-cyber-blue)] file:text-gray-900 hover:file:bg-[#00d0dd]" onChange={e => setFormData({...formData, image: e.target.files?.[0] || null})} />
          </div>
          <button type="submit" disabled={createMutation.isPending} className="px-6 py-2 bg-[var(--color-cyber-blue)] text-gray-900 font-bold rounded hover:bg-[#00d0dd] transition disabled:opacity-50">
            {createMutation.isPending ? 'Saving...' : 'Add Project'}
          </button>
        </form>
      </div>

      {/* Projects List */}
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
        {isLoading ? <p className="p-6 text-gray-400">Loading projects...</p> : (
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-900 text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Tech</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project: any) => (
                <tr key={project._id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="px-6 py-4">
                    <img src={project.image} alt={project.title} className="w-16 h-10 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 font-medium text-white">{project.title}</td>
                  <td className="px-6 py-4">{project.tech.join(', ')}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button onClick={() => deleteMutation.mutate(project._id)} className="text-red-500 hover:text-red-400">
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
