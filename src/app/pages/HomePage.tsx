import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import { ProgramsSection } from "../components/ProgramsSection";
import { ConsultationCTA } from "../components/ConsultationCTA";

import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { CertificateServices } from "../components/CertificateServices";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";
import UniversitiesSlider from "../components/niversitiesSlider";
import ritalImage from "../pilden/rital.png"
import ChatBot from "../components/ChatBot";
import WhyTrueUniv from "../components/WhyTrueUniv";

const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
   
    {
      title: " السيبراني",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
    },
   
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
  
   
  
   
    {
      title: "Ai",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
    },
  ];
// خدمات
const services = [
  { title: "التقديم على المنح الدراسية", slug: "scholarships" },
  { title: "التسجيل في الكورسات", slug: "Courses" },
  { title: "استخراج وتجهيز الشهادات", slug: "CertificateServices" },
  { title: "الاستشارات التعليمية", slug: "Consultation" },
];

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <StatsSection />
       
      <section className="py-3 flex justify-center bg-[#f2f9f5]">
  <div className="relative bg-[#f2f9f5] rounded-3xl shadow-xl w-[330px] max-w-sm p-4 md:p-6 flex flex-col items-center text-right">
    {/* حدود البطاقة */}
    <div className="absolute top-0 left-0 w-full h-full  border-2 border-[#154734] rounded-3xl pointer-events-none"></div>

    {/* الصورة */}
    <div className="relative -mt-16 z-20">
      <img
        src="https://unitededucation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmiling-student.49aad619.png&w=828&q=60"
        alt="student"
        className="w-30 h-25 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>

    <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-4">خدمات ريتال</h2>

    {/* الخدمات */}
    <div className="grid md:grid-cols-2 gap-2 w-full">
      {services.map((service, idx) => (
        <Link
          key={idx}
          to={`/services/${service.slug}`}
          className="block bg-[#f2f9f5] p-3 rounded-xl shadow hover:shadow-md transition text-[#0d2b5e] font-medium text-center"
        >
          {service.title}
        </Link>
      ))}
    </div>

    {/* زر المزيد */}
    <div className="mt-4 z-10">
      <Link
        to="/services"
        className="bg-[#154734] z-100  text-white px-5 py-2 rounded-full hover:bg-[#0d2b5e] transition"
      >
        المزيد
      </Link>
    </div>
    <div className="relative -mt-7 z-100">
      
    </div>
  </div>
      </section>
       <section className="py-6 flex justify-center bg-[#f2f9f5]">
      <div className="bg-[#f2f9f5] rounded-3xl shadow-xl w-full max-w-md p-8 flex flex-col items-center text-center">
        {/* الصورة */}
        <img
          src={ritalImage}
          alt="ريتال التعليمية"
          className="w-48 h-auto mb-6 rounded-xl"
        />

        <h2 className="text-3xl font-bold text-[#0d2b5e] mb-4">
          تعرف على ريتال التعليمية أكثر
        </h2>
        <p className="text-gray-600 mb-6">
          اضغط على الزر التالي لزيارة صفحة "عن ريتال التعليمية" ومعرفة كل التفاصيل.
        </p>
        <Link
          to="/about"
          className="bg-[#154734] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          المزيد عن ريتال
        </Link>
      </div>
    </section>
    <section className="py-8 bg-[#f2f9f5]">

      <div className="container mx-auto px-4">

        {/* العنوان */}
        <h2 className="text-center text-[#0d2b5e] text-3xl md:text-4xl font-bold mb-12">
           أفضل التخصصات
        </h2>

        {/* الكروت */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {majors.map((major, index) => (
            <a
              key={index}
              href={major.link || "#"}
              className="bg-[#f2f9f5] border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >

              <img
                src={major.img}
                alt={major.title}
                className="w-10 h-10 object-contain mb-4 text-[#0d2b5e]"
              />

              <h3 className="font-bold text-lg mb-1">
                {major.title}
              </h3>

              <p className="text-green-600 font-semibold">
                سجل الآن
              </p>

            </a>
          ))}

        </div>

      </div>

    </section>
      <WhyTrueUniv />
      {/* Slider الجامعات */}
      <UniversitiesSlider />
      <ChatBot />

      {/* سكشن About مختصر مع زر يفتح AboutPage */}
     
      <AboutSection />
   
      {/* قسم الخدمات */}
      
      <section className="container mx-auto px-4 py-16 bg-[#f2f9f5]">
     <div className="bg-[#0d2b5e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* الأيقونة + النص */}
    <div className="flex items-center gap-4 text-white">
      <img
        src="https://trueuniv.com/wp-content/uploads/2025/05/svgviewer-png-output.png"
        alt="icon"
        className="w-12 h-12 text-white"
      />

      <div>
        <h3 className="text-xl font-bold">دعنا نساعدك</h3>
        <p className="text-gray-200">
          ابحث عن جامعتك وتخصصك المناسب لك
        </p>
      </div>
    </div>

    {/* زر التواصل */}
    <a
      href="https://api.whatsapp.com/send/?phone=905315016019"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#f2f9f5] text-[#154734] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      تواصل معنا
    </a>

  </div>
</section>



      {/* AboutSection كامل */}
      
      {/* <ConsultationCTA /> */}
      <ContactSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
    
     <BlogSection /> 
     
     

    </div>
  );
}