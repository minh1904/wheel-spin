import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Hand, PencilRuler, UserRoundSearch } from 'lucide-react';
import cta1 from '../../../public/cta1.svg';
import Image from 'next/image';

export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 className="text-6xl md:text-9xl font-black leading-tight tracking-tight text-center md:text-left">
          Vòng quay <br /> <span className="italic">may mắn</span>
        </h1>
        {/* CTA */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={cta1}
            alt="CTA"
            className="w-48 sm:w-60 md:w-72 lg:w-96 h-auto"
          />
        </div>
      </div>
      <div className="flex md:block justify-center md:justify-end mt-10">
        <Button
          size="lg"
          className="px-8 py-6 text-lg font-semibold rounded-md shadow-md"
        >
          <Link href="/login" className="flex items-center gap-2">
            Tham gia ngay <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
      {/* 3 ô nội dung dính nhau */}
      <div className="max-w-6xl w-full mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-200">
        {/* Ô 1 */}
        <div className="p-8 shadow-sm hover:shadow-md transition rounded-none">
          <UserRoundSearch size={44} strokeWidth={1.5} className="mb-4" />
          <h2 className="text-2xl font-bold mb-4">Đối tượng tham gia</h2>
          <p>
            Học viên đăng ký mới các khóa học trong tháng 09 tại{' '}
            <span className="font-semibold">IZONE – IELTS Chiến lược</span>.
          </p>
        </div>

        {/* Ô 2 */}
        <div className="p-8 shadow-sm hover:shadow-md transition rounded-none">
          <PencilRuler size={44} strokeWidth={1.5} className="mb-4" />
          <h2 className="text-2xl font-bold mb-4">Cách thức tham gia</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mỗi email hợp lệ sẽ được quay thưởng 1 lần duy nhất.</li>
            <li>
              Sau khi quay, kết quả trúng thưởng sẽ hiển thị ngay trên màn hình.
            </li>
          </ul>
        </div>

        {/* Ô 3 */}
        <div className="p-8 shadow-sm hover:shadow-md transition rounded-none">
          <Hand size={44} strokeWidth={1.5} className="mb-4" />
          <h2 className="text-2xl font-bold mb-4">Hình thức nhận thưởng</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Quà hiện vật:</b> học viên có thể nhận trực tiếp tại trụ sở
              chính IZONE hoặc yêu cầu gửi về địa chỉ cá nhân.
            </li>
            <li>
              <b>Ưu đãi học phí:</b> được áp dụng trực tiếp khi học viên làm thủ
              tục đăng ký khóa học.
            </li>
          </ul>
        </div>
      </div>

      {/* Lưu ý */}
      <div className="max-w-6xl w-full mt-12 border border-dashed border-gray-300 p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-3">Lưu ý</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            Giải thưởng chỉ áp dụng cho học viên đăng ký khóa học tại IZONE.
          </li>
          <li>
            Trường hợp học viên trúng thưởng nhưng không đăng ký học, giải
            thưởng sẽ bị vô hiệu hóa.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-20 text-sm text-gray-600 italic">
        © 2025 IZONE – IELTS Chiến lược. All rights reserved.
      </div>
    </div>
  );
}
