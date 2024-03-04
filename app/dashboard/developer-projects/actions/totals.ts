import prisma from "@/lib/prismadb";


export async function getTotalBudget(){
    const projects = await prisma.developerProject.findMany({});

    // Calculate the total budget by summing up the budgets of all projects
    return projects.reduce((acc, project) => acc + project.budget, 0);
}

export async function getProjectTotal(){
    const projects = await prisma.developerProject.findMany({});

    return projects.length;
}

export async function getTotalPending(){
    const projects = await prisma.developerProject.findMany({
        where: {status: 'Pending'}
    });

    return projects.length;
}

export async function getProjectCompleted(){
    const projects = await prisma.developerProject.findMany({
        where: {
            status: 'Completed'
        }
    });

    return projects.length;
}
//

