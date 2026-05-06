"use client";

import Image from "next/image";

export default function Trophy() {
    return (
        <section id="trophy">
            <div className="trophy-head">
                <span className="sec-label">Recognition</span>
                <h2 className="t-h2">A quiet wall of <span className="accent">proof</span></h2>
                <div className="trophy-tabs" role="tablist">
                    <button className="trophy-tab active" data-panel="awards">Awards <span className="count">4</span></button>
                    <button className="trophy-tab" data-panel="memberships">Memberships <span className="count">3</span></button>
                    <button className="trophy-tab" data-panel="featured">Featured in <span className="count">5</span></button>
                </div>
            </div>

            <div className="trophy-stage">
                <div className="trophy-panel active" data-panel="awards">
                    <p className="trophy-quote">Recognised for software that <span className="accent">does the work</span>, not for the noise around it.</p>
                    <div className="badge-row">
                        <div className="badge-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/seal-of-excellence-badge.png" alt="Seal of Excellence" width={100} height={100} /></div>
                        <div className="badge-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/poples-choice-badge.png" alt="People's Choice" width={100} height={100} /></div>
                        <div className="badge-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/09/clutch-award-2021-278x300.png" alt="Clutch Award 2021" width={100} height={100} /></div>
                        <div className="badge-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2024/01/Clutch-top-2022-278x300.png" alt="Clutch Top 2022" width={100} height={100} /></div>
                    </div>
                </div>

                <div className="trophy-panel" data-panel="memberships">
                    <p className="trophy-quote">Active members of the organisations shaping <span className="accent">tech and creative work</span> in the region.</p>
                    <div className="member-row">
                        <div className="member-card">
                            <div className="member-mono">iM</div>
                            <div className="member-name">IMMAP</div>
                            <div className="member-sub">Internet & Mobile Marketing Association</div>
                        </div>
                        <div className="member-card">
                            <div className="member-mono">Bi</div>
                            <div className="member-name">BINI</div>
                            <div className="member-sub">Brain Innovations Network Initiative</div>
                        </div>
                        <div className="member-card">
                            <div className="member-mono">PS</div>
                            <div className="member-name">PSIA</div>
                            <div className="member-sub">Philippine Software Industry Association</div>
                        </div>
                    </div>
                </div>

                <div className="trophy-panel" data-panel="featured">
                    <p className="trophy-quote">Our work covered by <span className="accent">leading publications</span> across Southeast Asia.</p>
                    <div className="featured-row">
                        <div className="featured-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/Screen-Shot-2022-04-08-at-6_0000_Layer-2.png" alt="Featured" width={100} height={100} /></div>
                        <div className="featured-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/Screen-Shot-2022-04-08-at-6_0001_Layer-3.png" alt="Featured" width={100} height={100} /></div>
                        <div className="featured-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/Screen-Shot-2022-04-08-at-6_0003_Layer-5.png" alt="Featured" width={100} height={100} /></div>
                        <div className="featured-item"><Image src="https://lightweightsolutions.co/wp-content/uploads/2022/06/Screen-Shot-2022-04-08-at-6_0004_Layer-6.png" alt="Featured" width={100} height={100} /></div>
                    </div>
                </div>
            </div>

            <div className="trophy-stats">
                <div className="ts-item">
                    <div className="ts-n">4<span className="accent">×</span></div>
                    <div className="ts-l">Industry awards</div>
                </div>
                <div className="ts-item">
                    <div className="ts-n">3<span className="accent">×</span></div>
                    <div className="ts-l">Active memberships</div>
                </div>
                <div className="ts-item">
                    <div className="ts-n">5<span className="accent">×</span></div>
                    <div className="ts-l">Press features</div>
                </div>
                <div className="ts-item">
                    <div className="ts-n">16<span className="accent">+</span></div>
                    <div className="ts-l">Years of trust</div>
                </div>
            </div>
        </section>
    );
}