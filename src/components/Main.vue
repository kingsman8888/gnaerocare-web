<script setup>
// 현재는 별도 로직이 필요 없는 정적 페이지이므로 스크립트는 비워둡니다.
import CompanyOverview from './CompanyOverview.vue'
import CompanyHistory from './CompanyHistory.vue'
import CoreManpower from './CoreManpower.vue'
import BusinessAreas from './BusinessAreas.vue'

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
    
    <header class="flex justify-between items-center p-6 lg:px-16 bg-white shadow-sm">
      <div class="flex items-center gap-3">
        <div class="text-4xl font-extrabold text-blue-700 italic flex items-center">
          G<span class="text-yellow-500 text-3xl px-1">▲</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-extrabold text-gray-900 tracking-tight">(주)지앤에어로케어</span>
          <span class="text-[10px] text-gray-400 font-bold tracking-widest">G&AEROCARE</span>
        </div>
      </div>
    </header>

    <main class="relative flex flex-col lg:flex-row items-center justify-between min-h-[85vh] px-6 lg:px-16 py-12">
      
      <div class="w-full lg:w-1/2 space-y-8 z-10">
        <h1 class="text-6xl lg:text-8xl font-extrabold text-[#002855] tracking-tight drop-shadow-md">
          회사소개서
        </h1>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">
          (주)지앤에어로케어
        </h2>
        
        <p class="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-lg mt-6">
          항공기 정비와 복합소재 수리 역량을 기반으로 <br />
          성장하는 <span class="text-purple-700 font-bold border-b-2 border-purple-700">항공 MRO 전문기업</span>
        </p>

        <div class="flex gap-6 lg:gap-10 pt-10 text-sm font-bold text-gray-700">
          <div class="flex flex-col items-center gap-3 text-center">
            <div class="p-3 bg-blue-100 rounded-full text-blue-700 text-2xl">✈️</div>
            <span>항공기 정비업</span>
          </div>
          <div class="w-px bg-gray-300"></div>
          <div class="flex flex-col items-center gap-3 text-center">
            <div class="p-3 bg-blue-100 rounded-full text-blue-700 text-2xl">👨‍🔧</div>
            <span>항공기 취급업</span>
          </div>
          <div class="w-px bg-gray-300"></div>
          <div class="flex flex-col items-center gap-3 text-center">
            <div class="p-3 bg-blue-100 rounded-full text-blue-700 text-2xl">⚙️</div>
            <span>금속·비금속부품<br/>제작·수리</span>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2 mt-16 lg:mt-0 relative h-[400px] lg:h-[650px] flex justify-end">
        <div class="absolute right-0 top-0 w-full lg:w-[120%] h-full bg-gradient-to-bl from-purple-200 via-blue-900 to-[#002855] rounded-l-[100px] lg:rounded-l-[250px] shadow-2xl overflow-hidden transform lg:translate-x-12">
          
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="비행기 이륙" 
            class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          
          <div class="absolute bottom-8 right-8 text-white/50 text-sm font-bold tracking-widest">
            G&AEROCARE
          </div>
        </div>
      </div>
      
    </main>

    <!-- 회사개요 -->
    <CompanyOverview />
    <!-- 회사연혁 -->
    <CompanyHistory />
    <!-- 핵심인력 및 전문성 -->
    <CoreManpower />

    <BusinessAreas />

  </div>
</template>

<style scoped>
/* Tailwind CSS를 사용하므로 추가 CSS는 최소화했습니다. */
</style>