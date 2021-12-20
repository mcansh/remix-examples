export default function Index() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Welcome to Remix</h1>
      <ul className="mt-4 list-disc pl-6">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer noopener"
            className="text-indigo-600 hover:underline hover:text-indigo-400"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer noopener"
            className="text-indigo-600 hover:underline hover:text-indigo-400"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer noopener"
            className="text-indigo-600 hover:underline hover:text-indigo-400"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
