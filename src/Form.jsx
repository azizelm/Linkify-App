import { useState } from "react";
import './styleform.css'
export default function FormInsert() {
    // Declare state variables for each field
    const [linkP, setLinkP] = useState("");
    const [titre, setTitre] = useState("");
    const [soustitre, setSoustitre] = useState("");
    const [desc, setDesc] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [porstontage, setPorstontage] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the updated HTML string
        const updatedHtml = `
        <!DOCTYPE html>
<html><head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}@media screen and (max-width:600px){table{width:100%!important}td.rowToColumn{display:block!important;width:100%!important}*{max-width:100%!important}.footer-img{width:80%!important;max-width:400px!important}.header-logo{width:50%!important;max-width:140px!important}.footer-title{font-size:16px!important}.center-on-mobile{margin:0 auto!important}.cta{width:200px!important;margin:5px auto!important}.promo-text-link{margin:8px auto!important;padding:10px 20px!important}.promo-text,.promo-text-link{font-size:20px!important}h1 em{font-size:20px!important}}
    </style>
    <title>Vivez la magie des soirées hivernales : découvrez notre cocon ultra confortable</title>
  <meta name="image" content="https://img.thesitebase.net/files/10609476/2024/10/01/1727782862457a22d50d.png?width=640&amp;height=0&amp;min_height=77" property="og:image"></head>
  <body class style>
    
    <center></center>
    <table class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fbfbfb" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td>
            <table class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:center;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                    <table role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;width:100%" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="width:100%;padding-right:0;padding-left:0;text-align:center">
                            <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476921898430"><img class="header-logo" src="https://img.thesitebase.net/files/10609476/2024/10/01/1727782862457a22d50d.png?width=640&amp;height=0&amp;min_height=77" style="display:block;margin-left:auto;margin-right:auto;height:auto;border:0;width:250px" width="130"></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07245c;border-radius:0 10px 10px 0;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr>
                          <td class="column column-1 rowToColumn" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
                            <table class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="width:100%" align="center">
                                    <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476927141311"><img src="${img1}" style="display:block;margin-left:auto;margin-right:auto;height:auto;border:0;width:100%" width="325"></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td class="column column-2 rowToColumn" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:10px;padding-right:10px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
                            <table class="spacer_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="text_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="padding-right:10px;padding-left:10px" align="center">
                                    <div style="font-family:Tahoma,Verdana,sans-serif">
                                      <div class style="font-size:14px;font-family:Roboto,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:16.8px;color:#555;line-height:1.2">
                                        <p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                          <span style="font-size:24px;color:#fff"><strong>${titre}</strong></span>
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="button_block block-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="text-align:center" align="center">
                                    <a href="${linkP}" target="_blank" style="text-decoration:none;display:inline-block;color:#dc2d2d;background-color:#fff;border-radius:15px;width:auto;border-top:0 solid transparent;font-weight:900;border-right:0 solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;padding-top:0;padding-bottom:0;font-size:80px;text-align:center;mso-border-alt:none;word-break:keep-all" data-link-id="142070476932384192">
                                    <span style="padding-left:15px;padding-right:15px;font-size:80px;display:inline-block;letter-spacing:normal">
                                    <span style="word-break:break-word;line-height:96px">-${porstontage}%</span></span></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="text_block block-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="padding-right:10px;padding-left:10px" align="center">
                                    <div style="font-family:Tahoma,Verdana,sans-serif">
                                      <div class style="font-size:12px;font-family:Roboto,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2">
                                        <p style="margin:0;font-size:12px;text-align:center;mso-line-height-alt:14.399999999999999px">
                                          <span style="font-size:20px;color:#4ed557"><strong>🇫🇷
                                          <span style="color:#fff">Livraison GRATUITE
                                          🇫🇷</span></strong></span>
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-7" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="image_block block-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0;padding-left:0" align="center">
                                    <center>
                                      <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476937627073">
                                      <div style="background-color:#e41b1b;border-bottom:0 solid transparent;border-left:0 solid transparent;border-radius:10px;border-right:0 solid transparent;border-top:0 solid transparent;color:#fff;display:inline-block;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:30px;font-weight:700;mso-border-alt:none;padding-bottom:5px;padding-top:5px;text-align:center;text-decoration:none;width:auto;word-break:keep-all">
                                        <span style="word-break:break-word;padding-left:40px;padding-right:40px;font-size:30px;display:inline-block;letter-spacing:normal">
                                        <span style="word-break:break-word;line-height:45px">J'ACH<strong>ÈTE</strong></span></span>
                                      </div></a>
                                    </center>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-9" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fbfbfb;border-radius:0;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px">
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#07245c;border-radius:10px 0 0 10px;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr class="reverse">
                          <td class="column column-1 first rowToColumn" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:7px;padding-right:7px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
                            <table class="spacer_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="text_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" align="center">
                                    <div style="font-family:Tahoma,Verdana,sans-serif">
                                      <div class style="font-size:14px;font-family:Roboto,Tahoma,Verdana,Segoe,sans-serif;mso-line-height-alt:16.8px;color:#fccd00;line-height:1.2">
                                        <p style="margin:0;text-align:center;font-size:24px;mso-line-height-alt:28.799999999999997px;letter-spacing:normal">
                                          <span style="font-size:22px;color:#fff"><em><strong>${soustitre}</strong></em></span>
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="divider_block block-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" align="center">
                                    <table role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="80%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="divider_inner" style="font-size:1px;line-height:1px;border-top:4px solid #e41b1b">
                                            <span> </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="text_block block-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" align="center">
                                    <div style="font-family:sans-serif">
                                      <div class style="font-size:14px;font-family:Roboto,sans-serif;mso-line-height-alt:21px;color:#fff;line-height:1.5">
                                        <p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:25.5px">
                                          <span style="font-size:17px">${desc}</span>
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="image_block block-7" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0;padding-left:0" align="center">
                                    <center>
                                      <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476941821378">
                                      <div style="background-color:#e41b1b;border-bottom:0 solid transparent;border-left:0 solid transparent;border-radius:10px;border-right:0 solid transparent;border-top:0 solid transparent;color:#fff;display:inline-block;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:30px;font-weight:700;mso-border-alt:none;padding-bottom:5px;padding-top:5px;text-align:center;text-decoration:none;width:auto;word-break:keep-all">
                                        <span style="word-break:break-word;padding-left:40px;padding-right:40px;font-size:30px;display:inline-block;letter-spacing:normal">
                                        <span style="word-break:break-word;line-height:45px">J'ACH<strong>ÈTE</strong></span></span>
                                      </div></a>
                                    </center>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="spacer_block block-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;height:10px;line-height:10px;font-size:1px" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="height:10px;line-height:10px;font-size:1px">
                                     
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td class="column column-2 last rowToColumn" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="50%">
                            <table class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="width:100%" align="center">
                                    <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476947064259"><img src="${img2}" style="display:block;margin-left:auto;margin-right:auto;height:auto;border:0;width:100%" width="325"></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fbfbfb;border-radius:0;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px">
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-7" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#e41b1b;border-radius:10px 10px 0 0;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
                            <table class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="text-align:center;width:100%">
                                    <h1 style="margin:0;color:#fff;direction:ltr;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:23px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:27.599999999999998px">
                                      🇫🇷 <em class="footer-title">Faites votre SHOPPING avec des deals au QUOTIDIEN 🇫🇷</em>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fbfbfb;border-radius:0;color:#000;width:650px;margin:0 auto" width="650" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
                            <table class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0;padding-left:0" align="center">
                                    <a href="${linkP}" target="_blank" style="outline:0" tabindex="-1" data-link-id="142070476951258564"><img class="footer-img" src="https://assets.leadfox.co/624c1bae53ee04000975bf1f/footerFD2024-sav-liv-cb.png" style="display:block;margin-left:auto;margin-right:auto;height:auto;border:0;width:70%" width="455"></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
        `;

        // Create a Blob from the HTML string
        const blob = new Blob([updatedHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "updatedProduct.html";
        a.click();

        // Revoke the Object URL after the download to free memory
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <h1>Form des Produit</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="1">Link de Produits :</label>
                <input
                    type="text"
                    id="1"
                    value={linkP}
                    placeholder="https://www.example.com"
                    onChange={(e) => setLinkP(e.target.value)}
                />

                <label htmlFor="2">Titre de Produits :</label>
                <input
                    type="text"
                    id="2"
                    value={titre}
                    placeholder="Titre"
                    onChange={(e) => setTitre(e.target.value)}
                />

                <label htmlFor="3">Sous-titre :</label>
                <input
                    type="text"
                    id="3"
                    value={soustitre}
                    placeholder="Sous-titre"
                    onChange={(e) => setSoustitre(e.target.value)}
                />

                <label htmlFor="4">Description :</label>
                <input
                    type="text"
                    id="4"
                    value={desc}
                    placeholder="À propos du produit"
                    onChange={(e) => setDesc(e.target.value)}
                />

                <label htmlFor="5">Link de Image :</label>
                <input
                    type="text"
                    id="5"
                    value={img1}
                    placeholder="https://www.example.com"
                    onChange={(e) => setImg1(e.target.value)}
                />

                <label htmlFor="6">Link de GIF/Image :</label>
                <input
                    type="text"
                    id="6"
                    value={img2}
                    placeholder="https://www.example.com"
                    onChange={(e) => setImg2(e.target.value)}
                />

                <label htmlFor="7">Pourcentage :</label>
                <input
                    type="text"
                    id="7"
                    value={porstontage}
                    placeholder="Pourcentage"
                    onChange={(e) => setPorstontage(e.target.value)}
                />
                <button type="submit">Generate HTML and Download</button>
            </form>
        </div>
    );
}
