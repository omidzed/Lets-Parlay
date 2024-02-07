// import React, { useState, useEffect } from 'react';

// type Bet = {
//   betId: number;
//   eventId: string;
//   betType: string;
//   betAmount: number;
// };

// const bets = events.map((event, index) => {

//   export function Bets() {
//     const [bets, setBets] = useState<Bet[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//       const fetchBets = async () => {
//         try {
//           const token = localStorage.getItem('token');
//           const response = await fetch('/api/bets', {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//               // Include the token in the Authorization header
//               'Authorization': `Bearer ${token}`,
//             },
//           });

//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }

//           const data: Bet[] = await response.json();
//           setBets(data);
//         } catch (err) {
//           setError('Failed to fetch bets');
//           console.error(err);
//         }
//       };

//       fetchBets();
//     }, []); // The empty dependency array means this effect runs once on mount

//     if (error) {
//       return <div>Error: {error}</div>;
//     }}
//      return (
//     <div>
//       <h2>Bets</h2>
//       <ul>
//         {bets.map(bet => (
//           <li key={bet.betId}>Bet ID: {bet.betId} - User ID: {bet.userId}</li> // Adjust display as needed
//         ))}
//       </ul>
//     </div>
//   );
// }
