import { useRouter } from "next/router";
import ar from "../../locales/ar";
import en from "../../locales/en";
import s from "../../components/s";

export default function Newsdetails({ asa }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row">
      <img src={`${s.url + asa.picture}?h=500&w=1200&scale=both&mode=crop`} alt=""  className='m-auto img-fluid'/>
      <div dangerouslySetInnerHTML={{ __html: asa.content }} />

      </div>
    </div>
  );
}

  


export async function getStaticPaths() {
  const res = await fetch(`${s.url}/en/api/v2/News`);
  const data = await res.json();

  const paths = data.map((asa) => ({
    params: { id: asa.id.toString() },
  }))

return { paths, fallback: false }
}





export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`${s.url}/en/api/v2/NewsDetails?id=${id}`);
  const data = await res.json();

  return {
    props: { asa: data }
  }
}

