import { AnswersInterface } from './answers.state';
import { RouteInterface } from './route.state';
import { QuestionsPageInterface } from './questionsPage.state';
import { ScoreInterface } from './score.state';
export interface IAppState {
	questions: AnswersInterface;
	currentPage: RouteInterface;
	questionsPage: QuestionsPageInterface;
	score: ScoreInterface
}
