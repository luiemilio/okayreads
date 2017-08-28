# == Schema Information
#
# Table name: book_read_statuses
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  user_id    :integer          not null
#  status     :string           default("not read"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BookReadStatus < ApplicationRecord
  validates :book_id, :user_id, :status
  validates inclusion: { in: ['not read', 'read', 'reading'] }

  belongs_to :book
  belongs_to :user
end
