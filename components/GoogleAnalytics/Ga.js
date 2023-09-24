import Script from "next/script";

function Ga() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=7Q6P5VX977" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '7Q6P5VX977');
        `}
      </Script>
    </div>
  );
}

export default Ga;
