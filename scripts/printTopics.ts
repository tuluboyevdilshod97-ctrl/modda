import { QUESTIONS } from '../src/data/questions';

const topics = ['konstitutsiya', 'davlat_huquq', 'mehnat', 'jinoyat', 'oila', 'mamuriy', 'fuqarolik'];

topics.forEach((t) => {
  const list = QUESTIONS.filter((q) => q.topicId === t && q.difficulty === 'qiyin');
  console.log(`\n=================== TOPIC: ${t} (${list.length} qiyin) ===================`);
  list.forEach((q, i) => {
    console.log(`${i + 1}. [${q.id}] ${q.question.substring(0, 100)}`);
  });
});
