export interface Project {
    id?: number;
    name: string;
    description: string;
    type: string;
    status: string;
    startDate: Date;
    provisionalEndDate: Date;
    endDate?: Date;
}
