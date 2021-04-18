import { useRouter } from "next/router";
import ar from "../locales/ar";
import en from "../locales/en";
import s from "../components/s";

export default function Serivces({ items }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        {items.map((i) => (
          <div key={i.id} className="col-lg-4 text-center mb-5">
            <img src={`${s.url + i.picture}?h=200`} alt=""  className='mb-4 img-fluid' />
            <h4>{i.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: i.description }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${s.url}/${context.locale}/api/v2/Services`);
  const data = await res.json();

  return {
    props: { items: data },
  };
}
