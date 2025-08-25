export default function DownloadButton() {
  return (
    <a
      href="https://developer.apple.com/testflight/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,.25)] hover:bg-black/90 transition"
    >
      {/* Apple glyph */}
      <span aria-hidden></span>
      Download for iPhone
    </a>
  );
}