# == Schema Information
#
# Table name: book_read_statuses
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  user_id    :integer          not null
#  status     :string           default("unread"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookReadStatusTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
