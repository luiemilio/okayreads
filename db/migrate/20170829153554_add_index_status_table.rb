class AddIndexStatusTable < ActiveRecord::Migration[5.1]
  def change
    add_index :book_read_statuses, [:user_id, :book_id]
  end
end
