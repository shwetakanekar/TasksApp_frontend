export class Task {
  id?: string;
  title?: string;
  description?: string;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export class TasksResponse {
  tasks?: Task[];
}
