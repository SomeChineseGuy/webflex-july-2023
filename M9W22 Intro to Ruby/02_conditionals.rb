# How do we ask a question?
num = 9
if num > 11
  puts "The number is over 11"
elsif  num == 10
  puts "The number is 10"
else
  puts "Pick a number"
end

# && || Works the same way
# Only 2 False values
# False or Nil

email = "@Email"
if !email
  puts "PLease give me an email or password"
end

unless email
  puts "Please give me an email"
else 
  puts "You have given me a email"
end

# if (true) console.log("Hello world")

puts "Hello World" if 5 == 5

puts "Hello New World" unless 10 == 1

puts 10 == 10 ? "Good math" : "Bad Math!"
