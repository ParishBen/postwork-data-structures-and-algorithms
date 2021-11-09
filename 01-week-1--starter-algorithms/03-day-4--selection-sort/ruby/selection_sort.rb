def selection_sort(arr)
    # type your code in here
    sorted = []
    
    while arr.length >= 1 do 
      min = arr.min
      the_index = arr.index(min)
      sorted << min
      arr.delete_at(the_index)
  end
  sorted
end

# arsky = [2,3,5,9,66,77,88]
# while arsky.length >= 1 do 
#   arsky.delete_at(0)
#   puts "LENGHTH: #{arsky.length}"
#   p arsky
# end

# def selection_sort(arr)
#   sorted = []

#   until arr.length == 0
#     min = arr.min
#     idx = arr.index(min)
#     sorted << min
#     arr.delete_at(idx)
#     p arr.length
#   end

#   sorted
# end
  puts "RUNNING..."
  if __FILE__ == $PROGRAM_NAME
    puts "Expecting: [-1, 2, 3, 5]"
    print "=> "
    print selection_sort([3, -1, 5, 2])
  puts
    print selection_sort([50,10,-5,4])
    puts
    p selection_sort([5,2,5,1,9])
  
    # Don't forget to add your own!
  
    # BENCHMARK HERE, you can print the average runtime
    long_input = []
  
    100.times { long_input << rand }
    start_time = Time.now
    1000.times do 
      selection_sort(long_input)
      selection_sort([0,5,2])
    end
    after_time = Time.now
    avg_time = (after_time - start_time)/2000
    p "AVERAGE TIME: ",avg_time
  end
  
  # Please add your pseudocode to this file
  # And a written explanation of your solution
  