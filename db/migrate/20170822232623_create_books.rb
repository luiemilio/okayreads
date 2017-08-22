class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :image_url, null: false
      t.string :publisher, null: false
      t.text :description, null: false
      t.index :title
      t.index :author
      t.timestamps
    end
  end
end
