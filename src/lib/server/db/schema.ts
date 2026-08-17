import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { user } from './auth.schema';
import { relations } from 'drizzle-orm';

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

export const postsRelations = relations(posts, ({ one }) => ({
	user: one(user, {
		fields: [posts.userId],
		references: [user.id]
	})
}));

export * from './auth.schema';
