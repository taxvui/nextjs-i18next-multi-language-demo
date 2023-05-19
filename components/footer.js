import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function Footer() {
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);
  
  return (
<div>
        <div className="jsx-3927383352 base-layout-segment-component base-layout-segment-component-3">
          <div id="footer" className="jsx-3218778269 long-footer-component">
            <div className="jsx-463568449 footer-desktop-wrapper">
              <footer className="footer-container">
                <div className="footer-content-container">
                  <nav className="footer-content" aria-label="Footer">
                    <div className="categories-container">
                      <div className="category-container">
                        <div className="jsx-1727271368 footer-category-component">
                          <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                            <div className="jsx-1727271368 monday-logo-wrapper">
                              <Link href="/" target="_self">
                                <picture className="jsx-4212101279 picture-component"><img alt="monday logo" className="jsx-4212101279 footer-monday-logo-image" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" /></picture>
                              </Link>
                            </div>
                          </div>
                          <div className="jsx-1727271368 links">
                            <div className="jsx-1675809481 link"><Link href="/nonprofits/pricing" target="_self" rel="noreferrer" className="jsx-1675809481">Pricing</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/help" target="_self" rel="noreferrer" className="jsx-1675809481">Contact us</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/templates" target="_self" rel="noreferrer" className="jsx-1675809481">Templates</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/smb" target="_self" rel="noreferrer" className="jsx-1675809481">SMB</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/enterprise" target="_self" rel="noreferrer" className="jsx-1675809481">Enterprise</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/nonprofits" target="_self" rel="noreferrer" className="jsx-1675809481">Nonprofits</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/marketplace" target="_self" rel="noreferrer" className="jsx-1675809481">Apps marketplace</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/helpcenter/" target="_self" rel="noreferrer" className="jsx-1675809481">24/7 support</Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="category-container features">
                        <div className="jsx-1727271368 footer-category-component">
                          <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                            <h3 className="jsx-1727271368 title">Features</h3>
                          </div>
                          <div className="jsx-1727271368 links">
                            <div className="jsx-1675809481 link"><Link href="/workdocs" target="_self" rel="noreferrer" className="jsx-1675809481">Docs</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/integrations" target="_self" rel="noreferrer" className="jsx-1675809481">Integrations</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/features/automations" target="_self" rel="noreferrer" className="jsx-1675809481">Automations</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/features/files" target="_self" rel="noreferrer" className="jsx-1675809481">Files</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/features/dashboards" target="_self" rel="noreferrer" className="jsx-1675809481">Dashboards</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/features/kanban" target="_self" rel="noreferrer" className="jsx-1675809481">Kanban</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/features/gantt" target="_self" rel="noreferrer" className="jsx-1675809481">Gantt</Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="category-container products">
                        <div className="categories-colmmn-wrapper">
                          <div className="jsx-1727271368 footer-category-component">
                            <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                              <h3 className="jsx-1727271368 title">monday products</h3>
                            </div>
                            <div className="jsx-1727271368 links">
                              <div className="jsx-1675809481 link">
                                <Link href="/work-management" target="_self" rel="noreferrer" className="jsx-1675809481">
                                  <span className="jsx-1675809481">
                                    <picture className="jsx-4212101279 picture-component"><img alt="Footer wm logo" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/WM_new_logo/Footer_wm_logo.png" /></picture>
                                  </span>
                                  monday work management
                                </Link>
                              </div>
                              <div className="jsx-1675809481 link">
                                <Link href="/crm" target="_self" rel="noreferrer" className="jsx-1675809481">
                                  <span className="jsx-1675809481">
                                    <picture className="jsx-4212101279 picture-component"><img alt="crm icon footer" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png" /></picture>
                                  </span>
                                  monday sales CRM
                                </Link>
                              </div>
                              <div className="jsx-1675809481 link">
                                <Link href="/dev" target="_self" rel="noreferrer" className="jsx-1675809481">
                                  <span className="jsx-1675809481">
                                    <picture className="jsx-4212101279 picture-component"><img alt="monday dev product management software" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/monday_dev_product_management_software.png" /></picture>
                                  </span>
                                  monday dev
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="jsx-1727271368 footer-category-component">
                            <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                              <h3 className="jsx-1727271368 title">More by monday.com</h3>
                            </div>
                            <div className="jsx-1727271368 links">
                              <div className="jsx-1675809481 link">
                                <Link href="//workcanvas.com" target="_blank" rel="noreferrer" className="jsx-1675809481">
                                  <span className="jsx-1675809481">
                                    <picture className="jsx-4212101279 picture-component"><img alt="canvas icon footer" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png" /></picture>
                                  </span>
                                  Canvas
                                </Link>
                              </div>
                              <div className="jsx-1675809481 link">
                                <Link href="https://workforms.monday.com" target="_blank" rel="noreferrer" className="jsx-1675809481">
                                  <span className="jsx-1675809481">
                                    <picture className="jsx-4212101279 picture-component"><img alt="workforms icon footer" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png" /></picture>
                                  </span>
                                  WorkForms
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-container">
                        <div className="jsx-1727271368 footer-category-component">
                          <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                            <h3 className="jsx-1727271368 title">Use cases</h3>
                          </div>
                          <div className="jsx-1727271368 links">
                            <div className="jsx-1675809481 link"><Link href="/work-management/marketing" target="_self" rel="noreferrer" className="jsx-1675809481">Marketing</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/project-management" target="_self" rel="noreferrer" className="jsx-1675809481">Project management</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/crm" target="_self" rel="noreferrer" className="jsx-1675809481">Sales</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/dev" target="_self" rel="noreferrer" className="jsx-1675809481">Developers</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/use-cases/hr-management-software" target="_self" rel="noreferrer" className="jsx-1675809481">HR</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/use-cases/it-operations" target="_self" rel="noreferrer" className="jsx-1675809481">IT</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/operations" target="_self" rel="noreferrer" className="jsx-1675809481">Operations</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/construction" target="_self" rel="noreferrer" className="jsx-1675809481">Construction</Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="category-container">
                        <div className="jsx-1727271368 footer-category-component">
                          <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                            <h3 className="jsx-1727271368 title">Company</h3>
                          </div>
                          <div className="jsx-1727271368 links">
                            <div className="jsx-1675809481 link"><Link href="/p/about/" target="_self" rel="noreferrer" className="jsx-1675809481">About us</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/careers" target="_self" rel="noreferrer" className="jsx-1675809481">Careers - We&apos;re hiring!</Link></div>
                            <div className="jsx-1675809481 link"><Link href="//www.monday-u.com" target="_blank" rel="noreferrer" className="jsx-1675809481">monday-U</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/p/news/" target="_self" rel="noreferrer" className="jsx-1675809481">Press</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/why-monday/stories" target="_self" rel="noreferrer" className="jsx-1675809481">Customer stories</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/partnership" target="_self" rel="noreferrer" className="jsx-1675809481">Become a partner</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/p/esg/" target="_self" rel="noreferrer" className="jsx-1675809481">Sustainability &amp; ESG</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/affiliate-program" target="_self" rel="noreferrer" className="jsx-1675809481">Affiliates</Link></div>
                            <div className="jsx-1675809481 link"><Link href="//digital-lift.org" target="_blank" rel="noreferrer" className="jsx-1675809481">Digital Lift</Link></div>
                            <div className="jsx-1675809481 link"><Link href="//ir.monday.com" target="_blank" rel="noreferrer" className="jsx-1675809481">Investor relations</Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="category-container">
                        <div className="jsx-1727271368 footer-category-component">
                          <div className="jsx-1727271368 footer-category-image-and-title-warpper">
                            <h3 className="jsx-1727271368 title">Resources</h3>
                          </div>
                          <div className="jsx-1727271368 links">
                            <div className="jsx-1675809481 link"><Link href="/helpcenter/" target="_blank" rel="noreferrer" className="jsx-1675809481">Help Center</Link></div>
                            <div className="jsx-1675809481 link"><Link href="//community.monday.com" target="_blank" rel="noreferrer" className="jsx-1675809481">Community</Link></div>
                            <div className="jsx-1675809481 link"><Link href="//monday.com/blog" target="_blank" rel="noreferrer" className="jsx-1675809481">Blog</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/whats-new" target="_blank" rel="noreferrer" className="jsx-1675809481">What&apos;s new</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/webinars" target="_self" rel="noreferrer" className="jsx-1675809481">Webinars</Link></div>
                            <div className="jsx-1675809481 link"><Link href="https://www.startupforstartup.com/ww/" target="_blank" rel="noreferrer" className="jsx-1675809481">Startup for startup</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/p/events-hub/" target="_self" rel="noreferrer" className="jsx-1675809481">Global events</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/appdeveloper" target="_blank" rel="noreferrer" className="jsx-1675809481">App development</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/p/find-a-partner/" target="_self" rel="noreferrer" className="jsx-1675809481">Find a partner</Link></div>
                            <div className="jsx-1675809481 link"><Link href="/alternative" target="_self" rel="noreferrer" className="jsx-1675809481">Compare</Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="jsx-3477892871 footer-bottom-bar-component">
                  <div className="jsx-3477892871 footer-bottom-bar-both-sides-wrapper">
                    <div className="jsx-3477892871 footer-bottom-bar-left-side">
                      <div className="jsx-3477892871 language-picker-and-security-logos-wrapper">
                        <div className="jsx-3477892871 language-picker-wrapper">
                          <div tabIndex={0} aria-haspopup="true" aria-expanded="false" aria-label="choose language"  className="jsx-3454926987 language-picker-component">
                            <div className="jsx-3454926987 selected-language ignore-clickoutside">
                              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="earth-icon">
                                <path d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke="#323338" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.831 18.737C6.613 16.95 5.8 13.707 5.8 10c0-3.706.813-6.951 2.031-8.737M1 10h18M2.386 14.8h15.229M2.386 5.2h15.229M12.169 1.263C13.386 3.05 14.2 6.293 14.2 10c0 3.706-.813 6.951-2.031 8.737" stroke="#323338" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <LocaleSwitcher />
                              
                            </div>
                            
                          </div>
                        </div>
                        <div className="jsx-3477892871 security-logos-wrapper">
                          <div className="jsx-3089181165 security-logos-component">
                            <div className="jsx-3089181165 gdpr-logo-img-container">
                              <Link href="/terms/gdpr" target="_self">
                                <picture className="jsx-4212101279 picture-component"><img alt="gdpr" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png" /></picture>
                              </Link>
                            </div>
                            <div className="jsx-3089181165 iso-logo-img-container">
                              <Link href="/trustcenter/iso" target="_self">
                                <picture className="jsx-4212101279 picture-component"><img alt="iso" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png" /></picture>
                              </Link>
                            </div>
                            <div className="jsx-3089181165 soc-logo-img-container">
                              <Link href="/terms/soc2" target="_self">
                                <picture className="jsx-4212101279 picture-component"><img alt="soc" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png" /></picture>
                              </Link>
                            </div>
                            <div className="jsx-3089181165 hipaa-logo-img-container">
                              <Link href="https://support.monday.com/hc/en-us/articles/360006506699" target="_self">
                                <picture className="jsx-4212101279 picture-component"><img alt="hipaa" className="jsx-4212101279 " src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png" /></picture>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="jsx-3477892871 social-statement-and-links-wrapper">
                        <div className="jsx-3477892871 palette-icons-wrapper">
                          <div className="jsx-4139997252 palette-icons-container">
                            <div className="jsx-4139997252 icons-wrapper">
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.reddit.com/r/mondaydotcom" title="Reddit" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <path d="M9.593 12c-.602 0-1.093.491-1.093 1.093s.491 1.093 1.093 1.093 1.093-.491 1.093-1.093S10.195 12 9.593 12zM12.012 16.777c.418 0 1.843-.049 2.592-.798.11-.11.11-.282.024-.405a.289.289 0 0 0-.405 0c-.479.466-1.474.638-2.198.638-.725 0-1.732-.172-2.198-.638a.289.289 0 0 0-.406 0 .289.289 0 0 0 0 .405c.737.737 2.174.798 2.591.798zM13.314 13.093c0 .602.492 1.093 1.093 1.093.602 0 1.093-.491 1.093-1.093S15.01 12 14.407 12c-.601 0-1.093.491-1.093 1.093z" fill="#535768" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-5.035-1.535c.848 0 1.535.688 1.535 1.535a1.59 1.59 0 0 1-.884 1.412c.025.148.037.295.037.455 0 2.357-2.739 4.261-6.128 4.261-3.39 0-6.128-1.904-6.128-4.261 0-.16.012-.32.037-.467a1.536 1.536 0 0 1 .626-2.935c.405 0 .786.172 1.056.43 1.056-.774 2.518-1.253 4.15-1.302l.775-3.66a.299.299 0 0 1 .122-.172.306.306 0 0 1 .21-.036l2.541.54c.172-.369.54-.614.97-.614.602 0 1.093.491 1.093 1.093s-.49 1.093-1.093 1.093c-.589 0-1.068-.467-1.093-1.044l-2.271-.479-.7 3.279c1.596.061 3.045.553 4.089 1.302.27-.27.639-.43 1.056-.43z" fill="#535768" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.linkedin.com/company/2525169" title="LinkedIn" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.45 3.773C6.422 2.483 5.495 1.5 3.99 1.5c-1.506 0-2.49.983-2.49 2.273 0 1.263.955 2.274 2.432 2.274h.028c1.535 0 2.49-1.011 2.49-2.274zm-.29 4.07h-4.4V21h4.4V7.842zm10.803-.309c2.895 0 5.066 1.88 5.066 5.922V21h-4.4v-7.039c0-1.768-.637-2.975-2.23-2.975-1.215 0-1.94.814-2.258 1.6-.116.281-.145.673-.145 1.066V21h-4.4s.058-11.922 0-13.157h4.4v1.864c.585-.896 1.63-2.173 3.967-2.173z" fill="#535768" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.facebook.com/mondaydotcom" title="Facebook" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <path d="M12 1.5c5.8 0 10.5 4.729 10.5 10.564 0 5.274-3.84 9.644-8.86 10.436v-7.382h2.447l.466-3.054H13.64v-1.98c0-.836.406-1.651 1.71-1.651h1.325v-2.6s-1.202-.206-2.35-.206c-2.4 0-3.967 1.462-3.967 4.11v2.327H7.693v3.054h2.666V22.5C5.34 21.708 1.5 17.338 1.5 12.064 1.5 6.229 6.2 1.5 12 1.5z" fill="#535768" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.youtube.com/channel/UCA9UvBiKHly15rN8u_Km3BQ" title="Youtube" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <g clipPath="url(#clip0_1251_525)">
                                          <path d="M23.506 6.529a3.007 3.007 0 0 0-2.116-2.115C19.512 3.9 12 3.9 12 3.9s-7.512 0-9.39.494A3.069 3.069 0 0 0 .494 6.529C0 8.407 0 12.302 0 12.302s0 3.914.494 5.772A3.007 3.007 0 0 0 2.61 20.19c1.897.514 9.39.514 9.39.514s7.512 0 9.39-.494a3.007 3.007 0 0 0 2.116-2.115C24 16.216 24 12.32 24 12.32s.02-3.914-.494-5.792zm-13.898 9.37V8.704l6.247 3.599L9.608 15.9z" fill="#535768" />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1251_525">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://twitter.com/mondaydotcom" title="twitter" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <path d="M12.191 7.817l.048.783-.796-.096C8.548 8.137 6.018 6.89 3.87 4.796L2.82 3.757l-.27.767c-.573 1.71-.207 3.517.986 4.731.637.672.494.768-.604.368-.382-.128-.716-.224-.748-.176-.111.112.27 1.567.573 2.142.413.8 1.257 1.582 2.18 2.046l.779.367-.923.016c-.89 0-.923.016-.827.352.318 1.04 1.575 2.142 2.975 2.621l.986.336-.859.512a8.99 8.99 0 0 1-4.263 1.182c-.716.016-1.305.08-1.305.128 0 .16 1.94 1.055 3.07 1.407 3.39 1.039 7.414.591 10.437-1.183 2.148-1.263 4.295-3.772 5.298-6.202.54-1.294 1.082-3.66 1.082-4.795 0-.735.047-.83.938-1.71.525-.511 1.018-1.07 1.114-1.23.159-.304.143-.304-.668-.033-1.353.48-1.544.416-.875-.303.493-.512 1.081-1.439 1.081-1.71 0-.049-.238.031-.509.175-.286.16-.922.4-1.4.544l-.859.271-.78-.527c-.429-.288-1.034-.607-1.352-.703-.811-.224-2.052-.192-2.784.064-1.988.719-3.245 2.573-3.102 4.603z" fill="#535768" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.instagram.com/mondaydotcom" title="Instagram" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <g clipPath="url(#clip0_1251_527)">
                                          <g clipPath="url(#clip1_1251_527)" fill="#535768">
                                            <path d="M11.75 2.028c3.006 0 3.358.013 4.546.067 1.1.049 1.693.232 2.09.388.528.206.903.447 1.296.84.393.393.638.768.84 1.295.151.397.339.991.388 2.09.053 1.188.067 1.54.067 4.546 0 3.006-.014 3.359-.067 4.547-.05 1.099-.232 1.693-.389 2.09a3.491 3.491 0 0 1-.84 1.295 3.437 3.437 0 0 1-1.294.84c-.398.152-.992.34-2.09.388-1.189.054-1.541.067-4.547.067s-3.358-.013-4.546-.067c-1.1-.049-1.693-.232-2.09-.388a3.491 3.491 0 0 1-1.296-.84 3.437 3.437 0 0 1-.84-1.295c-.151-.397-.339-.991-.388-2.09-.053-1.188-.067-1.54-.067-4.546 0-3.006.014-3.359.067-4.547.05-1.099.232-1.693.389-2.09.205-.527.446-.902.84-1.295a3.437 3.437 0 0 1 1.294-.84c.398-.152.992-.34 2.09-.388 1.189-.058 1.546-.067 4.547-.067zm0-2.028C8.695 0 8.311.013 7.11.067 5.913.121 5.096.313 4.38.59a5.484 5.484 0 0 0-1.992 1.3 5.58 5.58 0 0 0-1.3 1.991C.814 4.596.622 5.413.568 6.614.513 7.811.5 8.195.5 11.25s.013 3.439.067 4.64c.054 1.197.246 2.014.523 2.733a5.484 5.484 0 0 0 1.3 1.992 5.579 5.579 0 0 0 1.991 1.3c.715.277 1.532.469 2.733.523 1.202.053 1.581.067 4.64.067 3.06 0 3.44-.014 4.64-.067 1.198-.054 2.015-.246 2.734-.523a5.483 5.483 0 0 0 1.992-1.3 5.58 5.58 0 0 0 1.3-1.991c.276-.715.468-1.532.522-2.734.053-1.201.067-1.58.067-4.64 0-3.06-.014-3.439-.067-4.64-.054-1.197-.246-2.014-.523-2.733a5.484 5.484 0 0 0-1.3-1.992 5.581 5.581 0 0 0-1.991-1.3c-.715-.277-1.532-.469-2.733-.522C15.189.013 14.805 0 11.75 0z" />
                                            <path d="M11.75 5.475a5.78 5.78 0 1 0 .002 11.56 5.78 5.78 0 0 0-.002-11.56zm0 9.526a3.751 3.751 0 1 1 0-7.502 3.751 3.751 0 0 1 0 7.502zM17.757 6.592a1.349 1.349 0 1 0 0-2.697 1.349 1.349 0 0 0 0 2.697z" />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="jsx-4139997252 single-social-icon-wrapper">
                                <div className="jsx-3692625068 social-media-icon">
                                  <Link target="_blank" href="https://www.tiktok.com/@mondaydotcom" title="TikTok" className="jsx-3692625068">
                                    <div className="jsx-3692625068 regular-icon-container">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                        <path d="M21.211 6.393c-1.3-.04-2.48-.663-3.369-1.496a4.867 4.867 0 0 1-1.51-3.595H12.71v13.953c0 2.279-1.366 3.622-3.044 3.622a3.046 3.046 0 1 1 .984-5.917V9.276a4.466 4.466 0 0 0-.984-.104 6.665 6.665 0 1 0 6.662 6.664v-7.51c1.404.971 3.081 1.43 4.871 1.462l.012-3.395z" fill="#535768" />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jsx-3477892871 statement-and-links-wrapper">
                          <div className="jsx-3477892871 links-container">
                            <div className="jsx-3477892871 short-footer-link-component-wrapper"><Link href="/trustcenter" className="jsx-1981315406 footer-bottom-bar-link-component">Security</Link></div>
                            <div className="jsx-3477892871 short-footer-link-component-wrapper"><Link href="/l/" className="jsx-1981315406 footer-bottom-bar-link-component">Terms and privacy</Link></div>
                            <div className="jsx-3477892871 short-footer-link-component-wrapper"><Link href="/terms/privacy" className="jsx-1981315406 footer-bottom-bar-link-component">Privacy policy</Link></div>
                            <div className="jsx-3477892871 short-footer-link-component-wrapper"><Link href="https://status.monday.com" className="jsx-1981315406 footer-bottom-bar-link-component">Status</Link></div>
                          </div>
                          <div className="jsx-164348419 all-rights-reserved-component">
                            <div className="jsx-164348419 details">
                              All Rights Reserved{/* */} © monday.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jsx-3477892871 footer-bottom-bar-right-side">
                      <div className="jsx-3477892871 app-store-icons">
                        <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.monday.monday" title="Download the monday android App from Google Play" className="jsx-3477892871 app-icon">
                          <svg width={135} height={40} viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.7-2.2 5-5 5z" fill="#000" />
                            <path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125zm0-.8H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z" fill="#A6A6A6" />
                            <path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9v.3zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13h.1zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z" fill="#fff" stroke="#fff" strokeWidth=".2" strokeMiterlimit={10} />
                            <path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#fff" />
                            <path d="M10.4 7.5c-.3.3-.5.8-.5 1.4V31c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L10.4 7.5z" fill="url(#paint0_linear)" />
                            <path d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#paint1_linear)" />
                            <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4z" fill="url(#paint2_linear)" />
                            <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#paint3_linear)" />
                            <path opacity=".2" d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z" fill="#000" />
                            <path opacity=".12" d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z" fill="#000" />
                            <path opacity=".25" d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5C11.1 6.7 10 7.4 10 9v.1c0-1.6 1.1-2.3 2.5-1.5z" fill="#fff" />
                            <defs>
                              <linearGradient id="paint0_linear" x1="21.8" y1="8.71" x2="5.017" y2="25.492" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00A0FF" />
                                <stop offset=".007" stopColor="#00A1FF" />
                                <stop offset=".26" stopColor="#00BEFF" />
                                <stop offset=".512" stopColor="#00D2FF" />
                                <stop offset=".76" stopColor="#00DFFF" />
                                <stop offset={1} stopColor="#00E3FF" />
                              </linearGradient>
                              <linearGradient id="paint1_linear" x1="33.834" y1="20.001" x2="9.637" y2="20.001" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFE000" />
                                <stop offset=".409" stopColor="#FFBD00" />
                                <stop offset=".775" stopColor="#FFA500" />
                                <stop offset={1} stopColor="#FF9C00" />
                              </linearGradient>
                              <linearGradient id="paint2_linear" x1="24.827" y1="22.296" x2="2.069" y2="45.054" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF3A44" />
                                <stop offset={1} stopColor="#C31162" />
                              </linearGradient>
                              <linearGradient id="paint3_linear" x1="7.297" y1=".176" x2="17.46" y2="10.339" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#32A071" />
                                <stop offset=".069" stopColor="#2DA771" />
                                <stop offset=".476" stopColor="#15CF74" />
                                <stop offset=".801" stopColor="#06E775" />
                                <stop offset={1} stopColor="#00F076" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Link>
                        <Link target="_blank" href="https://itunes.apple.com/app/id1290128888" title="Download the monday iOS App from the App Store" className="jsx-3477892871 app-icon">
                          <svg width={120} height={40} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.19a6.665 6.665 0 0 0-1.9.627A6.438 6.438 0 0 0 .193 5.521a12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921.008.671.068 1.34.18 2.002.11.663.32 1.306.624 1.905.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179.599.304 1.24.517 1.901.63.663.11 1.333.168 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01.67-.01 1.338-.068 2-.178a6.808 6.808 0 0 0 1.908-.63A6.296 6.296 0 0 0 117.666 38a6.405 6.405 0 0 0 1.182-1.614c.302-.6.51-1.242.619-1.905.111-.661.173-1.33.185-2.002.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 0 0-.185-2.003 6.648 6.648 0 0 0-.619-1.903 6.469 6.469 0 0 0-2.799-2.8 6.77 6.77 0 0 0-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z" fill="#A6A6A6" />
                            <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.321 5.321 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.756 5.756 0 0 1 .544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 0 1 5.667 1.05C6.287.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 0 1 1.858.162 5.933 5.933 0 0 1 1.671.548 5.589 5.589 0 0 1 2.415 2.42 5.74 5.74 0 0 1 .535 1.649c.104.624.162 1.255.174 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.716 5.716 0 0 1-.54 1.67 5.47 5.47 0 0 1-1.015 1.386 5.414 5.414 0 0 1-1.4 1.022 5.855 5.855 0 0 1-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002z" fill="#000" />
                            <path d="M24.769 20.3a4.947 4.947 0 0 1 2.356-4.151 5.065 5.065 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.963 10.963 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.873 4.873 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.637 4.637 0 0 0-1.143 3.361 4.1 4.1 0 0 0 3.236-1.53zM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106zM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214-.001.428.022.637.069v1.738a2.591 2.591 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.291 2.291 0 0 0-2.306 2.298zM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.882 1.882 0 0 0-1.967-2.134h-1.125v4.28zM41.68 12.444a2.132 2.132 0 1 1 4.248 0 2.135 2.135 0 1 1-4.247 0zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM59.094 8.437h.888v6.26h-.888v-6.26zM61.218 12.444a2.134 2.134 0 1 1 4.247 0 2.133 2.133 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.06 1.06 0 0 0 1.166-.983zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.132 2.132 0 1 1 4.247 0 2.135 2.135 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89zM95.705 8.437h.88v2.482h.07a1.385 1.385 0 0 1 1.374-.807 1.482 1.482 0 0 1 1.55 1.678v2.908h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.05 1.05 0 0 0-1.134 1.142v2.63h-.888V8.437zM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.199 1.29 1.08 1.08 0 0 0 1.072-.546h.855zm-3.126-1.451h2.275a1.09 1.09 0 0 0-1.109-1.167 1.15 1.15 0 0 0-1.166 1.167z" fill="#fff" />
                          </svg>
                        </Link>
                      </div>
                      <div className="jsx-3477892871 accessibility-statement-link-wrapper">
                        <div className="jsx-956190298 accessibilty-statement-link-component">
                          <div className="jsx-956190298 accessibility-icon-wrapper">
                            <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="accessibility-icon">
                              <path d="M6 8l4.035.913v3.155L8.142 17M15.216 8l-4.035.913v3.155L13.074 17" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="10.5" cy="10.5" r="9.5" stroke="#000" strokeLinecap="round" />
                              <circle cx="10.5" cy="5.5" r="1.5" stroke="#000" />
                            </svg>
                          </div>
                          <div className="jsx-956190298 accessibility-link-wrapper"><Link href="/accessibility-statement" className="jsx-956190298 accessibility-link">Accessibility statement</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="jsx-463568449 footer-mobile-wrapper">
              <footer className="jsx-3368285728 short-footer-component">
                <div className="jsx-3368285728 short-footer-header">
                  <div className="jsx-3368285728 short-footer-links">
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/p/about/" className="jsx-761555726 short-footer-link-component">About us</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/partnership" className="jsx-761555726 short-footer-link-component">Become a partner</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/careers" className="jsx-761555726 short-footer-link-component">Careers</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="//monday.com/blog" className="jsx-761555726 short-footer-link-component">Blog</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/nonprofits/pricing" className="jsx-761555726 short-footer-link-component">Pricing</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/sales/contact-us?from=footer" className="jsx-761555726 short-footer-link-component">Contact sales</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/l/" className="jsx-761555726 short-footer-link-component">Terms and privacy</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/product" className="jsx-761555726 short-footer-link-component">Product overview</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="//ir.monday.com" className="jsx-761555726 short-footer-link-component">Investor relations</Link></div>
                    <div className="short-footer-link-component-wrapper link-wrapper"><Link href="/help" className="jsx-761555726 short-footer-link-component">Contact us</Link></div>
                    <div className="jsx-3368285728 accessibility-statement-link-wrapper link-wrapper">
                      <div className="jsx-956190298 accessibilty-statement-link-component">
                        <div className="jsx-956190298 accessibility-icon-wrapper">
                          <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="accessibility-icon">
                            <path d="M6 8l4.035.913v3.155L8.142 17M15.216 8l-4.035.913v3.155L13.074 17" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10.5" cy="10.5" r="9.5" stroke="#000" strokeLinecap="round" />
                            <circle cx="10.5" cy="5.5" r="1.5" stroke="#000" />
                          </svg>
                        </div>
                        <div className="jsx-956190298 accessibility-link-wrapper"><Link href="/accessibility-statement" className="jsx-956190298 accessibility-link">Accessibility statement</Link></div>
                      </div>
                    </div>
                    <div className="jsx-3368285728 language-picker-wrapper-component link-wrapper">
                      <div tabIndex={0} aria-haspopup="true" aria-expanded="false" aria-label="choose language"  className="jsx-3454926987 language-picker-component">
                        <div className="jsx-3454926987 selected-language ignore-clickoutside">
                          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="earth-icon">
                            <path d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke="#323338" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.831 18.737C6.613 16.95 5.8 13.707 5.8 10c0-3.706.813-6.951 2.031-8.737M1 10h18M2.386 14.8h15.229M2.386 5.2h15.229M12.169 1.263C13.386 3.05 14.2 6.293 14.2 10c0 3.706-.813 6.951-2.031 8.737" stroke="#323338" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <LocaleSwitcher />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jsx-3368285728 monday-logo-wrapper">
                  <Link href="/" target="_self">
                    <picture className="jsx-4212101279 picture-component"><img alt="monday logo" className="jsx-4212101279 footer-monday-logo-image" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" /></picture>
                  </Link>
                </div>
                <div className="jsx-3368285728 contact-info-wrapper">
                  <div className="jsx-3368285728 all-right-reserved-info">
                    All Rights Reserved{/* */} © monday.com
                  </div>
                </div>
                <div className="jsx-3368285728 social-proof-wrapper">
                  <div className="jsx-4139997252 palette-icons-container">
                    <div className="jsx-4139997252 icons-wrapper">
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.reddit.com/r/mondaydotcom" title="Reddit" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <path d="M9.593 12c-.602 0-1.093.491-1.093 1.093s.491 1.093 1.093 1.093 1.093-.491 1.093-1.093S10.195 12 9.593 12zM12.012 16.777c.418 0 1.843-.049 2.592-.798.11-.11.11-.282.024-.405a.289.289 0 0 0-.405 0c-.479.466-1.474.638-2.198.638-.725 0-1.732-.172-2.198-.638a.289.289 0 0 0-.406 0 .289.289 0 0 0 0 .405c.737.737 2.174.798 2.591.798zM13.314 13.093c0 .602.492 1.093 1.093 1.093.602 0 1.093-.491 1.093-1.093S15.01 12 14.407 12c-.601 0-1.093.491-1.093 1.093z" fill="#535768" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-5.035-1.535c.848 0 1.535.688 1.535 1.535a1.59 1.59 0 0 1-.884 1.412c.025.148.037.295.037.455 0 2.357-2.739 4.261-6.128 4.261-3.39 0-6.128-1.904-6.128-4.261 0-.16.012-.32.037-.467a1.536 1.536 0 0 1 .626-2.935c.405 0 .786.172 1.056.43 1.056-.774 2.518-1.253 4.15-1.302l.775-3.66a.299.299 0 0 1 .122-.172.306.306 0 0 1 .21-.036l2.541.54c.172-.369.54-.614.97-.614.602 0 1.093.491 1.093 1.093s-.49 1.093-1.093 1.093c-.589 0-1.068-.467-1.093-1.044l-2.271-.479-.7 3.279c1.596.061 3.045.553 4.089 1.302.27-.27.639-.43 1.056-.43z" fill="#535768" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.linkedin.com/company/2525169" title="LinkedIn" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.45 3.773C6.422 2.483 5.495 1.5 3.99 1.5c-1.506 0-2.49.983-2.49 2.273 0 1.263.955 2.274 2.432 2.274h.028c1.535 0 2.49-1.011 2.49-2.274zm-.29 4.07h-4.4V21h4.4V7.842zm10.803-.309c2.895 0 5.066 1.88 5.066 5.922V21h-4.4v-7.039c0-1.768-.637-2.975-2.23-2.975-1.215 0-1.94.814-2.258 1.6-.116.281-.145.673-.145 1.066V21h-4.4s.058-11.922 0-13.157h4.4v1.864c.585-.896 1.63-2.173 3.967-2.173z" fill="#535768" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.facebook.com/mondaydotcom" title="Facebook" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <path d="M12 1.5c5.8 0 10.5 4.729 10.5 10.564 0 5.274-3.84 9.644-8.86 10.436v-7.382h2.447l.466-3.054H13.64v-1.98c0-.836.406-1.651 1.71-1.651h1.325v-2.6s-1.202-.206-2.35-.206c-2.4 0-3.967 1.462-3.967 4.11v2.327H7.693v3.054h2.666V22.5C5.34 21.708 1.5 17.338 1.5 12.064 1.5 6.229 6.2 1.5 12 1.5z" fill="#535768" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.youtube.com/channel/UCA9UvBiKHly15rN8u_Km3BQ" title="Youtube" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <g clipPath="url(#clip0_1251_525)">
                                  <path d="M23.506 6.529a3.007 3.007 0 0 0-2.116-2.115C19.512 3.9 12 3.9 12 3.9s-7.512 0-9.39.494A3.069 3.069 0 0 0 .494 6.529C0 8.407 0 12.302 0 12.302s0 3.914.494 5.772A3.007 3.007 0 0 0 2.61 20.19c1.897.514 9.39.514 9.39.514s7.512 0 9.39-.494a3.007 3.007 0 0 0 2.116-2.115C24 16.216 24 12.32 24 12.32s.02-3.914-.494-5.792zm-13.898 9.37V8.704l6.247 3.599L9.608 15.9z" fill="#535768" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1251_525">
                                    <path fill="#fff" d="M0 0h24v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://twitter.com/mondaydotcom" title="twitter" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <path d="M12.191 7.817l.048.783-.796-.096C8.548 8.137 6.018 6.89 3.87 4.796L2.82 3.757l-.27.767c-.573 1.71-.207 3.517.986 4.731.637.672.494.768-.604.368-.382-.128-.716-.224-.748-.176-.111.112.27 1.567.573 2.142.413.8 1.257 1.582 2.18 2.046l.779.367-.923.016c-.89 0-.923.016-.827.352.318 1.04 1.575 2.142 2.975 2.621l.986.336-.859.512a8.99 8.99 0 0 1-4.263 1.182c-.716.016-1.305.08-1.305.128 0 .16 1.94 1.055 3.07 1.407 3.39 1.039 7.414.591 10.437-1.183 2.148-1.263 4.295-3.772 5.298-6.202.54-1.294 1.082-3.66 1.082-4.795 0-.735.047-.83.938-1.71.525-.511 1.018-1.07 1.114-1.23.159-.304.143-.304-.668-.033-1.353.48-1.544.416-.875-.303.493-.512 1.081-1.439 1.081-1.71 0-.049-.238.031-.509.175-.286.16-.922.4-1.4.544l-.859.271-.78-.527c-.429-.288-1.034-.607-1.352-.703-.811-.224-2.052-.192-2.784.064-1.988.719-3.245 2.573-3.102 4.603z" fill="#535768" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.instagram.com/mondaydotcom" title="Instagram" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <g clipPath="url(#clip0_1251_527)">
                                  <g clipPath="url(#clip1_1251_527)" fill="#535768">
                                    <path d="M11.75 2.028c3.006 0 3.358.013 4.546.067 1.1.049 1.693.232 2.09.388.528.206.903.447 1.296.84.393.393.638.768.84 1.295.151.397.339.991.388 2.09.053 1.188.067 1.54.067 4.546 0 3.006-.014 3.359-.067 4.547-.05 1.099-.232 1.693-.389 2.09a3.491 3.491 0 0 1-.84 1.295 3.437 3.437 0 0 1-1.294.84c-.398.152-.992.34-2.09.388-1.189.054-1.541.067-4.547.067s-3.358-.013-4.546-.067c-1.1-.049-1.693-.232-2.09-.388a3.491 3.491 0 0 1-1.296-.84 3.437 3.437 0 0 1-.84-1.295c-.151-.397-.339-.991-.388-2.09-.053-1.188-.067-1.54-.067-4.546 0-3.006.014-3.359.067-4.547.05-1.099.232-1.693.389-2.09.205-.527.446-.902.84-1.295a3.437 3.437 0 0 1 1.294-.84c.398-.152.992-.34 2.09-.388 1.189-.058 1.546-.067 4.547-.067zm0-2.028C8.695 0 8.311.013 7.11.067 5.913.121 5.096.313 4.38.59a5.484 5.484 0 0 0-1.992 1.3 5.58 5.58 0 0 0-1.3 1.991C.814 4.596.622 5.413.568 6.614.513 7.811.5 8.195.5 11.25s.013 3.439.067 4.64c.054 1.197.246 2.014.523 2.733a5.484 5.484 0 0 0 1.3 1.992 5.579 5.579 0 0 0 1.991 1.3c.715.277 1.532.469 2.733.523 1.202.053 1.581.067 4.64.067 3.06 0 3.44-.014 4.64-.067 1.198-.054 2.015-.246 2.734-.523a5.483 5.483 0 0 0 1.992-1.3 5.58 5.58 0 0 0 1.3-1.991c.276-.715.468-1.532.522-2.734.053-1.201.067-1.58.067-4.64 0-3.06-.014-3.439-.067-4.64-.054-1.197-.246-2.014-.523-2.733a5.484 5.484 0 0 0-1.3-1.992 5.581 5.581 0 0 0-1.991-1.3c-.715-.277-1.532-.469-2.733-.522C15.189.013 14.805 0 11.75 0z" />
                                    <path d="M11.75 5.475a5.78 5.78 0 1 0 .002 11.56 5.78 5.78 0 0 0-.002-11.56zm0 9.526a3.751 3.751 0 1 1 0-7.502 3.751 3.751 0 0 1 0 7.502zM17.757 6.592a1.349 1.349 0 1 0 0-2.697 1.349 1.349 0 0 0 0 2.697z" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="jsx-4139997252 single-social-icon-wrapper">
                        <div className="jsx-3692625068 social-media-icon">
                          <Link target="_blank" href="https://www.tiktok.com/@mondaydotcom" title="TikTok" className="jsx-3692625068">
                            <div className="jsx-3692625068 regular-icon-container">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3692625068">
                                <path d="M21.211 6.393c-1.3-.04-2.48-.663-3.369-1.496a4.867 4.867 0 0 1-1.51-3.595H12.71v13.953c0 2.279-1.366 3.622-3.044 3.622a3.046 3.046 0 1 1 .984-5.917V9.276a4.466 4.466 0 0 0-.984-.104 6.665 6.665 0 1 0 6.662 6.664v-7.51c1.404.971 3.081 1.43 4.871 1.462l.012-3.395z" fill="#535768" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div />
      </div>



    );
}
