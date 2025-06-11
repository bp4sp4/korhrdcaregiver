export default function Info() {
  return (
    <section className="w-full bg-[#fafafa] pt-12 max-w-Lg mx-auto">
      <div className="flex flex-col items-center gap-2 w-full py-4">
        {/* 위쪽 카드 */}
        <div className="tag">마감임박</div>
        <p className="text-[37px] font-bold text-[#191c1d]">40일 주간반</p>
        <p className="text-gray-400 text-[19px]">2025-5기 개강</p>

        {/* 교육 일정 */}
        <section className="w-full max-w-xl mx-auto py-12 px-4">
          <h2 className="text-[25px] font-extrabold text-left mb-6 text-[#191c1d]">
            교육 일정
          </h2>
          <hr className="border-gray-200 mb-10" />
          <div className="space-y-3">
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                모집 마감
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                2025년 7월 16일까지
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                교육 일정
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                7/16(수) ~ 9/10(목)
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                교육 시간
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                09:00 ~ 17:20
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                시험 일자
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                9/10(수) 이후
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                시험 접수
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                2025년 8월 중
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              취업 시 100% 수강료 환급!!
            </div>
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              표준 교재 제공
            </div>
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              모의고사, 핵심요약 제공
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center gap-2 w-full py-4">
        {/* 위쪽 카드 */}
        <div className="tag">마감임박</div>
        <p className="text-[37px] font-bold text-[#191c1d]">
          3주 국가자격증소지자반
        </p>
        <p className="text-gray-400 text-[19px]">2025-4기 개강</p>

        {/* 교육 일정 */}
        <section className="w-full max-w-xl mx-auto py-12 px-4">
          <h2 className="text-[25px] font-extrabold text-left mb-6 text-[#191c1d]">
            교육 일정
          </h2>
          <hr className="border-gray-200 mb-10" />
          <div className="space-y-3">
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                모집 마감
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                2025년 7월 22일(화)
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                교육 일정
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                25년 7월 21일(월) ~ 25년 7월 31일(목)
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                교육 시간
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                09:00 ~ 17:20
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                시험 일자
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                2025년 7월 31일(목) 이후
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-400 text-[19px] text-[#8e9192] font-semibold w-45 text-left">
                시험 접수
              </div>
              <div className="text-black text-[19px] font-normal flex-1">
                2025년 7월 중
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-10">
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              3주 단기 자격증소지자반(사회복지사, 간호조무사, 작업/물리치료사)
            </div>
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              표준 교재 제공
            </div>
            <div className="bg-white py-5 px-2 text-[#191c1d] font-bold text-center text-[17px]">
              모의고사, 핵심요약 제공
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
