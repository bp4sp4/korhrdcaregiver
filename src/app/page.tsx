import Image from "next/image";
import KakaoStaticMap from "./KakaomapStatic";
import DownChevronIcon from "./components/DownChevronIcon";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col items-center ">
      <div className="w-full bg-black  text-white py-5 text-sm sm:text-base flex justify-center items-center">
        <div className="flex justify-center items-center w-full max-w-5xl px-4">
          <div className="whitespace-nowrap">
            7월16일 (수) 주간 신규자반 개강
            <br />{" "}
            <strong className="text-[20px]">
              <span className="text-[#60a2e7]">
                취업 시 요양보호사 자격증 수강료 100% 환급
              </span>
              <br />
              도봉구 <span className="text-[#60a2e7]">최저가</span> 요양보호사
              자격증 교육과정 수강하세요
            </strong>{" "}
          </div>
        </div>
      </div>

      <section className="w-full bg-blue-50 flex flex-col h-[100vh] items-center ">
        <div className="text-blue-400 text-[21px] mt-10 text-[#60a2e7] font-semibold text-base mb-2 text-center">
          도봉구 국비 지원 교육원!
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-900 mb-2 leading-tight whitespace-pre-line">
          한평생
          <br />
          요양보호사교육원
        </h1>
        <div className="my-2 flex justify-center">
          <DownChevronIcon className="animate-bounce text-blue-300" size={32} />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/img.png"
            alt="메인"
            width={635}
            height={523}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </section>
      {/* 장점 */}
      <section className="w-full max-w-md mx-auto py-12 px-4">
        <div className="grid grid-cols-2 gap-8 text-center">
          {/* 장점 1 */}
          <div>
            <div className="inline-block bg-[#60a2e7] text-white rounded-full px-4 py-1 font-bold mb-2">
              장점1
            </div>
            <div className="text-gray-400 text-sm mb-1">
              취업 시 국비지원으로
            </div>
            <div className="font-bold text-[#191c1d] text-2xl leading-tight">
              수강료 100%
              <br />
              환급
            </div>
          </div>
          {/* 장점 2 */}
          <div>
            <div className="inline-block bg-[#60a2e7] text-white rounded-full px-4 py-1 font-bold mb-2">
              장점2
            </div>
            <div className="text-gray-400 text-sm mb-1">쉽게 접근 가능</div>
            <div className="font-bold text-[#191c1d] text-2xl leading-tight">
              쌍문초 정류장
              <br />
              30초 거리
            </div>
          </div>
          {/* 장점 3 */}
          <div>
            <div className="inline-block bg-[#60a2e7] text-white rounded-full px-4 py-1 font-bold mb-2">
              장점3
            </div>
            <div className="text-gray-400 text-sm mb-1">최신 시험 대비</div>
            <div className="font-bold text-[#191c1d] text-2xl leading-tight">
              컴퓨터 시험
              <br />
              연습 시설 완비
            </div>
          </div>
          {/* 장점 4 */}
          <div>
            <div className="inline-block bg-[#60a2e7] text-white rounded-full px-4 py-1 font-bold mb-2">
              장점4
            </div>
            <div className="text-gray-400 text-sm mb-1">1등 방문요양</div>
            <div className="font-bold text-[#191c1d] text-2xl leading-tight">
              방문요양센터
              <br />
              취업 연계
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-md mx-auto py-12 px-4">
        <p className="text-[21px] text-[#191c1d] font-bold text-center mb-2">
          2025년 6월 기준
        </p>
        <p className="text-[25px] text-[#191c1d] font-bold text-center mb-2">
          함께한 수강생 수 <span className="text-[#60a2e7]">5,900명</span>
        </p>
      </section>
      {/* 가격/지원 카드 */}
      <div className="flex flex-col bg-[#fafafa] items-center gap-2 w-full py-4">
        {/* 위쪽 카드 */}
        <div className="tag">마감임박</div>
        <p className="text-[37px] font-bold text-[#191c1d]">40일 주간반</p>
        <p className="text-gray-400 text-[19px]">7월 16일까지, 모집 마감</p>
        <div className="bg-[#E1E3E3] rounded-xl p-8 w-sm max-w-md text-gray-500 text-lg font-semibold mb-2 shadow">
          <div className="flex justify-between mb-2">
            <span className="text-[15px]">8주 교육</span>
            <span className="text-[15px]">정가</span>
          </div>
          <div className="text-3xl font-bold text-gray-400 line-through text-right mb-4">
            880,000원
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-[15px]">내일배움카드 10% 국비 지원</span>
            <span className="text-[15px]">-88,000원</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[15px]">자부담금 전액 국비 환급</span>
            <span className="text-[15px]">-792,000원</span>
          </div>
        </div>
        <div className="my-2 flex justify-center">
          <DownChevronIcon className="animate-bounce text-blue-300" size={32} />
        </div>
        {/* 아래쪽 카드 */}
        <div className="bg-white rounded-xl p-8 w-sm max-w-md text-black shadow mb-2">
          <div className="flex justify-between mb-2 font-bold">
            <span className="text-[15px]">8주 교육</span>
            <span className="text-[15px] text-[#60a2e7]">
              취업 후 요양보호사로 6개월 근무 시
            </span>
          </div>
          <div className="text-4xl font-extrabold text-right mb-2">0원</div>
          <div className="text-[#60a2e7] text-2xl font-bold text-right mb-4">
            최대 100% 국비 지원
          </div>
          <div className="flex justify-between mb-1 font-semibold">
            <span className="text-[15px]">훈련장려금 지급</span>
            <span className="text-[15px]">232,000원</span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            *실업자 한정, 교육과정 수료 후 별도 지급
          </div>
        </div>
        {/* 안내문구 */}
        <section className="w-full max-w-md mx-auto px-8 flex flex-col gap-3 mt-4">
          <div className="flex items-center bg-green-100 w-full rounded-lg px-4 py-3 text-green-900 font-semibold text-base">
            <span className="mr-2">✔</span> 표준 교재 제공
          </div>
          <div className="flex items-center bg-green-100 w-full rounded-lg px-4 py-3 text-green-900 font-semibold text-base">
            <span className="mr-2">✔</span> 모의고사, 핵심요약 제공
          </div>
        </section>

        {/* 교육 일정 */}
        <section className="w-full  max-w-sm mx-auto py-12 px-4">
          <h2 className="text-4xl font-extrabold text-left mb-6 text-[#191c1d]">
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
          </div>
        </section>
      </div>
      {/* 안내/혜택 */}
      <section className="w-full bg-[#191c1d] text-white py-16 px-4 mb-8">
        <h2 className="text-[40px] font-extrabold text-center mb-8">
          왜 지금 따야할까요?
        </h2>
        <div className="text-[17px] font-normal mb-2 text-center">
          [속보] 24년 1월부터
        </div>
        <div className="text-[17px] font-normal mb-8 text-center">
          요양보호사 자격증 교육 제도 변경!!!
        </div>
        <div className="flex flex-col items-start gap-12 max-w-md w-sm mx-auto">
          <div className="text-left">
            <span className="inline-block bg-[#d7f3e3] text-[#191c1d] font-bold rounded-full px-3 py-1 text-[17px] mb-4">
              더 빠르고
            </span>
            <div className="text-[17px] font-bold">
              8주 만에 수료 할 수 있어요
            </div>
          </div>
          <div className="text-left">
            <span className="inline-block bg-[#d7f3e3] text-[#191c1d] font-bold rounded-full px-3 py-1 text-[17px] mb-4">
              더 큰 혜택
            </span>
            <div className="text-[17px] font-bold">
              수강료 100% 환급!
              <br /> 지금이 가장 큰 혜택으로 수강할 수 있는 때예요
            </div>
          </div>
        </div>
        <div className="text-[#8e9192] text-[16px] font-normal mt-8 text-center">
          *정확한 교육제도 변경 시점은 지침에 따라 바뀔 수 있습니다.
        </div>
      </section>
      <section className="w-full bg-[#fafafa] max-w-md mx-auto py-12 px-4">
        <div className="text-[25px] text-[#191c1d] font-bold mb-2 text-center">
          하나부터 열까지, 싹 다 부담없이
          <br /> 물어보세요.
        </div>
        <div className="text-[19px] font-normal text-gray-400 mb-2 text-center">
          국비지원 절차부터 교육, 취업연계까지
          <br /> 궁금한 게 있다면 지금 바로 전화해주세요
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-8 px-4 text-center">
        <h2 className="text-[29px] font-bold text-center mb-10 text-[#191c1d]">
          교육 및 자격취득 과정 안내
        </h2>
        <div className="flex flex-row items-center gap-8 justify-center">
          {/* Timeline Image */}
          <div className="flex flex-col items-center pt-2 min-w-[60px]">
            <Image
              src="/lake.png"
              alt="timeline"
              width={16}
              height={120}
              className="w-4 h-full object-contain"
            />
          </div>
          {/* Steps */}
          <div className="flex-1 space-y-8 max-w-sm">
            <div>
              <div className="text-[21px] text-[#191c1d] font-bold mb-1 text-left">
                <span className="text-[#60a2e7] text-[21px]">01</span> 교육 등록
              </div>
              <div className="text-gray-400 text-[17px] text-left">
                <li>내일배움카드 발급 및 국비 지원 절차 도움</li>
              </div>
            </div>
            <div>
              <div className="text-[21px] text-[#191c1d] font-bold mb-1 text-left">
                <span className="text-[#60a2e7] text-[21px]">02</span> 교육 수료
                (이론, 실습)
              </div>
              <div className="text-gray-400 text-[17px] text-left">
                <li>요양보호사 실습기관 연계</li>
              </div>
            </div>
            <div>
              <div className="text-[21px] text-[#191c1d] font-bold mb-1 text-left">
                <span className="text-[#60a2e7] text-[21px]">03</span> 자격증
                시험
              </div>
              <ul className="text-gray-400 text-[17px] list-disc list-inside text-left">
                <li>시험 응시 접수 대행</li>
                <li>시험 합격을 위한 요점 정리 제공</li>
                <li>컴퓨터 시험 연습 환경 제공</li>
              </ul>
            </div>
            <div>
              <div className="text-[21px] text-[#191c1d] font-bold mb-1 text-left">
                <span className="text-[#60a2e7] text-[21px]">04</span> 자격증
                발급
              </div>
              <div className="text-gray-400 text-[17px] text-left">
                <li>자격 발급 대행</li>
              </div>
            </div>
            <div>
              <div className="text-[21px] text-[#191c1d] font-bold mb-1 text-left">
                <span className="text-[#60a2e7] text-[21px]">05</span>{" "}
                방문요양센터 즉시 취업!
              </div>
              <div className="text-gray-400 text-[17px] text-left">
                <li>방문요양센터 취업 연계</li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-md mx-auto py-12 px-4">
        <p className="text-[19px] text-[#191c1d] font-bold mb-2 text-center">
          <span className="text-[#60a2e7] text-[37px]">자격증 따자마자</span>
          <br /> <span className="text-[#191c1d] text-[37px]">바로 취업</span>
          <br />
          <span className="text-gray-400">최고 시급과 복지 혜택 제공</span>
          <br />
          <span className="text-gray-400">방문요양센터 취업 연계</span>
        </p>
      </section>
      {/* FAQ */}
      <section className="w-full max-w-xl mx-auto py-8 px-4 flex flex-col items-center">
        <h2 className="text-[37px] font-bold text-center mb-8 text-[#191c1d]">
          자주 묻는 질문
        </h2>
        <div className="w-full max-w-2xl divide-y divide-gray-300 border-t border-b border-gray-300 mb-8">
          {/* FAQ List - Replace with dynamic if needed */}
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              자격증 취득 후 요양보호사 일을 하려면 어떻게 해야 하나요?
              <span className="transition-transform group-open:rotate-180">
                &#x25B2;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              컴퓨터를 못해도 시험을 볼 수 있을까요?
              <span className="transition-transform group-open:rotate-180">
                &#x25BC;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              자격증 공부가 어렵지 않나요?
              <span className="transition-transform group-open:rotate-180">
                &#x25BC;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              수업 들을 때 무엇을 준비해야 하나요?
              <span className="transition-transform group-open:rotate-180">
                &#x25BC;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              수강 등록은 어떻게 하나요?
              <span className="transition-transform group-open:rotate-180">
                &#x25BC;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
          <details className="py-4 group cursor-pointer">
            <summary className="flex justify-between items-center text-[17px] font-medium text-[#191c1d] list-none">
              요양보호사 자격증은 어떻게 얻나요?
              <span className="transition-transform group-open:rotate-180">
                &#x25BC;
              </span>
            </summary>
            <div className="mt-4 text-gray-500 text-[18px]">
              로그인이 필요합니다.
            </div>
          </details>
        </div>
        <button className="mt-4 px-[32px] py-[12px] border-2 border-[#191c1d] rounded-full text-[18px] font-bold text-[#191c1d] hover:bg-gray-100 transition">
          더 자세히 알고 싶다면?
        </button>
      </section>
      {/* 사진 */}
      <section className="w-full max-w-2xl mx-auto py-8 px-4">
        <h2 className="text-[37px] font-bold text-center mb-6 text-[#191c1d]">
          평생교육원 사진
        </h2>
        <div className="flex gap-4 justify-center overflow-x-auto pb-2">
          <Image
            src="/img1.jpg"
            alt="교육원 사진1"
            width={180}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/img1.jpg"
            alt="교육원 사진2"
            width={180}
            height={120}
            className="rounded-lg object-cover"
          />
          <Image
            src="/img1.jpg"
            alt="교육원 사진3"
            width={180}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
      </section>
      {/* 오시는 길 */}
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
      {/* 푸터 */}

      {/* 플로팅 메뉴 */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex gap-4 max-w-lg w-full px-4 justify-center">
        <button className="flex-1 px-[12px] py-[12px] rounded-full border-2 border-[#60a2e7] text-[#60a2e7] text-[22px] font-extrabold bg-white shadow-md transition hover:bg-[#60a2e7] hover:text-white">
          가족요양 문의
        </button>
        <button className="flex-1 px-[12px] py-[12px] rounded-full bg-[#60a2e7] text-white text-[22px] font-extrabold shadow-md flex items-center justify-center gap-2 transition hover:bg-[#60a2e7]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.327 2.327l-1.07 1.07a16.001 16.001 0 006.586 6.586l1.07-1.07a2 2 0 012.327-.327l2.773 1.387A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
            />
          </svg>
          수강 문의
        </button>
      </div>
    </div>
  );
}
