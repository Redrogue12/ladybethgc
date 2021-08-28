import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

// https://mohammedraji.github.io/react-ig-feed/
export default function IgFeed () {
  return (
    <div className="p-40">
      <InstagramFeed token={process.env.NEXT_PUBLIC_IG_TOKEN}  counter="6"/>
    </div>
  );
};