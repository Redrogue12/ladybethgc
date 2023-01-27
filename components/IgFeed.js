// import React, { useState } from 'react';
// let accessToken = process.env.NEXT_PUBLIC_IG_TOKEN;

// const Insta = {
//   async display() {
//     try {
//       let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`, {
//         method: 'GET'
//       });
//       if (response.ok) {
//         console.log(response);
//         let jsonResponse = await response.json();
//         let medias = jsonResponse.data.map(media => ({
//           id: media.id,
//           image: media.images.standard_resolution.url
//         }));
//         return medias;
//       }
//       throw new Error('Request failed!');
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export default function IgFeed() {
//   const [media, setMedia] = useState([]);
//   Insta.display().then(medias => setMedia({mediasResult: medias}));
//   console.log('media', media);
// }

// // import InstagramFeed  from 'react-ig-feed';
// // import 'react-ig-feed/dist/index.css';

// // // https://mohammedraji.github.io/react-ig-feed/
// // export default function IgFeed () {
// //   console.log()
// //   return (
// //     <div className="p-40 text-center ig-feed">
// //       <a href="https://www.instagram.com/psic.ladybethgc/" className="ig-link">@PSIC.LADYBETHGC</a>
// //       <InstagramFeed token={process.env.NEXT_PUBLIC_IG_TOKEN} counter="6"/>
// //     </div>
// //   );
// // };