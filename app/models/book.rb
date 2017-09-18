# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  image_url   :string           not null
#  publisher   :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  preview_url :text
#

class Book < ApplicationRecord
   validates :title, :author, :image_url,
             :publisher, :description, presence: true

  has_many :bookshelfbooks,
    class_name: "Bookshelfbook",
    primary_key: :id,
    foreign_key: :book_id

  has_many :bookshelves,
    through: :bookshelfbooks,
    source: :bookshelf

  has_many :reviews

  has_many :book_read_statuses

  def avg_score
    scores = self.reviews.map{ |review| review.score.to_f }
    if scores.length > 0
      (scores.inject(:+)/scores.length).round(2)
    else
      nil
    end
  end

end
