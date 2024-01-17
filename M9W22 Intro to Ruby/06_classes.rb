# MVC 3 - read, write, Read and write
class Car
  # constructor - blueprint of your class
  def initialize make, model, year
    # this.make === make
    @make = make
    @model = model
    @year = year
  end

  # Read
  # attr_reader :make
  # attr_reader :model

  # Write
  # attr_writer :make

  # Both read and write
  attr_accessor :make, :year, :model
  # def make 
  #   @make = make
  # end
end

my_car = Car.new('Honda', 'CRV', 2007)
puts my_car.make
puts my_car.model

my_car.make = "Toyota"
puts my_car.make
my_car.year = 2010
puts my_car.year
