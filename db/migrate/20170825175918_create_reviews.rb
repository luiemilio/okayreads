class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :score, null: false
      t.timestamps
      t.index :user_id
      t.index :book_id
    end
  end
end
