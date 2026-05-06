import React from 'react'

const logos = [
    { id: 'resiliaid', className: 'logoResili', src: '/img/one.webp', alt: 'ResiliAid.org' },
    { id: 'globe', className: 'logoGlobe', src: '/img/two.webp', alt: 'Globe and handshake logo' },
    { id: 'claate', className: 'logoClaate', src: '/img/three.webp', alt: 'Claate' },
    { id: 'rmono', className: 'logoR', src: '/img/five.webp', alt: 'R monogram' }
]

const Hero = () => {
    return(
        <div className="heroContrainer">
            <div className="heroOverlay" />
            <div className="heroInner">
                <div className="trustBlock">
                    <p className="trustedBy">Trusted by</p>
                    <div className="logoPill" aria-label="Client logo strip">
                        {logos.map(({ id, className, src, alt }) => (
                            <div key={id} className={`logoItem ${className}`}>
                                <img src={src} alt={alt} className="trustLogo" />
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
                margin-bottom: 74px;
            }

            .trustedBy {
                margin: 0 0 6px;
                font-size: 0.88rem;
                line-height: 1.2;
                letter-spacing: 0.035em;
                color: rgba(240, 245, 255, 0.8);
                font-weight: 500;
            }

            .logoPill {
                width: min(640px, 82%);
                height: 82px;
                display: grid;
                grid-template-columns: 1.25fr 0.78fr 1fr 0.72fr;
                align-items: center;
                gap: 10px;
                padding: 0 28px;
                border-radius: 999px;
                border: 1px solid rgba(229, 236, 255, 0.23);
                background: linear-gradient(102deg, rgba(153, 169, 226, 0.16), rgba(74, 86, 142, 0.11) 50%, rgba(45, 58, 110, 0.12));
                box-shadow: inset 0 0 0 1px rgba(245, 248, 255, 0.02);
                position: relative;
                overflow: hidden;
            }

            .logoPill:before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(136deg, rgba(255, 255, 255, 0.12) 8%, rgba(255, 255, 255, 0.03) 36%, rgba(255, 255, 255, 0.02) 52%, rgba(255, 255, 255, 0) 75%);
                opacity: 0.28;
                pointer-events: none;
            }

            .logoItem {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                min-height: 64px;
            }

            .trustLogo {
                display: block;
                width: auto;
                height: auto;
                max-width: 100%;
                object-fit: contain;
                filter: brightness(0) invert(1);
                opacity: 0.9;
            }

            .logoResili {
                justify-self: start;
            }

            .logoResili .trustLogo {
                max-height: 38px;
            }

            .logoGlobe .trustLogo {
                max-height: 44px;
            }

            .logoClaate .trustLogo {
                max-height: 28px;
            }

            .logoR {
                justify-self: end;
            }

            .logoR .trustLogo {
                max-height: 44px;
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

                .logoPill {
                    width: 90%;
                    padding: 0 20px;
                    height: 76px;
                    gap: 10px;
                }

                .logoResili .trustLogo {
                    max-height: 32px;
                }

                .logoGlobe .trustLogo {
                    max-height: 38px;
                }

                .logoClaate .trustLogo {
                    max-height: 24px;
                }

                .logoR .trustLogo {
                    max-height: 38px;
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

                .heroContent {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .accentLine {
                    min-height: 3px;
                    width: 110px;
                }

                .logoPill {
                    height: auto;
                    border-radius: 20px;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    padding: 12px 18px;
                    gap: 10px 16px;
                }

                .logoResili, .logoClaate {
                    justify-self: center;
                }

                .logoGlobe, .logoR {
                    justify-self: center;
                }

                .logoResili .trustLogo {
                    max-height: 30px;
                }

                .logoGlobe .trustLogo {
                    max-height: 32px;
                }

                .logoClaate .trustLogo {
                    max-height: 22px;
                }

                .logoR .trustLogo {
                    max-height: 34px;
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
