export default function Footer() {
  return (
    <footer className="w-full bg-[#191c1d] text-white pt-14 pb-10 px-4 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
        {/* 왼쪽: 교육원 정보 */}
        <div className="mb-6 md:mb-0 flex flex-col items-start">
          <div className="text-[13px] mb-1">
            서울특별시 도봉구 노해로 137 진암빌딩 4층 401호
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="text-[13px] mb-0 text-gray-300">
              사업자등록번호 140-94-01460 &nbsp;|&nbsp; 전화번호 02-907-9979
            </div>
            <div className="text-[13px] text-gray-300 mt-20 border-t border-gray-700 pt-4 w-full">
              Copyright © 2025 케어링 도봉 요양보호사교육원 All rights reserved.
            </div>
          </div>
        </div>
        {/* 오른쪽: 네비/정책 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full md:w-auto justify-between">
          <div className="flex flex-col gap-1 text-[12px]">
            <span className="hover:underline cursor-pointer">홈</span>
            <span className="hover:underline cursor-pointer">수강 안내</span>
            <span className="hover:underline cursor-pointer">오시는 길</span>
          </div>
          <div className="flex flex-col gap-1 text-[12px]">
            <span className="hover:underline cursor-pointer">이용약관</span>
            <span className="hover:underline cursor-pointer font-bold">
              개인정보처리방침
            </span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex gap-4 max-w-lg w-full px-4 justify-center">
        <button className="flex-1 px-[12px] py-[12px] rounded-full border-2 border-[#60a2e7] text-[#60a2e7] text-[22px] font-extrabold bg-white shadow-md transition hover:bg-[#60a2e7] hover:text-white">
          가족요양 문의
        </button>
        <a
          href="tel:02-907-9979"
          className="flex-1 px-[12px] py-[12px] rounded-full bg-[#60a2e7] text-white text-[22px] font-extrabold shadow-md flex items-center justify-center gap-2 transition hover:bg-[#60a2e7]"
        >
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
        </a>
      </div>
    </footer>
  );
}
