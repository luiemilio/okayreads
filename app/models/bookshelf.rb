# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_many :bookshelfbooks

  has_many :books,
    through: :bookshelfbooks,
    source: :book

end
