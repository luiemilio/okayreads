class Adddefaultstatus < ActiveRecord::Migration[5.1]
  def change
    change_column :bookshelfbooks, :status, :string, default: 'not read'
  end
end
