import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { user } from './auth.schema';

export const posts = pgTable('posts', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	description: text(),
	cover: text('cover'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at')
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
	userId: text().references(() => user.id, { onDelete: 'cascade' })
});

export * from './auth.schema';
