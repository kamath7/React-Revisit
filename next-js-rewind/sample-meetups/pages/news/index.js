//something.com/news

import React from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <React.Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          {" "}
          <Link href="/news/learnOnNextJs">Learn on Next JS</Link>
        </li>
        <li>
          <Link href="/news/learnOnReactJS">Learn on React JS</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NewsPage;
