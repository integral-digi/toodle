import HomeIcon from "@/public/assets/HomeIcon";
import { ReactNode } from "react"; 


interface Task {
  title: string;
  about: string;
  collaborator?: string[];
  completed: boolean;
}

interface TaskCategory {
  id: number;
  name: string;
  description: string;
  icon: ReactNode; 
  tasks: Task[];
}

export const taskCategories: TaskCategory[] = [
  {
    id: 1,
    name: "Home",
    description: "default toodle category",
    icon: <HomeIcon />,
    tasks: [
      { title: "Random Task", about: "Random description", collaborator: ["Charles"], completed: false }
    ]
  }
];

export default TaskCategory; 
