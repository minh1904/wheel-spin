'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ResultDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  prizeName: string;
  prizeImage: string;
  onGoHome: () => void;
}

export default function ResultDialog({
  open,
  onOpenChange,
  prizeName,
  prizeImage,
  onGoHome,
}: ResultDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-xs px-4 sm:px-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-green-600">
            🎉 Chúc mừng bạn!
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base mt-3 sm:mt-4">
            Bạn đã nhận được phần quà:
            <br />
            <span className="font-bold text-[#174266] text-base sm:text-xl block mt-1">
              {prizeName}
            </span>
            <div className="flex justify-center mt-4">
              <Image
                src={prizeImage}
                alt={prizeName}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm mt-4 leading-relaxed">
              Bạn vui lòng chụp lại màn hình kết quả và gửi về Page IZONE -
              IELTS Chiến Lược kèm theo địa chỉ Email đã đăng ký để nhận phần
              quà này nhé!
              <br />
              Liên hệ ngay:{' '}
              <a
                href="https://m.me/106253867468828"
                className="text-blue-600 underline break-words"
              >
                https://m.me/106253867468828
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4 sm:mt-6">
          <Button onClick={onGoHome} className="w-full">
            Quay lại trang chủ
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
