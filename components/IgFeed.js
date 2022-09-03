import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

// https://mohammedraji.github.io/react-ig-feed/
export default function IgFeed () {
  console.log()
  return (
    <div className="p-40 text-center ig-feed">
      <a href="https://www.instagram.com/psic.ladybethgc/" className="ig-link">@PSIC.LADYBETHGC</a>
      <InstagramFeed token={process.env.NEXT_PUBLIC_IG_TOKEN} counter="6"/>
    </div>
  );
};