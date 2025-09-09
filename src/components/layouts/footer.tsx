import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LocationsSection from './footer/LocationsSection';

const Footer = () => {
  return (
    <footer id="colophon" className="bg-[#030925] text-white px-5 md:px-0 ">
      <div className="py-8 xl:py-16 container mx-auto max-w-7xl space-y-8">
        {/* Logo + tagline */}
        <div className="flex flex-col md:flex-row gap-6 md:place-items-center tracking-wider  md:text-left">
          <Link
            href="https://www.izone.edu.vn"
            className="font-bold text-primary text-3xl"
          >
            <Image
              src="https://www.izone.edu.vn/wp-content/themes/izone-v2/assets/logos/izone-logo-white.png"
              alt="IZONE"
              width={120}
              height={40}
            />
          </Link>
          <span className="md:pl-6 md:border-l-2 h-fit border-slate-200/20 block text-2xl font-bold">
            Tận tâm đào tạo từ mất gốc đến{' '}
            <span className="text-primary">IELTS 7.0</span> sau{' '}
            <span className="text-primary">1.5 năm</span>
          </span>
        </div>

        {/* Liên hệ ngắn */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-row gap-4">
            <span className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer">
              <svg
                className="h-auto aspect-1  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                ></path>
              </svg>
            </span>
            <div>
              <span className="block font-bold">Trụ sở chính</span>
              <span className="inline-block text-gray-300 font-light hover:cursor-pointer hover:text-gray-50">
                Số 4, ngõ 95 Hoàng Cầu, Quận Đống Đa, TP. Hà Nội
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer">
              <svg
                className="h-auto aspect-1  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                ></path>
              </svg>
            </span>
            <div>
              <span className="block font-bold">Địa chỉ e-mail</span>
              <Link
                href="mailto:doingoai@izone.edu.vn"
                className="inline-block text-gray-300 font-light hover:cursor-pointer hover:text-gray-50"
              >
                doingoai@izone.edu.vn
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer">
              <svg
                className="h-auto aspect-1  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                ></path>
              </svg>
            </span>
            <div>
              <span className="block font-bold">Số điện thoại</span>
              <Link
                href="tel:1900636682"
                className="inline-block text-gray-300 font-light hover:cursor-pointer hover:text-gray-50"
              >
                1900 63 66 82
              </Link>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="border-slate-200/20 border-b" />

        {/* Danh sách cơ sở */}
        <LocationsSection />

        {/* Footer links */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="font-bold mb-5"> Về chúng tôi </div>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/collab">
                    Hoạt động hợp tác
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/teacher/">
                    Đội ngũ giảng viên
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/chinh-sach-bao-mat/">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/dieu-khoan-su-dung">
                    Điều khoản sử dụng
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-5"> Đào tạo </div>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/cac-khoa-hoc-ielts">
                    Thông tin khoá học
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/lich-khai-giang/">
                    Lịch khai giảng
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://testtienganh.com">Kiểm tra trình độ</Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/luyen-thi-ielts">
                    Luyện thi trực tuyến
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/blog">
                    Bài viết chia sẻ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-5"> Liên hệ </div>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/lienhe-izone">
                    Tư vấn khoá học
                  </Link>
                </li>
                <li className="text-gray-300 hover:cursor-pointer hover:text-gray-50 font-light">
                  <Link href="https://www.izone.edu.vn/teacher-corner/tuyen-dung/">
                    Cơ hội nghề nghiệp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-4 mb-2">
              <div className="flex space-x-3 text-white md:justify-end">
                <Link
                  href="https://www.facebook.com/IELTSIZONE"
                  target="_blank"
                  className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
                >
                  <svg
                    className="h-auto aspect-1  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/izoneeducation/"
                  className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
                >
                  <svg
                    className="h-auto aspect-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/ielts_izone/"
                  className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer "
                >
                  <svg
                    className="h-auto aspect-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.tiktok.com/@ielts.izone"
                  className="inline-block h-12 w-12 shrink-0 p-3.5 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
                >
                  <svg
                    className="h-auto aspect-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-4 ml-auto text-gray-50 font-light text-sm select-none text-left lg:text-right">
              Giấy phép thành lập số 27/GCN-SGDĐT
              <br />
              Cấp bởi sở Giáo Dục và Đào Tạo Thành Phố Hà Nội
            </div>

            <div className="mt-4 flex flex-col-reverse md:flex-row justify-end md:items-center gap-2">
              <span className="text-gray-50 font-light text-sm select-none">
                ©&nbsp;2025&nbsp;IZONE.&nbsp;All Rights Reserved.
              </span>
              <span>
                <Link
                  href="https://www.dmca.com/Protection/Status.aspx?ID=d0aea228-a2ee-4db0-8f55-47bedf14005d&amp;refurl=https://www.izone.edu.vn/"
                  title="DMCA.com Protection Status"
                >
                  <Image
                    width={600}
                    height={600}
                    className="w-23"
                    alt="IZONE DCMA Badge"
                    src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-07.png?ID=d0aea228-a2ee-4db0-8f55-47bedf14005d"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating contact buttons */}
      <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4 gap-2 z-50 flex flex-col space-y-4">
        <Link href="tel:1900636682">
          <div className="h-16 w-16 lg:w-20 lg:h-20 cursor-pointer rounded-full bg-secondary p-2 lg:p-3.5 text-white shadow hover:bg-secondary/80 hover:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="p-1"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92"
              ></path>
            </svg>
          </div>
        </Link>
        <Link href="https://m.me/106253867468828" target="_blank">
          <div className="h-16 w-16 lg:w-20 lg:h-20 cursor-pointer rounded-full bg-secondary p-2 lg:p-3.5 text-white shadow hover:bg-secondary/80 hover:ring">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128"
              ></path>
            </svg>
          </div>
        </Link>
        <Link href="https://zalo.me/506495037831790736" target="_blank">
          <div className="h-16 w-16 lg:w-20 lg:h-20 cursor-pointer rounded-full bg-secondary p-2 lg:p-3.5 text-white shadow hover:bg-secondary/80 hover:ring">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="fixed right-0 top-24 bg-secondary text-white px-3 lg:px-4 py-1 lg:py-2 -rotate-90 rounded-t-lg font-medium tracking-wide text-xs 3xl:text-sm lg:text-base hover:cursor-pointer shadow origin-bottom-right will-change-transform">
        <a href="https://www.izone.edu.vn/lich-khai-giang">Lịch khai giảng</a>
      </div>
    </footer>
  );
};

export default Footer;
