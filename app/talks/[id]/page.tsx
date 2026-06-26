import { talks } from '../../data/talks';
import TalksDetailEvent from './TalksDetail';

export function generateStaticParams() {
    return talks.map((talk) => ({
        id: talk.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = talks.find(p => p.id === Number(id));
    return {
        title: project ? `${project.title} - Harri Hidayat` : 'Project Not Found',
        description: project?.description || 'Project detail page',
    };
}

export default async function TalksDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <TalksDetailEvent id={Number(id)} />;
}
