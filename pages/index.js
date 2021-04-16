import { useRouter } from "next/router";
import ar from "../locales/ar";
import en from "../locales/en";
import s from "../components/s";

export default function Home({ items }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="content">
            <h1 className="mb-3">{t.weare}</h1>
            <div dangerouslySetInnerHTML={{ __html: items.content }} />
          </div>
        </div>
        <div className="col-lg-6">
          <img src={`${s.url + items.picture}?h=500`}  alt="" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${s.url}/${context.locale}/api/v1/HomePage`);
  const data = await res.json();

  return {
    props: { items: data.data.weAreCreative },
  };
}
