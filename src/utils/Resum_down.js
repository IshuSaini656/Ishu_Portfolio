const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "../public/ishu_resume.pdf"; // public folder me jo naam hai
    link.download = "Ishu_Saini_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleResumeDownload