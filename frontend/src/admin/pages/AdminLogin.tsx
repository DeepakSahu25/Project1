import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import api from '../../services/api';
import { useAuthStore } from '../../store/authStore';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  const loginMutation = useMutation({
    mutationFn: async (credentials: any) => {
      const response = await api.post('/users/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.role === 'admin') {
        setCredentials(data, data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Access denied. Admins only.');
      }
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || 'Login failed');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-cyber-dark)] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 glass-panel p-10 rounded-xl border border-[var(--color-cyber-blue)] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white font-mono">
            <span className="text-gradient">Admin</span> Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400 font-mono">
            Restricted access area
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded text-sm text-center">{error}</div>}
          
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-[var(--color-cyber-blue)] focus:border-[var(--color-cyber-blue)] sm:text-sm transition-colors"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-[var(--color-cyber-blue)] focus:border-[var(--color-cyber-blue)] sm:text-sm transition-colors"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-[var(--color-cyber-blue)] hover:bg-[#00d0dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-cyber-blue)] transition-colors disabled:opacity-50"
            >
              {loginMutation.isPending ? 'Authenticating...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
