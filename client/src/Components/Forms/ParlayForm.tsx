// import { useState } from 'react';
// import { BetForm, BetFormProps } from './BetForm';
// import { Event } from '../../utils/data-types';
// import { ParlayBet } from '../../utils/data-types';
// import { useModal } from '../../Hooks/useModal';

// export const ParlayForm = () => {
//   const [parlayBets, setParlayBets] = useState<ParlayBet[]>([]);
//   const [nextId, setNextId] = useState(0);

//   const { closeModal, openModal } = useModal();

//   const addBet = (bet: BetFormProps) => {
//     const newBet = { ...bet, id: nextId };
//     setParlayBets([...parlayBets, newBet]);
//     setNextId(nextId + 1);
//   };

//   const removeBet = (id: number) => {
//     setParlayBets(parlayBets.filter((bet) => bet.id !== id));
//   };

//   // More functionality here
// };
