export interface Talk {
    id: number;
    title: string;
    date: string;
    description: string;
    longDescription: string;
    event: string;
    location: string;
    type: string;
    link: string;
    video: string;
    image: string;
    tags: string[];
    highlights: string[];
    audience: string;
    duration: string;
}

export const talks: Talk[] = [
    {
        id: 1,
        title: "Super Full Stack Developer",
        event: "MeetAp Software Engineer",
        date: "Nov 2024",
        location: "Bogor, Indonesia",
        type: "Workshop",
        audience: "Junior & Mid-level Developers",
        duration: "3 Hours",
        description: "Mentored members in Flutter development, focusing on state management, clean architecture, and mobile best practices.",
        longDescription: "A hands-on workshop designed to help software engineers understand the modern full-stack development landscape. We covered everything from mobile development with Flutter, backend services, RESTful APIs, to deployment strategies. Participants built a real-world portfolio project from scratch, gaining practical experience in clean architecture, state management with GetX/Bloc, and integrating third-party services. The session included live coding, Q&A, and peer code reviews.",
        link: "#",
        video: "#",
        image: "/talks.jpg",
        tags: ["Flutter", "GetX", "Clean Architecture", "REST API", "Mobile Dev"],
        highlights: [
            "Built a full end-to-end mobile app from scratch",
            "Explored state management with GetX and Bloc",
            "Applied Clean Architecture principles",
            "Integrated REST APIs and third-party services",
            "Conducted live code reviews and Q&A sessions",
            "Guided participants through deployment on Play Store",
        ],
    },
];

export function getTalkById(id: number): Talk | undefined {
    return talks.find(p => p.id === id);
}