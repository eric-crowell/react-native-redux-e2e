import { setupServer } from 'msw/node'
import { handlers } from './handlers'

const baseUrl = 'http://localhost:3000';

export const mockServer = () => setupServer(...handlers(baseUrl));
