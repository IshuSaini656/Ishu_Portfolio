export const openWhatsApp = () => {
    const message = `Hi Ishu,

I visited your portfolio and I'm interested in discussing a potential opportunity with you. Please let me know when you're available.

Thanks!`;

    window.open(
        `https://wa.me/918394080411?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
    );

};

export const openLinkedIn = () => {
    window.open(
        "https://www.linkedin.com/in/ishu-saini-068277372?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "_blank",
        "noopener,noreferrer"
    );
};


export const openEmail = () => {
    const email = "ishuwork8394@gmail.com";
    const subject = "Portfolio Inquiry";

    const body = `Hi Ishu,

I visited your portfolio and I'm interested in discussing a potential opportunity with you.

Thanks!`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;
};

import { scroller } from "react-scroll";
export const handleHireMe = () => {
    scroller.scrollTo("contact", {
        smooth: true,
        duration: 600,
        offset: -90,
    });
};