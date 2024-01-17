# hash == collection of key value pairs, obj, dictionary

user = {
  "username" => "Tron",
  "password" => "123",
  "values" => [1,2,3,4],
}

puts user["username"]
p user["values"]

user_two = {
  :username => "Terry"
}

puts :user.methods