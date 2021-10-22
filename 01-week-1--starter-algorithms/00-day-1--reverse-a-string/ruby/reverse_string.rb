# def reverse_string(str)
#   # type your code in here
#   return str.reverse
# end

def reverse_string(str)
  reversed_str = ""

  str.chars.each do |char|
    reversed_str = char + reversed_str
    puts char, reversed_str
  end

  reversed_str
end

 puts reverse_string('pappy')
#  puts reverse_string('')
#  puts reverse_string('ta')

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')
  puts reverse_string('happy')
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution