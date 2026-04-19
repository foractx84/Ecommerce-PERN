import api from '../../../lib/axios';

export async function registerUser(payload) {
    console.log('Register payload:', payload);
  const response = await api.post('/api/auth/register', payload);
  return response.data;
}

export async function loginUser(payload) {
  const response = await api.post('/api/auth/login', payload);
  return response.data;
}

export async function getCurrentUser() {
  const response = await api.get('/api/auth/me');
  return response.data;
}

export async function logoutUser() {
  const response = await api.post('/api/auth/logout');
  return response.data;
}

console.log('API BASE URL:', import.meta.env.VITE_API_BASE_URL);