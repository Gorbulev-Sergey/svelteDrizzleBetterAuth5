import type { InferInsertModel } from 'drizzle-orm';
import type { posts } from './server/db/schema';

export type TPost = InferInsertModel<typeof posts>;
