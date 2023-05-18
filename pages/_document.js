import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        
        lang={this.props.locale}
      >
        <Head>
        <>
  <link
    rel="preload"
    href="https://monday.com/static/fonts/poppins/poppins-v20-latin-300.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="https://monday.com/static/fonts/poppins/poppins-v20-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="https://monday.com/static/fonts/poppins/poppins-v20-latin-600.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="https://monday.com/static/fonts/poppins/poppins-v20-latin-700.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#333333" />
  <meta name="msapplication-navbutton-color" content="#333333" />
  <meta name="coverage" content="Worldwide" />
  <meta name="distribution" content="Global" />
  <meta name="rating" content="General" />
  <meta
    name="facebook-domain-verification"
    content="fp63743zc2gqopx7ds8uyh9aplxwa3"
  />
  <link
    rel="sitemap"
    type="application/xml"
    title="Sitemap"
    href="/sitemap.xml"
  />
  <meta name="p:domain_verify" content="b23b9536c7fb460593afc0a4efb90c3f" />
  <meta
    name="google-site-verification"
    content="_um4GXuRDHUpvGCATPKd3z0pZFISWfjidYVj47c0bhA"
  />
  <link rel="shortcut icon" href="https://monday.com/static/img/favicons/favicon.ico" />
  <link
    rel="icon"
    sizes="16x16 32x32 64x64"
    href="https://monday.com/static/img/favicons/favicon.ico"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="196x196"
    href="https://monday.com/static/img/favicons/favicon-monday5-192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="https://monday.com/static/img/favicons/favicon-monday5-96.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="64x64"
    href="https://monday.com/static/img/favicons/favicon-monday5-60.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://monday.com/static/img/favicons/favicon-monday5-32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://monday.com/static/img/favicons/favicon-monday5-16.png"
  />
  <link
    rel="apple-touch-icon"
    href="https://monday.com/static/img/favicons/favicon-monday5-57.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="https://monday.com/static/img/favicons/favicon-monday5-114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="https://monday.com/static/img/favicons/favicon-monday5-72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="https://monday.com/static/img/favicons/favicon-monday5-144.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="https://monday.com/static/img/favicons/favicon-monday5-60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="https://monday.com/static/img/favicons/favicon-monday5-120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="https://monday.com/static/img/favicons/favicon-monday5-76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="https://monday.com/static/img/favicons/favicon-monday5-152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://monday.com/static/img/favicons/favicon-monday5-180.png"
  />
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta
    name="msapplication-TileImage"
    content="https://monday.com/static/img/favicons/favicon-monday5-144.png"
  />
  <link
    rel="icon"
    type="image/x-icon"
    href="https://monday.com/static/img/favicons/favicon.ico"
  />
  <meta property="og:title" content="404: page not found | monday.com" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://monday.com/" />
  <meta property="og:description" content="" />
  <meta property="og:site_name" content="monday.com" />
  <meta
    property="og:image"
    content="https://s3.amazonaws.com/general-assets/monday-1200x628.png"
  />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content={1200} />
  <meta property="og:image:height" content={628} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@mondaydotcom" />
  <meta name="twitter:title" content="404: page not found | monday.com" />
  <meta name="twitter:description" content="" />
  <meta
    name="twitter:image"
    content="https://s3.amazonaws.com/general-assets/monday-800x418.png"
  />
  <meta property="twitter:account_id" content={912574397076123648} />
</>

        <link
    rel="preload"
    href="https://monday.com/nhp/_next/static/css/e81d08443768f4fcb7c2.css"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://monday.com/nhp/_next/static/css/e81d08443768f4fcb7c2.css"
    data-n-g=""
  />
  <link
    rel="preload"
    href="https://monday.com/nhp/_next/static/css/7f8e6856d07ea56dbc7f.css"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://monday.com/nhp/_next/static/css/7f8e6856d07ea56dbc7f.css"
    data-n-p=""
  />
        <>
  <style
    id="__jsx-363530526"
    dangerouslySetInnerHTML={{
      __html:
        ".bypass-block-menu-component .menu-item{position:fixed;top:0;left:0;opacity:0;pointer-events:none;}.bypass-block-menu-component .menu-item:focus{opacity:1;pointer-events:auto;}"
    }}
  />
  <style
    id="__jsx-4212101279"
    dangerouslySetInnerHTML={{
      __html:
        ".picture-component.blur-image.jsx-4212101279 img.jsx-4212101279{-webkit-filter:blur(10px);filter:blur(10px);}.picture-lazy.jsx-4212101279{opacity:0;}"
    }}
  />
  <style
    id="__jsx-4115554422"
    dangerouslySetInnerHTML={{
      __html:
        ".link-item-with-menu-component{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;color:#535768;-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}.link-item-with-menu-component:hover{background-color:#F0F3FF;}.link-item-with-menu-component.is-open,.link-item-with-menu-component:hover{color:#5034FF;}.link-item-with-menu-component.is-open .link-item-with-menu-icon path,.link-item-with-menu-component:hover .link-item-with-menu-icon path{fill:#5034FF;stroke:#5034FF;}.link-item-with-menu-component.is-open .link-item-with-menu-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.link-item-with-menu-component .link-item-with-menu-title{font-size:0.875rem;margin-right:4px;}.link-item-with-menu-component .link-item-with-menu-icon{height:7px;width:10px;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;}.link-item-with-menu-component .link-item-with-menu-icon path{fill:#323338;stroke:#323338;}"
    }}
  />
  <style
    id="__jsx-2138693134"
    dangerouslySetInnerHTML={{
      __html:
        ".link-item-component{font-size:0.875rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;-webkit-text-decoration:none;text-decoration:none;color:#535768;-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}.link-item-component:hover{color:#5034FF;background-color:#F0F3FF;}"
    }}
  />
  <style
    id="__jsx-2730172878"
    dangerouslySetInnerHTML={{
      __html:
        ".arrow-wrapper{padding-left:12px;padding-right:6px;-webkit-transition:padding 0.3s ease-in-out;transition:padding 0.3s ease-in-out;}.arrow-wrapper.hover{padding-left:18px;padding-right:0px;}.arrow-wrapper svg{fill:currentColor;height:12px;width:14px;}.arrow-wrapper.sm.signup svg{width:15px;height:13px;}.arrow-wrapper.md.signup svg,.arrow-wrapper.lg.signup svg{height:12px;width:16px;}.arrow-wrapper.lg svg{width:13px;height:11px;}.arrow-wrapper.md{padding-left:10px;padding-right:5px;}.arrow-wrapper.md.hover{padding-left:15px;padding-right:0px;}.arrow-wrapper.md svg{width:12px;height:10px;}.arrow-wrapper.xs{padding-left:8px;padding-right:4px;}.arrow-wrapper.xs.hover{padding-left:12px;padding-right:0px;}.arrow-wrapper.xs svg{width:12px;height:10px;}.arrow-wrapper.sm{padding-left:8px;padding-right:4px;}.arrow-wrapper.sm.hover{padding-left:12px;padding-right:0px;}.arrow-wrapper.sm svg{width:10px;height:9px;}"
    }}
  />
  <style
    id="__jsx-4117764832"
    dangerouslySetInnerHTML={{
      __html:
        'button.ladda-button[data-button-color="workos-iris"]:not(.invert){-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;}button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover{background-color:#5151d5;-webkit-filter:unset;filter:unset;}button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover.white,button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover.white-iris{background-color:#F0F3FF;}'
    }}
  />
  <style
    id="__jsx-2407656928"
    dangerouslySetInnerHTML={{
      __html:
        'button.ladda-button{padding:16px 32px;cursor:pointer;font-size:1rem;border-radius:40px;border:none;font-weight:400;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:17px;}button.ladda-button[data-style="zoom-in"]:not(:hover){-webkit-transition:0.1s ease background-color;transition:0.1s ease background-color;}button.ladda-button.disable-animation.ladda-button[data-style="zoom-out"] .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}button.ladda-button.disable-animation.ladda-button .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}button.ladda-button.has-arrow{padding:16px 32px 16px 31px;}button.ladda-button.has-arrow.sm{padding-left:29px;}button.ladda-button.invert{border-width:1px;border-style:solid;}button.ladda-button.has-paint-animation{isolation:isolate;}button.ladda-button:disabled{cursor:auto;}button.ladda-button:hover{outline:none;}button.ladda-button img{vertical-align:middle;}button.ladda-button .paint-overlay{position:absolute;display:block;width:0;height:0;border-radius:50%;background-color:var(--signup-paint-animation-color);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1;top:8px;left:calc(100% / 2);}button.ladda-button .paint-overlay.start-animating{-webkit-animation:paintAnimation 1s ease-in-out;animation:paintAnimation 1s ease-in-out;}@-webkit-keyframes paintAnimation{0%{width:0;height:0;}60%{width:405px;height:405px;}100%{opacity:0;}}@keyframes paintAnimation{0%{width:0;height:0;}60%{width:405px;height:405px;}100%{opacity:0;}}'
    }}
  />
  <style
    id="__jsx-25280166"
    dangerouslySetInnerHTML={{
      __html:
        "button.ladda-button.blue{background-color:#009AFF;color:#ffffff;}button.ladda-button.blue.invert{color:#009AFF;background-color:#ffffff;border-color:#009AFF;}button.ladda-button.blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.blue:disabled{background-color:#0584D7;}button.ladda-button.outline-blue{border-width:1px;border-style:solid;background-color:#ffffff;color:#00a9ff;}button.ladda-button.outline-blue.invert{color:#ffffff;background-color:#00a9ff;border-color:#ffffff;}button.ladda-button.outline-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-blue:disabled{background-color:#ffffff;}button.ladda-button.outline-dark-blue,button.ladda-button.outline-dark-blue-inverted-hover{border-width:1px;border-style:solid;background-color:#ffffff;color:#595AD4;}button.ladda-button.outline-dark-blue.invert,button.ladda-button.outline-dark-blue-inverted-hover.invert{color:#ffffff;background-color:#595AD4;border-color:#ffffff;}button.ladda-button.outline-dark-blue.invert:hover,button.ladda-button.outline-dark-blue-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-dark-blue:disabled,button.ladda-button.outline-dark-blue-inverted-hover:disabled{background-color:#595AD4;}button.ladda-button.outline-dark-blue-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:#ffffff;background-color:#595AD4;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover{border-width:1px;border-style:solid;background-color:#ffffff;color:#5559df;}button.ladda-button.outline-indigo-inverted-hover.invert{color:#ffffff;background-color:#5559df;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-indigo-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:#ffffff;background-color:#5559df;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover:disabled{background-color:#5559df;}button.ladda-button.brand-pink{background-color:#ff0476;color:#ffffff;}button.ladda-button.brand-pink.invert{color:#ff0476;background-color:#ffffff;border-color:#ff0476;}button.ladda-button.brand-pink.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-pink:disabled{background-color:#b70053;}button.ladda-button.brand-blue{background-color:#009AFF;color:#ffffff;}button.ladda-button.brand-blue.invert{color:#009AFF;background-color:#ffffff;border-color:#009AFF;}button.ladda-button.brand-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-blue:disabled{background-color:#0584D7;}button.ladda-button.brand-iris{background-color:#595ad4;color:#ffffff;}button.ladda-button.brand-iris.invert{color:#595ad4;background-color:#ffffff;border-color:#595ad4;}button.ladda-button.brand-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-red{background-color:#FB275D;color:#ffffff;}button.ladda-button.brand-red.invert{color:#FB275D;background-color:#ffffff;border-color:#FB275D;}button.ladda-button.brand-red.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-red:disabled{background-color:#c12c52;}button.ladda-button.brand-green{background-color:#00CC6F;color:#ffffff;}button.ladda-button.brand-green.invert{color:#00CC6F;background-color:#ffffff;border-color:#00CC6F;}button.ladda-button.brand-green.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-green:disabled{background-color:#099655;}button.ladda-button.brand-yellow{background-color:#FFCC00;color:#ffffff;}button.ladda-button.brand-yellow.invert{color:#FFCC00;background-color:#ffffff;border-color:#FFCC00;}button.ladda-button.brand-yellow.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-yellow:disabled{background-color:#b79407;}button.ladda-button.brand-purple{background-color:#A358DF;color:#ffffff;}button.ladda-button.brand-purple.invert{color:#A358DF;background-color:#ffffff;border-color:#A358DF;}button.ladda-button.brand-purple.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-purple:disabled{background-color:#9031DC;}button.ladda-button.green{background-color:#00ca72;color:#ffffff;}button.ladda-button.green.invert{color:#00ca72;background-color:#ffffff;border-color:#00ca72;}button.ladda-button.green.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.green:disabled{background-color:#01A55E;}button.ladda-button.purple{background-color:#a358df;color:#ffffff;}button.ladda-button.purple.invert{color:#a358df;background-color:#ffffff;border-color:#a358df;}button.ladda-button.purple.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.purple:disabled{background-color:#9031DC;}button.ladda-button.iris{background-color:#595ad4;color:#ffffff;}button.ladda-button.iris.invert{color:#595ad4;background-color:#ffffff;border-color:#595ad4;}button.ladda-button.iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.iris:disabled{background-color:#3C3ED6;}button.ladda-button.yellow{background-color:#ffcb00;color:#323338;}button.ladda-button.yellow.invert{color:#ffcb00;background-color:#323338;border-color:#ffcb00;}button.ladda-button.yellow.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.yellow:disabled{background-color:#b79407;}button.ladda-button.orange{background-color:#fdab3d;color:#323338;}button.ladda-button.orange.invert{color:#fdab3d;background-color:#323338;border-color:#fdab3d;}button.ladda-button.orange.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.orange:disabled{background-color:#fdab3d;}button.ladda-button.pink{background-color:#ff0476;color:#ffffff;}button.ladda-button.pink.invert{color:#ff0476;background-color:#ffffff;border-color:#ff0476;}button.ladda-button.pink.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.pink:disabled{background-color:#DC0064;}button.ladda-button.royal{background-color:#597bfc;color:#ffffff;}button.ladda-button.royal.invert{color:#597bfc;background-color:#ffffff;border-color:#597bfc;}button.ladda-button.royal.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.royal:disabled{background-color:#305BFF;}button.ladda-button.dodger-blue{background-color:#4353FF;color:#ffffff;}button.ladda-button.dodger-blue.invert{color:#4353FF;background-color:#ffffff;border-color:#4353FF;}button.ladda-button.dodger-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.dodger-blue:disabled{background-color:#2F3AC5;}button.ladda-button.crm-dark-tint-01{background-color:#00889B;color:#ffffff;}button.ladda-button.crm-dark-tint-01.invert{color:#00889B;background-color:transparent;border-color:#00889B;}button.ladda-button.crm-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.crm-dark-tint-01:disabled{background-color:#00889B;}button.ladda-button.brand-green-dark-tint-01{background-color:#00854D;color:#ffffff;}button.ladda-button.brand-green-dark-tint-01.invert{color:#00854D;background-color:transparent;border-color:#00854D;}button.ladda-button.brand-green-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-green-dark-tint-01:disabled{background-color:#00854D;}button.ladda-button.workos-iris{background-color:#6161FF;color:#ffffff;}button.ladda-button.workos-iris.invert{color:#6161FF;background-color:transparent;border-color:#6161FF;}button.ladda-button.workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.workos-iris:disabled{background-color:#6161FF;}button.ladda-button.marketing-red-dark{background-color:#CA0C6B;color:#ffffff;}button.ladda-button.marketing-red-dark.invert{color:#CA0C6B;background-color:transparent;border-color:#CA0C6B;}button.ladda-button.marketing-red-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.marketing-red-dark:disabled{background-color:#CA0C6B;}button.ladda-button.crm-green-dark{background-color:#007474;color:#ffffff;}button.ladda-button.crm-green-dark.invert{color:#007474;background-color:transparent;border-color:#007474;}button.ladda-button.crm-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.crm-green-dark:disabled{background-color:#007474;}button.ladda-button.projects-orange-dark{background-color:#F86700;color:#ffffff;}button.ladda-button.projects-orange-dark.invert{color:#F86700;background-color:transparent;border-color:#F86700;}button.ladda-button.projects-orange-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.projects-orange-dark:disabled{background-color:#F86700;}button.ladda-button.dev-green-dark{background-color:#037F4C;color:#ffffff;}button.ladda-button.dev-green-dark.invert{color:#037F4C;background-color:transparent;border-color:#037F4C;}button.ladda-button.dev-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.dev-green-dark:disabled{background-color:#037F4C;}button.ladda-button.space-blue{background-color:#0F1048;color:#ffffff;}button.ladda-button.space-blue.invert{color:#0F1048;background-color:#ffffff;border-color:#0F1048;}button.ladda-button.space-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.space-blue:disabled{background-color:#02032C;}button.ladda-button.black,button.ladda-button.Black{background-color:#000000;color:#ffffff;}button.ladda-button.black.invert,button.ladda-button.Black.invert{color:#333333;background-color:#ffffff;border-color:#333333;}button.ladda-button.black.invert:hover,button.ladda-button.Black.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.black:disabled,button.ladda-button.Black:disabled{background-color:#000000;}button.ladda-button.white{background-color:#ffffff;color:#333333;}button.ladda-button.white.invert{color:#ffffff;background-color:transparent;border-color:#ffffff;}button.ladda-button.white.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white:disabled{background-color:#ffffff;}button.ladda-button.white-iris{background-color:#ffffff;color:#6161FF;}button.ladda-button.white-iris.invert{color:#ffffff;background-color:#6161FF;border-color:#ffffff;}button.ladda-button.white-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white-iris:disabled{background-color:#ffffff;}button.ladda-button.gradiant-workos-iris{background:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);color:#ffffff;}button.ladda-button.gradiant-workos-iris.invert{color:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);background:#ffffff;border-color:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);}button.ladda-button.gradiant-workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.gradiant-workos-iris:disabled{background:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);}button.ladda-button.white-dodger{background-color:#ffffff;color:#4353FF;}button.ladda-button.white-dodger.invert{color:#ffffff;background-color:#4353FF;border-color:#ffffff;}button.ladda-button.white-dodger.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white-dodger:disabled{background-color:#ffffff;}button.ladda-button.workforms-red{background-color:#C21E71;color:#ffffff;}button.ladda-button.workforms-red.invert{color:#C21E71;background-color:#ffffff;border-color:#C21E71;}button.ladda-button.workforms-red.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.workforms-red:disabled{background-color:#C21E71;}button.ladda-button.with-border{border-width:1px;border-style:solid;}"
    }}
  />
  <style
    id="__jsx-3148497380"
    dangerouslySetInnerHTML={{
      __html:
        "button.ladda-button.small{font-size:0.8125rem;padding:12px 9vw;font-weight:300;}button.ladda-button.xs{font-size:0.8125rem;padding:8px 16px;font-weight:300;}button.ladda-button.sm{font-size:0.8125rem;padding:16px 32px;font-weight:300;}button.ladda-button.xl{font-size:1rem;padding:16px 120px;font-weight:400;}"
    }}
  />
  <style
    id="__jsx-862339233"
    dangerouslySetInnerHTML={{
      __html:
        '{/*!\n         * Ladda\n         * http://lab.hakim.se/ladda\n         * MIT licensed\n         *\n         * Copyright (C) 2016 Hakim El Hattab, http://hakim.se\n         */}.ladda-button{position:relative;}.ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;top:50%;margin-top:0;opacity:0;pointer-events:none;}.ladda-button .ladda-label{position:relative;z-index:3;}.ladda-button,.ladda-button .ladda-spinner,.ladda-button .ladda-label{-webkit-transition:0.3s cubic-bezier(0.175,0.885,0.32,1.275) all;transition:0.3s cubic-bezier(0.175,0.885,0.32,1.275) all;}.ladda-button[data-style="zoom-in"],.ladda-button[data-style="zoom-in"] .ladda-spinner,.ladda-button[data-style="zoom-in"] .ladda-label,.ladda-button[data-style="zoom-out"],.ladda-button[data-style="zoom-out"] .ladda-spinner,.ladda-button[data-style="zoom-out"] .ladda-label{-webkit-transition:0.3s ease all;transition:0.3s ease all;}.ladda-button[data-style="zoom-out"]{overflow:hidden;}.ladda-button[data-style="zoom-out"] .ladda-spinner{left:50%;margin-left:32px;-webkit-transform:scale(2.5);-ms-transform:scale(2.5);transform:scale(2.5);}.ladda-button[data-style="zoom-out"] .ladda-label{position:relative;display:inline-block;}.ladda-button[data-style="zoom-out"][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);}.ladda-button[data-style="zoom-out"][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-ms-transform:none;transform:none;}.ladda-button[data-style="zoom-in"]{overflow:hidden;}.ladda-button[data-style="zoom-in"] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(0.2);-ms-transform:scale(0.2);transform:scale(0.2);}.ladda-button[data-style="zoom-in"] .ladda-label{position:relative;display:inline-block;}.ladda-button[data-style="zoom-in"][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(2.2);-ms-transform:scale(2.2);transform:scale(2.2);}.ladda-button[data-style="zoom-in"][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-ms-transform:none;transform:none;}\n      '
    }}
  />
  <style
    id="__jsx-1336934735"
    dangerouslySetInnerHTML={{
      __html:
        ".signup-form-core-component-wrapper .additional-button-text{font-style:normal;font-weight:normal;font-size:0.8125rem;line-height:18px;color:#676879;}.signup-form-core-component-wrapper .additional-button-text.below{margin-top:8px;text-align:center;}.signup-form-core-component-wrapper .additional-button-text.side{margin-left:16px;text-align:left;}.signup-form-core-component-wrapper .signup-button-wrapper.additional-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.signup-form-core-component-wrapper .signup-button-wrapper.additional-text.additional-text-below{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.signup-form-core-component-wrapper .signup-button-wrapper.additional-text.additional-text-side{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.signup-form-core-component-wrapper .signup-button-wrapper.hide-button{visibility:hidden;}.signup-form-core-component-wrapper.vertical-google-connect{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:305px;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:16px 0;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator .seperator-line{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;border-color:#C5C7D0;border-top-width:0.5px;border-bottom-width:0.5px;border-style:solid;opacity:0.4;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator .separator-text{padding-left:16px;padding-right:16px;font-size:0.8125rem;line-height:24px;color:#676879;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button{padding-top:12px;padding-bottom:12px;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner .continue-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;}.signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner .google-icon{width:24px;height:24px;margin-left:16px;}.signup-form-core-component-wrapper.horizontal-google-connect{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper .google-connect-button-wrapper{margin-left:16px;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper .google-connect-button-wrapper .google-connect-button{padding-top:12px;padding-bottom:12px;width:220px;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper .google-connect-button-wrapper .google-connect-button .google-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper .google-connect-button-wrapper .google-connect-button .google-button-inner .continue-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;}.signup-form-core-component-wrapper.horizontal-google-connect .signup-and-google-button-wrapper .google-connect-button-wrapper .google-connect-button .google-button-inner .google-icon{width:24px;height:24px;margin-left:16px;}.signup-form-core-component-wrapper.dark-theme .additional-button-text{color:#ffffff;}.signup-form-core-component-wrapper.dark-theme .social-connect-section .google-separator .separator-text{color:#ffffff;}.signup-form-core-component-wrapper.dark-theme .social-connect-section .google-connect-button{border:none;}"
    }}
  />
  <style
    id="__jsx-890050634"
    dangerouslySetInnerHTML={{
      __html:
        ".signup-form-core-component-wrapper form{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.signup-form-core-component-wrapper .phoneno{display:none;}.signup-form-core-component-wrapper.align-left form{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.signup-form-core-component-wrapper.hide-form{visibility:hidden;}@media (max-width:991px){.signup-form-core-component-wrapper:not(.force-horizontal) form{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"
    }}
  />
  <style
    id="__jsx-2120959333"
    dangerouslySetInnerHTML={{
      __html:
        ".signup-form-core-component-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.signup-form-core-component-wrapper input{font-size:0.875rem;line-height:8px;padding:12px 24px;border-radius:32px;-webkit-appearance:none;background-color:#f5f5f5;color:#333333;border:1px solid;border-color:#cccccc;text-align:center;-webkit-transition:border-color 0.1s ease-in-out;transition:border-color 0.1s ease-in-out;margin:8px 16px 8px 0;}.signup-form-core-component-wrapper input:hover::-webkit-input-placeholder,.signup-form-core-component-wrapper input:focus::-webkit-input-placeholder{color:#6161FF;}.signup-form-core-component-wrapper input:hover::-moz-placeholder,.signup-form-core-component-wrapper input:focus::-moz-placeholder{color:#6161FF;}.signup-form-core-component-wrapper input:hover:-ms-input-placeholder,.signup-form-core-component-wrapper input:focus:-ms-input-placeholder{color:#6161FF;}.signup-form-core-component-wrapper input:hover::placeholder,.signup-form-core-component-wrapper input:focus::placeholder{color:#6161FF;}.signup-form-core-component-wrapper input:focus{border-color:#6161FF;background-color:#ffffff;}.signup-form-core-component-wrapper input.transparent{background-color:rgba(255,255,255,0.1);color:#ffffff;}.signup-form-core-component-wrapper input.transparent::-webkit-input-placeholder{color:#ffffff;opacity:0.8;}.signup-form-core-component-wrapper input.transparent::-moz-placeholder{color:#ffffff;opacity:0.8;}.signup-form-core-component-wrapper input.transparent:-ms-input-placeholder{color:#ffffff;opacity:0.8;}.signup-form-core-component-wrapper input.transparent::placeholder{color:#ffffff;opacity:0.8;}.signup-form-core-component-wrapper.error input,.signup-form-core-component-wrapper.error input:focus{border-color:red;}.signup-form-core-component-wrapper button.ladda-button.sm{font-size:0.875rem;}.signup-form-core-component-wrapper .only-button{min-width:300px;}.signup-form-core-component-wrapper .signup-button-wrapper .signup-button{min-width:130px;}@media (max-width:1058px){.signup-form-core-component-wrapper .signup-button-wrapper .signup-button.secondary-button{margin-top:8px;}}@media (min-width:1058px){.signup-form-core-component-wrapper .signup-button-wrapper .signup-button.secondary-button{margin-left:24px;}}.signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button{padding-right:20px;}.signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button.xs{padding-right:14px;}.signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button.xxs{padding-right:8px;padding-left:8px;font-size:0.6875rem;padding-top:8px;padding-bottom:8px;}@media (max-width:991px){.signup-form-core-component-wrapper:not(.force-horizontal){text-align:center;}.signup-form-core-component-wrapper:not(.force-horizontal) input{margin-bottom:16px;font-size:0.875rem;padding:16px 8px;margin-right:0;min-width:264px;}.signup-form-core-component-wrapper:not(.force-horizontal) .signup-button-wrapper{width:100%;}.signup-form-core-component-wrapper:not(.force-horizontal) .signup-button-wrapper button{font-size:0.875rem;padding:16px 48px;width:100%;}.signup-form-core-component-wrapper:not(.force-horizontal) .button-with-arrow button.signup-button{padding-right:32px;}}"
    }}
  />
  <style
    id="__jsx-1473421095"
    dangerouslySetInnerHTML={{
      __html:
        "@-webkit-keyframes shake-jsx-1473421095{10%,90%{-webkit-transform:translate3d(-1px,0,0);-ms-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0);}20%,80%{-webkit-transform:translate3d(2px,0,0);-ms-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0);}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);-ms-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0);}40%,60%{-webkit-transform:translate3d(4px,0,0);-ms-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);}}@keyframes shake-jsx-1473421095{10%,90%{-webkit-transform:translate3d(-1px,0,0);-ms-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0);}20%,80%{-webkit-transform:translate3d(2px,0,0);-ms-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0);}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);-ms-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0);}40%,60%{-webkit-transform:translate3d(4px,0,0);-ms-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);}}.shake.jsx-1473421095{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.shake.active.jsx-1473421095{-webkit-animation:shake-jsx-1473421095 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both;animation:shake-jsx-1473421095 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation-iteration-count:1;animation-iteration-count:1;}"
    }}
  />
  <style
    id="__jsx-875249827"
    dangerouslySetInnerHTML={{
      __html:
        ".error-handling-component{position:relative;width:100%;}.error-handling-component .error-tooltip-text{color:red;font-weight:300;}.error-handling-component .tooltip{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}@media (max-width:991px){.error-handling-component .tooltip{-webkit-transform:translate(5%,-120%);-ms-transform:translate(5%,-120%);transform:translate(5%,-120%);}}"
    }}
  />
  <style
    id="__jsx-2776966822"
    dangerouslySetInnerHTML={{
      __html:
        '.basic-header-component{width:100%;height:72px;}.basic-header-component .basic-header-content-wrapper{width:100%;height:72px;position:fixed;z-index:556;background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.basic-header-component .basic-header-content-wrapper.with-shadow::after{content:"";position:absolute;right:0;bottom:0;width:100%;height:8px;box-shadow:0px 4px 4px rgba(29,140,242,0.08);z-index:557;}.basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:1440px;width:100%;position:fixed;height:72px;padding-left:32px;padding-right:32px;z-index:555;background-color:#ffffff;-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.basic-header-component .basic-header-content-wrapper .basic-header-content .base-header-monday-logo-image{height:42px;margin-right:16px;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper,.basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{-webkit-transition:opacity 50ms ease;transition:opacity 50ms ease;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{height:100%;position:absolute;background:#ae63e5;border-radius:80px;top:66px;left:20px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:-4px 4px 30px;color:#ae63e5;opacity:1;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;z-index:1;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text{font-size:0.875rem;line-height:120%;color:white;margin-left:24px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text .link-text{padding-left:4px;color:white;cursor:pointer;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif{margin-left:8px;width:53px;height:100%;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif .popup-gif-image{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup::before{content:"";top:-18px;left:35px;position:absolute;border:0px solid;display:block;width:30px;height:26px;background-color:transparent;border-top-left-radius:50%;border-top-right-radius:50%;-webkit-transform:rotate(-50deg);-ms-transform:rotate(-50deg);transform:rotate(-50deg);box-shadow:-12px -5px 0px 0px;color:#ae63e5;z-index:-1;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate{background:radial-gradient(146.02% 323.89% at 132.42% -98.86%, #7071FF 39.4%, #0B1133 100%);color:#595AD480;}.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate::before{color:#1f245b;}.basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}.basic-header-component.scrolled .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{opacity:0;}@media (max-width:1440px){.basic-header-component .basic-header-content-wrapper{max-width:100vw;}.basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:100vw;}}.basic-header-component.dark-mode{background-color:#0F1045;}.basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content{background-color:#0F1045;}.basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .mobile-header-content .hamburger-menu .hamburger-menu-line{background-color:#ffffff;}.scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .main-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}.scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:1;visibility:visible;position:static;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;pointer-events:auto;}'
    }}
  />
  <style
    id="__jsx-2928970979"
    dangerouslySetInnerHTML={{
      __html:
        ".base-header-desktop-component{width:100%;}.base-header-desktop-component .header-create-account-button-wrapper .regular-button{height:40px;}.base-header-desktop-component .header-create-account-button-wrapper .regular-button .button-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.8125rem;}.base-header-desktop-component .header-button-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:16px;}.base-header-desktop-component .header-button-wrapper .signup-button{height:40px;}.base-header-desktop-component .signup-popup-wrapper{position:fixed;z-index:10000000;top:84px;left:calc( (100vw - 1440px) / 2 + 1440px - 346px - 16px);}@media (max-width:1440px){.base-header-desktop-component .signup-popup-wrapper{left:calc(100vw - 346px - 16px);}}.base-header-desktop-component.scrolled-threshold .base-header-desktop-content .left-side-header-links .absolute-main-links{opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:translateY(-8px);-ms-transform:translateY(-8px);transform:translateY(-8px);-webkit-transition:opacity 250ms ease, transform 250ms ease;transition:opacity 250ms ease, transform 250ms ease;}.base-header-desktop-component.scrolled-threshold .base-header-desktop-content .left-side-header-links .absolute-unified-links{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:opacity 500ms ease, transform 500ms ease;transition:opacity 500ms ease, transform 500ms ease;}.base-header-desktop-component.scrolled-threshold .secondary-header-wrapper{pointer-events:none;}.base-header-desktop-component .base-header-desktop-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:72px;}.base-header-desktop-component .base-header-desktop-content.existing-account-header .header-create-account-button-wrapper{padding-left:6px;padding-right:2px;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links,.base-header-desktop-component .base-header-desktop-content .right-side-header-links{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language{border-radius:8px;padding:0 16px;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language:hover{background-color:#F0F3FF;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .earth-icon{margin:0 6px;width:18px;height:18px;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon{height:7px;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper{top:52px;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-unified-links,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links{opacity:1;visibility:visible;-webkit-transition:opacity 500ms ease, transform 500ms ease;transition:opacity 500ms ease, transform 500ms ease;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-enter{opacity:0.01;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-enter.submenu-enter-active{opacity:1;-webkit-transition:opacity 50ms ease;transition:opacity 50ms ease;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-leave{opacity:1;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-leave.submenu-leave-active{opacity:0.01;-webkit-transition:opacity 50ms ease;transition:opacity 50ms ease;}.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-unified-links{opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:translateY(8px);-ms-transform:translateY(8px);transform:translateY(8px);-webkit-transition:opacity 250ms ease, transform 250ms ease;transition:opacity 250ms ease, transform 250ms ease;}.base-header-desktop-component .base-header-desktop-content .right-side-header-links{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.base-header-desktop-component .base-header-desktop-content .header-button-wrapper{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.base-header-desktop-component .header-menu-component-wrapper{position:fixed;top:72px;z-index:555;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);pointer-events:none;width:100%;}.base-header-desktop-component .header-menu-component-wrapper .menu-component-wrapper{pointer-events:all;}.base-header-desktop-component .secondary-header-wrapper{height:56px;position:fixed;width:100%;z-index:554;}"
    }}
  />
  <style
    id="__jsx-2683879663"
    dangerouslySetInnerHTML={{
      __html:
        ".hamburger-menu.jsx-2683879663{width:28px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);cursor:pointer;z-index:667;margin-left:24px;margin-right:8px;height:36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.hamburger-menu.jsx-2683879663 .hamburger-menu-line.jsx-2683879663{display:block;position:absolute;height:3px;width:100%;background-color:#333333;border-radius:4px;opacity:1;left:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.hamburger-menu.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(1){top:8px;}.hamburger-menu.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(2),.hamburger-menu.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(3){top:17px;}.hamburger-menu.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(4){top:26px;}.hamburger-menu.open.jsx-2683879663 .hamburger-menu-line.jsx-2683879663{background-color:#333333;}.hamburger-menu.open.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(1){top:18px;width:0%;left:50%;}.hamburger-menu.open.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(2){-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.hamburger-menu.open.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(3){-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.hamburger-menu.open.jsx-2683879663 .hamburger-menu-line.jsx-2683879663:nth-child(4){top:18px;width:0%;left:50%;}"
    }}
  />
  <style
    id="__jsx-393647336"
    dangerouslySetInnerHTML={{
      __html:
        ".link-with-menu-mobile-component{border-bottom:1px solid #f1f1f1;overflow:hidden;-webkit-transition:height 400ms ease;transition:height 400ms ease;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-text{color:#595ad4;}.link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-icon path{fill:#595ad4;}.link-with-menu-mobile-component .link-with-menu-title-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.125rem;height:70px;cursor:pointer;}.link-with-menu-mobile-component .link-with-menu-title-wrapper .link-with-menu-title-text{color:#535768;margin-right:8px;}.link-with-menu-mobile-component .link-with-menu-title-wrapper .link-with-menu-title-icon{height:10px;width:10px;-webkit-transition:-webkit-transform 400ms ease;-webkit-transition:transform 400ms ease;transition:transform 400ms ease;}.link-with-menu-mobile-component .link-with-menu-links-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:height 400ms ease;transition:height 400ms ease;}.link-with-menu-mobile-component .link-with-menu-links-wrapper .section-wrapper{margin:0 0 32px 12px;}.link-with-menu-mobile-component .link-with-menu-links-wrapper .section-link{font-size:0.875rem;color:#535768;font-weight:bold;border-bottom:1px solid #F5F6F8;padding:16px 0;}.link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link{height:56px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;color:#383B45;-webkit-text-decoration:none;text-decoration:none;}.link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link .new-badge-component-wrapper{margin-left:8px;}.link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link.subsection-link{height:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:16px;}"
    }}
  />
  <style
    id="__jsx-3792945056"
    dangerouslySetInnerHTML={{
      __html:
        ".link-mobile-component{height:70px;border-bottom:1px solid #f1f1f1;font-size:1.125rem;color:#535768;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-text-decoration:none;text-decoration:none;}"
    }}
  />
  <style
    id="__jsx-862816351"
    dangerouslySetInnerHTML={{
      __html:
        ".download-mobile-app-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.download-mobile-app-component .download-mobile-app-image{width:168px;}"
    }}
  />
  <style
    id="__jsx-3504695916"
    dangerouslySetInnerHTML={{
      __html:
        ".secondary-button{font-size:0.875rem;font-weight:700;line-height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.secondary-button a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;}.secondary-button a.with-underline{background:linear-gradient(to right,var(--underline-color-with-opacity),var(--underline-color-with-opacity)),linear-gradient(to right,var(--underline-color),var(--underline-color),var(--underline-color));background-size:100% 1px,0 1px;background-position:100% 100%,0 100%;background-repeat:no-repeat;-webkit-transition:background-size 0.3s;transition:background-size 0.3s;}.secondary-button a.with-underline.with-icon{background-size:calc(100% - 48px) 1px,0px 1px;background-position:100% 100%,48px 100%;}.secondary-button a.with-underline.with-icon-instead-of-arrow{background-size:100% 1px,0px 1px;background-position:100% 100%,0px 100%;}.secondary-button a.with-underline:hover,.secondary-button a.with-underline:focus{background-size:0 1px,100% 1px;}.secondary-button .arrow-wrapper{padding-left:8px;padding-right:4px;margin-right:-4px;-webkit-transition:padding 0.3s ease-in-out;transition:padding 0.3s ease-in-out;}.secondary-button .arrow-wrapper svg{fill:currentColor;height:10px;width:12px;}.secondary-button .icon-instead-of-arrow-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:8px;}.secondary-button .icon-instead-of-arrow-wrapper .play-wrapper{padding-right:0;}.secondary-button .icon-instead-of-arrow-wrapper .play-wrapper svg{width:16px;}.secondary-button:hover .arrow-wrapper{padding-left:12px;padding-right:0px;}"
    }}
  />
  <style
    id="__jsx-1474266031"
    dangerouslySetInnerHTML={{
      __html:
        ".header-menu-mobile-component{height:100%;width:100%;background-color:#ffffff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:80px;padding:0px 32px 80px;overflow:auto;}.header-menu-mobile-component .download-mobile-app-component-wrapper{margin-top:32px;}.header-menu-mobile-component .monday-link-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:10px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;}.header-menu-mobile-component .monday-link-wrapper .picture-component img{max-height:20px;vertical-align:bottom;}.header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;vertical-align:middle;}.header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper .secondary-button{line-height:24px;}.header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper .secondary-button a.with-underline{background:none;}"
    }}
  />
  <style
    id="__jsx-2770025641"
    dangerouslySetInnerHTML={{
      __html:
        ".base-header-mobile-component{width:100%;height:72px;}.base-header-mobile-component.secondary-header{height:96px;}.base-header-mobile-component.with-cluster-logo:not(.secondary-header){height:calc(100% - 51px);}.base-header-mobile-component.with-cluster-logo .header-menu-component-wrapper{top:51px;height:calc(100% - 51px);}.base-header-mobile-component.with-cluster-logo .mobile-basic-header{height:52px;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper{height:52px;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper img{height:52px;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content{height:52px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:24px;padding-right:24px;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper{height:100%;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a .picture-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a .picture-component .base-header-monday-logo-image{max-width:calc(100% - 32px);height:unset;max-height:60px;margin-right:0;}.base-header-mobile-component.with-cluster-logo .mobile-menu-right-section{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.base-header-mobile-component.with-cluster-logo .mobile-menu-right-section .mobile-header-content .hamburger-menu{margin:0;}.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content{padding:0 16px;}@media (max-width:380px){.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content{padding:0 12px;}.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-header-content .hamburger-menu{width:22px;}}@media (max-width:359px){.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .sticky-signup-wrapper{display:none;}}.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .sticky-signup-wrapper .regular-button .button-component{padding:8px 12px 9.5px 12px;font-size:0.8125rem;font-weight:300;}.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .mobile-header-content .hamburger-menu{margin-left:16px;margin-right:0;}.base-header-mobile-component .mobile-menu-right-section{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.base-header-mobile-component .mobile-menu-right-section .mobile-header-content .hamburger-menu span{height:2px !important;}.base-header-mobile-component .header-menu-component-wrapper{position:fixed;z-index:10000000;top:71px;opacity:0;height:calc(100% - 71px);width:100%;visibility:hidden;-webkit-transition:opacity 300ms ease, visibility 300ms ease;;transition:opacity 300ms ease, visibility 300ms ease;;}.base-header-mobile-component .header-menu-component-wrapper.is-open{opacity:1;visibility:visible;}@media (max-width:1440px){.base-header-mobile-component .header-menu-component-wrapper{max-width:100vw;}}"
    }}
  />
  <style
    id="__jsx-308082724"
    dangerouslySetInnerHTML={{
      __html:
        ".base-header-component.jsx-308082724 .desktop-wrapper.jsx-308082724{display:block;}.base-header-component.jsx-308082724 .mobile-wrapper.jsx-308082724{display:none;}@media (max-width:1229px){.base-header-component.jsx-308082724 .desktop-wrapper.jsx-308082724{display:none;}.base-header-component.jsx-308082724 .mobile-wrapper.jsx-308082724{display:block;}}"
    }}
  />
  <style
    id="__jsx-3927383352"
    dangerouslySetInnerHTML={{
      __html:
        ".base-layout-segment-component.jsx-3927383352 .triangle.jsx-3927383352{position:absolute;z-index:2;pointer-events:none;}.base-layout-segment-component.jsx-3927383352 .triangle.top.jsx-3927383352{width:0;height:0;border-right:100vw solid transparent;margin-top:-13.867310096006543vw;}.base-layout-segment-component.jsx-3927383352 .triangle.bottom.jsx-3927383352{width:0;height:0;border-left:100vw solid transparent;}"
    }}
  />
  <style
    id="__jsx-3567056720"
    dangerouslySetInnerHTML={{
      __html:
        ".core-title{font-size:2.25rem;font-weight:400;line-height:48px;word-break:break-word;}.core-title.xss{font-size:0.6875rem;line-height:32px;font-weight:400;}.core-title.xs_m{font-size:0.875rem;line-height:32px;font-weight:400;}.core-title.xs_l{font-size:1.125rem;line-height:32px;font-weight:400;}.core-title.xs{font-size:1.375rem;line-height:32px;font-weight:400;}.core-title.sm{font-size:1.75rem;line-height:40px;font-weight:400;}.core-title.md{font-size:2.25rem;line-height:48px;font-weight:400;}.core-title.lg{font-size:2.75rem;line-height:60px;font-weight:700;}.core-title.lgr{font-size:3.375rem;line-height:68px;font-weight:700;}.core-title.xl{font-size:4rem;line-height:72px;font-weight:700;}.core-title.xxl{font-size:4.5rem;line-height:85px;font-weight:700;}.title-and-icon-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.title-and-icon-wrapper .icon-wrapper{margin-right:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title-and-icon-wrapper .icon-wrapper .picture-icon-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:32px;}.title-and-icon-wrapper .icon-wrapper .picture-icon-wrapper .title-icon{height:100%;}.title-and-icon-wrapper .icon-wrapper.xss .picture-icon-wrapper{height:8px;}.title-and-icon-wrapper .icon-wrapper.xs_m .picture-icon-wrapper{height:12px;}.title-and-icon-wrapper .icon-wrapper.xs .picture-icon-wrapper{height:18px;}.title-and-icon-wrapper .icon-wrapper.sm .picture-icon-wrapper{height:24px;}.title-and-icon-wrapper .icon-wrapper.md .picture-icon-wrapper{height:32px;}.title-and-icon-wrapper .icon-wrapper.lg .picture-icon-wrapper{height:38px;}.title-and-icon-wrapper .icon-wrapper.lgr .picture-icon-wrapper{height:44px;}.title-and-icon-wrapper .icon-wrapper.xl .picture-icon-wrapper{height:56px;}.title-and-icon-wrapper .icon-wrapper.xxl .picture-icon-wrapper{height:62px;}.title-and-icon-wrapper .icon-wrapper.lgr,.title-and-icon-wrapper .icon-wrapper.xl,.title-and-icon-wrapper .icon-wrapper.xxl{margin-right:20px;}@media (max-width:450px){.core-title{font-size:2.25rem;line-height:48px;font-weight:400;}.core-title.md,.core-title.lg{font-size:1.75rem;line-height:40px;font-weight:700;}.core-title.xl,.core-title.lgr{font-size:2.25rem;line-height:48px;font-weight:700;}.core-title.xxl{font-size:2.75rem;line-height:48px;font-weight:700;}.title-and-icon-wrapper .icon-wrapper .picture-icon-wrapper{height:32px;}.title-and-icon-wrapper .icon-wrapper.md .picture-icon-wrapper,.title-and-icon-wrapper .icon-wrapper.lg .picture-icon-wrapper,.title-and-icon-wrapper .icon-wrapper.xl .picture-icon-wrapper{height:24px;}}"
    }}
  />
  <style
    id="__jsx-402420666"
    dangerouslySetInnerHTML={{
      __html:
        '.button-component[data-button-color="space-blue"]:not(.outline){background:#0F1048;}.button-component[data-button-color="space-blue"]:not(.outline):hover{background-color:#0d0d3c;}.button-component[data-button-color="space-blue"]:not(.outline):hover.white{background-color:#F0F3FF;}'
    }}
  />
  <style
    id="__jsx-139011206"
    dangerouslySetInnerHTML={{
      __html:
        ".button-component{display:inline-block;border-radius:100px;cursor:pointer;font-weight:300;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;font-size:0.8125rem;padding:12px 24px;}.button-component:hover{outline:0;}.button-component.disabled{background-color:#f1f1f1 !important;color:#808080 !important;pointer-events:none;}.button-component.with-arrow{padding-right:16px;}.button-component.with-left-icon{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button-component.sm{font-size:0.6875rem;padding:8px 16px;}.button-component.sm.with-arrow{padding-right:12px;}.button-component.md{font-size:0.8125rem;padding:12px 24px;}.button-component.md.min-padding{padding-right:10px;padding-left:10px;}.button-component.md.with-arrow{padding-right:16px;}.button-component.lg{font-size:0.875rem;padding:16px 32px;}.button-component.lg.with-arrow{padding-left:30px;padding-right:20px;}.button-component.full{font-size:0.875rem;padding:16px 0;width:100%;text-align:center;}.button-component.blue:not(.outline){background-color:#0085ff;}.button-component.blue:not(.outline):hover{background-color:#0078e6;}.button-component.blue.outline{color:#0085ff;border:1px solid #0085ff;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.blue.outline:hover{color:#ffffff !important;background-color:#0085ff;}.button-component.blue.outline:hover.white{color:#333333 !important;}.button-component.mint-green:not(.outline){background-color:#25dbc5;}.button-component.mint-green:not(.outline):hover{background-color:#21c6b2;}.button-component.mint-green.outline{color:#25dbc5;border:1px solid #25dbc5;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.mint-green.outline:hover{color:#ffffff !important;background-color:#25dbc5;}.button-component.mint-green.outline:hover.white{color:#333333 !important;}.button-component.bold-blue:not(.outline){background-color:#15bbe4;}.button-component.bold-blue:not(.outline):hover{background-color:#13a8cd;}.button-component.bold-blue.outline{color:#15bbe4;border:1px solid #15bbe4;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.bold-blue.outline:hover{color:#ffffff !important;background-color:#15bbe4;}.button-component.bold-blue.outline:hover.white{color:#333333 !important;}.button-component.purple:not(.outline){background-color:#a358df;}.button-component.purple:not(.outline):hover{background-color:#9743db;}.button-component.purple.outline{color:#a358df;border:1px solid #a358df;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.purple.outline:hover{color:#ffffff !important;background-color:#a358df;}.button-component.purple.outline:hover.white{color:#333333 !important;}.button-component.iris:not(.outline){background-color:#595ad4;}.button-component.iris:not(.outline):hover{background-color:#4546cf;}.button-component.iris.outline{color:#595ad4;border:1px solid #595ad4;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.iris.outline:hover{color:#ffffff !important;background-color:#595ad4;}.button-component.iris.outline:hover.white{color:#333333 !important;}.button-component.riverstone:not(.outline){background-color:#f5f6f8;}.button-component.riverstone:not(.outline):hover{background-color:#e6e9ee;}.button-component.riverstone.outline{color:#f5f6f8;border:1px solid #f5f6f8;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.riverstone.outline:hover{color:#ffffff !important;background-color:#f5f6f8;}.button-component.riverstone.outline:hover.white{color:#333333 !important;}.button-component.royal:not(.outline){background-color:#597bfc;}.button-component.royal:not(.outline):hover{background-color:#4067fc;}.button-component.royal.outline{color:#597bfc;border:1px solid #597bfc;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.royal.outline:hover{color:#ffffff !important;background-color:#597bfc;}.button-component.royal.outline:hover.white{color:#333333 !important;}.button-component.green:not(.outline){background-color:#00ca72;}.button-component.green:not(.outline):hover{background-color:#00b164;}.button-component.green.outline{color:#00ca72;border:1px solid #00ca72;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.green.outline:hover{color:#ffffff !important;background-color:#00ca72;}.button-component.green.outline:hover.white{color:#333333 !important;}.button-component.orange:not(.outline){background-color:#fdab3d;}.button-component.orange:not(.outline):hover{background-color:#fda024;}.button-component.orange.outline{color:#fdab3d;border:1px solid #fdab3d;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.orange.outline:hover{color:#ffffff !important;background-color:#fdab3d;}.button-component.orange.outline:hover.white{color:#333333 !important;}.button-component.yellow:not(.outline){background-color:#ffcb00;}.button-component.yellow:not(.outline):hover{background-color:#e6b700;}.button-component.yellow.outline{color:#ffcb00;border:1px solid #ffcb00;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.yellow.outline:hover{color:#ffffff !important;background-color:#ffcb00;}.button-component.yellow.outline:hover.white{color:#333333 !important;}.button-component.pink:not(.outline){background-color:#ff0476;}.button-component.pink:not(.outline):hover{background-color:#ea006a;}.button-component.pink.outline{color:#ff0476;border:1px solid #ff0476;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.pink.outline:hover{color:#ffffff !important;background-color:#ff0476;}.button-component.pink.outline:hover.white{color:#333333 !important;}.button-component.marketing-red-dark:not(.outline){background-color:#ca0c6b;}.button-component.marketing-red-dark:not(.outline):hover{background-color:#b20b5e;}.button-component.marketing-red-dark.outline{color:#ca0c6b;border:1px solid #ca0c6b;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.marketing-red-dark.outline:hover{color:#ffffff !important;background-color:#ca0c6b;}.button-component.marketing-red-dark.outline:hover.white{color:#333333 !important;}.button-component.dev-green-dark:not(.outline){background-color:#037f4c;}.button-component.dev-green-dark:not(.outline):hover{background-color:#02663d;}.button-component.dev-green-dark.outline{color:#037f4c;border:1px solid #037f4c;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.dev-green-dark.outline:hover{color:#ffffff !important;background-color:#037f4c;}.button-component.dev-green-dark.outline:hover.white{color:#333333 !important;}.button-component.projects-orange-dark:not(.outline){background-color:#f86700;}.button-component.projects-orange-dark:not(.outline):hover{background-color:#df5c00;}.button-component.projects-orange-dark.outline{color:#f86700;border:1px solid #f86700;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.projects-orange-dark.outline:hover{color:#ffffff !important;background-color:#f86700;}.button-component.projects-orange-dark.outline:hover.white{color:#333333 !important;}.button-component.crm-green-dark:not(.outline){background-color:#00a0a0;}.button-component.crm-green-dark:not(.outline):hover{background-color:#008787;}.button-component.crm-green-dark.outline{color:#00a0a0;border:1px solid #00a0a0;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.crm-green-dark.outline:hover{color:#ffffff !important;background-color:#00a0a0;}.button-component.crm-green-dark.outline:hover.white{color:#333333 !important;}.button-component.workos-iris:not(.outline){background-color:#6c6cff;}.button-component.workos-iris:not(.outline):hover{background-color:#5353ff;}.button-component.workos-iris.outline{color:#6c6cff;border:1px solid #6c6cff;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.workos-iris.outline:hover{color:#ffffff !important;background-color:#6c6cff;}.button-component.workos-iris.outline:hover.white{color:#333333 !important;}.button-component.brand-wm-primary-color:not(.outline){background-color:#6161ff;}.button-component.brand-wm-primary-color:not(.outline):hover{background-color:#4848ff;}.button-component.brand-wm-primary-color.outline{color:#6161ff;border:1px solid #6161ff;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.brand-wm-primary-color.outline:hover{color:#ffffff !important;background-color:#6161ff;}.button-component.brand-wm-primary-color.outline:hover.white{color:#333333 !important;}.button-component.crm-dark-tint-01:not(.outline){background-color:#00889b;}.button-component.crm-dark-tint-01:not(.outline):hover{background-color:#007282;}.button-component.crm-dark-tint-01.outline{color:#00889b;border:1px solid #00889b;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.crm-dark-tint-01.outline:hover{color:#ffffff !important;background-color:#00889b;}.button-component.crm-dark-tint-01.outline:hover.white{color:#333333 !important;}.button-component.brand-green-dark-tint-01:not(.outline){background-color:#00854d;}.button-component.brand-green-dark-tint-01:not(.outline):hover{background-color:#006c3e;}.button-component.brand-green-dark-tint-01.outline{color:#00854d;border:1px solid #00854d;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.brand-green-dark-tint-01.outline:hover{color:#ffffff !important;background-color:#00854d;}.button-component.brand-green-dark-tint-01.outline:hover.white{color:#333333 !important;}.button-component.white:not(.outline){background-color:#ffffff;}.button-component.white:not(.outline):hover{background-color:#f2f2f2;}.button-component.white.outline{color:#ffffff;border:1px solid #ffffff;-webkit-transition:background-color 200ms ease,color 200ms ease;transition:background-color 200ms ease,color 200ms ease;}.button-component.white.outline:hover{color:#ffffff !important;background-color:#ffffff;}.button-component.white.outline:hover.white{color:#333333 !important;}"
    }}
  />
  <style
    id="__jsx-1970828850"
    dangerouslySetInnerHTML={{
      __html:
        ".regular-button.full{width:100%;}.regular-button .additional-button-text{margin-top:8px;}"
    }}
  />
  <style
    id="__jsx-1667800273"
    dangerouslySetInnerHTML={{
      __html:
        ".full-paragraph{word-break:break-word;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.full-paragraph.align-items-left{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.full-paragraph.align-items-center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.full-paragraph.align-items-center .title-wrapper{width:100%;}.full-paragraph.align-items-right{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.full-paragraph.with-left-line{border-width:2px;border-style:solid;padding-left:32px;}.full-paragraph .full-paragraph-topic-image-wrapper{margin-bottom:40px;}.full-paragraph .full-paragraph-topic{font-size:0.875rem;margin-bottom:16px;}.full-paragraph .title-wrapper{margin-top:16px;margin-bottom:16px;}.full-paragraph .icons-wrapper{margin-top:40px;margin-bottom:64px;}.full-paragraph .bullets-wrapper{margin-top:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:768px){.full-paragraph .bullets-wrapper.no-mobile-margin{margin-top:0;}}.full-paragraph .bullets-wrapper.left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.full-paragraph .bullets-wrapper.left .bullets{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.full-paragraph .bullets-wrapper.center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.full-paragraph .bullets-wrapper.center .bullets{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.full-paragraph .bullets-wrapper.right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.full-paragraph .bullets-wrapper.right .bullets{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.full-paragraph .full-paragraph-topic-image-wrapper.left .picture-component{-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;}.full-paragraph .full-paragraph-topic-image-wrapper.center .picture-component{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.full-paragraph .full-paragraph-topic-image-wrapper.right .picture-component{-webkit-box-pack:right;-webkit-justify-content:right;-ms-flex-pack:right;justify-content:right;}.full-paragraph .button-wrapper{margin-top:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.full-paragraph .button-wrapper.left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.full-paragraph .button-wrapper.center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.full-paragraph .button-wrapper.right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"
    }}
  />
  <style
    id="__jsx-33458285"
    dangerouslySetInnerHTML={{
      __html:
        ".full-background-text-and-asset.jsx-33458285{height:100%;background-size:auto 100%;background-repeat:no-repeat;background-position:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.full-background-text-and-asset.jsx-33458285 .full-background-text-and-asset-content.jsx-33458285{margin:0 auto;max-width:1440px;width:100%;padding:0px 32px;}.full-background-text-and-asset.jsx-33458285 .full-background-text-and-asset-content.top.jsx-33458285{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.full-background-text-and-asset.jsx-33458285 .full-background-text-and-asset-content.bottom.jsx-33458285{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}"
    }}
  />
  <style
    id="__jsx-1755793740"
    dangerouslySetInnerHTML={{
      __html:
        ".full-background-text-and-asset-component.jsx-1755793740{height:650px;}.full-background-text-and-asset-component.jsx-1755793740:not(.align-to-logo) .full-background-text-and-asset-content{padding:0 96px;}"
    }}
  />
  <style
    id="__jsx-1055366927"
    dangerouslySetInnerHTML={{
      __html:
        ".full-paragraph-component.jsx-1055366927{max-width:1440px;margin:auto;}.full-paragraph-component.jsx-1055366927 .full-paragraph-wrapper.jsx-1055366927{max-width:1100px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 32px;}"
    }}
  />
  <style
    id="__jsx-1675809481"
    dangerouslySetInnerHTML={{
      __html:
        ".link.jsx-1675809481{line-height:22px;}.link.jsx-1675809481:not(:last-child){margin-bottom:16px;}.link.jsx-1675809481:hover{color:#5034FF;}.link.jsx-1675809481 a.jsx-1675809481{-webkit-text-decoration:none;text-decoration:none;color:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-column-gap:8px;column-gap:8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.link.jsx-1675809481 a.jsx-1675809481 .picture-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.link.jsx-1675809481 a.jsx-1675809481 .picture-component img{height:18px;}"
    }}
  />
  <style
    id="__jsx-1727271368"
    dangerouslySetInnerHTML={{
      __html:
        ".footer-category-component.jsx-1727271368 .footer-category-image-and-title-warpper.jsx-1727271368 .monday-logo-wrapper.jsx-1727271368{margin-bottom:14px;}.footer-category-component.jsx-1727271368 .footer-category-image-and-title-warpper.jsx-1727271368 .monday-logo-wrapper.jsx-1727271368 .footer-monday-logo-image{height:32px;}.footer-category-component.jsx-1727271368 .footer-category-image-and-title-warpper.jsx-1727271368 .title.jsx-1727271368{margin-top:10px;margin-bottom:24px;font-size:0.875rem;font-weight:500;}"
    }}
  />
  <style
    id="__jsx-2921979010"
    dangerouslySetInnerHTML={{
      __html:
        ".language-picker-item-component{height:32px;width:104px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;padding:0px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;}.language-picker-item-component:hover{background-color:#F5F6F8;}.language-picker-item-component.language-selected{background-color:#F0F3FF;}.language-picker-item-component.language-selected .language-picker-item-label{color:#5034FF;}.language-picker-item-component .language-picker-item-label{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:32px;font-size:0.8125rem;color:#535768;}"
    }}
  />
  <style
    id="__jsx-2157806734"
    dangerouslySetInnerHTML={{
      __html:
        ".language-picker-dialog-component{border-radius:4px;background-color:white;box-shadow:0px 2px 20px rgba(0,0,0,0.1);padding:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.language-picker-dialog-component .language-picker-item-component-wrapper{margin:4px;}@media (max-width:450px){.language-picker-dialog-component{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;overflow:auto;width:100% !important;height:186px !important;}}"
    }}
  />
  <style
    id="__jsx-3454926987"
    dangerouslySetInnerHTML={{
      __html:
        ".language-picker-component{position:relative;}.language-picker-component:hover .earth-icon path,.language-picker-component.is-open .earth-icon path{stroke:#5034FF;}.language-picker-component:hover .selected-language .language-label,.language-picker-component.is-open .selected-language .language-label{color:#5034FF;}.language-picker-component:hover .arrow-down-icon path,.language-picker-component.is-open .arrow-down-icon path{fill:#5034FF;}.language-picker-component.is-open .selected-language .arrow-down-icon{-webkit-transform:translateY(1px) rotate(180deg);-ms-transform:translateY(1px) rotate(180deg);transform:translateY(1px) rotate(180deg);}.language-picker-component.is-open .language-picker-dialog-component-wrapper{opacity:1;visibility:visible;}.language-picker-component .selected-language{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:32px;line-height:32px;}.language-picker-component .selected-language .earth-icon path{-webkit-transition:stroke 150ms ease;transition:stroke 150ms ease;color:#535768;}.language-picker-component .selected-language .language-label{font-size:0.875rem;margin:0px 8px;max-width:104px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-transition:color 150ms ease;transition:color 150ms ease;color:#535768;}.language-picker-component .selected-language .arrow-down-icon{height:10px;width:10px;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px);-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;}.language-picker-component .selected-language .arrow-down-icon path{fill:#535768;-webkit-transition:fill 150ms ease;transition:fill 150ms ease;}.language-picker-component .language-picker-dialog-component-wrapper{position:absolute;top:40px;opacity:0;visibility:hidden;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;z-index:1032;}.language-picker-component .language-picker-dialog-component-wrapper.left{left:0;}.language-picker-component .language-picker-dialog-component-wrapper.right{right:0;}.language-picker-component .language-picker-dialog-component-wrapper.top{top:-216px;}.language-picker-component .language-picker-dialog-component-wrapper.bottom .language-picker-dialog-component{border-top-left-radius:0px;border-top-right-radius:0px;}@media (max-width:450px){.language-picker-component .language-picker-dialog-component-wrapper.top{top:-200px;}}"
    }}
  />
  <style
    id="__jsx-3089181165"
    dangerouslySetInnerHTML={{
      __html:
        ".security-logos-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.security-logos-component .iso-logo-img-container,.security-logos-component .gdpr-logo-img-container,.security-logos-component .hipaa-logo-img-container,.security-logos-component .soc-logo-img-container{margin-right:8px;cursor:pointer;}.security-logos-component .iso-logo-img-container img,.security-logos-component .gdpr-logo-img-container img,.security-logos-component .hipaa-logo-img-container img,.security-logos-component .soc-logo-img-container img{height:32px;}.security-logos-component .iso-logo-img-container:hover img,.security-logos-component .gdpr-logo-img-container:hover img,.security-logos-component .hipaa-logo-img-container:hover img,.security-logos-component .soc-logo-img-container:hover img{opacity:0.7;}"
    }}
  />
  <style
    id="__jsx-3692625068"
    dangerouslySetInnerHTML={{
      __html:
        ".social-media-icon svg{height:24px;width:auto;}.social-media-icon:hover svg path{fill:#5034FF;}"
    }}
  />
  <style
    id="__jsx-4139997252"
    dangerouslySetInnerHTML={{
      __html:
        ".palette-icons-container.jsx-4139997252{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.palette-icons-container.jsx-4139997252 .icons-wrapper.jsx-4139997252{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;}.palette-icons-container.jsx-4139997252 .single-app-icon-wrapper.jsx-4139997252{margin-right:8px;}@media (max-width:768px){.palette-icons-container.jsx-4139997252{margin:0 auto;padding:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:16px;}.palette-icons-container.jsx-4139997252 .icons-wrapper.jsx-4139997252:first-child{margin-right:auto;}.palette-icons-container.jsx-4139997252 .icons-wrapper.jsx-4139997252{width:200px;margin:0 auto;margin-bottom:8px;}}"
    }}
  />
  <style
    id="__jsx-1981315406"
    dangerouslySetInnerHTML={{
      __html:
        ".footer-bottom-bar-link-component{font-size:0.8125rem;color:#535768;-webkit-transition:100ms color ease;transition:100ms color ease;}.footer-bottom-bar-link-component:hover{color:#595ad4;}"
    }}
  />
  <style
    id="__jsx-3477892871"
    dangerouslySetInnerHTML={{
      __html:
        '.footer-bottom-bar-component.jsx-3477892871{position:relative;font-size:0.8125rem;color:#808080;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer-bottom-bar-component.jsx-3477892871:before{display:block;content:"";height:1px;width:calc(100% - 64px);background-color:#DCDFEC;position:relative;max-width:1376px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-both-sides-wrapper.jsx-3477892871{max-width:1440px;width:100%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:40px 32px 48px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:180px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:32px;height:100%;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .language-picker-and-security-logos-wrapper.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .language-picker-and-security-logos-wrapper.jsx-3477892871 .language-picker-wrapper.jsx-3477892871{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .palette-icons-wrapper.jsx-3477892871{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .statement-and-links-wrapper.jsx-3477892871{height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:6px;gap:24px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .statement-and-links-wrapper.jsx-3477892871 .links-container.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .statement-and-links-wrapper.jsx-3477892871 .links-container.jsx-3477892871 .short-footer-link-component-wrapper.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .statement-and-links-wrapper.jsx-3477892871 .links-container.jsx-3477892871 .short-footer-link-component-wrapper.jsx-3477892871:not(:last-of-type):after{content:" | ";margin:0 8px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-left-side.jsx-3477892871 .social-statement-and-links-wrapper.jsx-3477892871 .statement-and-links-wrapper.jsx-3477892871 .all-rights-reserved-component{padding-bottom:2px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-right-side.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-right-side.jsx-3477892871 .app-store-icons.jsx-3477892871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:16px;height:40px;}.footer-bottom-bar-component.jsx-3477892871 .footer-bottom-bar-right-side.jsx-3477892871 .accessibility-statement-link-wrapper.jsx-3477892871{height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:6px;}@media (max-width:991px) and (min-width:768px){.footer-bottom-bar-component.jsx-3477892871 .items-container.jsx-3477892871{padding:0 54px;}}'
    }}
  />
  <style
    id="__jsx-164348419"
    dangerouslySetInnerHTML={{
      __html:
        ".all-rights-reserved-component .details{font-size:0.8125rem;line-height:2;height:24px;color:#535768;}@media (max-width:768px){.all-rights-reserved-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:24px;}.all-rights-reserved-component .icons-wrapper{margin-left:48px;}}"
    }}
  />
  <style
    id="__jsx-956190298"
    dangerouslySetInnerHTML={{
      __html:
        ".accessibilty-statement-link-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0.8125rem;cursor:pointer;}.accessibilty-statement-link-component .accessibility-icon-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.accessibilty-statement-link-component .accessibility-icon-wrapper .accessibility-icon circle,.accessibilty-statement-link-component .accessibility-icon-wrapper .accessibility-icon path{color:#535768;-webkit-transition:stroke 150ms ease;transition:stroke 150ms ease;}.accessibilty-statement-link-component .accessibility-link-wrapper{padding-left:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.accessibilty-statement-link-component .accessibility-link-wrapper .accessibility-link{-webkit-transition:150ms color ease;transition:150ms color ease;color:#535768;}.accessibilty-statement-link-component:hover .accessibility-icon-wrapper .accessibility-icon path,.accessibilty-statement-link-component:hover .accessibility-icon-wrapper .accessibility-icon circle{stroke:#595ad4;}.accessibilty-statement-link-component:hover .accessibility-link-wrapper .accessibility-link{color:#595ad4;}"
    }}
  />
  <style
    id="__jsx-761555726"
    dangerouslySetInnerHTML={{
      __html:
        ".short-footer-link-component{font-size:0.8125rem;color:#535768;-webkit-transition:100ms color ease;transition:100ms color ease;}.short-footer-link-component:hover{color:#009AFF;}"
    }}
  />
  <style
    id="__jsx-3368285728"
    dangerouslySetInnerHTML={{
      __html:
        ".short-footer-component{background:linear-gradient(180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);color:#333333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:48px 48px;}.short-footer-component .short-footer-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.short-footer-component .short-footer-header .short-footer-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1170px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.short-footer-component .short-footer-header .short-footer-links .link-wrapper{margin-top:32px;}.short-footer-component .short-footer-header .short-footer-links .short-footer-link-component-wrapper{margin-right:32px;}.short-footer-component .short-footer-header .short-footer-links .language-picker-wrapper-component{width:120px;}.short-footer-component .short-footer-header .short-footer-links .accessibility-statement-link-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:32px;padding-top:8px;padding-bottom:4px;}.short-footer-component .monday-logo-wrapper{margin-top:40px;}.short-footer-component .monday-logo-wrapper .footer-monday-logo-image{height:32px;}.short-footer-component .contact-info-wrapper{font-size:0.8125rem;text-align:center;}.short-footer-component .social-proof-wrapper{margin-top:40px;}.short-footer-component .social-proof-wrapper .palette-icons-container .icons-wrapper{margin-right:0px !important;}@media (max-width:768px) and (min-width:451px){.short-footer-header{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.short-footer-header .short-footer-links{padding-bottom:32px;}}@media (max-width:450px){.short-footer-component{-webkit-align-items:initial;-webkit-box-align:initial;-ms-flex-align:initial;align-items:initial;padding:32px;}.short-footer-component .short-footer-header{margin-bottom:32px;}.short-footer-component .short-footer-header .short-footer-links{width:100vw;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.short-footer-component .short-footer-header .short-footer-links .link-wrapper{margin-top:0;}.short-footer-component .short-footer-header .short-footer-links .short-footer-link-component-wrapper{margin-bottom:32px;margin-top:0px;width:50%;margin-right:0px;}.short-footer-component .monday-logo-wrapper{margin-top:0px;}.short-footer-component .contact-info-wrapper{text-align:left;line-height:24px;}.short-footer-component .contact-info-wrapper .address-info{margin-top:0px;}.short-footer-component .social-proof-wrapper{margin-top:32px;}.short-footer-component .social-proof-wrapper .palette-icons-container{margin-top:0px;}.short-footer-component .social-proof-wrapper .icons-wrapper{margin:0px !important;}}"
    }}
  />
  <style
    id="__jsx-463568449"
    dangerouslySetInnerHTML={{
      __html:
        '.footer-desktop-wrapper{display:block;}.footer-mobile-wrapper{display:none;}@media (max-width:1199px){.footer-desktop-wrapper{display:none;}.footer-mobile-wrapper{display:block;}}.footer-container{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:#535768;background-color:#ffffff;}.footer-container .footer-content-container{max-width:1440px;width:100%;padding:80px 32px 0 32px;font-size:0.8125rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.footer-container .footer-content-container .footer-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:1440px;}.footer-container .footer-content-container .footer-content .all-right-reserved-container{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-right:120px;}.footer-container .footer-content-container .footer-content .categories-container{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.footer-container .footer-content-container .footer-content .categories-container .categories-colmmn-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:38px;}.footer-container .footer-content-container .footer-content .categories-container .category-container{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin-bottom:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer-container .footer-content-container .footer-content .categories-container .category-container:last-child{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.footer-container .footer-content-container .footer-content .categories-container .category-container:not(:last-child){margin-right:16px;}.footer-container:before{display:block;content:"";height:1px;width:100%;background-color:#DCDFEC;position:relative;}@media (max-width:768px){.footer-container .footer-content-container{padding:40px 40px 0 40px;}.footer-container .footer-content-container .footer-content{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:24px;}.footer-container .footer-content-container .footer-content .all-right-reserved-container{width:100%;}.footer-container .footer-content-container .footer-content .categories-container .category-container{width:130px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12px;}.footer-container .footer-content-container .footer-content .categories-container .category-container .footer-category-component{width:130px;}.footer-container .footer-content-container .footer-content .categories-container .security-logos-container img{width:34px !important;height:34px !important;}}@media (max-width:360px){.footer-container .footer-content-container{padding:40px 16px 0 16px;}}@media (max-width:1440px){.footer-container .footer-content-container .footer-content{padding:0;}}'
    }}
  />
  <style
    id="__jsx-639507104"
    dangerouslySetInnerHTML={{
      __html:
        ".dynamic-template.developers-center-template .full-paragraph-wrapper{margin:0px !important;}@media (min-width:991px){.dynamic-template.developers-center-template main{display:grid;grid-template-columns:300px auto 300px;}}"
    }}
  />
  <style
    id="__jsx-1326851841"
    dangerouslySetInnerHTML={{
      __html:
        ".accessibility-menu-wrapper{position:relative;z-index:2;}.template-content-wrapper{position:relative;z-index:1;}.template-content-wrapper.with-background-color{background-color:white;}"
    }}
  />
</>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
