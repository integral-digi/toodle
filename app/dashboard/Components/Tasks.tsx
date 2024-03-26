import HomeIcon from "@/public/assets/HomeIcon";
import PremiumIcon from "@/public/assets/PremiumIcon";
import { ReactNode } from "react"; 


interface Task {
  taskId: any;
  dueDate: string;
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
      { taskId: 1, dueDate: "today", title: "Design the homepage and withdrawal page", about: "Random description", collaborator: ["Charles"], completed: false }
    ]
  },
  {
    id: 2,
    name: "Test-Ace",
    description: "Test Ace web app design & development",
    icon: <PremiumIcon />,
    tasks: [
      { taskId: 11, dueDate: "tomorrow", title: "Meditate or do yoga. Take some time to relax and de-stress", about: "Random description", collaborator: ["Ben", "Omor"], completed: false },
      { taskId: 2, dueDate: "tomorrow", title: "Take a tour of the neighbourhood", about: "Random description", collaborator: ["Ben"], completed: false }
    ]
  }
];

export default TaskCategory; 
