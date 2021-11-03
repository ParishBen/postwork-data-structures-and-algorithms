def find_first_duplicate(arr)
  # type your code in here
  #setting up second array to push values into if not already in
  garb= []
  i=0
    arr.each do |el|
      garb << el unless garb.include?(el)
    end
    
    while i < arr.length do
     if arr[i] != garb[i]
      then return arr[i]
     
  end
   i+=1
 end
 -1
end

# HEY THIS IS THE SOLUTION'S FILE WAY
# def find_first_duplicate(arr)
#   uniques = Set.new

#   arr.each do |value|
#     return value if uniques.include?(value)

#     uniques.add(value)
#   end

#   -1
# end



# find_first_duplicate([1,2,3,4])
# puts find_first_duplicate([1,2,3,3,2])



if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end



# Please add your pseudocode to this file
# And a written explanation of your solution
