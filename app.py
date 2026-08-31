from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Store announcements
announcements = []


# ==========================
# Home Page
# ==========================
@app.route("/")
def home():
    return render_template("index.html")


# ==========================
# Login
# ==========================
@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        role = request.form["role"]

        if role == "teacher":
            return redirect("/teacher")

        elif role == "student":
            return redirect("/student")

    return render_template("login.html")


# ==========================
# Teacher Dashboard
# ==========================
@app.route("/teacher")
def teacher():
    return render_template(
        "teacher.html",
        announcements=announcements
    )


# ==========================
# Student Dashboard
# ==========================
@app.route("/student")
def student():
    return render_template(
        "student.html",
        announcements=announcements
    )


# ==========================
# View Announcements
# ==========================
@app.route("/announcement")
def announcement():
    return render_template(
        "announcement.html",
        announcements=announcements
    )


# ==========================
# Post Announcement
# ==========================
@app.route("/post", methods=["POST"])
def post():

    title = request.form["title"]
    message = request.form["message"]

    announcements.append({
        "title": title,
        "message": message
    })

    return redirect("/teacher")


# ==========================
# Delete Announcement
# ==========================
@app.route("/delete/<int:index>", methods=["POST"])
def delete(index):

    if 0 <= index < len(announcements):
        announcements.pop(index)

    return redirect("/teacher")


# ==========================
# Contact Page
# ==========================
@app.route("/contact")
def contact():
    return render_template("contact.html")


# ==========================
# Run Flask
# ==========================
if __name__ == "__main__":
    app.run(debug=True)