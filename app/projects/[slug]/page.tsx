import { getProjectBySlug } from "@/lib/projects";
import ProjectDetail from "@/app/components/ProjectDetail";
import { redirect, notFound } from "next/navigation";

interface PageProps {
	params: {
		slug: string;
	};
}

export default function ProjectPage({ params }: PageProps) {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		notFound();
	}

	if (!project.imagePaths || project.imagePaths.length === 0) {
		redirect(project.github);
	}

	return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
	return [];
}
