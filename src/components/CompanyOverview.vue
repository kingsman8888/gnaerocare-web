<template>
<section class="py-20 px-6 lg:px-16 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        
        <div class="mb-16 space-y-2">
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-10 bg-[#002855]"></div>
            <h2 class="text-4xl lg:text-5xl font-extrabold text-[#002855] tracking-tight">회사 개요</h2>
            <span class="text-gray-300 text-lg font-bold ml-4">Company Overview</span>
          </div>
          <p class="text-xl text-blue-600 font-bold pl-5">항공정비 전문성과 기업 운영 기반을 결합한 항공 MRO 기업</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div class="lg:col-span-5 space-y-8">
            <div class="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-200">
              <p class="text-lg leading-relaxed text-gray-700 font-medium">
                <span class="text-[#002855] font-bold">(주)지앤에어로케어</span>는 항공기정비, 항공기취급업, 금속·비금속부품 제작·수리 역량을 기반으로 항공기 정비 및 부품 수리 서비스를 제공하는 <span class="text-blue-700 font-bold">항공 MRO 전문기업</span>입니다.
              </p>
            </div>
            
            <div class="rounded-3xl overflow-hidden h-[300px] shadow-xl relative">
              <img 
                src="https://images.unsplash.com/photo-1559133967-3806253457a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="항공기 정비 이미지" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white font-bold text-lg">Professional Maintenance</div>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-gray-50 p-6 rounded-2xl flex items-center gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-blue-600">🏢</div>
              <div>
                <p class="text-sm text-gray-400 font-bold mb-1">회사명</p>
                <p class="text-lg font-bold text-gray-800">(주)지앤에어로케어</p>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-2xl flex items-center gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-blue-600">👤</div>
              <div>
                <p class="text-sm text-gray-400 font-bold mb-1">대표자</p>
                <p class="text-lg font-bold text-gray-800">황용하</p>
              </div>
            </div>

            <div class="md:col-span-2 bg-gray-50 p-6 rounded-2xl flex items-center gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-blue-600">🔧</div>
              <div>
                <p class="text-sm text-gray-400 font-bold mb-1">주요 사업</p>
                <p class="text-lg font-bold text-gray-800">항공기정비업, 항공기취급업, 금속·비금속부품 제작·수리</p>
              </div>
            </div>

            <div class="md:col-span-2 bg-gray-50 p-6 rounded-2xl flex items-center gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-blue-600">📍</div>
              <div>
                <p class="text-sm text-gray-400 font-bold mb-1">본사</p>
                <p class="text-base font-bold text-gray-800 break-keep leading-snug">인천광역시 연수구 원인재로 212, 402동 203호</p>
              </div>
            </div>

             <div class="md:col-span-2 bg-gray-50 p-6 rounded-2xl flex items-center gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-blue-600">🏭</div>
              <div>
                <p class="text-sm text-gray-400 font-bold mb-1">항공기 MRO사업부</p>
                <p class="text-base font-bold text-gray-800 break-keep leading-snug">충청남도 태안군 남면 곰섬로 236-49, 한서대학교 태안캠퍼스 창업보육센터 3관 102호</p>
              </div>
            </div>

            <div class="md:col-span-2 bg-[#002855] p-6 rounded-2xl flex items-center gap-5 shadow-lg">
              <div class="w-14 h-14 bg-blue-400/20 rounded-full flex items-center justify-center text-2xl text-blue-300">🚀</div>
              <div>
                <p class="text-sm text-blue-300 font-bold mb-1">핵심 방향</p>
                <p class="text-lg font-bold text-white uppercase">정비, 수리, 연구개발 기반 항공 MRO 서비스 확대</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>    
</template>