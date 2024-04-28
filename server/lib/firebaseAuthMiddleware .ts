// // Custom auth middleware to decode the Firebase auth token
// const firebaseAuthMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return next(); // continue without setting user if no token is provided
//   }
//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     // Assuming you want to attach the entire decoded token to req.user
//     req.user = { uid: decodedToken.uid, ...decodedToken };
//     next();
//   } catch (error) {
//     // You can decide how to handle errors here, e.g., logging them or sending a specific response
//     console.error('Error verifying Firebase token', error);
//     res.status(403).send('Invalid token');
//   }
// };

// // Then use this middleware before your route handlers that require authentication
// app.use('/api', firebaseAuthMiddleware); // This will protect all routes under /api

// // Now your existing routes will have req.user set if the token is valid
// app.post('/api/bets', authMiddleware, async (req, res, next) => {
//   // req.user will be available here after passing through firebaseAuthMiddleware
//   // Your existing logic...
// });
