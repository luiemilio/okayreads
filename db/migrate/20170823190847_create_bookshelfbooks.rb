class CreateBookshelfbooks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelfbooks do |t|
      t.integer :bookshelf_id, null: false
      t.integer :book_id, null: false
      t.string :status, null: false
      t.index :bookshelf_id
      t.index :book_id
      t.timestamps
    end
  end
end
