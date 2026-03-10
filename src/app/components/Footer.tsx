import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],

};

export function Footer() {
  return (
//     <footer style={{ backgroundColor: "#0a1f4e" }}>
//       {/* Newsletter Banner */}
      

//       {/* Main Footer */}
//       <div className="py-5 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
//             {/* Brand Column */}
//             <div className="lg:col-span-2">
//               {/* Logo */}
//               <div className="flex items-center gap-1 mb-5">
                
//                               <p
//                 className="font-black text-xl text-white"
                
//               >
//                 Rital
//               </p>
//               </div>
//                <div className="flex items-center gap-4 justify-center py-6 text-2xl">

//   <a href="https://www.facebook.com/Rital.office?mibextid=JRoKGi" target="_blank" className="text-[#f2f9f5]">
//     <FontAwesomeIcon icon={faFacebook} />
//   </a>

//   <a href="https://www.instagram.com/rital_office/" target="_blank" className="text-[#f2f9f5]">
//     <FontAwesomeIcon icon={faInstagram} />
//   </a>

//   <a href="https://youtube.com" target="_blank" className="text-[#f2f9f5]">
//     <FontAwesomeIcon icon={faYoutube} />
//   </a>

//   <a href="https://x.com" target="_blank" className="text-[#f2f9f5]">
//     <FontAwesomeIcon icon={faXTwitter} />
//   </a>

// </div>

//               {/* <p className="text-blue-200 leading-relaxed mb-7 max-w-sm">
//                 منصتك الموثوقة للوصول إلى أفضل الجامعات التركية والعالمية. نساعدك في تحقيق
//                 حلمك التعليمي بخدمة متكاملة من الاستشارة حتى الوصول.
//               </p> */}

//               {/* Contact Info */}
//               <div className="space-y-3">
//                 {[
//                   { icon: Phone, text: "⁦+20 10 31160279⁩" },
//                   { icon: Mail, text: "Ritaloffice22@gmail.com" },
//                   { icon: MapPin, text: " مصر القاهرة    الدقي " },
//                 ].map((item, i) => {
//                   const Icon = item.icon;
//                   return (
//                     <div key={i} className="flex items-center gap-3 text-[#f2f9f5] text-sm">
//                       <Icon size={16} className="text-[#f2f9f5] flex-shrink-0" />
//                       <span>{item.text}</span>
//                     </div>
//                   );
//                 })}
//               </div>

              
//             </div>

//             {/* Links Columns */}
//             {Object.entries(footerLinks).map(([title, links]) => (
//               <div key={title}>
//                 <h4 className="text-white font-black mb-5 text-lg relative">
//                   {title}
//                   <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: "#fff" }} />
//                 </h4>
//                 <ul className="space-y-3">
//                   {links.map((link) => (
//                     <li key={link.label}>
//                       <a
//                         href={link.href}
//                         className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-2 group"
//                       >
//                         <ArrowLeft
//                           size={12}
//                           className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 flex-shrink-0"
//                         />
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div
//         className="py-20 px-4 text-center"
//         style={{ backgroundColor: "#0a1f4e", borderTop: "1px solid rgba(255,255,255,0.06)" }}
//       >
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
//           <p className="text-blue-300 text-sm flex items-center gap-2">
//             <span>© 2025 منصة رتال التعليمية. جميع الحقوق محفوظة.</span>
//           </p>
         
//           <div className="flex gap-5 -text-sm text-blue-300">
//             <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
//             <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
//             <a href="#" className="hover:text-white transition-colors">devol</a>
//           </div>
//         </div>
//       </div>
//     </footer>
<footer className="bg-[#0d2b5e] text-white pt-8 pb-6">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">

    {/* about */}
    <div className="space-y-4 text-center md:text-right">
      <h1>Rital</h1>

      <p className="text-gray-300 text-sm pt-6 leading-relaxed">
        تعتبر Rital التعليمية شركة رائدة في مجال الخدمات الأكاديمية
        لمساعدة الطلاب العرب في الدراسة بالجامعات المتميزة.
      </p>

      <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
        <li><a href="#">الجامعات</a></li>
        <li><a href="#">المدارس الدولية</a></li>
        <li><a href="#">المدونة</a></li>
        <li><a href="#">الاستوديو</a></li>
        <li><a href="#">انضم إلينا</a></li>
      </ul>
    </div>


    {/* links */}
    <div className="text-center md:text-right">
      <h3 className="text-lg font-semibold mb-6">روابط مهمة</h3>

      <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">

        <a href="#">الدراسة في مصر</a>
        <a href="#">اللغة العربية</a>

        <a href="#">السكن الطلابي</a>
        <a href="#">الخدمات</a>

        <a href="#">تواصل معنا</a>
        <a href="#">من نحن</a>

        <a href="#">أهم التخصصات</a>
        <a href="#">المنح الدراسية</a>

      </div>
    </div>


    {/* newsletter */}
    <div className="text-center md:text-right space-y-4">

      <h3 className="text-lg font-semibold">
        النشرة الإخبارية
      </h3>

      <form className="flex bg-white rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="flex-1 p-3 text-black outline-none"
        />

        <button className="bg-[#154734] px-4 text-white">
          إرسال
        </button>
      </form>

      <p className="text-gray-300 text-sm">
        اشترك لتبقى على اطلاع دائم بعروضنا المميزة
      </p>

    </div>

  </div>


  {/* bottom */}
  <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
    © {new Date().getFullYear()} Rital — جميع الحقوق محفوظة
  </div>
</footer>
    
  );
}
