import { useRouter } from "next/router";
import ar from "../../locales/ar";
import en from "../../locales/en";
import s from "../../components/s";
import Link from 'next/link';

export default function Newsdetails({ items }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row">
      <img src={`${s.url + items.picture}?h=500`} alt=""  className='m-auto img-fliud'/>
      <div dangerouslySetInnerHTML={{ __html: items.content }} />

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const { id } = context.query;

  const res = await fetch(`${s.url}/${context.locale}/api/v1/CaseStudy?id=${id}`);
  const data = await res.json();

  return {
    props: { items: data.data },
  };
}
