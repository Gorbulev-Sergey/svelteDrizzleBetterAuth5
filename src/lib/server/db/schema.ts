import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

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
	userId: text()
});

export * from './auth.schema';
