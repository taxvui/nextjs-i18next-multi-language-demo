import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from 'next/link';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      

      <main id="main">
        <div className="jsx-3927383352 base-layout-segment-component base-layout-segment-component-1">
          <div style={{height: '650px'}} className="jsx-1755793740 full-background-text-and-asset-component align-to-logo">
            <div style={{backgroundImage: 'url("https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/MayKishon/c9a31fc5-9a6a-4a66-a874-ebb37a4159f0_404.png")'}} className="jsx-33458285 full-background-text-and-asset">
              <div className="jsx-33458285 full-background-text-and-asset-content">
                <div style={{textAlign: 'center'}} className="jsx-1667800273 full-paragraph align-items-center">
                  <div style={{maxWidth: 'min(undefined, 1440px)', marginTop: 0, minWidth: 'min(undefined, 1440px, calc(100vw - 32px))'}} className="jsx-1667800273 title-wrapper">
                    <h1 className="monday-markup-language-component core-title md">
                        {t("error.Error title")}
                        <br/>
                          {t("error.Description")}
                    </h1>
                  </div>
                  <div className="jsx-1667800273 button-wrapper center">
                    <div className="jsx-2396283946 button">
                      <div className="jsx-1970828850 regular-button lg">
                        <Link href="/" target="_self">
                          <div style={{color: '#ffffff'}} tabIndex={0} role="button" data-button-color="space-blue" className="jsx-139011206 jsx-402420666 button-component jsx-2396283946  lg space-blue with-arrow">
                          {t("error.Home")}
                            <span className="jsx-2730172878 arrow-wrapper lg">
                              <svg width={10} height={14} viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{paddingTop: '64px', paddingBottom: '64px'}} className="jsx-3927383352 base-layout-segment-component base-layout-segment-component-2">
          <div className="jsx-1055366927 full-paragraph-component">
            <div style={{maxWidth: '1100px'}} className="jsx-1055366927 full-paragraph-wrapper">
              <div style={{textAlign: 'center'}} className="jsx-1667800273 full-paragraph align-items-center">
                <div style={{maxWidth: 'min(undefined, 1440px)', marginTop: 0, minWidth: 'min(undefined, 1440px, calc(100vw - 32px))'}} className="jsx-1667800273 title-wrapper">
                  <h2 className="monday-markup-language-component core-title md">Start using monday.com today</h2>
                </div>
                <div className="jsx-1667800273 button-wrapper center">
                  <div className="jsx-2396283946 button">
                    <div className="jsx-2347587978 signup-button">
                      <div className="jsx-875249827 error-handling-component">
                        <div className="jsx-1473421095 shake stop">
                          <div className="jsx-1336934735 signup-form-core-component-wrapper jsx-2396283946 ">
                            <form action="//auth.monday.com/users/sign_up_new?source=web_main&origin=hp_fullbg_page_header" data-origin="hp_fullbg_page_header" method="POST" noValidate className="jsx-1336934735 signup-form">
                              <div className="jsx-1336934735 signup-button-wrapper button-with-arrow">
                                <button className="ladda-button signup-button workos-iris undefined disable-animation has-arrow" data-style="zoom-in" data-size="xl" type="button" data-button-color="workos-iris">
                                  <span className="ladda-label">
                                    <span className="jsx-1336934735 signup-text">Get Started</span>
                                    <span className="jsx-2730172878 arrow-wrapper md signup">
                                      <svg width={10} height={14} viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z" />
                                      </svg>
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
