
import { useRouter } from "next/router";
import ar from "../locales/ar";
import en from "../locales/en";
import s from "../components/s";

export default function contact({ items }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="content">
            {/* <h1 className="mb-3">{t.weare}</h1> */}
            <div dangerouslySetInnerHTML={{ __html: items.footerBreif.content }} />
            <div className="address">Address: {items.companyInfo.address}</div>
            <div className="address">Mobile: {items.companyInfo.mobile}</div>
            <div className="address">Phone: {items.companyInfo.phone}</div>
          </div>
        </div>
        <div className="col-lg-6">
        <iframe src={items.companyInfo.location} width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${s.url}/${context.locale}/api/v2/Footer`);
  const data = await res.json();

  return {
    props: { items: data },
  };
}
