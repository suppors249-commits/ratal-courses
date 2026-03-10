import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const majors = [
  {
    title: "الطب البشري",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "الهندسة",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
  },
  {
    title: "طب الأسنان",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/طب-الاسنان.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: " السيبراني",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
  },
  {
    title: "الصيدلة",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الصيدلة.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "القانون",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "التمريض",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/التمريض.png.webp",
    link: "https://wa.me/+201002337674",
  },
  {
    title: "AI",
    img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
  },
];

const requirements = [
  { title: "الاسم رباعي" },
  { title: "اسم المدرسة" },
  { title: "العام الدراسي" },
  { title: "النسبة" },
  { title: "رقم الجلوس" },
  { title: "نوع الشهادة" },
  { title: "جواز السفر" },
  { title: "المستندات المطلوبة" },
];

const faqs = [
  { question: "كيف يمكنني بدء التقديم", answer: "يمكنك البدء بتسجيل حساب على منصة ريتال واتباع خطوات التقديم الخاصة بالمنحة التي ترغب بها." },
  { question: "كم تستغرق عملية المعادلة؟", answer: "عادة تستغرق عملية المعادلة من أسبوعين إلى أربعة أسابيع حسب نوع الشهادة والجامعة." },
  { question: "هل تقدمون مساعدة في  على منح", answer: "نعم، نقدم استشارات كاملة ومتابعة للمنح الدراسية لتسهيل عملية التقديم على الطلاب." },
  { question: "ما هي رسوم الخدمات التي تقدمونها؟", answer: "الرسوم تختلف حسب نوع الخدمة، ويمكنك التواصل مع فريقنا لمعرفة التفاصيل الدقيقة." }
];

export function ScholarshipsPage() {

  const images = [
    "https://i.pinimg.com/736x/40/53/56/4053568214a77cb11b36191712095b81.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <section id="ScholarshipsPage" className="bg-[#f2f9f5] overflow-x-hidden">

      <div className="min-h-screen relative overflow-x-hidden">

        {/* الهيدر */}
        <div
          className="w-full h-70 md:h-96 bg-cover py-20 bg-center relative flex items-center justify-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <h1 className="relative text-[#f2f9f5] text-3xl md:text-5xl font-bold text-center z-10">
            فرصتك الذهبية مع Rital
          </h1>
        </div>

        {/* سكشن التعريف */}
        <section className="bg-[#f2f9f5] py-10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

            <div className="text-right space-y-6">
              <h1 className="text-4xl font-bold text-[#154734]">
                ادرس في مصر وابدأ رحلتك التعليمية معنا!
              </h1>

              <p className="text-gray-600">
                توفر لك مصر تجربة تعليمية مميزة تجمع بين جودة التعليم وتكاليف مناسبة.
              </p>
            </div>

            <div className="relative flex justify-center">

              <img
                src="https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/hs5_2.webp"
                className="w-72 md:w-80 relative z-10"
              />

              <img
                src="https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادرس-في-مصر-للوافدين-2025.webp"
                className="absolute -bottom-6 left-0 w-32 md:w-40 opacity-90"
              />

            </div>

          </div>
        </section>

        <section className="bg-[#f2f9f5] py-6">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    {/* المحتوى */}
    <div className="text-right space-y-6">

      <h2 className="text-3xl font-bold text-[#154734]">
        شريكك الأكاديمي نحو مستقبل مشرق!
      </h2>

      <p className="text-gray-600 leading-relaxed">
        في <span className="font-semibold text-[#154734]">Rital</span> للاستشارات
        التعليمية، نرافق الطلاب العرب الطموحين في رحلتهم لاختيار التخصص المناسب
        والدراسة في أعرق الجامعات المصرية. بخبرتنا ومعرفتنا الكاملة بإجراءات
        القبول، نضمن لك بداية أكاديمية مريحة وآمنة في مصر، من أول استشارة حتى
        الاستقرار الكامل.
      </p>

      {/* القائمة */}
      <ul className="space-y-3">

        <li className="flex gap-2 text-gray-700">
                    <span className="text-[#154734] text-lg">←</span>

          <span>استشارات تعليمية شاملة لاختيار التخصص والجامعة</span>
        </li>

        <li className="flex  justify gap-2 text-gray-700">
                    <span className="text-[#154734] text-lg">←</span>

          <span>تجهيز الملفات ومتابعة إجراءات القبول</span>
        </li>

        <li className="flex   gap-2 text-gray-700">
                    <span className="text-[#154734] text-lg">←</span>

          <span>دعم كامل في ترتيبات الإقامة والسكن</span>
        </li>

        <li className="flex gap-2 text-gray-700">
                    <span className="text-[#154734] text-lg">←</span>

          <span>متابعة شخصية بعد القبول لضمان الاستقرار</span>


        </li>

      </ul>

      {/* زر */}
      <a
        href="https://wa.me/201080016496?text=مرحبًا، أرغب في معرفة المزيد عن الدراسة في مصر."
        target="_blank"
        className="inline-block bg-[#154734] text-white px-6 py-3 rounded-lg hover:bg-[#123a2c] transition"
      >
        سجل الآن للدراسة في مصر
      </a>

    </div>

  </div>
</section>

        {/* الفورم */}
        <section className="bg-[#f2f9f5] py-16">
          <div className="container mx-auto px-4 flex justify-center">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

              <h2 className="text-2xl font-bold text-center text-[#154734] mb-6">
                سجل الآن مع Rital
              </h2>

              <form className="space-y-4 text-right">

                <input
                  type="text"
                  placeholder="الاسم بالكامل"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <input
                  type="text"
                  placeholder="الجنسية"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <div className="flex flex-col sm:flex-row gap-2">

                  <select className="border border-gray-300 rounded-lg p-3">
                    <option>🇸🇦 +966</option>
                    <option>🇪🇬 +20</option>
                    <option>🇦🇪 +971</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="flex-1 border border-gray-300 rounded-lg p-3"
                  />

                </div>

                <input
                  type="text"
                  placeholder="دولة الإقامة"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <input
                  type="text"
                  placeholder="التخصص المطلوب"
                  className="w-full border border-gray-300 rounded-lg p-3"
                />

                <select className="w-full border border-gray-300 rounded-lg p-3">
                  <option>— الرجاء تحديد الدرجة العلمية —</option>
                  <option>بكالوريوس</option>
                  <option>ماجستير</option>
                  <option>دكتوراه</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-[#154734] text-white py-3 rounded-lg"
                >
                  سجل الآن
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* التخصصات */}
        <section className="py-8 bg-[#f2f9f5]">

          <div className="container mx-auto px-4">

            <h2 className="text-center text-3xl font-bold mb-12">
              أفضل التخصصات
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {majors.map((major, index) => (
                <a
                  key={index}
                  href={major.link || "#"}
                  className="bg-white border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg"
                >

                  <img
                    src={major.img}
                    alt={major.title}
                    className="w-20 h-20 object-contain mb-4"
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

        {/* FAQ */}
        <section className="py-20 bg-[#f2f9f5]">

          <div className="container mx-auto px-4">

            <h2 className="text-3xl font-bold text-center mb-12 text-[#154734]">
              الأسئلة الشائعة
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl">

                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between"
                  >
                    <h3 className="font-bold text-[#154734]">
                      {faq.question}
                    </h3>
                  </button>

                  {openFAQ === idx && (
                    <p className="mt-4 text-gray-700">
                      {faq.answer}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* زر واتساب */}
        <a
          href="https://wa.me/+201002337674"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-5 rounded-full shadow-lg flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        

      </div>

    </section>
  );
}