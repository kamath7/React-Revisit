//using special hook to extract

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  ; //newsId property name
  return <h1>The important page for an ID. {router.query.newsId}</h1>;
}

export default DetailPage;
