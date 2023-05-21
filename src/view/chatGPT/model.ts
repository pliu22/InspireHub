export interface chatModel {
  key: number
  status: 'pending' | 'done' | 'error'
  question: {
    content: string;
  }
  answer: {
    content: string;
  }
}
