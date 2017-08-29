class ChangeStatusColumnDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :book_read_statuses, :status, :string, default: 'unread', null: false
  end
end
