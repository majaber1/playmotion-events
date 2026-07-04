import SEO from '../components/SEO'
import VideoEmbed from '../components/VideoEmbed'
import { videos } from '../data/products'

export default function Videos() {
  return (
    <>
      <SEO
        title="Videos"
        description="Watch MultiBall and X-Wall demo videos and event activation highlights from PlayMotion Events."
        path="/videos"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Videos</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Watch Our Games <span className="text-gradient">In Action</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Demo videos and event activation highlights. Add your own YouTube video IDs in{' '}
            <code className="text-[#00d4ff]">src/data/products.js</code> to enable each embed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <VideoEmbed
              key={v.id}
              title={v.title}
              description={v.description}
              embedId={v.embedId}
              officialUrl={v.officialUrl}
              officialLabel={v.officialLabel}
            />
          ))}
        </div>
      </div>
    </>
  )
}
