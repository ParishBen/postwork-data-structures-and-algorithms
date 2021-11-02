def find_first_duplicate(arr)
  # type your code in here
  garb= []
  bii=0
    arr.each do |el|
      garb << el unless garb.include?(el)
    end
    #puts " ARR: ",arr, " + garb: ",garb
  #end
    while bii < arr.length do
     if arr[bii] != garb[bii]
      then return arr[bii]
     
      #return arr[bii]
    #end 
  end
  bii+=1
 end
 -1
end

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
