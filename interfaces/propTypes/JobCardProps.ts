export interface JobCardProps {
    id: string,
    title: string,
    description: string,
    payment: {
        min: number,
        max: number
    } 
    skills: string[]
}