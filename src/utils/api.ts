const API_URL = 'http://localhost:5002/api';

export async function generatePost(data: {
  topic?: string;
  tone?: string;
  length?: 'short' | 'medium' | 'long';
}) {
  const response = await fetch(`${API_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al generar el post');
  }

  return response.json();
}