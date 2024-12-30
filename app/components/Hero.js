export default function Hero() {
    return (
      <div className="flex items-center justify-between px-8 py-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-teal-600 leading-tight mb-6">
            "Empowering Recovery, Inspiring Change"
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover tools, programs, and support to overcome addiction and thrive in your journey toward a better life.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
            <svg className = "w-14" >
    <g>
        <path data-color="1" d="M116.988 122.729l-34.064 31.092V79.782c0-18.813 15.251-34.064 34.064-34.064v77.011z" fill="#FE4E8F"></path>
        <path data-color="2" d="M83.012 122.729l-34.064 31.092V79.782c0-18.813 15.251-34.064 34.064-34.064v77.011z" fill="#FE025F"></path>
        <path data-color="3" d="M151.052 122.729l-34.064 31.092V79.782c0-18.813 15.251-34.064 34.064-34.064v77.011z" fill="#FFB3CF"></path>
        <path data-color="2" d="M150.599 136.412v17.871h-17.871l17.871-17.871z" fill="#FE025F"></path>
    </g>
</svg>
              <div>
                <h3 className="font-medium">Personalized</h3>
                <p className="text-sm text-gray-600">Programs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/mindfulness.svg" alt="" className="w-8 h-8" />
              <div>
                <h3 className="font-medium">Mindfulness</h3>
                <p className="text-sm text-gray-600">Tools</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/guidance.svg" alt="" className="w-8 h-8" />
              <div>
                <h3 className="font-medium">Expert</h3>
                <p className="text-sm text-gray-600">Guidance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://static.wixstatic.com/media/469f62_987d6203aa584d5ea4b8b3e0c4c2f7b2~mv2.png/v1/fill/w_769,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/main_edited_edited.png" alt="" className="w-[600px]" />
        </div>
      </div>
    )
  }