import course_recommender
import course_recommendation_questions


if __name__ == '__main__':
    recommendation = course_recommender.CourseRecommendation()

    for question in course_recommendation_questions.questions:
        # print(question, '\n')
        # Ask questions
        recommendation.ask_question(question['question'], question['options'])
    
    # Recommend a course
    recommendation.recommend_course()

