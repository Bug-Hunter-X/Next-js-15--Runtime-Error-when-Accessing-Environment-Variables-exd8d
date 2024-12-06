```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user does not have the correct environment variables set.
  const apiKey = process.env.API_KEY;
  console.log(apiKey);
  return (
    <div>
      <h1>About Page</h1>
      <p>API Key: {apiKey}</p> 
    </div>
  );
}
```