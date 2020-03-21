import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className="page">
      <h1>Getting Started</h1>
      <p>
        bestfetch is a lightweight HTTP library that improves your application's
        performance by minimizing the number of requests that hit the server.
      </p>
      <h2>Installation</h2>
      <p>
        Install using <a href="https://npmjs.com">npm</a>:
      </p>
      <code className="codeBlock">npm install bestfetch</code>
      <p>
        or <a href="https://yarnpkg.com">yarn</a>:
      </p>
      <code className="codeBlock">yarn add bestfetch</code>
      <h2>
        Using <code>fetch()</code> Guides
      </h2>
      <p>
        Because bestfetch is such a lightweight wrapper around fetch, you'll
        benefit from having knowledge of that API. If you're new to fetch, I
        recommend reading the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">
          Using Fetch guide on MDN
        </a>
        . It's a great introduction.
      </p>
      <h2>Basic Usage</h2>
      <p>
        The following example demonstrates using bestfetch with the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">
          ES2015 module syntax
        </a>
        .
      </p>

      <code className="codeBlock">
        {`import { bestfetch } from 'bestfetch';

bestfetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
    console.log('Got some data', res.data);
  });

// Additional identical requests are deduped. Nifty.
bestfetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
    console.log('Got some data', res.data);
  });`}
      </code>
      <p>
        If you're familiar with <code>fetch</code>, you may have noticed that
        we're not calling <code>.json()</code>
        on the response. Typical <code>fetch</code> usage would look like the
        following:
      </p>
      <code className="codeBlock">
        {`fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
    console.log('Got some data', data);
  });`}
      </code>
      <p>
        What you're doing when you call <code>.json()</code> is read the request
        body, parsing it as a JSON string. When you use bestfetch, the request
        body is read and parsed as JSON automatically for you.
      </p>
      <h2>Next Steps</h2>
      <p>
        Now that you've seen the basic usage of bestfetch, read the{' '}
        <Link href="/guides/making-requests">
          <a>Making Requests</a>
        </Link>{' '}
        guide to learn more.
      </p>
    </div>
  );
}