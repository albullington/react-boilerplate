// const { Client } = require('pg');

// const client = new Client({
//   host: 'localhost',
//   database: 'stringlist',
//   password: '',
//   port: 5432,
// });

// client
//   .connect()
//   .then(() => {
//     console.log('Successful connection to Postgres on port 5432');
//   })
//   .catch(err => {
//     console.log(err, 'this is a client error');
//   });

// const fetchStrings = () =>
//   new Promise((resolve, reject) => {
//     client
//       .query('SELECT * FROM stringlist;')
//       .then(res => {
//         resolve(res.rows);
//       })
//       .catch(err => {
//         console.log(err, 'this is a fetch error');
//         reject(err);
//       });
//   });

// const addString = string =>
//   new Promise((resolve, reject) => {
//     const query = `INSERT INTO stringlist (string) VALUES (${string});`;
//     client
//       .query(query)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//         console.log(err, 'this is an adding string error');
//       });
//   });

// fetchStrings();
// // addString('This is a string insertion test');

// module.exports = {
//   fetchStrings,
//   addString,
// };
