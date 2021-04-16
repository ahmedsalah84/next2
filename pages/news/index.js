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
              src={`${s.url + i.picture}?w=600`}
              alt=""
              className="img-fluid"
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

export async function getServerSideProps(context) {
  const res = await fetch(`${s.url}/${context.locale}/api/v1/CaseStudies`);
  const data = await res.json();

  return {
    props: { items: data.data },
  };
}
