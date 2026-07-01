import { Helmet } from 'react-helmet-async'

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision - PlayMotion Events</title>
        <meta name="description" content="Learn about PlayMotion Events' mission to provide unforgettable interactive game experiences and vision to become Saudi Arabia's leading entertainment rental company." />
      </Helmet>

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-subtitle">Our Purpose</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Mission & <span className="text-gradient">Vision</span></h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-bold px-4 py-2 rounded-full mb-6">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              "To make every event more engaging through interactive, safe, and memorable game experiences."
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At PlayMotion Events, we believe every gathering — whether a small school event or a massive festival — deserves extraordinary entertainment. Our mission drives us to constantly innovate, source the best interactive technologies, and deliver flawless event experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are committed to offering solutions that are not just fun, but also safe, inclusive, and suitable for all ages and demographics across Saudi Arabia's diverse event landscape.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff88]/20 rounded-3xl p-12 border border-[#00d4ff]/20 text-center">
              <div className="text-8xl mb-6">🎯</div>
              <h3 className="text-2xl font-black text-white">Our Mission</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-full mx-auto mt-4" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="bg-gradient-to-br from-[#ff6b00]/20 to-[#ffaa00]/20 rounded-3xl p-12 border border-[#ff6b00]/20 text-center">
              <div className="text-8xl mb-6">🔭</div>
              <h3 className="text-2xl font-black text-white">Our Vision</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ffaa00] rounded-full mx-auto mt-4" />
            </div>
          </div>
          <div>
            <div className="inline-block bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-sm font-bold px-4 py-2 rounded-full mb-6">
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              "To become one of Saudi Arabia's leading providers of interactive entertainment and event game rental solutions."
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We envision PlayMotion Events as the go-to partner for event organizers, corporate clients, educational institutions, and entertainment venues across the Kingdom and beyond.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By continuously expanding our game portfolio, investing in the latest interactive technologies, and maintaining the highest service standards, we aim to set the benchmark for event entertainment in Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] rounded-3xl p-12">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Our Core <span className="text-gradient">Values</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Innovation', desc: 'Always seeking the newest interactive technologies and game concepts.' },
              { icon: '🤝', title: 'Partnership', desc: 'Building lasting relationships with clients and delivering on every promise.' },
              { icon: '🛡️', title: 'Safety', desc: 'Ensuring all our equipment and setups meet the highest safety standards.' },
              { icon: '🎯', title: 'Excellence', desc: 'Delivering premium event experiences that exceed expectations every time.' },
            ].map(val => (
              <div key={val.title} className="text-center p-6">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
