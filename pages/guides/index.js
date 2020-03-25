import Link from '../../components/link';

export default function Guides() {
  return (
    <div className="page">
      <h1>Guides</h1>
      <p>
        Follow these guides to learn the best practices for using bestfetch.
      </p>
      <ul>
        <li>
          <Link href="/guides/making-requests">
            <a>Making Requests</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/caching-responses">
            <a>Caching Responses</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/cache-freshness">
            <a>Cache Freshness</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/deduplicating-requests">
            <a>Deduplicating Requests</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/identical-requests">
            <a>Identical Requests</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/other-response-types">
            <a>Other Response Types</a>
          </Link>
        </li>
        <li>
          <Link href="/guides/faq">
            <a>FAQ</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
