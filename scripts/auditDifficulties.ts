import { QUESTIONS } from '../src/data/questions';

const byTopic: Record<string, any[]> = {};
QUESTIONS.filter((q) => q.difficulty === 'qiyin').forEach((q) => {
  if (!byTopic[q.topicId]) byTopic[q.topicId] = [];
  byTopic[q.topicId].push(q);
});

for (const [topic, list] of Object.entries(byTopic)) {
  console.log(`\n=================== TOPIC: ${topic} (${list.length} qiyin questions) ===================`);
  list.forEach((q, i) => {
    console.log(`${i + 1}. [${q.id}] ${q.question}`);
  });
}
