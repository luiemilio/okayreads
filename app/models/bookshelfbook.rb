# == Schema Information
#
# Table name: bookshelfbooks
#
#  id           :integer          not null, primary key
#  bookshelf_id :integer          not null
#  book_id      :integer          not null
#  status       :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Bookshelfbook < ApplicationRecord
end
