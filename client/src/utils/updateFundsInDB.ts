export async function updateFundsInDB(userId, newFunds, token) {
  const response = await fetch('/api/users/update-funds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, newFunds }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update funds');
  }

  return await response.json();
}
