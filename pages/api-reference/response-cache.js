import Lowlight from 'react-lowlight';
import Link from '../../components/link';

export default () => {
  return (
    <div className="page">
      <h1>
        <code>responseCache</code>
      </h1>
      <p>
        An object that allows direct read and write access to the response
        cache.
      </p>
      <Lowlight
        language="js"
        inline={false}
        value={`import { responseCache } from 'bestfetch';`}
      />
      <p>
        <code>responseCache</code> has the following methods:
      </p>
      <ul>
        <li>
          <a href="#get">
            <b>
              <code>get</code>
            </b>
          </a>
        </li>
        <li>
          <a href="#set">
            <b>
              <code>set</code>
            </b>
          </a>
        </li>
        <li>
          <a href="#has">
            <b>
              <code>has</code>
            </b>
          </a>
        </li>
        <li>
          <a href="#delete">
            <b>
              <code>delete</code>
            </b>
          </a>
        </li>
        <li>
          <a href="#clear">
            <b>
              <code>clear</code>
            </b>
          </a>
        </li>
        <li>
          <a href="#usecachedresponse">
            <b>
              <code>useCachedResponse</code>
            </b>
          </a>
        </li>
      </ul>
      <h2 id="get">
        <code>get</code>
      </h2>
      <p>
        Retrieve the cached response for a given <code>requestKey</code>.
      </p>
      <h3>Arguments</h3>
      <ol>
        <li>
          <b>
            <code>requestKey</code>
          </b>
          : The request key of the response to retrieve from the cache.
        </li>
      </ol>
      <h3>Returns</h3>
      <p>
        A <code>response</code>, if one exists. If no response exists in the
        cache for the specified <code>requestKey</code>, then{' '}
        <code>undefined</code> will be returned instead.
      </p>
      <h3>Example Usage</h3>
      <Lowlight
        language="js"
        inline={false}
        value={`responseCache.get('my-request-key');`}
      />
      <h2 id="set">
        <code>set</code>
      </h2>
      <p>
        Set the cached <code>response</code> for a particular{' '}
        <code>requestKey</code>.
      </p>
      <h3>Arguments</h3>
      <ol>
        <li>
          <b>
            <code>requestKey</code>
          </b>
          : The request key of the request.
        </li>
        <li>
          <b>
            <code>response</code>
          </b>
          : The response to associate with the <code>requestKey</code>.
        </li>
      </ol>
      <h3>Returns</h3>
      <p>
        The <code>responseCache</code> object.
      </p>
      <h3>Example Usage</h3>
      <Lowlight
        language="js"
        inline={false}
        value={`responseCache.set('my-request-key', response);`}
      />
      <h2 id="has">
        <code>has</code>
      </h2>
      <p>
        Used to determine if a response exists in the cache for{' '}
        <code>requestKey</code>.
      </p>
      <h3>Arguments</h3>
      <ol>
        <li>
          <b>
            <code>requestKey</code>
          </b>
          : The <code>requestKey</code> to check.
        </li>
      </ol>
      <h3>Returns</h3>
      <p>
        A <code>boolean</code> representing whether or not a response exists in
        the cache for <code>requestKey</code>.
      </p>
      <h3>Example Usage</h3>
      <Lowlight
        language="js"
        inline={false}
        value={`responseCache.has('my-request-key');`}
      />
      <h2 id="delete">
        <code>delete</code>
      </h2>
      <p>
        Used to delete a response from the cache for <code>requestKey</code>.
      </p>
      <h3>Arguments</h3>
      <ol>
        <li>
          <b>
            <code>requestKey</code>
          </b>
          : The <code>requestKey</code> to delete from the cache.
        </li>
      </ol>
      <h3>Returns</h3>
      <p>
        A <code>boolean</code> that is <code>true</code> when a response was
        found and deleted from the cache, and <code>false</code> when a response
        did not exist in the cache.
      </p>
      <h3>Example Usage</h3>
      <Lowlight
        language="js"
        inline={false}
        value={`responseCache.delete('my-request-key');`}
      />
      <h2 id="clear">
        <code>clear</code>
      </h2>
      <p>Removes all responses from the cache.</p>
      <h3>Arguments</h3>
      <p>This method does not accept any arguments.</p>
      <h3>Returns</h3>
      <p>This method does not return anything.</p>
      <h3>Example Usage</h3>
      <Lowlight language="js" inline={false} value={`responseCache.clear();`} />
      <h2 id="usecachedresponse">
        <code>useCachedResponse</code>
      </h2>
      <p>
        Configure the invalidation strategy for your application. You should
        only call this method one time, when your app first loads.
      </p>
      <h3>Arguments</h3>
      <ol>
        <li>
          <b>
            <code>cacheInvalidationPolicy</code>
          </b>
          : A function that defines your invalidation policy. Each time that the
          cache would be hit, this function will be called. It is passed a
          single argument: <code>cacheObject</code>. Return <code>true</code> to
          use the cached object, or <code>false</code> to invalidate it.
        </li>
      </ol>
      <p>
        A <code>cacheObject</code> has the following shape:
      </p>
      <ul>
        <li>
          <code>createdAt</code>: A timestamp (in milliseconds) when the
          response was added to the cache.
        </li>
        <li>
          <code>lastAccessedAt</code>: A timecode (in milliseconds) when this
          response was last read from the cache.
        </li>
        <li>
          <code>accessCount</code>: How many times the response has been read
          from the cache.
        </li>
        <li>
          <code>res</code>: The cached response.
        </li>
      </ul>
      <h3>Returns</h3>
      <p>This method does not return anything.</p>
      <h3>Example Usage</h3>
      <Lowlight
        language="js"
        inline={false}
        value={`// 1000 = 1 second in milliseconds
// * 60 = 1 minute
// * 10 = 10 minutes
const TEN_MINUTES = 1000 * 60 * 10;

responseCache.useCachedResponse(cacheObject => {
  const currentTimestamp = Date.now();
  return currentTimestamp - cacheObject.createdAt <= TEN_MINUTES;
});`}
      />
      For more on how to use this method, refer to the{' '}
      <Link href="/guides/invalidating-the-cache">
        <a>Invalidating the Cache</a>
      </Link>{' '}
      guide.
    </div>
  );
};