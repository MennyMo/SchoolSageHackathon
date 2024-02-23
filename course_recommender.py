import json

class CourseRecommendation:
    def __init__(self):
        self.score = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
        self.questions = []

    def ask_question(self, question, options):
        print(question)
        for option in options:
            print(option)
        answer = input("Your choice (A/B/C/D): ").upper()
        if answer in self.score:
            self.score[answer] += 1
        else:
            print("Invalid choice! Skipping...")
        self.questions.append({"question": question, "options": options, "answer": answer})

    
    def recommend_course(self):
        max_score = max(self.score.values())
        total_score = sum(self.score.values())
        if total_score == 0:
            print("You didn't answer any questions!")
            return

        courses = {'A': 'You have a knack for problem-solving and innovation, making you well-suited for Engineering disciplines such as Mechanical Engineering, Electrical/Electronics Engineering, or Civil Engineering.', 
                   'B': 'Your passion for helping others and interest in healthcare suggest that you would thrive in Medical Sciences  fields such as Medicine, Pharmacy, or Nursing.', 
                   'C': 'Your entrepreneurial spirit and interest in finance make Business related courses such as Accounting, Finance, or Business Administration a great fit for you.', 
                   'D': 'Your creativity and appreciation for culture and heritage point towards Arts courses such as Fine and Applied Arts, Theatre Arts/Drama, or Mass Communication.'}
        top_courses = [course for course, score in self.score.items() if score == max_score]


        if len(top_courses) == 1 and self.score[top_courses[0]] >= 0.6 * total_score:
            print(f"{courses[top_courses[0]]}")
            print("Use our 'Explore Course' feature to find out more!")
        elif len(top_courses) == 1 and self.score[top_courses[0]] < 0.6 * total_score:
            print(f"{courses[top_courses[0]]}")
            print("Use our 'Explore Course' feature to find out more!")
        elif len(top_courses) == 1 and self.score[top_courses[0]] >= 0.6 * total_score:
            print(f"{courses[top_courses[0]]} ")
            print("Use our 'Explore Course' feature to find out more!")
        elif len(top_courses) == 1 and self.score[top_courses[0]] >= 0.6 * total_score:
            print(f"{courses[top_courses[0]]}")
            print("Use our 'Explore Course' feature to find out more!")
        else:
            print(f"You seem to be drawn to 2 courses: {', '.join(top_courses)}.")
            print("We will advise you to speak to one of our counselors.")

    def save_to_json(self, filename):
        data = {"questions": self.questions}
        with open(filename, 'w') as f:
            json.dump(data, f, indent=2)



if __name__ == '__main__':
    # Create an instance of CourseRecommendation
    recommendation = CourseRecommendation()

    # Ask questions
    recommendation.ask_question("Question 1: If you could invent a new gadget, what would it be?", ["A. A solar-powered phone charger for sustainable energy", "B. A portable medical device for diagnosing illnesses", "C. A budgeting app to manage finances effectively", "D. A virtual reality storytelling platform for immersive experiences"])
    recommendation.ask_question("Question 2: What's your favorite subject in school?", ["A. Mathematics or Physics", "B. Biology or Chemistry", "C. Economics or Commerce", "D. Literature or Fine Arts"])
    recommendation.ask_question("Question 3: What's your dream job?", ["A. Engineer designing eco-friendly infrastructure", "B. Doctor saving lives and improving health outcomes", "C. Entrepreneur running a successful business venture", "D. Artist expressing creativity through various mediums"])
    recommendation.ask_question("Question 4: Which extracurricular activity interests you the most?", ["A. Robotics club or science competitions", "B. Volunteering at hospitals or health awareness campaigns", "C. Business club or financial literacy workshops", "D. Drama club or art exhibitions"])
    recommendation.ask_question("Question 5: If you could travel to any country, where would you go?", ["A. Japan", "B. Switzerland", "C. United States", "D. France"])
    recommendation.ask_question("Question 6: What's your favorite hobby?", ["A. Building model airplanes or robots", "B. Reading medical journals or volunteering at clinics", "C. Managing finances or investing in stocks", "D. Writing stories or creating visual art"])
    recommendation.ask_question("Question 7: Which historical figure inspires you the most?", ["A. Nikola Tesla", "B. Florence Nightingale", "C. Steve Jobs", "D. Leonardo da Vinci"])
    recommendation.ask_question("Question 8: What's your favorite Nigerian food?", ["A. Jollof rice and grilled plantain", "B. Egusi soup with pounded yam", "C. Moi moi and fried plantain", "D. Akara and pap (ogi)"])
    recommendation.ask_question("Question 9: If you could choose a superpower, what would it be?", ["A. Ability to manipulate technology with your mind", "B. Healing powers to cure any illness", "C. Financial intuition to make profitable investments", "D. Creative imagination to bring ideas to life"])
    recommendation.ask_question("Question 10: What's your favorite movie genre?", ["A. Action-packed blockbusters with thrilling stunts", "B. Emotional dramas exploring human relationships", "C. Inspirational stories of business success and resilience", "D. Artistic films showcasing culture and heritage"])
    recommendation.ask_question("Question 11: If you could redesign your school, what would you add?", ["A. Solar panels for renewable energy", "B. Fully equipped medical clinic for student health", "C. Entrepreneurship hub for student startups", "D. Art studio for creative expression"])
    recommendation.ask_question("Question 12: What's your favorite Nigerian music genre?", ["A. Afrobeat and hip-hop", "B. Highlife and juju", "C. Gospel and worship", "D. Fuji and traditional folklore"])
    recommendation.ask_question("Question 13: If you could solve one social issue in Nigeria, what would it be?", ["A. Infrastructure development and urban planning", "B. Access to quality healthcare for all Nigerians", "C. Youth unemployment and economic empowerment", "D. Preservation of Nigerian cultural heritage and arts"])
    recommendation.ask_question("Question 14: What motivates you to succeed academically and professionally?", ["A. Impacting the world through innovation and technology", "B. Saving lives and making a difference in healthcare", "C. Building wealth and financial security for yourself and others", "D. Expressing yourself creatively and leaving a legacy through art"])

    # Recommend a course
    recommendation.recommend_course()

    # Save questions to JSON file
    recommendation.save_to_json("course_recommendation_questions.json")

