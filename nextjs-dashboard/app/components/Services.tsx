'use client';

import { useEffect, useState } from 'react';
import { SERVICES } from '@/app/lib/data';

const CYCLE_MS = 5000;

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // 🔁 Auto cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SERVICES.length);
      setProgress(0);
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, []);

  // ⏱ Progress animation
  useEffect(() => {
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const pct = Math.min(100, ((ts - start) / CYCLE_MS) * 100);
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeIdx]);

  return (
    <section id="services">
      <div className="wrap">
        <div className="svc-card">
          
          {/* LEFT SIDE */}
          <div className="svc-left">
            <span className="sec-label">Our services</span>
            <h2 className="svc-left-title">
              Built <span className="accent">around</span><br />your goals
            </h2>

            <div className="svc-list">
              {SERVICES.map((svc, i) => {
                const isActive = i === activeIdx;

                return (
                  <div
                    key={i}
                    className={`svc-row ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveIdx(i);
                      setProgress(0);
                    }}
                    style={
                      isActive
                        ? { ['--progress-w' as any]: `${progress}%` }
                        : {}
                    }
                  >
                    <div className="svc-row-head">
                      <div className="svc-thumb" dangerouslySetInnerHTML={{ __html: svc.icon }} />
                      <span className="svc-row-name">{svc.name}</span>
                      <span className="svc-row-num">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="svc-row-expand">
                      <p className="svc-row-desc">{svc.desc}</p>
                      <a className="svc-row-link" href={svc.href}>
                        Learn more → 
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="svc-right">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`svc-img ${i === activeIdx ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${svc.image})`,
                }}
              />
            ))}

            <div className="svc-detail">
              <div className="svc-d-eyebrow">
                Service · {String(activeIdx + 1).padStart(2, '0')}
              </div>
              <h3 className="svc-d-title">
                {SERVICES[activeIdx].name}
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}