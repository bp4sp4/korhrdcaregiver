import KakaoStaticMap from "../KakaomapStatic";

export default function Contact() {
  return (
    <section className="w-full flex flex-col items-center max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-[37px] font-bold text-center mb-6 text-[#191c1d]">
        오시는 길
      </h2>
      <KakaoStaticMap />
      <div className="flex flex-col items-left">
        <div className="text-left font-bold text-[#191c1d] text-[21px] mt-4 mb-4">
          서울 도봉구 노해로 137 진암빌딩 4층 401호
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[#60a2e7] text-[18px] mb-2">
          <div className="text-gray-400 text-[17px]">전화번호</div>
          <div className="text-[#191c1d]">02-907-9979</div>
          <div className="text-gray-400 text-[17px]">상호명</div>
          <div className="text-[#191c1d] text-[17px]">
            케어링 도봉 요양보호사교육원
          </div>
          <div className="text-gray-400 text-[17px]">업무 시간</div>
          <div className="text-[#191c1d] text-[17px]">09:00 ~ 17:20</div>
        </div>
      </div>
    </section>
  );
}
