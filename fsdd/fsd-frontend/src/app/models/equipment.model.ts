export interface Equipment {
    id?: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    condition: string;
    costPerUnit: number;
    location: string;
    status: string;
    lastMaintenance: Date;
    nextMaintenance: Date;
} 