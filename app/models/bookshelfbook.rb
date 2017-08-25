# == Schema Information
#
# Table name: bookshelfbooks
#
#  id           :integer          not null, primary key
#  bookshelf_id :integer          not null
#  book_id      :integer          not null
#  status       :string           default("not read"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Bookshelfbook < ApplicationRecord
  validates :bookshelf_id, :book_id, presence: true
  validates :status, inclusion: { in: ['read', 'not read', 'reading'] }, presence: true

  belongs_to :book
  belongs_to :bookshelf

end
