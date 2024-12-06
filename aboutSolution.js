```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default function About() {
  // Access the API key safely using next/config
  const apiKey = serverRuntimeConfig.API_KEY || 'API_KEY_NOT_SET';
  console.log(apiKey);
  return (
    <div>
      <h1>About Page</h1>
      <p>API Key: {apiKey}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  return {
    props: {
      session
    },
  };
}
```