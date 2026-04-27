export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
    link: string;
    studyCase: string;
    // Detail page fields
    longDescription: string;
    techStack: string[];
    features: string[];
    role: string;
    duration: string;
    platform: string;
    screenshots: string[];
}

export const allProjects: Project[] = [
    {
        id: 1,
        title: "Smart HRM Proven",
        category: "Mobile App",
        description: "Smart HRM Proven is a Flutter-based HRIS mobile application designed to manage 5,000+ employees, featuring scalable architecture and multi-level approval workflows to support complex enterprise HR processes.",
        image: "/cover.jpg",
        slug: "mobile-app",
        link: "https://play.google.com/store/apps/details?id=com.pfi.smart_hrm&pcampaignid=web_share",
        studyCase: "#",
        longDescription: "Smart HRM Proven is a comprehensive HRIS (Human Resource Information System) mobile application built with Flutter. The app is designed to handle the full spectrum of HR operations for enterprises with 5,000+ employees. It features a robust multi-level approval workflow system, real-time attendance tracking, leave management, and payroll integration. The architecture was designed with scalability in mind, ensuring smooth performance even under heavy concurrent usage.",
        techStack: ["Flutter", "Dart", "REST API", "Firebase", "GetX", "Shared Preferences", "Google Maps", "Firebase FCM"],
        features: [
            "Multi-level approval workflows",
            "Real-time attendance tracking with GPS",
            "Leave & overtime management",
            "Employee self-service portal",
            "Push notification system",
        ],
        role: "Mobile Developer",
        duration: "2024-Present",
        platform: "iOS & Android",
        screenshots: ["/cover.jpg"]
    },
    {
        id: 2,
        title: "Milou Farm House",
        category: "Mobile App",
        description: "Milou Farm House is a mobile loyalty and food ordering application that enables customers to place orders, earn loyalty points, and redeem rewards within a single, seamless user experience.",
        image: "/milou_farm.jpg",
        slug: "mobile-app",
        link: "https://play.google.com/store/search?q=milou+farm+house&c=apps&hl=id",
        studyCase: "#",
        longDescription: "Milou Farm House is a feature-rich mobile application that combines food ordering with a comprehensive loyalty rewards system. Customers can browse the menu, customize orders, earn points with every purchase, and redeem exclusive rewards. The app provides real-time order tracking, personalized recommendations based on order history, and seamless payment integration.",
        techStack: ["Flutter", "Dart", "REST API", "Firebase Cloud Messaging", "Provider", "Shared Preferences", "Google Maps", "Firebase FCM"],
        features: [
            "Digital menu with real-time availability",
            "Loyalty points system",
            "Order tracking in real-time",
            "Reward redemption",
            "Push notifications for promotions",
            "Order history & reorder functionality"
        ],
        role: "Mobile Developer",
        duration: "2023-2024",
        platform: "iOS & Android",
        screenshots: ["/milou_farm.jpg"]
    },
    {
        id: 3,
        title: "Mides",
        category: "Mobile App",
        description: "MIDES is a mobile learning application designed for military academy–style education, providing structured learning modules and training materials through a scalable mobile platform.",
        image: "/mides.jpg",
        slug: "mobile-app",
        link: "#",
        studyCase: "#",
        longDescription: "MIDES (Military Digital Education System) is a specialized mobile learning platform built for military academy-style education institutions. The application delivers structured learning modules, video-based training materials, and interactive assessments. It supports offline learning capabilities, progress tracking, and hierarchical content management aligned with military training frameworks.",
        techStack: ["Flutter", "Dart", "REST API", "Video Streaming", "GetX", "Shared Preferences"],
        features: [
            "Structured learning modules",
            "Interactive assessments & quizzes",
            "Hierarchical content management"
        ],
        role: "Mobile Developer",
        duration: "6 months",
        platform: "iOS & Android",
        screenshots: ["/mides.jpg"]
    },
    {
        id: 4,
        title: "LASHUP",
        category: "Mobile App Design",
        description: "LASHUP is a beauty-focused loyalty and royalty mobile application designed to manage rewards and incentives within a digital ecosystem.",
        image: "/lashup.jpg",
        slug: "mobile-app",
        link: "https://play.google.com/store/apps/details?id=com.lashup.quetra&hl=id",
        studyCase: "#",
        longDescription: "LASHUP is a beautifully designed mobile application focused on the beauty industry's loyalty and rewards ecosystem. The app enables beauty brands and salons to create, manage, and distribute loyalty rewards and incentives to their customers. Features include tiered membership levels, exclusive beauty deals, appointment booking integration, and social sharing capabilities.",
        techStack: ["Flutter", "Dart", "Provider", "REST API", "SharedPreferences", "Google Maps", "Firebase FCM"],
        features: [
            "Tiered membership system",
            "Reward points & redemption",
            "Beauty deals & promotions",
            "Appointment booking integration",
            "Social sharing features",
            "Personalized beauty recommendations"
        ],
        role: "UI/UX Designer & Mobile Developer",
        duration: "2023-2024",
        platform: "iOS & Android",
        screenshots: ["/lashup.jpg"]
    },
    {
        id: 5,
        title: "Squadra People",
        category: "Mobile App",
        description: "Squadra People is a mobile HRIS application designed to manage employee data and HR workflows through a scalable and user-friendly platform.",
        image: "/squadra.jpg",
        slug: "mobile-app",
        link: "#",
        studyCase: "#",
        longDescription: "Squadra People is a modern HRIS mobile application designed to streamline HR operations for medium to large enterprises. The platform provides comprehensive employee data management, attendance tracking, leave management, and performance review capabilities. Built with a focus on user experience, it simplifies complex HR workflows into intuitive mobile interactions.",
        techStack: ["Flutter", "Dart", "REST API", "Provider", "Firebase"],
        features: [
            "Employee data management",
            "Attendance tracking",
            "Leave management system",
            "Performance reviews",
            "Organizational chart",
            "Document management"
        ],
        role: "Mobile Developer",
        duration: "3 months",
        platform: "iOS & Android",
        screenshots: ["/squadra.jpg"]
    },
    {
        id: 6,
        title: "Oprtech",
        category: "Mobile App",
        description: "Oprtech is a mobile reimbursement application designed to manage employee expense claims through a structured and scalable digital workflow.",
        image: "/oprtech.jpg",
        slug: "mobile-app",
        link: "https://play.google.com/store/apps/details?id=com.ahlibangunsistem.oprtech_app&pcampaignid=web_share",
        studyCase: "#",
        longDescription: "Oprtech is a specialized mobile application focused on streamlining the employee reimbursement and expense claim process. The app provides a structured digital workflow for submitting, reviewing, and approving expense claims. Features include receipt scanning via camera, multi-level approval chains, expense categorization, and integration with accounting systems for seamless financial reporting.",
        techStack: ["Flutter", "Dart", "REST API", "Camera", "Firebase", "SharedPreferences", "Provider"],
        features: [
            "Receipt scanning & OCR",
        ],
        role: "Mobile Developer",
        duration: "6 months",
        platform: "iOS & Android",
        screenshots: ["/oprtech.jpg"]
    },
    {
        id: 7,
        title: "BarberBos Member",
        category: "Mobile App",
        description: "Barberbos Membership is a mobile loyalty application designed for barbershop customers, enabling membership management and reward-based engagement.",
        image: "/barber.jpg",
        slug: "mobile-app",
        link: "#",
        studyCase: "#",
        longDescription: "BarberBos Member is a customer-facing mobile loyalty application designed for the BarberBos barbershop chain. The app enables customers to manage their memberships, book appointments, earn loyalty points with every visit, and redeem exclusive rewards. It features a clean, modern interface that reflects the premium barbershop experience.",
        techStack: ["Flutter", "Dart", "REST API", "Firebase Cloud Messaging"],
        features: [
            "Membership management",
            "Appointment booking",
            "Loyalty points system",
            "Reward redemption",
            "Visit history tracking",
            "Push notification promotions"
        ],
        role: "Mobile Developer",
        duration: "2023-2024",
        platform: "iOS & Android",
        screenshots: ["/barber.jpg"]
    },
    {
        id: 8,
        title: "BarberBos HRIS",
        category: "Mobile App",
        description: "Barberbos HRIS is a mobile HRIS application designed to support employee and HR operations within Barberbos through a scalable digital platform.",
        image: "/barber.jpg",
        slug: "mobile-app",
        link: "#",
        studyCase: "#",
        longDescription: "BarberBos HRIS is an internal HR management mobile application built for BarberBos barbershop chain. The app handles employee scheduling, attendance tracking, performance monitoring, and payroll management across multiple branch locations. It provides managers with real-time insights into workforce operations and enables employees to manage their schedules and HR-related tasks on the go.",
        techStack: ["Flutter", "Dart", "REST API", "Provider", "Firebase"],
        features: [
            "Employee scheduling",
            "Multi-branch attendance tracking",
            "Performance monitoring",
            "Payroll management",
            "Branch-level analytics",
            "Employee self-service"
        ],
        role: "Mobile Developer",
        duration: "2023-2024",
        platform: "iOS & Android",
        screenshots: ["/barber.jpg"]
    },
    {
        id: 9,
        title: "Indonesia Health Pass",
        category: "Mobile App",
        description: "Indonesia Health Pass is a mobile health application designed to record COVID-19 test results and manage user COVID status through a structured digital system.",
        image: "/ihp.jpg",
        slug: "mobile-app",
        link: "#",
        studyCase: "#",
        longDescription: "Indonesia Health Pass is a critical public health mobile application developed during the COVID-19 pandemic. The app serves as a digital health passport, recording COVID-19 test results, vaccination status, and health declarations. It features QR code-based verification for venue entry, real-time status updates, and integration with national health databases to provide a reliable digital health verification system.",
        techStack: ["Flutter", "Dart", "REST API", "QR Code", "Firebase", "Government API"],
        features: [
            "COVID-19 test result recording",
            "Digital vaccination certificate",
            "QR code health verification",
            "Real-time status updates",
            "Health declaration forms",
            "Venue check-in system"
        ],
        role: "Mobile Developer",
        duration: "5 months",
        platform: "iOS & Android",
        screenshots: ["/ihp.jpg"]
    },
];

export function getProjectById(id: number): Project | undefined {
    return allProjects.find(p => p.id === id);
}
