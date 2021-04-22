import { useRouter } from "next/router";
import ar from "../../locales/ar";
import en from "../../locales/en";
import s from "../../components/s";
import Link from 'next/link';

export default function News({ items }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row">
      {items.map((i) => (
       <Link href={`/news/${i.id}`}>
        <div key={i.id} className="col-lg-6 mb-5">
            <img
              src={`${s.url + i.picture}?w=500&h=300&mode=crop&scale=both`}
              alt=""
              className="img-fluid border w-100"
            />
            <div className="div pt-3">
              <h3>{i.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: i.description }} />
            </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${s.url}/${context.locale}/api/v2/News`);
  const data = await res.json();

  return {
    props: { items: data },
  };
}
