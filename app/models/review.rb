# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  title      :string           not null
#  body       :text             not null
#  score      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :book_id, :title, :body, :score, presence: true

  belongs_to :user
  belongs_to :book
end
