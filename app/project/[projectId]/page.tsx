type Params = {
    projectId: string;
}

/*
This web app will fail to build unless this function is added. This is because GH Pages cannot host dynamic webpages
like the one we added here (using the [projectId] slug). So, to fix this, Next.js uses the function below to
constrain the webpage to only the pages that are included in the array.

This function ONLY allows /project/project1, /project/project2, and /project/project3 to exist, and will not use
the dynamic behavior of a normal slug path.
*/
export async function generateStaticParams(): Promise<Params[]> {
    return ["project1", "project2", "project3"].map(p => ({ projectId: p }));
}

const ProjectNamePage = ({ params }: { params: Params }) => {
    return (
        <p>This page features project {params.projectId}</p>
    );
};

export default ProjectNamePage;