import { getProjectBySlug, projects } from "@/lib/projects";
import ProjectDetail from "@/app/components/ProjectDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

	return <ProjectDetail project={project} />;
}

export function generateMetadata({ params }: PageProps): Metadata {
	const project = getProjectBySlug(params.slug);

	return project
		? {
				title: `${project.title} - Faizan Karamat`,
				description: project.description,
			}
		: {};
}

export function generateStaticParams() {
	return projects.map(({ slug }) => ({ slug }));
}
