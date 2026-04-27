import { allProjects } from '../../data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
    return allProjects.map((project) => ({
        id: project.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = allProjects.find(p => p.id === Number(id));
    return {
        title: project ? `${project.title} - Harri Hidayat` : 'Project Not Found',
        description: project?.description || 'Project detail page',
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProjectDetailClient id={Number(id)} />;
}
