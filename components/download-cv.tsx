export function DownloadCV() {
  return (
    <a
      className="button secondary cv-download"
      href="/downloads/catalin-avarvarei-cv.pdf"
      download="Catalin-Avarvarei-CV.pdf"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Download CV<span className="cv-filetype">PDF</span>
    </a>
  );
}
