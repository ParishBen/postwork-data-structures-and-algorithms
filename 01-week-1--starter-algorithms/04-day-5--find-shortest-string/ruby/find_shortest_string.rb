def find_shortest_string(arr)
  # type your code in here
  to_ints = arr.collect do |a| a.length
  end
  mind = to_ints.min
  idx = to_ints.index(mind)
  #puts mind, to_ints
  arr[idx]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
  ol_test = []
  100.times do 
    ol_test << rand.to_s
  end
  srt_time = Time.now

  1000.times do 
    find_shortest_string(['a','ab'])
    find_shortest_string(ol_test)
  end
  avg_time = (Time.now - srt_time)/2000
  print'avg time: ',avg_time
  
end

# Please add your pseudocode to this file
# And a written explanation of your solution
