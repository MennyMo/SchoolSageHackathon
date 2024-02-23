from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('home.html')

@app.route('/about')
def about_page():
    return render_template('about.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/courses')
def courses_page():
    return render_template('courses.html')

@app.route('/arts')
def arts_page():
    return render_template('arts.html')



if __name__ == '__main__':
    app.run(debug=True)