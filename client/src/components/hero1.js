'use client';

const logos = [
    {
        id: 'resiliaid',
        className: 'logoResili',
        style: {
            '--slot-desktop': '152px',
            '--slot-tablet': '134px',
            '--slot-mobile': '88px',
            '--art-desktop-width': '126px',
            '--art-desktop-height': '36px',
            '--art-tablet-width': '112px',
            '--art-tablet-height': '32px',
            '--art-mobile-width': '76px',
            '--art-mobile-height': '24px',
            '--art-offset-desktop': '1px',
            '--art-offset-tablet': '1px',
            '--art-offset-mobile': '0px',
        },
        graphic: (
        <svg viewBox="0 0 240 70" role="img" aria-label="ResiliAid.org logo">
            <g fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M35 8 L52 16 L52 35 C52 47 43 57 35 61 C27 57 18 47 18 35 L18 16 Z"/>
                <circle cx="35" cy="32" r="11"/>
                <path d="M29 33 l5 5 8-10"/>
            </g>
            <text x="68" y="35" fill="currentColor" fontSize="31" fontWeight="600" fontFamily="inherit">Resilii</text>
            <text x="68" y="61" fill="currentColor" fontSize="31" fontWeight="600" fontFamily="inherit">Aid.org</text>
        </svg>
    )},
    {
        id: 'globe',
        className: 'logoGlobe',
        style: {
            '--slot-desktop': '74px',
            '--slot-tablet': '64px',
            '--slot-mobile': '52px',
            '--art-desktop-width': '52px',
            '--art-desktop-height': '52px',
            '--art-tablet-width': '46px',
            '--art-tablet-height': '46px',
            '--art-mobile-width': '34px',
            '--art-mobile-height': '34px',
            '--art-offset-desktop': '-1px',
            '--art-offset-tablet': '-1px',
            '--art-offset-mobile': '-1px',
        },
        graphic: (
        <svg viewBox="0 0 72 72" role="img" aria-label="Globe and handshake logo">
            <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="36" cy="30" r="20"/>
                <path d="M16 30h40M36 10c8 6 11 13 11 20S44 44 36 50M36 10c-8 6-11 13-11 20s3 14 11 20"/>
                <path d="M23 52c4 3 7 5 13 5s9-2 13-5"/>
                <path d="M36 50v14"/>
                <path d="M29 64h14"/>
            </g>
        </svg>
    )},
    {
        id: 'claate',
        className: 'logoClaate',
        style: {
            '--slot-desktop': '150px',
            '--slot-tablet': '132px',
            '--slot-mobile': '86px',
            '--art-desktop-width': '136px',
            '--art-desktop-height': '32px',
            '--art-tablet-width': '120px',
            '--art-tablet-height': '28px',
            '--art-mobile-width': '72px',
            '--art-mobile-height': '23px',
            '--art-offset-desktop': '0px',
            '--art-offset-tablet': '0px',
            '--art-offset-mobile': '0px',
        },
        graphic: (
        <svg viewBox="0 0 210 54" role="img" aria-label="Claate logo">
            <g fill="none" stroke="currentColor" strokeWidth="2.8">
                <rect x="8" y="17" width="20" height="20" rx="2" transform="rotate(45 18 27)"/>
            </g>
            <text x="42" y="36" fill="currentColor" fontSize="42" fontWeight="600" fontFamily="inherit">Claate</text>
        </svg>
    )},
    {
        id: 'rmono',
        className: 'logoR',
        style: {
            '--slot-desktop': '72px',
            '--slot-tablet': '62px',
            '--slot-mobile': '48px',
            '--art-desktop-width': '54px',
            '--art-desktop-height': '54px',
            '--art-tablet-width': '46px',
            '--art-tablet-height': '46px',
            '--art-mobile-width': '34px',
            '--art-mobile-height': '34px',
            '--art-offset-desktop': '-1px',
            '--art-offset-tablet': '-1px',
            '--art-offset-mobile': '-1px',
        },
        graphic: (
        <svg viewBox="0 0 76 76" role="img" aria-label="R monogram logo">
            <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <polygon points="38,5 63,19 63,48 38,63 13,48 13,19"/>
                <circle cx="38" cy="5" r="2.2" fill="currentColor"/>
                <circle cx="63" cy="19" r="2.2" fill="currentColor"/>
                <circle cx="63" cy="48" r="2.2" fill="currentColor"/>
                <circle cx="38" cy="63" r="2.2" fill="currentColor"/>
                <circle cx="13" cy="48" r="2.2" fill="currentColor"/>
                <circle cx="13" cy="19" r="2.2" fill="currentColor"/>
            </g>
            <text x="31" y="47" fill="currentColor" fontSize="36" fontWeight="700" fontFamily="Georgia, serif">R</text>
        </svg>
    )},
];

const Hero = () => {
    return(
        <div className="heroContrainer">
            <div className="heroOverlay" />
            <div className="heroInner">
                <div className="trustBlock">
                    <p className="trustedBy">Trusted by</p>
                    <div className="logoPill" aria-label="Client logo strip">
                        {logos.map(({ id, className, style, graphic }) => (
                            <div key={id} className={`logoItem ${className}`} style={style}>
                                <span className="logoArt">{graphic}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="heroContent">
                    <div className="accentLine" />
                    <div className="copyBlock">
                        <h1>Stop buying AI promises.<br/>Start building AI systems.</h1>
                        <p>
                            The companies winning right now aren&apos;t the ones with the biggest AI budgets.
                            They&apos;re the ones whose teams use AI tools every single day to do work that
                            wasn&apos;t possible six months ago.
                        </p>
                        <p>
                            That gap — between talking about AI and actually using it — is where the real
                            advantage lives.
                        </p>
                        <p>
                            Most businesses never cross it. They get stuck in endless pilots,
                            proof-of-concepts that never ship, and workshops that produce nothing but plans.
                            Meanwhile, their competition is quietly automating the bottlenecks,
                            eliminating the manual work, and freeing their people to focus on what humans do best.
                        </p>
                    </div>
                </div>
            </div>

        <style jsx>{`
            .heroContrainer {
                position: relative;
                background-image: linear-gradient(90deg, rgba(6, 20, 63, 0.78), rgba(7, 15, 54, 0.88)), url('/img/hero-1.jpg');
                min-height: 860px;
                background-size: cover;
                background-position: center;
                overflow: hidden;
                color: #f4f7ff;
            }

            .heroOverlay {
                position: absolute;
                inset: 0;
                background: radial-gradient(circle at 18% 40%, rgba(78, 128, 255, 0.18), transparent 42%);
                pointer-events: none;
            }

            .heroInner {
                position: relative;
                z-index: 1;
                max-width: 980px;
                margin: 0 auto;
                padding: 136px 16px 96px;
            }

            .trustBlock {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 62px;
            }

            .trustedBy {
                margin: 0 0 4px;
                font-size: 0.84rem;
                line-height: 1.2;
                letter-spacing: 0.04em;
                color: rgba(236, 240, 249, 0.72);
                font-weight: 400;
            }

            .logoPill {
                width: min(568px, calc(100% - 48px));
                min-height: 76px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 18px;
                padding: 0 28px;
                border-radius: 999px;
                border: 1px solid rgba(225, 233, 255, 0.15);
                background: linear-gradient(99deg, rgba(27, 38, 78, 0.42), rgba(21, 29, 62, 0.56) 52%, rgba(18, 24, 54, 0.46));
                box-shadow: inset 0 1px 0 rgba(247, 249, 255, 0.04);
                backdrop-filter: blur(14px);
                -webkit-backdrop-filter: blur(14px);
                position: relative;
                overflow: hidden;
            }

            .logoPill:before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(128deg, rgba(255, 255, 255, 0.08) 6%, rgba(255, 255, 255, 0.02) 36%, rgba(255, 255, 255, 0) 70%);
                opacity: 0.2;
                pointer-events: none;
            }

            .logoItem {
                width: var(--slot-desktop);
                min-width: var(--slot-desktop);
                height: 54px;
                color: rgba(242, 245, 253, 0.88);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                flex: 0 0 auto;
            }

            .logoArt {
                width: var(--art-desktop-width);
                height: var(--art-desktop-height);
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(var(--art-offset-desktop));
            }

            .logoArt :global(svg) {
                display: block;
                width: 100%;
                height: 100%;
            }

            .heroContent {
                display: grid;
                grid-template-columns: 4px 1fr;
                gap: 28px;
                align-items: start;
                max-width: 920px;
                margin: 0 auto;
            }

            .accentLine {
                min-height: 520px;
                border-radius: 4px;
                background: linear-gradient(180deg, rgba(120, 84, 255, 0.95), rgba(80, 70, 255, 0.2));
                box-shadow: 0 0 26px rgba(120, 84, 255, 0.3);
                margin-top: 8px;
            }

            .copyBlock h1 {
                margin: 0;
                font-size: 4rem;
                line-height: 1.1;
                font-weight: 700;
                max-width: 760px;
            }

            .copyBlock p {
                margin: 26px 0 0;
                font-size: 2rem;
                line-height: 1.6;
                color: rgba(229, 235, 255, 0.82);
                max-width: 760px;
            }

            @media (max-width: 900px) {
                .heroInner {
                    padding-top: 96px;
                }

                .trustBlock {
                    margin-bottom: 54px;
                }

                .trustedBy {
                    margin-bottom: 3px;
                    font-size: 0.8rem;
                }

                .logoPill {
                    width: min(526px, calc(100% - 36px));
                    min-height: 72px;
                    padding: 0 24px;
                    gap: 14px;
                }

                .logoItem {
                    width: var(--slot-tablet);
                    min-width: var(--slot-tablet);
                    height: 48px;
                }

                .logoArt {
                    width: var(--art-tablet-width);
                    height: var(--art-tablet-height);
                    transform: translateY(var(--art-offset-tablet));
                }

                .copyBlock h1 {
                    font-size: 3rem;
                }

                .copyBlock p {
                    font-size: 1.4rem;
                }
            }

            @media (max-width: 600px) {
                .heroContrainer {
                    min-height: 720px;
                }

                .trustBlock {
                    margin-bottom: 42px;
                }

                .trustedBy {
                    display: none;
                }

                .heroContent {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .accentLine {
                    min-height: 3px;
                    width: 110px;
                }

                .logoPill {
                    width: min(326px, calc(100% - 24px));
                    min-height: 68px;
                    padding: 8px 0;
                    gap: 8px;
                    border: 0;
                    border-radius: 0;
                    background: none;
                    box-shadow: none;
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                    overflow: visible;
                }

                .logoPill:before {
                    display: none;
                }

                .logoPill:after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    height: 34px;
                    transform: translate(-50%, -50%);
                    background: radial-gradient(ellipse at center, rgba(215, 224, 255, 0.12) 0%, rgba(215, 224, 255, 0.06) 40%, rgba(215, 224, 255, 0) 78%);
                    pointer-events: none;
                }

                .logoItem {
                    width: var(--slot-mobile);
                    min-width: var(--slot-mobile);
                    height: 38px;
                }

                .logoArt {
                    width: var(--art-mobile-width);
                    height: var(--art-mobile-height);
                    transform: translateY(var(--art-offset-mobile));
                }

                .copyBlock h1 {
                    font-size: 2.25rem;
                    line-height: 1.2;
                }

                .copyBlock p {
                    font-size: 1.1rem;
                    margin-top: 18px;
                }
            }

        `}</style>
        </div>
    )
}

export default Hero
