import express from 'express';
import 

const app = express();
const port = 3000;

// In-memory store for tasks
let tasks = [
  { id: 1, dueDate: 'tomorrow', title: 'Buy groceries', description: 'Go to the store and buy essentials', collaborator: 'John', completed: false },
  { id: 2, dueDate: 'tomorrow', title: 'Read a book', description: 'Finish the novel on the reading list', collaborator: 'Alice', completed: true },
  { id: 3, dueDate: 'tomorrow', title: 'Go for a run', description: 'Run 5 miles in the park', collaborator: 'Bob', completed: false },
];


interface TaskInput {
    dueDate: string;
    title: string;
    description: string;
    collaborator: string;
}

// GraphQL schema
const typeDefs = gql`
  type Task {
    id: ID!
    dueDate: String!
    title: String!
    description: String!
    collaborator: String!
    completed: Boolean!
  }

  input TaskInput {
    dueDate: String!
    title: String!
    description: String!
    collaborator: String!
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    addTask(task: TaskInput): Task
    updateTask(id: ID!, dueDate: String, title: String, description: String, collaborator: String, completed: Boolean): Task
    deleteTask(id: ID!): Boolean
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    addTask: (_, { task }: { task: TaskInput }) => {
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        dueDate: task.dueDate,
        title: task.title,
        description: task.description,
        collaborator: task.collaborator,
        completed: false,
      };

      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, dueDate, title, description, collaborator, completed }: { id: string; dueDate?: string; title?: string; description?: string; collaborator?: string; completed?: boolean }) => {
      const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

      if (taskIndex === -1) {
        throw new Error('Task not found');
      }

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        dueDate: dueDate || tasks[taskIndex].dueDate,
        description: description || tasks[taskIndex].description,
        collaborator: collaborator || tasks[taskIndex].collaborator,
        completed: completed !== undefined ? completed : tasks[taskIndex].completed,
      };

      return tasks[taskIndex];
    },
    deleteTask: (_, { id }: { id: string }) => {
      const taskId = parseInt(id);
      tasks = tasks.filter((task) => task.id !== taskId);
      return true;
    },
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Apply Apollo Server as middleware to Express
server.applyMiddleware({ app });

// Start the server
app.listen(port, () => {
  console.log(`Server is currently running on http://localhost:${port}/graphql`);
});
