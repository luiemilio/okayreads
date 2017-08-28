class CreateBookReadStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :book_read_statuses do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.string :status, null: false, :default => 'not read'
      t.timestamps
    end
  end
end
