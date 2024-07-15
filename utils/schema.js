import { serial, varchar, text } from "drizzle-orm/pg-core"; // Use pg-core for PostgreSQL
import { pgTable } from "drizzle-orm/pg-core";

export const OralExam = pgTable('oralExam', {
  id: serial('id').primaryKey(),
  jsonOralResp: text('jsonOralResp').notNull(),
  examTitle: varchar('examTitle').notNull(),
  examDesc: varchar('examDesc').notNull(),
  examLevel: varchar('examLevel').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  examId: varchar('examId').notNull()
});
