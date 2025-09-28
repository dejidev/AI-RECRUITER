// components/ResponsiveCarousel.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";

type Card = {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    description?: string;
};

interface Props {
    cards: Card[];
    gap?: number; // px gap between slides
    className?: string;
}

export default function ResponsiveCarousel({ cards, gap = 16, className }: Props) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    // slides per view: 1 mobile, 2 tablet, 3 desktop
    const getSlidesPerView = useCallback(() => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }, []);

    const [slidesPerView, setSlidesPerView] = useState<number>(getSlidesPerView);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollEndTimer = useRef<number | null>(null);

    // update slidesPerView on resize
    useEffect(() => {
        const handleResize = () => {
            const newSpv = getSlidesPerView();
            setSlidesPerView((old) => {
                if (old === newSpv) return old;
                return newSpv;
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getSlidesPerView]);

    const maxIndex = Math.max(0, cards.length - slidesPerView);

    // robust scroll/snapping method: scroll to target slide's offsetLeft
    const scrollToIndex = (index: number) => {
        const vp = viewportRef.current;
        const wrapper = wrapperRef.current;
        if (!vp || !wrapper) return;

        const clamped = Math.max(0, Math.min(index, maxIndex));
        const target = wrapper.children[clamped] as HTMLElement | undefined;
        if (!target) return;

        // left position of the target relative to the wrapper = scrollLeft needed
        const left = target.offsetLeft;
        vp.scrollTo({ left, behavior: "smooth" });
        setCurrentIndex(clamped);
    };

    // next / prev
    const next = () => {
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };
    const prev = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex);
    };

    // when slidesPerView changes, clamp currentIndex and scroll to it
    useEffect(() => {
        const newIndex = Math.max(0, Math.min(currentIndex, Math.max(0, cards.length - slidesPerView)));
        // scroll after render/layout
        requestAnimationFrame(() => scrollToIndex(newIndex));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slidesPerView, cards.length]);

    // on scroll, debounce and snap to nearest slide after user stops scrolling
    const onScroll = () => {
        if (!viewportRef.current || !wrapperRef.current) return;
        if (scrollEndTimer.current) {
            window.clearTimeout(scrollEndTimer.current);
        }

        // schedule snap after user stops scrolling for 100ms
        scrollEndTimer.current = window.setTimeout(() => {
            const vp = viewportRef.current!;
            const wrapper = wrapperRef.current!;
            const left = vp.scrollLeft;

            // find nearest child by offsetLeft distance
            let nearestIdx = 0;
            let nearestDist = Infinity;
            for (let i = 0; i < wrapper.children.length; i++) {
                const c = wrapper.children[i] as HTMLElement;
                const dist = Math.abs(c.offsetLeft - left);
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearestIdx = i;
                }
            }
            const clamped = Math.max(0, Math.min(nearestIdx, maxIndex));
            // scroll to the computed index (this also updates state)
            scrollToIndex(clamped);
        }, 100);
    };

    // attach scroll listener
    useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;
        vp.addEventListener("scroll", onScroll, { passive: true });
        return () => vp.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slidesPerView, maxIndex]);

    // Hide scrollbar CSS (scoped)
    const localStyle = `
    .rc-no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; touch-action: pan-x; overscroll-behavior-x: contain; }
    .rc-no-scrollbar::-webkit-scrollbar { display: none; }
  `;

    return (
        <div className={`relative w-full ${className ?? ""}`}>
            <style>{localStyle}</style>

            {/* Prev button */}
            <button
                onClick={prev}
                aria-label="Previous"
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white border shadow disabled:opacity-50"
                style={{ transform: "translate(-40%, -50%)" }}
            >
                {/* simple chevron */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1370C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            {/* Viewport */}
            <div
                ref={viewportRef}
                className="rc-no-scrollbar overflow-x-auto"
                style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
            >
                <div ref={wrapperRef} className="flex" style={{ gap: `${gap}px` }}>
                    {cards.map((c, i) => (
                        <div
                            key={c.title + i}
                            className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center text-center flex-shrink-0"
                            style={{
                                width: `${100 / slidesPerView}%`,
                                minWidth: `${100 / slidesPerView}%`,
                                boxSizing: "border-box",
                                scrollSnapAlign: "start",
                            }}
                            aria-hidden={false}
                            role="group"
                        >
                            <div className="text-[#1370C8] mb-4">{c.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{c.title}</h3>
                            {c.subtitle && <p className="text-sm text-gray-600 mb-1">{c.subtitle}</p>}
                            {c.description && <p className="text-xs text-gray-400">{c.description}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Next button */}
            <button
                onClick={next}
                aria-label="Next"
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white border shadow disabled:opacity-50"
                style={{ transform: "translate(40%, -50%)" }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1370C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
        </div>
    );
}
