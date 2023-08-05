require 'matrix'
def is_valid_sudoku(board)

  
  board_matrix = Matrix[*board]

  x = 0
  while x < 7
  
  cube_1 = board_matrix.row(x)[0..2] + 
  board_matrix.row(x+1)[0..2] + 
  board_matrix.row(x+2)[0..2]
    return false if validate_row_uniq(cube_1) === false
    
  cube_2 = board_matrix.row(x)[3..5] + 
  board_matrix.row(x+1)[3..5] + 
  board_matrix.row(x+2)[3..5]
    return false if validate_row_uniq(cube_2) === false

  cube_3 = board_matrix.row(x)[6..8] + 
  board_matrix.row(x+1)[6..8] + 
  board_matrix.row(x+2)[6..8]
    return false if validate_row_uniq(cube_3) === false
  
  x+=3
  end
  
  i = 0
  while i < board[0].length
    # print "Column No. #{i}: #{board_matrix.column(i).to_a}"
    return false if validate_row_uniq(board_matrix.column(i).to_a) === false
    # puts ''
    # print "Row No. #{i}: #{board_matrix.row(i).to_a}"
    return false if validate_row_uniq(board_matrix.row(i).to_a) === false
    # puts ''
    
    i += 1
  end
return true
end

def validate_row_uniq(one_row)
  no_periods = one_row.select { |n| n.to_i > 0 }

  false if no_periods.uniq.length != no_periods.length
end

def top_k_frequent(nums, k)
    int_to_count_dict = {}
    for i in nums do
        if int_to_count_dict.include?(i)
            int_to_count_dict[i] += 1
        else
            int_to_count_dict[i] = 1
        end
    end
  new_hash = int_to_count_dict.max_by(k){|a,b| int_to_count_dict[a]}
  final_order = []
  new_hash.each do |count_array|
    final_order << count_array[0]
  end
 return final_order
end

def find_kth_largest(nums, k)
  nums.sort!
  nums[-k]
  
end