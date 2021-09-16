//something.com/news

import React from "react";

function NewsPage() {
  return (
    <React.Fragment>
      <h1>The news page</h1>
      <ul>
          <li> <a href="/news/learnOnNextJs">Learn on Next JS</a></li>
          <li>Learn on React JS</li>
      </ul>
      
    </React.Fragment>
  );
}

export default NewsPage;
