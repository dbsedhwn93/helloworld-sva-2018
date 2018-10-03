import turtle


t = turtle.Turtle()

# Draw a brown house
t.color('red')


t.speed(0)
# Draw the base

sides = 5

def shape(size, sides):
  for i in range(sides):
    t.forward(size)
    t.left(360/sides)
for i in range(10):
  t.circle(5*i)
  t.circle(-5*i)
  t.left(i)

t.color('brown')
for i in range(41):
  shape(5*i, i)
  t.left(i)



# Draw the roof


