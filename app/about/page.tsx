"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const yearsSince1931 = new Date().getFullYear() - 1931;

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] selection:bg-amber-200 selection:text-amber-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <Link href="/dashboard" className="btn absolute top-6 left-6 z-20">
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        Quay lại
      </Link>

      <div className="flex-1 flex flex-col justify-center items-center px-4 py-20 relative z-10 w-full mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="max-w-4xl w-full"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200 mb-8 mt-6">
            <div className="relative flex items-center mb-8">

			  <div className="p-3 bg-amber-100/50 text-amber-700 rounded-2xl absolute left-0">
				<BookOpen className="size-6" />
			  </div>
			  
              <h1 className="title text-center font-bold w-full">
				LỜI NÓI ĐẦU
			  </h1>
            </div>

            <div className="space-y-6 text-stone-700 leading-relaxed text-[15px]">

              <div className="text-center italic text-stone-800">
                <p>“Cây có gốc sinh trăm cành nghìn lá</p>
                <p>Nước từ nguồn thành biển cả sông sâu</p>
                <p>Người ta nguồn gốc từ đâu</p>
                <p>Trước là Tiên Tổ rồi sau đến mình.”</p>
                				
              </div>

              <div className="text-center space-y-1">
				  <p className="font-semibold">– Uống nước nhớ nguồn.</p>
				  <p className="font-semibold">– Giọt máu đào hơn ao nước lã.</p>
			  </div>
								
				 <p>	
				Có tổ tiên, ông bà,
                cha mẹ thì hôm nay mới có chúng ta. Do vậy chúng ta phải trân
                trọng tổ tiên, ông bà, cha mẹ – đó cũng chính là tôn trọng lịch
                sử. Lịch sử mang tính khách quan, không ai có thể làm sai lệch
                lịch sử được. Ví dụ như cụ <strong>Hoàng Đức Chính</strong> là
                Thuỷ Tổ, sinh ra cụ <strong>Phúc Trù</strong>, cụ Phúc Trù sinh
                ra cụ <strong>Tiến Triều</strong>… đó là lịch sử của gia đình,
                dòng họ – còn được gọi là <strong>Gia phả</strong>.
              </p>

              <p>
                Qua lịch sử (gia phả), chúng ta còn biết được truyền thống của
                tổ tiên, ông bà, cha mẹ mình. Từ đó mỗi người con cháu đều có
                quyền tự hào về dòng tộc của mình và có trách nhiệm gìn giữ,
                phát huy truyền thống tốt đẹp của tổ tiên.
              </p>

              <p>
                Gia phả của <strong>Hoàng tộc</strong> được khắc vào bia đá từ
                năm <strong>1931</strong> (cách đây <strong>{yearsSince1931}</strong> năm).
                Đây là một tài sản vô cùng quý giá của dòng họ ta, bởi nhiều
                dòng họ khác không có được. Ngoài bia đá ra, chúng ta còn có
                <strong> bia miệng</strong> – tức là những câu chuyện, tư liệu
                lịch sử được các thế hệ trước truyền lại cho con cháu qua lời
                kể.
              </p>

              <div className="text-center italic text-stone-800">
                <p>“Trăm năm bia đá thì mòn</p>
                <p>Ngàn năm bia miệng vẫn còn trơ trơ.”</p>
              </div>

              <p>
                Đúng như vậy, cụ <strong>cửu đại Hoàng Phúc Trù</strong> (9 đời) di cư từ <strong>Sơn Tây (Hà Nội)</strong> về
                <strong> Tạ Xá</strong>. Đến năm 1931 đã trải qua chín đời, hàng
                trăm năm lịch sử. Nhờ có những câu chuyện truyền miệng mà đến
                năm 1931 mới có những tư liệu để khắc vào bia đá, lưu truyền
                lại cho con cháu đến ngày nay.
              </p>

              <p>
                Việc lập gia phả và khắc vào bia đá không phải do một cá nhân
                nào tự nghĩ ra, mà là kết quả của sự thống nhất giữa các bậc
                cao niên cùng đại diện các chi trong họ còn sống lúc bấy giờ.
              </p>

              <p>
                Chúng ta phải tôn trọng sự thật của lịch sử cha ông – đó là
                <strong> tôn ty trật tự</strong>: cha là cha, con là con; dòng họ
                phải có thứ bậc, có hàng. Đó là đạo lý của gia đình và dòng tộc.
                Gia đình càng nhiều đời thì càng là gia đình có phúc. Tính từ
                cụ <strong>Hoàng Phúc Trù</strong> là đời thứ nhất thì con cháu
                trong chi Đinh đến nay đã phát triển tới
                <strong> đời thứ 12</strong>.
              </p>

              <p>
                Trên cơ sở gia phả Hoàng tộc được ghi trên văn bia và đã được
                sao dịch năm 1982, Ban biên tập đã tập hợp ý kiến và tư liệu do
                các gia đình trong chi cung cấp để biên soạn thành cuốn
                <strong> Gia phả chi Đinh</strong>. Đây là cuốn gia phả đầu tiên
                của chi Đinh được viết bằng <strong>Tiếng Việt</strong>, làm cơ
                sở lịch sử quan trọng để mọi thành viên trong chi tìm hiểu,
                thực hiện và lưu giữ cho các thế hệ con cháu mai sau.
              </p>

              <p>
                Do thời gian lịch sử khá dài (khoảng trên dưới 300 năm), nên
                nội dung trong văn bia năm 1931 vẫn còn những chi tiết chưa đề
                cập đầy đủ. Mặt khác, thời gian biên tập có hạn nên chắc chắn
                vẫn còn thiếu sót. Rất mong các thành viên trong chi tiếp tục
                đóng góp ý kiến để cuốn <strong>Gia phả chi Đinh – Hoàng tộc </strong>
                 ngày càng hoàn chỉnh hơn.
              </p>

              <p>
                Dự kiến <strong>cứ sau mỗi 5 năm</strong>, gia phả của chi sẽ
                được bổ sung và cập nhật thêm thông tin mới.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="font-semibold mb-2">
                  Lưu ý về cách đánh số đời
                </p>
                <p>
                  Phần mềm mặc định <strong>Thủy tổ là đời thứ 1</strong>,
                  trong khi quy ước của dòng họ ta coi Thủy tổ đứng
                  <strong> trước đời 1</strong>. Vì vậy số đời hiển thị trên
                  phần mềm sẽ luôn <strong>cao hơn thực tế 1 cấp</strong>.
                </p>
                <p className="mt-2">
                  Ví dụ: Thành viên thuộc <strong>đời 8</strong> của dòng họ sẽ
                  hiển thị là <strong>đời 9</strong> trên ứng dụng.
                </p>
              </div>

              <div className="mt-16 border-t border-stone-200 pt-10 text-[15px] text-stone-700 font-serif">

  {/* BAN BIÊN TẬP */}
  <div className="text-center mb-8">
    <h2 className="font-bold tracking-wide mb-4">BAN BIÊN TẬP</h2>

    <div className="max-w-md mx-auto space-y-1">
      <p>1. Hoàng Văn Toàn – Trưởng chi: <strong>Trưởng ban</strong></p>
      <p>2. Hoàng Công Sáu – Ủy viên</p>
      <p>3. Hoàng Hữu Thu – Ủy viên</p>
    </div>
  </div>

  {/* NGÀY BIÊN SOẠN */}
  <div className="text-center italic space-y-1 mb-10">
    <p>
      Gia phả bản giấy được biên soạn ngày 
      <strong> 17 tháng 7 năm Canh Dần</strong>
    </p>
    <p>(tức ngày <strong>26 tháng 8 năm 2010</strong>)</p>
  </div>

  {/* GHI CHÚ SỐ HOÁ */}
  <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-center text-stone-600 mb-10">
    <p>
      Nội dung gia phả được <strong>số hoá bởi Hoàng Tuấn Anh</strong> và tiếp tục
      được <strong> cập nhật, bổ sung bởi các thành viên Chi Đinh – Hoàng Tộc</strong>.
    </p>
    <p className="mt-2">
      Phiên bản số hoá hiện tại được cập nhật đến <strong>tháng 03/2026</strong>.
    </p>
  </div>



</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}