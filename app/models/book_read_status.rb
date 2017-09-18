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

class BookReadStatus < ApplicationRecord
  validates :book_id, :user_id, :status, presence: true
  validates :status, inclusion: { in: ['unread', 'read', 'reading'] }
  validates :user, uniqueness: { scope: :book }
  belongs_to :book
  belongs_to :user
end
