/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://oral-exam-ai_owner:8ZecOhU7qSKm@ep-ancient-union-a1fpwren.ap-southeast-1.aws.neon.tech/oral-exam-ai?sslmode=require",
    }
  };
  