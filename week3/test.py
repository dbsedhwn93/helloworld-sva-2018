import random
import time


min = 1
max = 6



roll_again = "yes"

while roll_again == "yes" or roll_again == "y":
    print "Roll the dice until you win the computer"
    time.sleep(1)
    print "3..."
    time.sleep(1)
    print "2..."
    time.sleep(1)
    print "1..."
    time.sleep(1)
    print "Computer's dice value is:"
    print random.randint(min,max)
    time.sleep(1)
    print "Rolling the dice..."
    time.sleep(1)
    print "The value is...."
    print random.randint(min,max)
  

    roll_again = raw_input("Roll the dices again?")
if roll_again == "no":
    print "Joining Danielle's Trivia game..."
    time.sleep(3)
    


score = 0

questions = ["Which U.S. state has the motto Live Free or Die on their license plate?\n->",
             "Foie gras is a french delicacy made from the liver of what animal?\n->",
             "What 1985-1992 sitcom earned Emmy awards for its four stars, all women over the age of 50?\n->",
             "In which country were the first Olympic Games held?\n->",
             "What was the name of cowboy star Roy Rogers' palomino horse?\n->",
             "Bogota is the high altitude capital of which country?\n->",
             "Who plays Jack Ryan in the 2002 American spay thriller The Sum of all Fears?\n->",
             "In the game of pool, what is the standard color for the one ball?\n->",
             "What was the first all-professional baseball team with salaried players\n->",
             "Which continent is also a country?\n->"]
answers = ["new hampshire","goose","golden girls","greece","trigger","colombia","ben affleck","yellow","red stockings","australia"]
questionCount = len(questions)


print("---------------------------------")
print("Welcome to Danielle's Trivia")
print("---------------------------------\n")

question = random.sample(range(1, len(questions) + 1), len(questions))

for num in question:
    user_answer = raw_input(questions[num - 1])
    if user_answer.lower() == answers[num - 1]:
        print("Correct\n")
        score += 1
    else:
        print("Incorrect\n")



print("Your final score is" + " " + str(score) + " out of " + str(len(questions)) + "\n")