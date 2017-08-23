class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.index :name
      t.index :user_id
      t.timestamps
    end
  end
end
