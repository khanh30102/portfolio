import myPhoto from "../assets/images/anh_cv.png";
export const personalInfo = {
  name: "Nguyễn Minh Khánh",
  role: "Frontend / Web Developer Intern",
  description: "Tôi là một lập trình viên đam mê xây dựng các giao diện web đẹp mắt, tối ưu trải nghiệm người dùng và hiệu năng cao.",
  email: "nguyenminhkhanh30102@gmail.com",
  github: "https://github.com/khanh30102",
  facebook: "https://www.facebook.com/khanh30102",
  avatar: myPhoto
};

export const aboutPage = {
  title: "Về bản thân tôi",
  description: "Tôi là một sinh viên ngành Công nghệ thông tin với định hướng trở thành Frontend Developer. Tôi có nền tảng về React, PHP và tư duy thiết kế tốt từ việc sử dụng các công cụ như Figma, Photoshop.",
  interests: ["Coding", "Design", "Gaming", "Technology"],
  stats: [
    { label: "Năm sinh", value: "2002" },
    { label: "Dự án hoàn thành", value: "3+" },
  ]
};

export const experiences = [
  {
    id: 1,
    time: "01/2023 - 08/2023",
    company: "Shinhan Bank",
    role: "Sale sản phẩm tài chính",
    description: "Tư vấn sản phẩm tài chính cho khách hàng, gọi điện tư vấn (tele-marketing) và thực hiện báo cáo hàng tuần."
  },
  {
    id: 2,
    time: "2020 - 2025",
    company: "Shopee Express",
    role: "Nhân viên kho",
    description: "Xử lý đơn hàng, scan hàng hóa và đảm bảo quy trình vận hành kho bãi đúng tiến độ."
  }
];

export const projects = [

  {
    id: 1,
    title: "Portfolio Cá nhân",
    description: "Website giới thiệu bản thân và các kỹ năng lập trình Frontend, được xây dựng theo dạng Single Page Application.",
    image: "https://placehold.co/600x400/png?text=React+Portfolio",
    tech: ["React JS", "Tailwind CSS", "Vite"],
    link: "https://github.com/khanh30102/portfolio"
  }
];

export const education = [
  {
    id: 1,
    time: "Hiện tại",
    school: "Cao Đẳng Công Nghệ Thông Tin",
    degree: "Web Development",
    description: "Học tập chuyên sâu về thiết kế và phát triển website."
  }
];

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React JS", "Angular", "Tailwind CSS"],
  backend: ["PHP", "MySQL", "Firebase"],
  tools: ["Git", "VS Code", "Figma", "Adobe Photoshop", "Adobe Illustrator"]
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];