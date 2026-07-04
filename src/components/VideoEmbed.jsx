// Responsive YouTube video embed with a placeholder fallback.
// Pass a real YouTube video ID (the part after "v=" in a YouTube URL,
// or after "/embed/" in an embed URL) via the `embedId` prop to show
// the actual video. Until then, a placeholder card with a link to the
// official source is shown instead.
export default function VideoEmbed({ title, description, embedId, officialUrl, officialLabel }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col h-full">
      <div className="relative w-full aspect-video bg-[#0d1221]">
        {embedId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-3xl">
              ▶
            </div>
            <p className="text-gray-500 text-xs max-w-xs">
              Video placeholder - add a YouTube video ID in{' '}
              <code className="text-[#00d4ff]">src/data/products.js</code> to embed this video here.
            </p>
            {officialUrl && (
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] text-sm font-semibold hover:underline"
              >
                {officialLabel || 'Watch official video'} →
              </a>
            )}
          </div>
        )}
      </div>
      <div className="p-5 flex-1">
        <h3 className="text-white font-bold mb-1">{title}</h3>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
    </div>
  )
}
